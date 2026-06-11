'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import ImageTwo from '../images/assets/conf_web_asset_2.webp';
import ImageThree from '../images/assets/conf_web_asset_3.webp';
import ImageFour from '../images/assets/conf_web_asset_4.webp';

export default function Highlights() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(244,185,66,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">RenderCon 2024 Highlights</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            You had to be there.<br />
            <span className="text-brand-gold">Be there in 2026.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            The energy in the room when East African React developers come together
            is something you can only experience in person.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Photo grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="col-span-2 aspect-video rounded-2xl overflow-hidden">
              <Image
                src={ImageFour}
                alt="RenderCon 2024 main hall"
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src={ImageTwo}
                alt="Speaker session"
                className="w-full h-full object-cover"
                sizes="25vw"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src={ImageThree}
                alt="Networking"
                className="w-full h-full object-cover"
                sizes="25vw"
              />
            </div>
          </motion.div>

          {/* Right: stats + gallery links */}
          <div className="space-y-6">
            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bento-card"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-5">
                By the numbers
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '200+', label: 'Attendees' },
                  { value: '15+', label: 'Speakers' },
                  { value: '8+', label: 'Sponsors' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl font-bold gradient-text">{s.value}</div>
                    <div className="mt-1 text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Edition timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bento-card"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-5">
                Our editions
              </h3>
              <div className="space-y-4">
                {[
                  { year: '2023', edition: '1st Edition', note: 'Where it all started' },
                  { year: '2024', edition: '2nd Edition', note: 'Bigger. Better. Bolder.' },
                  { year: '2025', edition: '3rd Edition', note: 'The ecosystem grows' },
                  { year: '2026', edition: '4th Edition', note: '3rd Oct · Coming soon', upcoming: true },
                ].map((e) => (
                  <div key={e.year} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      e.upcoming
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'bg-brand-dark-border text-slate-400'
                    }`}>
                      {e.year}
                    </div>
                    <div>
                      <div className={`text-sm font-semibold ${e.upcoming ? 'text-white' : 'text-slate-300'}`}>
                        {e.edition}
                      </div>
                      <div className="text-xs text-slate-500">{e.note}</div>
                    </div>
                    {e.upcoming && (
                      <span className="ml-auto text-xs font-semibold text-brand-gold border border-yellow-500/30 bg-yellow-500/10 rounded-full px-2.5 py-0.5">
                        Next up
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gallery links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-3"
            >
              <a
                href="https://bit.ly/rcke23pics"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 justify-center text-sm py-2.5"
              >
                Gallery 2023
              </a>
              <a
                href="https://bit.ly/rcke24pics"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 justify-center text-sm py-2.5"
              >
                Gallery 2024
              </a>
              <a
                href="https://photos.app.goo.gl/ytfMzEckYDw92Mnx6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex-1 justify-center text-sm py-2.5"
              >
                Gallery 2025
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
