'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import LogoDevKenya from '../images/logos/devkenya_logo.png';
import LogoReactDevsKe from '../images/logos/ReactdevskeLogo.png';
import LogoOscaNairobi from '../images/logos/osca_nairobi_logo.jpg';
import LogoSpaceYaTech from '../images/logos/SPACEYATECH_LOGO.jpg';
import LogoSupaBase from '../images/logos/supabase_logo_wordmark.png';
import LogoLemonade from '../images/logos/lemonade.png';
import LogoPayd from '../images/logos/payd.png';
import LogoCloudinary from '../images/logos/cloudinary_logo_white.png';

type Partner = {
  name: string;
  logo: StaticImageData;
  link: string;
  tier: 'sponsor' | 'community';
  height: number;
  width: number;
};

const partners: Partner[] = [
  { name: 'Cloudinary', logo: LogoCloudinary, link: 'https://cloudinary.com/', tier: 'sponsor', height: 32, width: 130 },
  { name: 'Supabase', logo: LogoSupaBase, link: 'https://supabase.com/', tier: 'sponsor', height: 32, width: 120 },
  { name: 'Lemonade', logo: LogoLemonade, link: 'https://mylemonade.io/', tier: 'community', height: 36, width: 100 },
  { name: 'Payd', logo: LogoPayd, link: 'https://paydexp.com/', tier: 'community', height: 36, width: 100 },
  { name: 'Dev Kenya', logo: LogoDevKenya, link: 'https://devkenya.com', tier: 'community', height: 36, width: 100 },
  { name: 'ReactDevsKe', logo: LogoReactDevsKe, link: 'https://reactdevske.org', tier: 'community', height: 36, width: 100 },
  { name: 'OSCA Nairobi', logo: LogoOscaNairobi, link: 'https://github.com/OSCA-Nairobi', tier: 'community', height: 36, width: 100 },
  { name: 'Space Ya Tech', logo: LogoSpaceYaTech, link: 'https://spaceyatech.com/', tier: 'community', height: 36, width: 100 },
];

const sponsorshipTiers = [
  {
    tier: 'Title Sponsor',
    price: '$20,000',
    color: 'purple',
    perks: [
      'Headline logo placement on all materials',
      'Keynote speaking slot',
      'Exhibition booth',
      'Dedicated social media spotlight campaign',
      'Logo on event backdrop and signage',
      '10 complimentary tickets',
    ],
  },
  {
    tier: 'Gold Sponsor',
    price: '$10,000',
    color: 'gold',
    perks: [
      'Logo on conference materials & website',
      'Exhibition booth',
      'Social media mentions',
      '5 complimentary tickets',
    ],
  },
  {
    tier: 'Community Partner',
    price: '$5,000',
    color: 'slate',
    perks: [
      'Logo on website',
      'Social media mention',
      '2 complimentary tickets',
    ],
  },
];

export default function Partners() {
  return (
    <section id="partners" aria-label="Partners and Sponsors" className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(109,58,168,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Current Partners & Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="section-label mb-4 inline-flex">Sponsors & Partners</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              Backed by companies that<br />
              <span className="gradient-text">invest in developers</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              These organisations believe in the East African developer ecosystem
              and invest in the community that builds it.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative flex items-center justify-center px-6 py-4 rounded-2xl border border-brand-dark-border hover:border-purple-500/40 transition-all duration-300 bg-brand-dark-card/50"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at center, rgba(109,58,168,0.12) 0%, transparent 70%)' }}
                />
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  height={partner.height}
                  width={partner.width}
                  className="relative z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter brightness-200"
                  unoptimized
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

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
          <Link href="/partners" className="btn-primary px-8 py-3.5">
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
