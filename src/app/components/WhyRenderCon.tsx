'use client';

import { motion, type Variants } from 'framer-motion';

const bentoItems = [
  {
    id: 'learning',
    label: 'Deep Learning',
    headline: 'Talks that actually move the needle',
    description:
      'Curated sessions from practitioners shipping real-world React and React Native products — not slides about slides.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    accent: 'purple',
    size: 'large',
  },
  {
    id: 'community',
    label: 'Community',
    headline: '7,000+ strong and growing',
    description:
      'ReactDevsKe is the largest React developer community in East Africa. RenderCon is where we meet in person.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    accent: 'gold',
    size: 'small',
  },
  {
    id: 'innovation',
    label: 'Innovation',
    headline: 'Where African tech tells its own story',
    description:
      'From mobile-first apps to AI-powered products built in Nairobi, Kampala, and beyond — innovation is happening here.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    accent: 'purple',
    size: 'small',
  },
  {
    id: 'opportunity',
    label: 'Opportunity',
    headline: 'Your network is your net worth',
    description:
      'Connect with hiring teams, open source maintainers, and founders building the next wave of African software companies.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    accent: 'gold',
    size: 'large',
  },
];

const accentColors = {
  purple: {
    icon: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    label: 'text-purple-400',
    labelBg: 'bg-purple-500/10 border-purple-500/20',
    glow: 'rgba(109,58,168,0.2)',
  },
  gold: {
    icon: 'text-brand-gold',
    iconBg: 'bg-yellow-500/10',
    label: 'text-brand-gold',
    labelBg: 'bg-yellow-500/10 border-yellow-500/20',
    glow: 'rgba(244,185,66,0.15)',
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function WhyRenderCon() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      {/* Section background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(109,58,168,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">Why RenderCon</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4">
            Building The Future<br />
            <span className="gradient-text">Of African Tech</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            More than a conference. A movement that&apos;s building the next generation
            of East African software engineers.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
        >
          {/* Row 1: large + small */}
          <motion.div variants={cardVariants} className="md:col-span-1">
            <BentoCard item={bentoItems[0]} />
          </motion.div>
          <motion.div variants={cardVariants} className="md:col-span-1">
            <BentoCard item={bentoItems[1]} />
          </motion.div>

          {/* Row 2: small + large */}
          <motion.div variants={cardVariants} className="md:col-span-1">
            <BentoCard item={bentoItems[2]} />
          </motion.div>
          <motion.div variants={cardVariants} className="md:col-span-1">
            <BentoCard item={bentoItems[3]} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BentoCard({ item }: { item: (typeof bentoItems)[number] }) {
  const colors = accentColors[item.accent as keyof typeof accentColors];
  return (
    <div
      className="bento-card group h-full min-h-[220px] flex flex-col justify-between"
      style={{
        background: `linear-gradient(135deg, rgba(26,21,48,0.95), rgba(15,11,30,0.95))`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 30%, ${colors.glow} 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        {/* Label */}
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${colors.label} ${colors.labelBg}`}
        >
          {item.label}
        </span>

        {/* Icon */}
        <div className={`mt-6 w-12 h-12 rounded-xl flex items-center justify-center ${colors.iconBg}`}>
          <span className={colors.icon}>{item.icon}</span>
        </div>
      </div>

      <div className="relative z-10 mt-6">
        <h3 className="text-xl font-bold text-white leading-snug">{item.headline}</h3>
        <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}
