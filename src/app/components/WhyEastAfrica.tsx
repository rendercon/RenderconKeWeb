'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" />
      </svg>
    ),
    title: 'Mobile-First Innovation',
    body: 'Developers here build for users who skipped desktop entirely. React Native is not a supplement — it\'s a primary platform.',
    color: 'purple',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Startup Velocity',
    body: 'Nairobi is Africa\'s Silicon Savannah. Kampala, Kigali, Addis — a new generation of startups is shipping React-powered products daily.',
    color: 'gold',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Growing Developer Talent',
    body: 'Universities and bootcamps across the region are producing world-class engineers. The talent pool is deeper than most people realize.',
    color: 'purple',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Regional Opportunity',
    body: 'A region of 400M+ people with rising internet penetration and digital adoption. The next wave of internet users is here.',
    color: 'gold',
  },
];

const MapVisualization = () => (
  <div className="relative w-full aspect-square max-w-sm mx-auto">
    {/* Simplified Africa outline */}
    <svg viewBox="0 0 300 380" fill="none" className="w-full h-full">
      {/* Africa continent shape */}
      <path
        d="M100 30 C80 28 60 40 50 55 C40 70 35 90 38 110 C35 130 30 150 32 170 C30 190 25 215 30 240 C35 265 45 285 60 300 C75 315 95 325 115 330 C135 335 155 330 170 320 C185 310 195 295 200 280 C205 265 200 250 195 235 C210 230 225 220 230 205 C235 190 228 175 215 165 C230 155 240 140 235 120 C230 100 215 85 200 78 C210 65 215 48 205 38 C195 28 180 26 165 28 C155 22 140 20 125 22 L100 30Z"
        fill="rgba(109,58,168,0.1)"
        stroke="rgba(109,58,168,0.3)"
        strokeWidth="1.5"
      />

      {/* East Africa highlight */}
      <path
        d="M160 140 C170 135 182 138 190 145 C198 152 200 163 196 172 C192 181 182 186 172 184 C162 182 154 174 152 164 C150 154 150 145 160 140Z"
        fill="rgba(109,58,168,0.4)"
        stroke="rgba(139,92,246,0.8)"
        strokeWidth="1"
      />

      {/* Nairobi dot */}
      <circle cx="175" cy="190" r="6" fill="#8B5CF6" opacity="0.9">
        <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="190" r="3" fill="white" />

      {/* Kampala dot */}
      <circle cx="162" cy="178" r="4" fill="#F4B942" opacity="0.8">
        <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Kigali dot */}
      <circle cx="156" cy="183" r="3.5" fill="#C084FC" opacity="0.8">
        <animate attributeName="r" values="3.5;6;3.5" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Connection lines */}
      <line x1="175" y1="190" x2="162" y2="178" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="175" y1="190" x2="156" y2="183" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="3,3" />

      {/* Labels */}
      <text x="182" y="196" fill="white" fontSize="7" opacity="0.8" fontFamily="Poppins">Nairobi</text>
      <text x="148" y="176" fill="#F4B942" fontSize="6" opacity="0.8" fontFamily="Poppins">Kampala</text>
      <text x="136" y="185" fill="#C084FC" fontSize="6" opacity="0.8" fontFamily="Poppins">Kigali</text>
    </svg>

    {/* Glow behind map */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at 55% 55%, rgba(109,58,168,0.15) 0%, transparent 60%)',
        filter: 'blur(20px)',
      }}
    />
  </div>
);

export default function WhyEastAfrica() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 80% 50%, rgba(109,58,168,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-4 inline-flex">Why East Africa</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
                The ecosystem is<br />
                <span className="gradient-text">right here.</span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                East Africa is not waiting to catch up. It&apos;s building — in React,
                in the cloud, and on mobile. RenderCon is the annual moment where
                that building becomes visible.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bento-card group p-5"
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                      pillar.color === 'purple'
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'bg-yellow-500/10 text-brand-gold'
                    }`}
                  >
                    {pillar.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{pillar.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{pillar.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
