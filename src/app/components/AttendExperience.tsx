'use client';

import { motion } from 'framer-motion';
import { EVENT_CONFIG } from '@/config/event';
import Footer from './Footer';
import Navbar from './Navbar';
import ReactAtomSVG from './ReactAtom';

const ticketLink = EVENT_CONFIG.links.tickets;

const ticketTiers = [
  {
    name: 'Die Hard',
    price: 'KES 1,500',
    description:
      'The very first tickets released for RenderCon Kenya 2026. Designed for the community members who believe in the vision and want to be part of the journey from day one. Once these are gone, they\'re gone.',
    badge: '🔥 Most Limited',
    status: 'Sold out',
    soldOut: true,
    includes: [
      'Full-day access to RenderCon Kenya 2026',
      'All keynote and technical sessions',
      'Community networking',
      'Access to sponsor booths and activities',
      'Conference updates before the event',
      'Be among the very first attendees confirmed for 2026',
    ],
    footerNote: 'Die Hard release fully claimed.',
    cta: 'Sold Out',
    accent: 'gold',
  },
  {
    name: 'Early Bird',
    price: 'KES 2,500',
    description:
      'Our best-value ticket for developers who like to plan ahead. Secure your place early and join hundreds of developers from across East Africa.',
    badge: 'Limited Time',
    includes: [
      'Full conference access',
      'Keynotes and technical talks',
      'Networking opportunities',
      'Sponsor exhibition area',
      'Community activities',
    ],
    footerNote: 'Available for a limited time only.',
    cta: 'Buy Early Bird',
    accent: 'purple',
  },
  {
    name: 'Wave 1',
    price: 'KES 3,500',
    description:
      'Missed the early releases? Wave 1 is your chance to secure your seat before the next pricing phase begins.',
    badge: 'Standard Release',
    includes: [
      'Full-day conference access',
      'All talks and sessions',
      'Networking opportunities',
      'Sponsor showcase',
      'Community experiences',
    ],
    footerNote: 'Prices increase in future releases.',
    cta: 'Buy Wave 1',
    accent: 'purple',
  },
  {
    name: 'Duo Pass',
    price: 'KES 5,000',
    description:
      'Coming with someone? Bring a friend or teammate and lock in both seats at a better shared rate.',
    badge: 'For 2',
    includes: [
      'Entry for two attendees',
      'Full-day conference access for both attendees',
      'All talks and sessions',
      'Networking opportunities',
      'Sponsor showcase',
      'Community experiences',
    ],
    footerNote: 'Best for friends, co-founders, and teammates attending together.',
    cta: 'Buy Duo Pass',
    accent: 'purple',
  },
  {
    name: 'Squad Pass',
    price: 'KES 15,000',
    description:
      'Learning is better together. Bring your colleagues, classmates, or friends and experience RenderCon as a team.',
    badge: 'For Teams',
    includes: [
      'Entry for five attendees',
      'Full conference access for every team member',
      'Technical talks and keynotes',
      'Workshops and networking',
      'Sponsor exhibition',
      'Community activities',
    ],
    footerNote: 'Ideal for startups, engineering teams, and student groups.',
    cta: 'Buy Squad Pass',
    accent: 'gold',
  },
];

const reasons = [
  {
    title: 'Secure Your Seat',
    description: 'Guarantee your place before tickets sell out.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-1.5 0h12a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 014.5 19.5V12a1.5 1.5 0 011.5-1.5z" />
      </svg>
    ),
  },
  {
    title: 'Best Pricing',
    description: 'Ticket prices increase with every release.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0l-3-3m3 3l3-3M7.5 9.75A4.5 4.5 0 0112 5.25a4.5 4.5 0 014.5 4.5c0 2.486-2.015 4.5-4.5 4.5a4.5 4.5 0 01-4.5-4.5z" />
      </svg>
    ),
  },
  {
    title: 'Join the Community',
    description: 'Be part of East Africa\'s biggest React conference.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.941 3.198A5.971 5.971 0 0017.059 15.5M18 18.719a11.95 11.95 0 01-6 1.531c-2.17 0-4.206-.576-5.963-1.584m0 0a5.971 5.971 0 01-.94-3.197m.94 3.197a3 3 0 01-4.681-2.72 8.986 8.986 0 003.74.477m10.904-9.969a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const scheduleMoments = [
  'Keynotes',
  'Technical Talks',
  'Workshops',
  'Networking Sessions',
  'Community Activities',
];

const faqs = [
  {
    question: 'When is RenderCon?',
    answer: 'RenderCon Kenya 2026 takes place on 3 October 2026 in Nairobi, Kenya.',
  },
  {
    question: 'Where is it?',
    answer: 'The event will be held in Nairobi, Kenya. The exact venue announcement is coming soon.',
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
                  <span className="font-semibold text-white">3 October 2026</span> in Nairobi, Kenya.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.18 }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href={ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-7 py-3.5 text-sm sm:text-base"
                  >
                    Get Early Bird Tickets
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

        <section id="tickets" className="relative py-10 sm:py-14">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 65% 45% at 25% 30%, rgba(109,58,168,0.08) 0%, transparent 70%)',
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
              <span className="section-label">Tickets</span>
              <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">Choose Your Ticket</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-400">
                Die Hard is sold out. Secure your seat on the current release before prices move again.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-5">
              {ticketTiers.map((tier, index) => {
                const isGold = tier.accent === 'gold';
                const isSoldOut = Boolean(tier.soldOut);

                return (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative ${isSoldOut ? 'opacity-80' : 'group'}`}
                  >
                    {!isSoldOut ? (
                      <div
                        className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background: isGold
                            ? 'radial-gradient(circle, rgba(244,185,66,0.18) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(109,58,168,0.25) 0%, transparent 70%)',
                        }}
                      />
                    ) : null}
                    <div className={`glass-card relative flex h-full flex-col rounded-[1.75rem] p-6 transition-transform duration-300 ${
                      isSoldOut
                        ? 'border-white/5 bg-white/[0.03] saturate-50'
                        : 'group-hover:-translate-y-1 group-focus-within:ring-2 group-focus-within:ring-purple-400/70 group-focus-within:ring-offset-2 group-focus-within:ring-offset-[#0F0B1E]'
                    }`}>
                      {!isSoldOut ? (
                        <a
                          href={ticketLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${tier.cta} - ${tier.name}`}
                          className="absolute inset-0 z-20 rounded-[1.75rem] cursor-pointer"
                        />
                      ) : null}
                      <div
                        className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-80"
                        style={{
                          background: isSoldOut
                            ? 'linear-gradient(180deg, rgba(148,163,184,0.06), transparent 35%)'
                            : isGold
                              ? 'linear-gradient(180deg, rgba(244,185,66,0.08), transparent 35%)'
                              : 'linear-gradient(180deg, rgba(109,58,168,0.12), transparent 35%)',
                        }}
                      />
                      <div className="relative z-10 flex h-full flex-col">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${
                              isSoldOut ? 'text-slate-600' : 'text-slate-500'
                            }`}>
                              {tier.name}
                            </p>
                            <p className={`mt-4 text-3xl font-bold ${isSoldOut ? 'text-slate-400' : 'text-white'}`}>{tier.price}</p>
                          </div>
                          {tier.badge ? (
                            <span
                              className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                                isSoldOut
                                  ? 'border border-white/10 bg-white/5 text-slate-500'
                                  : isGold
                                  ? 'border border-yellow-500/20 bg-yellow-500/10 text-brand-gold'
                                  : 'border border-purple-500/20 bg-purple-500/10 text-purple-300'
                              }`}
                            >
                              {tier.badge}
                            </span>
                          ) : null}
                        </div>

                        <p className={`mt-5 text-sm leading-relaxed ${isSoldOut ? 'text-slate-500' : 'text-slate-400'}`}>{tier.description}</p>

                        {tier.status ? (
                          <div className={`mt-5 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${
                            isSoldOut
                              ? 'border-white/10 bg-white/5 text-slate-400'
                              : 'border-white/10 bg-white/5 text-slate-300'
                          }`}>
                            <span className={`h-2 w-2 rounded-full ${isSoldOut ? 'bg-slate-500' : 'bg-brand-gold animate-pulse'}`} />
                            {tier.status}
                          </div>
                        ) : (
                          <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-500">
                            Current release
                          </div>
                        )}

                        <div className="mt-6 rounded-2xl border border-white/10 bg-black/10 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            What&apos;s Included
                          </p>
                          <ul className="mt-4 space-y-2.5">
                            {tier.includes.map((item) => (
                              <li key={item} className={`flex items-start gap-2.5 text-sm ${isSoldOut ? 'text-slate-500' : 'text-slate-300'}`}>
                                <span className={`mt-0.5 text-base leading-none ${
                                  isSoldOut ? 'text-slate-600' : isGold ? 'text-brand-gold' : 'text-purple-300'
                                }`}>
                                  ✓
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                          {tier.footerNote}
                        </p>

                        <div className="mt-6" />

                        <span
                          className={
                            isSoldOut
                              ? 'mt-auto flex w-full justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'
                              : isGold
                                ? 'btn-gold pointer-events-none mt-auto w-full justify-center'
                                : 'btn-primary pointer-events-none mt-auto w-full justify-center'
                          }
                        >
                          {tier.cta}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-6 sm:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
              <span className="section-label">Why Buy Early</span>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">Move early. Save more.</h2>
            </motion.div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                    {reason.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="venue" className="py-10 sm:py-14">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <motion.div {...fadeUp}>
              <span className="section-label">Venue</span>
              <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">Nairobi, Kenya</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                Venue announcement coming soon.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
                We&apos;re preparing a space that feels worthy of the community, the talks, and the energy that defines RenderCon.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(109,58,168,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(244,185,66,0.08),transparent_28%)]" />
              <div className="relative z-10">
                <div className="relative mx-auto aspect-[4/3] max-w-xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#120f23]">
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
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f0b1e]/80 px-4 py-3 backdrop-blur-md">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Location</p>
                      <p className="mt-1 text-sm font-semibold text-white">Nairobi, Kenya</p>
                    </div>
                    <div className="rounded-full border border-brand-dark-border bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                      Venue soon
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="schedule" className="relative py-10 sm:py-14">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 55% 40% at 70% 25%, rgba(109,58,168,0.08) 0%, transparent 70%)',
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl">
              <span className="section-label">Conference Schedule</span>
              <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">Coming soon, intentionally.</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-400">
                The full conference schedule will be announced closer to the event.
              </p>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-500">
                Stay tuned for keynotes, technical talks, workshops, networking sessions, and community activities.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55 }}
                className="glass-card rounded-[1.75rem] p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Release cadence</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">Schedule timeline placeholder</h3>
                  </div>
                  <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                    Coming soon
                  </span>
                </div>

                <div className="mt-8 space-y-5">
                  {scheduleMoments.map((moment, index) => (
                    <div key={moment} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white">
                          {index + 1}
                        </div>
                        {index < scheduleMoments.length - 1 ? (
                          <div className="mt-2 h-full w-px bg-gradient-to-b from-purple-500/40 to-transparent" />
                        ) : null}
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                        <p className="text-sm font-semibold text-white">{moment}</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500">
                          Details will be announced as the final programme is locked in.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="grid gap-5 sm:grid-cols-2"
              >
                {[
                  {
                    title: 'Keynotes',
                    copy: 'Big-picture talks from builders and leaders shaping the React ecosystem.',
                  },
                  {
                    title: 'Deep Technical Sessions',
                    copy: 'Production lessons on performance, architecture, tooling, and platform strategy.',
                  },
                  {
                    title: 'Hands-on Workshops',
                    copy: 'Practical sessions designed to leave attendees with ideas they can apply quickly.',
                  },
                  {
                    title: 'Community Time',
                    copy: 'Networking, hallway conversations, and the connections that make RenderCon worth it.',
                  },
                ].map((item) => (
                  <div key={item.title} className="glass-card rounded-2xl p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.title}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">{item.copy}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-10 sm:py-14">
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
