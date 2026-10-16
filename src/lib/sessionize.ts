import { unstable_cache } from 'next/cache';
import { EVENT_CONFIG } from '@/config/event';
import { normalizeSessionize } from './sessionize-normalize';
import type { Programme } from '@/utils/types';

if (typeof window !== 'undefined') throw new Error('Sessionize data access is server-only');

let pending: Promise<Programme> | undefined;
let pendingRead: Promise<Programme> | undefined;

export async function fetchProgramme(): Promise<Programme> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), EVENT_CONFIG.programme.timeoutMilliseconds);
  try {
    const response = await fetch(EVENT_CONFIG.api.sessionize.all, {
      // unstable_cache already runs its callback with fetchCache=only-no-store.
      // Next 13.4 rejects an explicit cache:no-store in that context.
      headers: { Accept: 'application/json' }, signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Sessionize returned HTTP ${response.status}`);
    if (!response.headers.get('content-type')?.toLowerCase().includes('application/json')) throw new Error('Sessionize did not return JSON');
    return normalizeSessionize(await response.json());
  } finally {
    clearTimeout(timeout);
  }
}

async function refreshProgramme(): Promise<Programme> {
  // Share concurrent refreshes across both public routes within this process.
  if (!pending) pending = fetchProgramme().finally(() => { pending = undefined; });
  return pending;
}

export function getProgramme(): Promise<Programme> {
  // Next 13.4 requires constructing unstable_cache within the request store.
  // Only the validated public result is cached. Failed refreshes cannot replace it.
  if (pendingRead) return pendingRead;
  pendingRead = unstable_cache(refreshProgramme, ['rendercon-public-programme-v1', EVENT_CONFIG.api.sessionize.all], {
    revalidate: EVENT_CONFIG.programme.revalidateSeconds,
  })().finally(() => { pendingRead = undefined; });
  return pendingRead;
}
