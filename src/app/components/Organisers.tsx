'use client';

import { motion } from 'framer-motion';

type Organiser = {
  name: string;
  initials: string;
  role: string;
  bio: string;
  linkedin: string;
  twitter?: string;
  avatarGradient: string;
};

const organisers: Organiser[] = [
  {
    name: 'Cindy Kandie',
    initials: 'CK',
    role: 'Frontend Engineer · Community Builder',
    bio: 'Passionate about growing developer communities and creating opportunities for learning and connection across East Africa.',
    linkedin: 'https://www.linkedin.com/in/cindykandie/',
    twitter: 'https://twitter.com/cindykandie',
    avatarGradient: 'from-purple-600 to-violet-500',
  },
  {
    name: "Rama Ochieng'",
    initials: 'RO',
    role: 'Frontend Engineer · Open Source',
    bio: 'Building beautiful, accessible interfaces with React. Open source maintainer and contributor to the African developer ecosystem.',
    linkedin: 'https://www.linkedin.com/in/ramaochieng/',
    avatarGradient: 'from-brand-purple to-indigo-500',
  },
  {
    name: 'Abel Masila',
    initials: 'AM',
    role: 'Senior Frontend Engineer · Speaker',
    bio: 'Engineering leader, conference speaker, and mentor dedicated to raising the bar for frontend development across the continent.',
    linkedin: 'https://www.linkedin.com/in/abelmasila/',
    avatarGradient: 'from-violet-600 to-purple-400',
  },
  {
    name: 'Ben Wasonga',
    initials: 'BW',
    role: 'Technical Support Engineer · Community',
    bio: 'Bridging the gap between technology and community — making sure every developer feels welcome and supported in their journey.',
    linkedin: 'https://www.linkedin.com/in/benwasonga/',
    avatarGradient: 'from-purple-500 to-blue-500',
  },
  {
    name: 'Sisco Cherono',
    initials: 'SC',
    role: 'Frontend Developer · Community Builder',
    bio: 'Passionate about web development and creating spaces where developers can grow, collaborate, and thrive together.',
    linkedin: 'https://www.linkedin.com/company/renderconke/',
    avatarGradient: 'from-fuchsia-600 to-purple-500',
  },
];

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

function OrganizerCard({ organiser, index }: { organiser: Organiser; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="bento-card group relative flex flex-col"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(109,58,168,0.18) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Avatar + name row */}
        <div className="flex items-center gap-4 mb-4">
          {/* Avatar */}
          <div
            className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${organiser.avatarGradient} flex items-center justify-center text-white font-bold text-lg shadow-glow-purple`}
          >
            {organiser.initials}
          </div>

          {/* Name + role */}
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-white truncate">{organiser.name}</h3>
            <p className="text-xs text-purple-400 font-medium mt-0.5 leading-snug">{organiser.role}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-slate-400 leading-relaxed flex-1">{organiser.bio}</p>

        {/* Social links */}
        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-brand-dark-border">
          <a
            href={organiser.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-purple-400 transition-colors duration-200 font-medium"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          {organiser.twitter && (
            <>
              <span className="text-brand-dark-border">·</span>
              <a
                href={organiser.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-purple-400 transition-colors duration-200 font-medium"
              >
                <TwitterIcon />
                Twitter
              </a>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Organisers() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(109,58,168,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="section-label mb-4 inline-flex">The Team</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            Built By Developers.{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">For Developers.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            RenderCon is organized by a passionate team of engineers and community builders
            who believe that East African developers deserve a world-class stage.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {organisers.map((organiser, i) => (
            <OrganizerCard key={organiser.name} organiser={organiser} index={i} />
          ))}
        </div>

        {/* Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex items-center gap-4 flex-wrap"
        >
          <a
            href="https://www.linkedin.com/company/renderconke/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-5 py-2.5 gap-2"
          >
            <LinkedInIcon />
            Follow RenderCon on LinkedIn
          </a>
          <a
            href="mailto:info@rendercon.org"
            className="text-sm text-slate-500 hover:text-white transition-colors"
          >
            info@rendercon.org
          </a>
        </motion.div>
      </div>
    </section>
  );
}
