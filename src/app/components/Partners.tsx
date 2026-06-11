'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import LogoDevKenya from '../images/logos/devkenya_logo.png';
import LogoReactDevsKe from '../images/logos/ReactdevskeLogo.png';
import LogoOscaNairobi from '../images/logos/oscarnrb.png';
import LogoSpaceYaTech from '../images/logos/SPACEYATECH_LOGO.png';
import LogoSupaBase from '../images/logos/supabase_logo_wordmark.png';
import LogoLemonade from '../images/logos/lemonade.png';
import LogoPayd from '../images/logos/payd.png';
import LogoCloudinary from '../images/logos/cloudinary_logo_white.png';
import LogoMentorlist from '../images/logos/mentorlst.png';

type Partner = {
  name: string;
  logo: StaticImageData | null;
  link: string;
  tier: 'sponsor' | 'organiser' | 'community';
  height: number;
  width: number;
};

const partners: Partner[] = [
  { name: 'Cloudinary', logo: LogoCloudinary, link: 'https://cloudinary.com/', tier: 'sponsor', height: 32, width: 130 },
  { name: 'Supabase', logo: LogoSupaBase, link: 'https://supabase.com/', tier: 'sponsor', height: 32, width: 120 },
  { name: 'Lemonade', logo: LogoLemonade, link: 'https://mylemonade.io/', tier: 'sponsor', height: 36, width: 100 },
  { name: 'Dev Kenya', logo: LogoDevKenya, link: 'https://smeresponse.clinic/2023/10/24/nurturing-mental-wellness-insights-from-entrepreneur-constanza/', tier: 'sponsor', height: 36, width: 100 },
  { name: 'ReactDevsKe', logo: LogoReactDevsKe, link: 'https://reactdevske.org', tier: 'organiser', height: 36, width: 100 },
  { name: 'Payd', logo: LogoPayd, link: 'https://paydexp.com/', tier: 'community', height: 36, width: 100 },
  { name: 'OSCA Nairobi', logo: LogoOscaNairobi, link: 'https://github.com/OSCA-Nairobi', tier: 'community', height: 36, width: 100 },
  { name: 'Space Ya Tech', logo: LogoSpaceYaTech, link: 'https://spaceyatech.com/', tier: 'community', height: 36, width: 100 },
  { name: 'Mentorlist', logo: LogoMentorlist, link: 'https://mentorlist.io/', tier: 'community', height: 36, width: 100 },
];

const sponsorshipTiers = [
  {
    tier: 'Ecosystem Partner',
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

          {/* Organiser */}
          <div className="mb-8">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-gold mb-5">Organiser</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {partners.filter(p => p.tier === 'organiser').map((partner, i) => (
                <motion.a
                  key={partner.name}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="partner-logo-card relative w-[160px] h-[80px] flex items-center justify-center rounded-2xl border border-brand-gold/30 bg-brand-dark-card/50"
                >
                  {partner.logo && (
                    <div className="relative w-full h-full p-3">
                      <Image src={partner.logo} alt={partner.name} fill className="object-contain filter brightness-200" unoptimized />
                    </div>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Sponsors */}
          <div className="mb-8">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-purple-400 mb-5">Sponsors</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {partners.filter(p => p.tier === 'sponsor').map((partner, i) => (
                <motion.a
                  key={partner.name}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="partner-logo-card relative w-[160px] h-[80px] flex items-center justify-center rounded-2xl border border-brand-dark-border bg-brand-dark-card/50"
                >
                  {partner.logo && (
                    <div className="relative w-full h-full p-3">
                      <Image src={partner.logo} alt={partner.name} fill className="object-contain filter brightness-200" unoptimized />
                    </div>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Community Partners */}
          <div>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Community Partners</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {partners.filter(p => p.tier === 'community').map((partner, i) => (
                <motion.a
                  key={partner.name}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="partner-logo-card relative w-[160px] h-[80px] flex items-center justify-center rounded-2xl border border-brand-dark-border bg-brand-dark-card/50"
                >
                  {partner.logo
                    ? (
                      <div className="relative w-full h-full p-3">
                        <Image src={partner.logo} alt={partner.name} fill className="object-contain filter brightness-200" unoptimized />
                      </div>
                    )
                    : <span className="text-sm font-bold text-slate-300 px-4 text-center leading-tight">{partner.name}</span>
                  }
                </motion.a>
              ))}
            </div>
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
