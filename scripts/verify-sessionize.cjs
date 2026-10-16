// Dependency-free regression checks, using the installed TypeScript compiler
// in memory and Next 13.4's real cache implementation. No raw API snapshots.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const vm = require('node:vm');
const { AsyncLocalStorage } = require('node:async_hooks');
const { execFileSync } = require('node:child_process');
const ts = require('typescript');
const { IncrementalCache } = require('next/dist/server/lib/incremental-cache');
const { patchFetch } = require('next/dist/server/lib/patch-fetch');
const { DynamicServerError } = require('next/dist/client/components/hooks-server-context');
const root = path.resolve(__dirname, '..');
const modules = new Map();

function load(filename) {
  const full = path.resolve(root, filename);
  if (modules.has(full)) return modules.get(full).exports;
  const mod = { exports: {} };
  modules.set(full, mod);
  const source = ts.transpileModule(fs.readFileSync(full, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const localRequire = request => {
    if (request.startsWith('@/')) return load(`src/${request.slice(2)}.ts`);
    if (request.startsWith('.')) return load(`${path.resolve(path.dirname(full), request)}.ts`);
    return require(request);
  };
  vm.runInThisContext(`(function(require, module, exports) {${source}\n})`, { filename: full })(localRequire, mod, mod.exports);
  return mod.exports;
}

const { normalizeSessionize } = load('src/lib/sessionize-normalize.ts');
const { normalizeTimestamp, scheduleDateKey, formatSessionTime, formatScheduleDate } = load('src/utils/formatDate.ts');
const { EVENT_CONFIG } = load('src/config/event.ts');
const { fetchProgramme, getProgramme } = load('src/lib/sessionize.ts');
const originalFetch = global.fetch;
const storage = new AsyncLocalStorage();
const fixture = () => ({
  speakers: [
    { id: 'a', fullName: 'Zara', bio: null, profilePicture: null, links: [{ title: 'Unsafe', url: 'javascript:alert(1)', linkType: 'Other' }], email: 'private@example.test', questionAnswers: [{ answer: 'PRIVATE' }] },
    { id: 2, fullName: 'Amir', tagLine: 'Engineer', isTopSpeaker: true },
  ],
  sessions: [
    { id: 3, title: 'Later', startsAt: '2026-11-17T10:00:00', endsAt: '2026-11-17T10:30:00', speakers: ['a'] },
    { id: '1', title: 'Together', description: 'Public abstract', startsAt: '2026-10-17T10:05:00', endsAt: '2026-10-17T10:35:00', speakers: ['a', 2], roomId: 1 },
    { id: 'parallel', title: 'Parallel', startsAt: '2026-10-17T10:05:00', endsAt: '2026-10-17T10:35:00', speakers: [], roomId: 999 },
    { id: 'break', title: 'Break', isServiceSession: true, speakers: [], startsAt: null },
    { id: 'incomplete', title: 'Incomplete', startsAt: '2026-10-17T12:00:00', endsAt: '2026-10-17T11:00:00', speakers: [] },
  ],
  rooms: [{ id: 1, name: 'Main Arena' }],
});

function mockFetch(callback) {
  const fetcher = async (...args) => callback(...args);
  global.fetch = fetcher;
  // Exercise the same patched fetch that Next uses in real route handlers.
  patchFetch({ serverHooks: { DynamicServerError }, staticGenerationAsyncStorage: storage });
}

function cacheStore(directory) {
  return { incrementalCache: new IncrementalCache({
    dev: false, appDir: true, flushToDisk: true, maxMemoryCacheSize: 0,
    serverDistDir: path.join(directory, 'server'), requestHeaders: {},
    fs: {
      readFile: (...args) => fs.promises.readFile(...args),
      writeFile: (...args) => fs.promises.writeFile(...args),
      stat: (...args) => fs.promises.stat(...args),
      mkdir: dir => fs.promises.mkdir(dir, { recursive: true }),
    },
    getPrerenderManifest: () => ({ routes: {}, dynamicRoutes: {}, notFoundRoutes: [], preview: {} }),
  }) };
}

async function main() {
  if (process.argv[2] === '--cache-probe') {
    mockFetch(() => { throw new Error('Upstream offline after process restart'); });
    const store = cacheStore(process.argv[3]);
    const result = await storage.run(store, getProgramme);
    assert.equal(result.year, 2026);
    assert.equal(result.sessions.length, 5);
    process.stdout.write('disk cache recovered');
    return;
  }

  let checks = 0;
  async function check(name, callback) {
    await callback(); checks += 1; console.log(`PASS ${name}`);
  }
  const programme = normalizeSessionize(fixture());
  await check('IDs, multi-speaker and multi-session relationships', () => {
    assert.equal(programme.speakers[0].id, '2');
    assert.equal(programme.sessions.find(s => s.id === '1').speakers.length, 2);
    const zara = programme.speakers.find(s => s.id === 'a');
    assert.equal(zara.sessions.length, 2);
    assert.equal(zara.sessions[0].coPresenters[0].fullname, 'Amir');
  });
  await check('chronological sorting, parallel sessions and full-date grouping', () => {
    assert.equal(programme.sessions[0].startsAt, programme.sessions[1].startsAt);
    assert.equal(programme.sessions.at(-1).id, 'break');
    assert.equal(scheduleDateKey(programme.sessions[0].startsAt), '2026-10-17');
    assert.equal(scheduleDateKey(programme.sessions.find(s => s.id === '3').startsAt), '2026-11-17');
  });
  await check('Nairobi wall time and explicit timestamp offsets', () => {
    assert.equal(normalizeTimestamp('2026-10-17T10:05:00'), '2026-10-17T07:05:00.000Z');
    assert.equal(normalizeTimestamp('2026-10-17T10:05:00+03:00'), '2026-10-17T07:05:00.000Z');
    assert.equal(normalizeTimestamp('2026-10-17T07:05:00Z'), '2026-10-17T07:05:00.000Z');
    assert.equal(formatSessionTime('2026-10-17T07:05:00.000Z', '2026-10-17T07:35:00.000Z'), '10:05 – 10:35');
    assert.equal(scheduleDateKey('2026-10-16T22:00:00.000Z'), '2026-10-17');
    assert.equal(normalizeTimestamp('2026-02-30T10:00:00'), null);
    assert.equal(normalizeTimestamp('2026-10-17T25:00:00'), null);
  });
  await check('confirmed Nairobi wall-clock display and complete dates across host timezones', () => {
    const previous = process.env.TZ;
    try {
      for (const hostTimeZone of ['UTC', 'America/Los_Angeles', 'Asia/Tokyo']) {
        process.env.TZ = hostTimeZone;
        const start = normalizeTimestamp('2026-10-17T00:15:00');
        const end = normalizeTimestamp('2026-10-17T00:45:00');
        assert.equal(formatSessionTime(start, end), '00:15 – 00:45');
        assert.equal(scheduleDateKey(start), '2026-10-17');
        assert.equal(formatScheduleDate(start), 'Saturday, 17 October 2026');
        assert.equal(scheduleDateKey(normalizeTimestamp('2026-11-17T00:15:00')), '2026-11-17');
        assert.equal(scheduleDateKey(normalizeTimestamp('2027-10-17T00:15:00')), '2027-10-17');
        assert.equal(formatSessionTime(normalizeTimestamp('2026-10-17T10:05:00-04:00'), null), '17:05 · End time to be announced');
      }
    } finally {
      if (previous === undefined) delete process.env.TZ; else process.env.TZ = previous;
    }
  });
  await check('missing photos, bios, rooms, unsafe links and incomplete times', () => {
    const zara = programme.speakers.find(s => s.id === 'a');
    assert.equal(zara.speaker_image, null); assert.equal(zara.speaker_bio, null); assert.deepEqual(zara.links, []);
    assert.equal(programme.sessions.find(s => s.id === 'parallel').room, null);
    assert.equal(programme.sessions.find(s => s.id === 'incomplete').endsAt, null);
    assert.equal(programme.sessions.find(s => s.id === 'break').isServiceSession, true);
  });
  await check('public field allowlist excludes submission and administrative data', () => {
    const serialized = JSON.stringify(programme);
    assert(!serialized.includes('private@example.test')); assert(!serialized.includes('PRIVATE'));
    assert(!serialized.includes('questionAnswers')); assert(!serialized.includes('isConfirmed'));
  });
  await check('valid empty programme differs from malformed data', () => {
    assert.equal(normalizeSessionize({ speakers: [], sessions: [], rooms: [] }).sessions.length, 0);
    for (const invalid of [null, {}, { speakers: {}, sessions: [], rooms: [] }]) assert.throws(() => normalizeSessionize(invalid));
    const duplicate = fixture(); duplicate.speakers.push(duplicate.speakers[0]); assert.throws(() => normalizeSessionize(duplicate));
    const missing = fixture(); missing.sessions[0].speakers = ['missing']; assert.throws(() => normalizeSessionize(missing));
  });
  await check('HTTP, content-type, invalid JSON and invalid schema errors', async () => {
    for (const response of [
      new Response('offline', { status: 503 }),
      new Response('<html>error</html>', { headers: { 'content-type': 'text/html' } }),
      new Response('{broken', { headers: { 'content-type': 'application/json' } }),
      Response.json({ unexpected: [] }),
    ]) {
      mockFetch(() => response); await assert.rejects(fetchProgramme());
    }
  });
  await check('bounded upstream timeout', async () => {
    const previous = EVENT_CONFIG.programme.timeoutMilliseconds;
    EVENT_CONFIG.programme.timeoutMilliseconds = 10;
    mockFetch((url, options) => new Promise((resolve, reject) => options.signal.addEventListener('abort', () => reject(new Error('aborted')))));
    try { await assert.rejects(fetchProgramme(), /aborted/); } finally { EVENT_CONFIG.programme.timeoutMilliseconds = previous; }
  });
  await check('real Next cache: shared refresh, stale fallback, disk recovery and cold failure', async () => {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'rendercon-cache-check-'));
    try {
      let calls = 0;
      mockFetch(() => { calls += 1; return Response.json(fixture()); });
      const store = cacheStore(directory);
      const [first, second] = await storage.run(store, () => Promise.all([getProgramme(), getProgramme()]));
      assert.deepEqual(first, second); assert.equal(calls, 1);
      const saved = fs.readdirSync(path.join(directory, 'cache/fetch-cache')).filter(name => name !== 'tags-manifest.json');
      assert.equal(saved.length, 1);
      const cacheFile = path.join(directory, 'cache/fetch-cache', saved[0]);
      const disk = fs.readFileSync(cacheFile, 'utf8'); assert(!disk.includes('private@example.test'));
      assert.equal(execFileSync(process.execPath, [__filename, '--cache-probe', directory], { encoding: 'utf8' }), 'disk cache recovered');
      const old = new Date(Date.now() - 600000); fs.utimesSync(cacheFile, old, old);
      for (const response of [new Response('offline', { status: 503 }), Response.json({ unexpected: [] })]) {
        mockFetch(() => response);
        const staleStore = cacheStore(directory);
        const previousError = console.error; console.error = () => {};
        try {
          const stale = await storage.run(staleStore, getProgramme); assert.deepEqual(stale, first);
          await Promise.all(staleStore.pendingRevalidates || []);
          assert.equal(fs.readFileSync(cacheFile, 'utf8'), disk);
        } finally { console.error = previousError; }
      }
      mockFetch(() => { throw new Error('cold offline'); });
      await assert.rejects(storage.run(cacheStore(path.join(directory, 'cold')), getProgramme), /cold offline/);
    } finally { fs.rmSync(directory, { recursive: true, force: true }); }
  });
  if (process.argv.includes('--live')) {
    await check('real 2026 All response through the production fetch/normalizer', async () => {
      global.fetch = originalFetch;
      const result = await fetchProgramme();
      assert.equal(result.year, 2026); assert(result.speakers.length > 0); assert(result.sessions.length > 0);
      assert(result.sessions.some(s => s.speakers.length > 1));
      assert(result.sessions.every(s => scheduleDateKey(s.startsAt) === '2026-10-17'));
      assert(!JSON.stringify(result).match(/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/));
      console.log(`Verified ${result.speakers.length} speakers and ${result.sessions.length} sessions; no raw payload saved.`);
    });
  }
  global.fetch = originalFetch;
  console.log(`${checks} regression groups passed.`);
}

main().catch(error => { global.fetch = originalFetch; console.error(error); process.exitCode = 1; });
