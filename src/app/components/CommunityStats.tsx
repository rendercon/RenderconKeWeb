'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  {
    value: 7000,
    suffix: '+',
    label: 'Community Members',
    description: 'Developers across East Africa in the ReactDevsKe community',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: 'purple',
  },
  {
    value: 1800,
    suffix: '+',
    label: 'Newsletter Subscribers',
    description: 'Developers receiving curated React ecosystem updates weekly',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    color: 'gold',
  },
  {
    value: 1675,
    suffix: '+',
    label: 'LinkedIn Followers',
    description: 'Professional network following the East African React scene',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    color: 'purple',
  },
  {
    value: 200,
    suffix: '+',
    label: 'Previous Attendees',
    description: 'Developers who experienced RenderCon in Nairobi and came back',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
      </svg>
    ),
    color: 'gold',
  },
];

function useCountUp(target: number, duration = 2000, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
}

function StatCard({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const count = useCountUp(stat.value, 1800, inView);

  const isPurple = stat.color === 'purple';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bento-card group text-center sm:text-left"
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
        {/* Icon */}
        <div
          className={`inline-flex w-10 h-10 rounded-xl items-center justify-center mb-4 ${
            isPurple
              ? 'bg-purple-500/10 text-purple-400'
              : 'bg-yellow-500/10 text-brand-gold'
          }`}
        >
          {stat.icon}
        </div>

        {/* Number */}
        <div className="flex items-end gap-1 justify-center sm:justify-start">
          <span
            className={`text-4xl sm:text-5xl font-bold tabular-nums ${
              isPurple ? 'gradient-text-purple' : 'text-brand-gold'
            }`}
          >
            {count.toLocaleString()}
          </span>
          <span
            className={`text-3xl font-bold mb-1 ${
              isPurple ? 'text-purple-400' : 'text-brand-gold'
            }`}
          >
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <h3 className="mt-2 text-base font-semibold text-white">{stat.label}</h3>
        <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{stat.description}</p>
      </div>
    </motion.div>
  );
}

export default function CommunityStats() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10"
        >
          <span className="section-label mb-4 inline-flex">The ReactDevsKe Community</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            A community that shows up —<br />
            <span className="gradient-text">in real life</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            ReactDevsKe is East Africa&apos;s home for React developers. We meet online,
            we learn together, and once a year we meet at RenderCon.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Community links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start"
        >
          <a
            href="https://twitter.com/ReactDevsKe"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-5 py-2.5 gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Follow @ReactDevsKe
          </a>
          <a
            href="https://www.linkedin.com/company/reactdevske"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-5 py-2.5 gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="/community"
            className="btn-secondary text-sm px-5 py-2.5"
          >
            Learn About ReactDevsKe →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
