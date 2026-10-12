'use client';

import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Speaker } from '../../utils/types';
import SpeakerPhoto from './SpeakerPhoto';
import { EVENT_CONFIG } from '@/config/event';

const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="relative aspect-[3/4] w-full rounded-2xl bg-brand-dark-card" />
    <div className="mt-4 h-4 bg-brand-dark-card rounded w-3/4" />
    <div className="mt-2 h-3 bg-brand-dark-card rounded w-1/2" />
  </div>
);

function SpeakerModal({ speaker, onClose }: { speaker: Speaker; onClose: () => void }) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      if (e.key !== 'Tab') return;
      const controls = dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex="0"]');
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      previousFocus?.focus({ preventScroll: true });
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl rounded-2xl border border-brand-dark-border bg-[#0F0B1E] p-6 sm:p-8 overflow-y-auto max-h-[90vh]"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex gap-5 items-start mb-6">
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden">
              <SpeakerPhoto src={speaker.speaker_image} name={speaker.fullname} className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0 pr-6">
              <h2 id={titleId} className="text-xl font-bold text-white">{speaker.fullname}</h2>
              {speaker.title_role && <p className="mt-1 text-sm text-purple-400 font-medium">{speaker.title_role}</p>}
            </div>
          </div>

          {speaker.speaker_bio && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Bio</h3>
              <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">{speaker.speaker_bio}</p>
            </div>
          )}
          {speaker.links.length > 0 && <div className="mt-5 flex flex-wrap gap-4">
            {speaker.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-purple-400 hover:underline">{link.title || 'Profile'}</a>)}
          </div>}
          {speaker.sessions.length > 0 && <div className="mt-6 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Sessions</h3>
            {speaker.sessions.map(session => <div key={session.id}>
              <h4 className="text-sm font-semibold text-white">{session.title}</h4>
              {session.description && <p className="mt-2 text-sm text-slate-300 leading-relaxed whitespace-pre-line">{session.description}</p>}
              {session.coPresenters.length > 0 && <p className="mt-2 text-xs text-purple-400">With {session.coPresenters.map(other => other.fullname).join(', ')}</p>}
            </div>)}
          </div>}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Speakers({ variant = 'lineup' }: { variant?: 'preview' | 'lineup' }) {
  const [speakerList, setSpeakerList] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState<Speaker | null>(null);
  const [showAll, setShowAll] = useState(false);
  const closeModal = useCallback(() => setSelected(null), []);

  const loadSpeakers = useCallback(async (signal?: AbortSignal) => {
    setError(false);
    setLoading(true);
    try {
      const response = await fetch('/api/speakers', { signal });
      if (!response.ok) throw new Error('Speakers unavailable');
      const data: Speaker[] = await response.json();
      if (!Array.isArray(data)) throw new Error('Invalid speakers');
      if (!signal?.aborted) setSpeakerList(data);
    } catch {
      if (!signal?.aborted) setError(true);
    } finally {
      if (!signal?.aborted) setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    void loadSpeakers(controller.signal);
    return () => controller.abort();
  }, [loadSpeakers]);

  // The server orders highlighted speakers first, then name and ID. The
  // homepage previews the first four without a separate fetch or data source.
  const isPreview = variant === 'preview';
  const visible = isPreview ? speakerList.slice(0, 4) : speakerList;

  return (
    <section id="speakers" aria-labelledby="speakers-title" className={`${isPreview ? 'py-12 sm:py-16' : 'py-8 sm:py-10'} scroll-mt-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <span className="section-label mb-4 inline-flex">RenderCon 2026</span>
          <h2 id="speakers-title" className="text-3xl sm:text-4xl font-bold text-white">
            {isPreview ? 'On the RenderCon stage' : 'The 2026 speaker lineup'}
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-2xl leading-relaxed">
            {isPreview ? 'A preview of the speakers joining us in Nairobi. Discover their stories and sessions.' : 'Select a speaker to explore their biography, experience, and sessions.'}
          </p>
        </motion.div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {[...Array(isPreview ? 4 : 8)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-slate-400 mb-4">Unable to load speakers right now.</p>
            <button
              onClick={() => { void loadSpeakers(); }}
              className="btn-secondary text-sm px-5 py-2.5"
            >
              Try Again
            </button>
          </div>
        ) : visible.length === 0 ? (
          <p className="text-center py-8 text-slate-400">The 2026 speaker lineup has not been published yet.</p>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {visible.map((speaker, i) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
                  className={`group cursor-pointer rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold ${!isPreview && i >= 8 && !showAll ? 'hidden md:block' : ''}`}
                  onClick={() => setSelected(speaker)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${speaker.fullname}`}
                  onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelected(speaker); } }}
                >
                  {/* Photo */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-brand-dark-card border border-brand-dark-border group-hover:border-purple-500/50 transition-all duration-300">
                    <SpeakerPhoto src={speaker.speaker_image} name={speaker.fullname} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    {/* View icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="mt-3">
                    <h3 className="font-semibold text-white text-base leading-snug">
                      {speaker.fullname}
                    </h3>
                    {speaker.title_role && <p className="mt-1 text-xs leading-relaxed text-slate-400 line-clamp-2">{speaker.title_role}</p>}
                    {speaker.sessions.length > 0 && (
                      <p className="mt-0.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {speaker.sessions.map(session => session.title).join(' · ')}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Show more */}
            {!isPreview && !showAll && speakerList.length > 8 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 text-center md:hidden"
              >
                <button onClick={() => setShowAll(true)} className="btn-secondary text-sm px-6 py-3">
                  View All {speakerList.length} Speakers
                </button>
              </motion.div>
            )}
          </>
        )}
        {isPreview && <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/speakers" className="btn-primary">Meet all speakers</Link>
          <Link href={EVENT_CONFIG.links.schedule2026} className="btn-secondary">Explore the programme</Link>
        </div>}
      </div>

      {/* Modal */}
      {selected && <SpeakerModal speaker={selected} onClose={closeModal} />}
    </section>
  );
}
