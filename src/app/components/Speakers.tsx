'use client';

import React, { useEffect, useId, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Speaker } from '../../utils/types';

const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="relative aspect-[3/4] w-full rounded-2xl bg-brand-dark-card" />
    <div className="mt-4 h-4 bg-brand-dark-card rounded w-3/4" />
    <div className="mt-2 h-3 bg-brand-dark-card rounded w-1/2" />
  </div>
);

function SpeakerModal({ speaker, onClose }: { speaker: Speaker; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
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
          className="relative w-full max-w-lg bento-card overflow-y-auto max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex gap-5 items-start mb-6">
            {speaker.speaker_image && (
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden">
                <img
                  src={speaker.speaker_image}
                  alt={speaker.fullname}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <h2 className="text-xl font-bold text-white">{speaker.fullname}</h2>
              {speaker.session_title && (
                <p className="mt-1 text-sm text-purple-400 font-medium">{speaker.session_title}</p>
              )}
            </div>
          </div>

          {speaker.speaker_bio && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Bio</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{speaker.speaker_bio}</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Speakers() {
  const [speakerList, setSpeakerList] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState<Speaker | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('/api/speakers')
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((data) => setSpeakerList(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const visible = speakerList;

  return (
    <section id="speakers" aria-labelledby="speakers-title" className="py-12 sm:py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(109,58,168,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">RenderCon 2025 · 3rd Edition</span>
          <h2 id="speakers-title" className="text-4xl sm:text-5xl font-bold text-white mt-4">
            Meet our RenderCon 2025<br />
            <span className="gradient-text">3rd Edition Speakers</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Engineers and practitioners who took the stage at RenderCon Kenya 2025 —
            sharing hard-won lessons in React, React Native, and the ecosystem.
          </p>
        </motion.div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-slate-400 mb-4">Unable to load speakers right now.</p>
            <button
              onClick={() => { setError(false); setLoading(true); fetch('/api/speakers').then(r => r.json()).then(setSpeakerList).catch(() => setError(true)).finally(() => setLoading(false)); }}
              className="btn-secondary text-sm px-5 py-2.5"
            >
              Try Again
            </button>
          </div>
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
                  className={`group cursor-pointer ${i >= 8 && !showAll ? 'hidden md:block' : ''}`}
                  onClick={() => setSelected(speaker)}
                >
                  {/* Photo */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-brand-dark-card border border-brand-dark-border group-hover:border-purple-500/50 transition-all duration-300">
                    <img
                      src={speaker.speaker_image}
                      alt={speaker.fullname}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    <h3 className="font-semibold text-white text-sm leading-tight truncate">
                      {speaker.fullname}
                    </h3>
                    {speaker.session_title && (
                      <p className="mt-0.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {speaker.session_title}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Show more */}
            {!showAll && speakerList.length > 8 && (
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
      </div>

      {/* Modal */}
      {selected && <SpeakerModal speaker={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
