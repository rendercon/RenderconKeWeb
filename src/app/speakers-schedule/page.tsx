'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactAtomSVG from '../components/ReactAtom';

const tracks = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'React & Web',
    teaser: 'Deep dives into the latest React patterns, server components, performance, and the modern web.',
    color: 'purple',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
      </svg>
    ),
    title: 'React Native & Mobile',
    teaser: 'Building for a mobile-first continent — new architecture, performance, and cross-platform strategies.',
    color: 'gold',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'AI & the Ecosystem',
    teaser: 'How AI is reshaping the way we build, ship, and maintain React applications in 2026.',
    color: 'purple',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Community & Careers',
    teaser: 'Growing as a developer in East Africa — mentorship, open source, and building for the next billion users.',
    color: 'gold',
  },
];

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* Hero */}
        <section className="relative py-24 sm:py-36 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 90% 70% at 50% 0%, rgba(109,58,168,0.22) 0%, transparent 65%)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-48"
              style={{ background: 'linear-gradient(to top, #0F0B1E, transparent)' }}
            />
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-20"
                style={{
                  width: `${[4, 5, 3, 5, 3, 4][i]}px`,
                  height: `${[4, 5, 3, 5, 3, 4][i]}px`,
                  background: i % 2 === 0 ? '#8B5CF6' : '#F4B942',
                  top: `${[10, 40, 65, 25, 80, 50][i]}%`,
                  left: `${[8, 75, 20, 60, 15, 88][i]}%`,
                  animation: `float ${[5.5, 7, 6, 8, 5, 6.5][i]}s ease-in-out infinite`,
                  animationDelay: `${[0, 1, 2, 0.5, 1.5, 2.5][i]}s`,
                }}
              />
            ))}
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: copy */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center lg:justify-start"
                >
                  <span className="section-label mb-6 inline-flex">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                    RenderCon Kenya 2026
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mt-2"
                >
                  <span className="text-white">The Schedule</span>
                  <br />
                  <span className="gradient-text">Is Coming.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-7 text-xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
                >
                  We&apos;re finalising the lineup for{' '}
                  <span className="text-white font-semibold">3rd October 2026</span> — a full
                  day of talks, workshops, and conversations at Nairobi, Kenya.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-3 text-base text-slate-500 max-w-lg mx-auto lg:mx-0"
                >
                  The schedule will drop well before the event. Follow us to get notified the moment it&apos;s live.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <a
                    href="https://x.com/renderconke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm px-6 py-3 gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Follow @RenderConKe
                  </a>
                  <a href="https://forms.gle/zyc8anLMKMxo42ED7" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-3">
                    Secure Your Spot Now
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </motion.div>
              </div>

              {/* Right: React atom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <div
                    className="absolute inset-[-40px] rounded-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, rgba(109,58,168,0.18) 0%, transparent 70%)',
                      filter: 'blur(24px)',
                    }}
                  />
                  <ReactAtomSVG className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="py-20 sm:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(109,58,168,0.06) 0%, transparent 70%)',
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-14"
            >
              <span className="section-label mb-4 inline-flex">What to Expect</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
                A day packed with{' '}
                <span className="gradient-text">signal, not noise</span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                RenderCon 2026 will feature full talks, lightning sessions, and community
                conversations across four tracks — all curated for practitioners.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {tracks.map((track, i) => {
                const isPurple = track.color === 'purple';
                return (
                  <motion.div
                    key={track.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    className="bento-card group relative"
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: isPurple
                          ? 'radial-gradient(ellipse at 20% 20%, rgba(109,58,168,0.2) 0%, transparent 60%)'
                          : 'radial-gradient(ellipse at 20% 20%, rgba(244,185,66,0.12) 0%, transparent 60%)',
                      }}
                    />
                    <div className="relative z-10">
                      <div
                        className={`inline-flex w-10 h-10 rounded-xl items-center justify-center mb-4 ${
                          isPurple
                            ? 'bg-purple-500/10 text-purple-400'
                            : 'bg-yellow-500/10 text-brand-gold'
                        }`}
                      >
                        {track.icon}
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2">{track.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{track.teaser}</p>
                      {/* Coming soon pill */}
                      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-brand-dark-border px-3 py-1 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                        Sessions TBA
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Day overview teaser */}
        <section className="py-20 sm:py-24 relative">
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bento-card gradient-border text-center py-14 px-8"
            >
              {/* Glow accent */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 0%, rgba(109,58,168,0.12) 0%, transparent 60%)',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-dark-border" />
                  <span className="section-label">3rd October 2026</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-dark-border" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  One day. Multiple tracks.
                  <br />
                  <span className="gradient-text">Hundreds of moments.</span>
                </h2>
                <p className="text-slate-400 leading-relaxed max-w-xl mx-auto mb-8">
                  Nairobi, Kenya — doors open at 8:00 AM. Expect keynotes,
                  full-length talks, lightning sessions, workshops, and a whole lot of community.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    3rd October 2026
                  </div>
                  <span className="hidden sm:block text-brand-dark-border">·</span>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <svg className="w-4 h-4 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Nairobi, Kenya
                  </div>
                </div>

                <div className="mt-8">
                  <a href="https://forms.gle/zyc8anLMKMxo42ED7" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3.5">
                    Get Your Ticket Before the Schedule Drops
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
                <p className="mt-4 text-xs text-slate-600">
                  Early bird tickets available now. Price goes up when the schedule drops.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Past edition link */}
        <section className="py-12 pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-slate-600">
              Looking for the 2025 edition?{' '}
              <Link
                href="/schedule_24"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                View the RenderCon 2025 schedule →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
