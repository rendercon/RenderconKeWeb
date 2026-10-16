'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { EVENT_CONFIG } from '@/config/event';

// Sessionize uses document.write and DOMContentLoaded. Give it a fresh document
// on every mount, including navigation between /attend and /schedule.
const EMBED_DOCUMENT = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>RenderCon Kenya 2026 agenda</title>
    <link rel="stylesheet" href="/sessionize-theme.css">
    <style>
      html, body { margin: 0; padding: 0; }
      body { display: flow-root; background: var(--brand-dark, #0F0B1E); }
      /* Keep session dialogs inside the visible part of the expanding frame. */
      body #sessionize.sessionize-wrapper .sz-modal-container,
      body #sessionize.sessionize-wrapper .sz-modal-overlay {
        top: var(--agenda-viewport-top, 0px);
        height: var(--agenda-viewport-height, 100vh);
      }
    </style>
  </head>
  <body data-sessionize-embed>
    <script type="text/javascript" src="${EVENT_CONFIG.api.sessionize.agendaEmbed}"></script>
  </body>
</html>`;

export default function ProgrammeSchedule({ compact = false }: { compact?: boolean }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    setStatus('loading');
    let active = true;
    let observer: ResizeObserver | undefined;
    const timeout = window.setTimeout(() => setStatus('error'), 20000);

    const syncViewport = () => {
      const root = frame.contentDocument?.documentElement;
      if (!active || !root) return;

      const bounds = frame.getBoundingClientRect();
      const top = Math.max(0, -bounds.top);
      const height = Math.max(0, Math.min(bounds.bottom, window.innerHeight) - Math.max(0, bounds.top));
      root.style.setProperty('--agenda-viewport-top', `${top}px`);
      root.style.setProperty('--agenda-viewport-height', `${height}px`);
    };

    frame.onload = () => {
      const doc = frame.contentDocument;
      const root = doc?.documentElement;
      const head = doc?.head;
      const body = doc?.body;
      if (!active || !doc || !root || !head || !body?.hasAttribute('data-sessionize-embed')) return;

      // Reuse Next's self-hosted font faces and the site's current palette in
      // the separate embed document, without loading another font service.
      const fontStyles = doc.createElement('style');
      fontStyles.textContent = Array.from(document.styleSheets).flatMap(sheet => {
        try {
          return Array.from(sheet.cssRules)
            .filter(rule => rule.type === CSSRule.FONT_FACE_RULE)
            .map(rule => rule.cssText);
        } catch {
          return [];
        }
      }).join('\n');
      head.appendChild(fontStyles);
      const rootStyles = getComputedStyle(document.documentElement);
      for (const token of ['--brand-purple', '--brand-purple-light', '--brand-gold', '--brand-dark', '--brand-dark-card', '--brand-dark-border']) {
        root.style.setProperty(token, rootStyles.getPropertyValue(token));
      }
      root.style.setProperty('--agenda-font', getComputedStyle(document.body).fontFamily);

      const update = () => {
        // A queued resize may belong to the document replaced by a retry or
        // navigation. Ignore it until the current iframe body is ready.
        if (!active || frame.contentDocument !== doc || doc.body !== body) return;
        frame.style.height = `${Math.max(240, Math.ceil(body.getBoundingClientRect().height))}px`;
        if (doc.getElementById('sessionize')) {
          window.clearTimeout(timeout);
          setStatus('ready');
        }
        syncViewport();
      };

      observer?.disconnect();
      observer = new ResizeObserver(update);
      observer.observe(body);
      update();
    };

    window.addEventListener('scroll', syncViewport, { passive: true });
    window.addEventListener('resize', syncViewport);
    frame.srcdoc = EMBED_DOCUMENT;

    return () => {
      active = false;
      window.clearTimeout(timeout);
      observer?.disconnect();
      frame.onload = null;
      window.removeEventListener('scroll', syncViewport);
      window.removeEventListener('resize', syncViewport);
      // Stop the previous embed's requests and timers before another mount.
      frame.srcdoc = '';
    };
  }, [attempt]);

  return <div>
    <p className="mb-5 text-sm text-slate-400">All times in EAT (Africa/Nairobi).</p>
    {status === 'loading' && <p role="status" className="mb-4 text-sm text-slate-400">Loading the agenda…</p>}
    {status === 'error' && <div role="alert" className="mb-5 rounded-lg border border-slate-700 p-6 text-center text-slate-300">
      <p>Unable to load the agenda. Please try again.</p>
      <button type="button" className="btn-secondary mt-4 px-5 py-2.5 text-sm" onClick={() => setAttempt(value => value + 1)}>Try again</button>
    </div>}
    <div className={status === 'error' ? 'hidden' : 'overflow-hidden rounded-xl bg-brand-dark'}>
      <iframe ref={frameRef} title="RenderCon Kenya 2026 agenda — powered by Sessionize" className="block min-h-[240px] w-full border-0" style={{ height: 800 }} />
    </div>
    <noscript><p className="mt-4 text-slate-300">Enable JavaScript to view the Sessionize agenda.</p></noscript>
    {compact && <Link href={EVENT_CONFIG.links.schedule2026} className="btn-secondary mt-6 inline-flex text-sm px-6 py-3">View full 2026 programme</Link>}
  </div>;
}
