'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { EVENT_CONFIG } from '@/config/event';
import ReactAtomSVG from './ReactAtom';

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ─────────────────────────────────────────────
   SECTION 1 — Hero
───────────────────────────────────────────── */
function AboutHero() {
  return (
    <section className="relative min-h-[62vh] sm:min-h-[68vh] flex items-center overflow-hidden pt-2 pb-8">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% -10%, rgba(109,58,168,0.28) 0%, transparent 65%)',
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
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${[4, 6, 3, 5, 4, 3, 5, 3][i]}px`,
              height: `${[4, 6, 3, 5, 4, 3, 5, 3][i]}px`,
              background: i % 2 === 0 ? '#8B5CF6' : '#F4B942',
              top: `${[12, 30, 55, 18, 72, 42, 85, 65][i]}%`,
              left: `${[8, 78, 22, 62, 12, 88, 35, 55][i]}%`,
              animation: `float ${[5, 7, 6, 8, 5.5, 6.5, 7.5, 5][i]}s ease-in-out infinite`,
              animationDelay: `${[0, 1, 2, 0.5, 1.5, 2.5, 0.8, 3][i]}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-4">
              <span className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                East Africa&apos;s React Conference
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              <span className="text-white">About</span>
              <br />
              <span className="gradient-text">RenderCon</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-xl sm:text-2xl font-medium text-slate-300 leading-snug max-w-lg mx-auto lg:mx-0"
            >
              More than a conference.{' '}
              <span className="text-white font-semibold">
                A community shaping the future of React in East Africa.
              </span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              RenderCon is East Africa&apos;s community-first React conference, bringing together
              developers, creators, founders, and technology leaders to learn, connect, and build.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href={EVENT_CONFIG.links.tickets} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
                Book Tickets Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link href="/community" className="btn-secondary text-base px-8 py-4">
                Join the Community
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Atom */}
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
              <ReactAtomSVG className="w-48 h-48 sm:w-64 sm:h-64" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 2 — Why We Exist (Bento grid)
───────────────────────────────────────────── */
const pillars = [
  {
    title: 'Learn',
    body: 'World-class talks, workshops, and technical discussions led by engineers and builders from across the globe.',
    color: 'purple',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Connect',
    body: 'Meaningful relationships across the African tech ecosystem — developers, founders, and community builders.',
    color: 'gold',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Build',
    body: 'Products, careers, startups, and communities. RenderCon is where ideas become real and momentum is born.',
    color: 'purple',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'Grow',
    body: 'Supporting the next generation of African developers through mentorship, exposure, and opportunity.',
    color: 'gold',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

function WhyWeExist() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(109,58,168,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10"
        >
          <span className="section-label mb-4 inline-flex">Why We Exist</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 leading-tight">
            Building the Future of{' '}
            <span className="gradient-text">African Tech</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            RenderCon exists because African developers deserve a world-class platform — not
            just to attend, but to lead, speak, connect, and shape what comes next.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {pillars.map((pillar, i) => {
            const isPurple = pillar.color === 'purple';
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
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
                    className={`inline-flex w-12 h-12 rounded-xl items-center justify-center mb-5 ${
                      isPurple
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-yellow-500/10 text-brand-gold'
                    }`}
                  >
                    {pillar.icon}
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      isPurple ? 'gradient-text-purple' : 'text-brand-gold'
                    }`}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 6 — Our Vision
───────────────────────────────────────────── */
function OurVision() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(109,58,168,0.08) 0%, transparent 70%)',
        }}
      />
      {/* Top divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(109,58,168,0.5), transparent)' }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label mb-4 inline-flex mx-auto">Our Vision</span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
            Where We&apos;re{' '}
            <span className="gradient-text">Going</span>
          </h2>

          <p className="mt-5 text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            RenderCon aims to become the flagship React conference in East Africa — a platform
            that connects local talent with global opportunities, amplifies African voices in
            the global React ecosystem, and inspires the next wave of builders.
          </p>

          {/* Statement cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                headline: 'Global Stage',
                body: 'World-class talks, internationally recognized speakers, broadcast to a global audience.',
              },
              {
                headline: 'Local Roots',
                body: 'Organised by the community, for the community — grounded in the East African tech ecosystem.',
              },
              {
                headline: 'Future Forward',
                body: 'Investing in the developers who will define the next decade of the African internet.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.headline}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bento-card text-left gradient-border"
              >
                <h3 className="text-base font-semibold gradient-text-purple mb-2">{card.headline}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 7 — CTA
───────────────────────────────────────────── */
function AboutCTA() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(109,58,168,0.15) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="text-white">React.</span>{' '}
            <span className="text-white">Connect.</span>{' '}
            <span className="gradient-text">Build.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            Be part of the movement shaping the future of tech in East Africa.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EVENT_CONFIG.links.tickets} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
              Book Tickets Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <Link href="/partners" className="btn-secondary text-base px-8 py-4">
              Become a Partner
            </Link>
            <Link href="/community" className="btn-secondary text-base px-8 py-4">
              Join the Community
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Default export — composes all About sections
───────────────────────────────────────────── */
export default function AboutUs() {
  return (
    <>
      <AboutHero />
      <WhyWeExist />
    </>
  );
}

export { OurVision, AboutCTA };
