'use client';

import { motion } from 'framer-motion';

const perks = [
  'Full day conference access',
  'Lunch & refreshments',
  'Conference swag bag',
  'Networking events',
  'Access to talk recordings',
];

export default function TicketsCTA() {
  return (
    <section id="tickets" className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(109,58,168,0.15) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">Tickets</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            Join East Africa&apos;s<br />
            <span className="gradient-text">React conference</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            One day. Hundreds of developers. The talks and connections
            you won&apos;t find anywhere else in the region.
          </p>
        </motion.div>

        {/* Coming soon card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bento-card gradient-border text-center py-14 px-8"
            style={{ background: 'linear-gradient(135deg, rgba(109,58,168,0.15), rgba(26,21,48,0.95))' }}
          >
            {/* Ticket icon */}
            <div className="inline-flex w-16 h-16 rounded-2xl bg-purple-500/10 items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
              </svg>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold text-brand-gold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              Coming Soon
            </div>

            <h3 className="text-3xl font-bold text-white mb-3">
              Tickets dropping soon
            </h3>
            <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
              Tickets aren&apos;t live yet — but you can register your interest now
              and we&apos;ll notify you the moment they drop.
            </p>

            {/* What's included */}
            <div className="text-left inline-block mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4 text-center">What&apos;s included</p>
              <ul className="space-y-2.5">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-sm text-slate-300">
                    <svg className="w-4 h-4 flex-shrink-0 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            {/* Event details */}
            <div className="flex flex-wrap gap-4 justify-center text-sm text-slate-500 mb-8">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                3rd October 2026
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Nairobi, Kenya
              </span>
            </div>

            {/* Notify CTA */}
            <a
              href="https://forms.gle/zyc8anLMKMxo42ED7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3.5 inline-flex"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Notify Me When Tickets Drop
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
