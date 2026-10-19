'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Sponsors from './Sponsors';

const sponsorshipTiers = [
  {
    tier: 'Ecosystem Title Partner',
    price: '$20K',
    color: 'purple',
    perks: [
      'Headline logo + exclusive naming rights',
      'Main stage keynote slot',
      'Premium exhibition booth',
      'Dedicated social media campaign',
      'Speaker dinner & after party branding',
      '10 complimentary tickets',
    ],
  },
  {
    tier: 'Platinum Partner',
    price: '$10K',
    color: 'gold',
    perks: [
      'Large logo on all materials & website',
      'Branded workshop or session slot',
      'Large exhibition booth',
      'Social media campaign',
      '6 complimentary tickets',
    ],
  },
  {
    tier: 'Gold Partner',
    price: '$5K',
    color: 'slate',
    perks: [
      'Medium logo on website & materials',
      'Standard exhibition booth',
      'Social media mentions',
      '3 complimentary tickets',
    ],
  },
];

export default function Partners() {
  return (
    <section id="partners" aria-label="Partners and Sponsors" className="py-12 sm:py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(109,58,168,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <Sponsors />
        </div>

        {/* Partnership Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 inline-flex">Partnership Opportunities</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Put your brand at the center of<br />
            <span className="gradient-text">East Africa&apos;s React ecosystem</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Sponsoring RenderCon is direct access to East Africa&apos;s most engaged
            React and React Native developers — builders, not just job titles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {sponsorshipTiers.map((tier, i) => {
            const isPurple = tier.color === 'purple';
            const isGold = tier.color === 'gold';
            return (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`bento-card relative ${isPurple ? 'gradient-border' : ''}`}
              >
                {isPurple && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex rounded-full bg-purple-600 px-3 py-0.5 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-5">
                  <div
                    className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
                      isPurple ? 'text-purple-400' : isGold ? 'text-brand-gold' : 'text-slate-400'
                    }`}
                  >
                    {tier.tier}
                  </div>
                  <div className="text-2xl font-bold text-white">{tier.price}</div>
                </div>
                <ul className="space-y-2.5">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          isPurple ? 'text-purple-400' : isGold ? 'text-brand-gold' : 'text-slate-500'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/partners#prospectus" className="btn-primary px-8 py-3.5">
            View Full Prospectus
          </Link>
          <a href="mailto:sponsors@rendercon.org" className="btn-secondary px-8 py-3.5">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
