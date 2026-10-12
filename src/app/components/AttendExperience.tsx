'use client';

import { motion } from 'framer-motion';
import { EVENT_CONFIG } from '@/config/event';
import Footer from './Footer';
import Navbar from './Navbar';
import ReactAtomSVG from './ReactAtom';
import ProgrammeSchedule from './ProgrammeSchedule';

const ticketLink = EVENT_CONFIG.links.tickets;

const faqs = [
  {
    question: 'Is the 2026 call for proposals open?',
    answer: 'The 2026 call for proposals is closed. Explore the confirmed speakers and published programme on the Speakers and Schedule pages.',
  },
  {
    question: 'When is RenderCon?',
    answer: 'RenderCon Kenya 2026 takes place on 17 October 2026 in Nairobi, Kenya.',
  },
  {
    question: 'Where is it?',
    answer: `RenderCon Kenya 2026 will be held at ${EVENT_CONFIG.venue.fullAddress}.`,
  },
  {
    question: 'Can I transfer my ticket?',
    answer: 'Yes. If you need to transfer your ticket, contact the team before the event and we will guide you through the process.',
  },
  {
    question: 'Will tickets be available at the venue?',
    answer: 'We recommend buying early online. Venue availability is not guaranteed once ticket releases sell out.',
  },
  {
    question: 'Are refunds available?',
    answer: 'Tickets are generally non-refundable, but if you have an exceptional case, reach out to the organisers and we will review it.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function AttendExperience() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-8">
        <section className="relative overflow-hidden py-12 sm:py-16">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 90% 70% at 50% 0%, rgba(109,58,168,0.24) 0%, transparent 68%)',
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
              }}
            />
            <div className="absolute right-[-8rem] top-[-2rem] opacity-[0.08]">
              <ReactAtomSVG className="h-[28rem] w-[28rem] sm:h-[34rem] sm:w-[34rem]" />
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-40"
              style={{ background: 'linear-gradient(to top, #0F0B1E, transparent)' }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55 }}
                  className="mb-8 flex flex-wrap items-center gap-3"
                >
                  <span className="section-label">
                    <span aria-hidden="true">🎟️</span>
                    Early Bird tickets are now live
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
                    <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
                    Die Hard sold out
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.05 }}
                  className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
                >
                  Attend <span className="gradient-text">RenderCon Kenya 2026</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.12 }}
                  className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
                >
                  Join East Africa&apos;s community-first React conference on{' '}
                  <span className="font-semibold text-white">17 October 2026</span> at {EVENT_CONFIG.venue.fullAddress}.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.18 }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    id="tickets"
                    href={ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-7 py-3.5 text-sm sm:text-base scroll-mt-24"
                  >
                    Grab Your Ticket
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a href="#venue" className="btn-secondary px-7 py-3.5 text-sm sm:text-base">
                    Venue
                  </a>
                </motion.div>
            </div>
          </div>
        </section>

        <section id="venue" className="py-8 sm:py-10 scroll-mt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
            <motion.div {...fadeUp}>
              <span className="section-label">Venue</span>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{EVENT_CONFIG.venue.name}</h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-400">
                {EVENT_CONFIG.venue.location}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
                Join us here for RenderCon Kenya 2026 on {EVENT_CONFIG.dates.displayDate}.
              </p>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EVENT_CONFIG.venue.fullAddress)}`} target="_blank" rel="noopener noreferrer" className="btn-secondary mt-4">
                Find the venue on Google Maps
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card relative w-full max-w-xs overflow-hidden rounded-2xl p-3 md:justify-self-end"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(109,58,168,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(244,185,66,0.08),transparent_28%)]" />
              <div className="relative z-10">
                <div className="relative h-32 overflow-hidden rounded-xl border border-white/10 bg-[#120f23] sm:h-36">
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                      backgroundSize: '42px 42px',
                    }}
                  />
                  <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
                    <path d="M40 210C110 140 130 150 190 120C250 90 300 105 360 62" stroke="rgba(139,92,246,0.4)" strokeWidth="2" fill="none" strokeDasharray="8 10" />
                    <path d="M45 90C110 125 175 145 220 205C260 250 320 230 360 190" stroke="rgba(244,185,66,0.25)" strokeWidth="2" fill="none" strokeDasharray="10 12" />
                    <circle cx="220" cy="150" r="54" fill="rgba(109,58,168,0.22)" />
                    <circle cx="220" cy="150" r="28" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
                    <path d="M220 122c-16.5 0-30 13.5-30 30 0 20.25 24 43.5 28.2 47.4a2.75 2.75 0 003.6 0C226 195.5 250 172.25 250 152c0-16.5-13.5-30-30-30zm0 40.5a10.5 10.5 0 1110.5-10.5 10.5 10.5 0 01-10.5 10.5z" fill="#F4B942" />
                  </svg>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">Location</p>
                    <p className="mt-1 text-xs font-semibold text-white">{EVENT_CONFIG.venue.location}</p>
                  </div>
                  <span className="rounded-full border border-brand-dark-border bg-white/5 px-2 py-1 text-[11px] font-medium text-slate-300">
                    Confirmed
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="schedule" className="relative py-10 sm:py-14 scroll-mt-24">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl mb-10">
              <span className="section-label">Conference Schedule</span>
              <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">RenderCon 2026 Programme</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-400">Explore the sessions, speakers, and rooms for 17 October 2026.</p>
            </motion.div>
            <ProgrammeSchedule compact />
          </div>
        </section>

        <section id="faq" className="py-10 sm:py-14 scroll-mt-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center">
              <span className="section-label">FAQ</span>
              <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">Everything attendees ask first</h2>
            </motion.div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
                <motion.details
                  key={faq.question}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass-card group rounded-2xl p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                    <span className="text-base font-semibold text-white">{faq.question}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400 transition-colors group-open:text-white">
                      Open
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
