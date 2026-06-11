'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import ReactAtomSVG from './ReactAtom';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="relative mt-16 flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Purple gradient top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 80% at 50% -10%, rgba(109,58,168,0.25) 0%, transparent 60%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{
            background: 'linear-gradient(to top, #0F0B1E, transparent)',
          }}
        />
        {/* Grid pattern */}
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
              width: `${[4, 6, 3, 5, 4, 3][i]}px`,
              height: `${[4, 6, 3, 5, 4, 3][i]}px`,
              background: i % 2 === 0 ? '#8B5CF6' : '#F4B942',
              top: `${[15, 35, 60, 20, 75, 45][i]}%`,
              left: `${[10, 80, 25, 65, 15, 90][i]}%`,
              animation: `float ${[5, 7, 6, 8, 5.5, 6.5][i]}s ease-in-out infinite`,
              animationDelay: `${[0, 1, 2, 0.5, 1.5, 2.5][i]}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Label */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6">
              <span className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                East Africa&apos;s React Conference
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              <span className="text-white">React.</span>
              <br />
              <span className="text-white">Connect.</span>
              <br />
              <span className="gradient-text">Build.</span>
            </motion.h1>

            {/* Conference name */}
            <motion.div variants={itemVariants} className="mt-6">
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                RenderCon Kenya 2026
              </p>
              <div className="mt-2 flex flex-col gap-1.5">
                <div className="flex items-center gap-3 justify-center lg:justify-start text-brand-gold font-semibold">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>3rd October 2026</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start text-brand-gold font-semibold">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              The home of the East African React ecosystem. Join 200+ developers,
              engineers, and designers for a day of deep talks, community, and connection.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://forms.gle/zyc8anLMKMxo42ED7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                Get Notified When Tickets Drop
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link
                href="/partners"
                className="btn-secondary text-base px-8 py-4"
              >
                Become a Partner
              </Link>
            </motion.div>

            {/* Social proof badges */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">200+</span>
                <span>Attendees</span>
              </div>
              <div className="w-px h-8 bg-brand-dark-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">7K+</span>
                <span>Community</span>
              </div>
              <div className="w-px h-8 bg-brand-dark-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">4th</span>
                <span>Edition</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: React Atom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer ambient glow */}
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs tracking-widest uppercase"></span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
