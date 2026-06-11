'use client';

import { motion } from 'framer-motion';

const tracks = [
  {
    id: 'react',
    name: 'React',
    emoji: '⚛️',
    description: 'Deep dives into React internals, patterns, and the latest ecosystem updates from the core team.',
    tags: ['React 19', 'Server Components', 'Concurrent Mode'],
    accent: 'purple',
    size: 'large',
  },
  {
    id: 'react-native',
    name: 'React Native',
    emoji: '📱',
    description: 'Building cross-platform mobile apps for the billion users on Android and iOS across Africa.',
    tags: ['New Architecture', 'Expo', 'Performance'],
    accent: 'gold',
    size: 'small',
  },
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    emoji: '🎨',
    description: 'Web performance, accessibility, design systems, and the craft of building great UIs.',
    tags: ['Web Vitals', 'a11y', 'CSS'],
    accent: 'purple',
    size: 'small',
  },
  {
    id: 'ai',
    name: 'AI & Web',
    emoji: '🤖',
    description: 'Integrating AI into your React apps — from LLM-powered UIs to intelligent user experiences.',
    tags: ['LLMs', 'AI SDK', 'RAG'],
    accent: 'gold',
    size: 'small',
  },
  {
    id: 'community',
    name: 'Community',
    emoji: '🤝',
    description: 'Open source, mentorship, building developer communities, and growing the next generation of engineers.',
    tags: ['Open Source', 'Mentorship', 'DevRel'],
    accent: 'purple',
    size: 'small',
  },
  {
    id: 'career',
    name: 'Career Growth',
    emoji: '🚀',
    description: 'Leveling up your career — remote work, freelancing, interviews, and growing as a developer in Africa.',
    tags: ['Remote Work', 'Freelancing', 'Leadership'],
    accent: 'gold',
    size: 'large',
  },
];

const accentMap = {
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/20',
    tag: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    glow: 'rgba(109,58,168,0.2)',
  },
  gold: {
    bg: 'bg-yellow-500/10',
    text: 'text-brand-gold',
    border: 'border-yellow-500/20',
    tag: 'bg-yellow-500/10 text-brand-gold border-yellow-500/20',
    glow: 'rgba(244,185,66,0.12)',
  },
};

export default function ConferenceTracks() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 30% 60%, rgba(109,58,168,0.07) 0%, transparent 70%)',
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
          <span className="section-label mb-4 inline-flex">Conference Tracks</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            Sessions for every<br />
            <span className="gradient-text">stage of the journey</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Whether you&apos;re writing your first component or scaling a React app to millions —
            there&apos;s a track built for you.
          </p>
        </motion.div>

        {/* Bento grid — 3 col on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {tracks.map((track, i) => {
            const colors = accentMap[track.accent as keyof typeof accentMap];
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bento-card group"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 30% 30%, ${colors.glow} 0%, transparent 60%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Emoji + name */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{track.emoji}</span>
                    <h3 className="text-lg font-bold text-white">{track.name}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {track.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {track.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="/speakers-schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-6 py-3"
          >
            View the Full Schedule →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
