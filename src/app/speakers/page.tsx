import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Speakers } from '../components/Speakers';

export const metadata: Metadata = {
  title: 'Speakers — RenderCon Kenya',
  description:
    'Meet the speakers of RenderCon Kenya 2025 — East Africa\'s 3rd edition React conference.',
};

export default function SpeakersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(109,58,168,0.18) 0%, transparent 60%)',
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label mb-6 inline-flex">RenderCon 2025 · 3rd Edition</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mt-4">
              Meet Our{' '}
              <span className="gradient-text">2025 Speakers</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
              Practitioners who took the stage at RenderCon Kenya 2025 — engineers
              actively building with React and sharing hard-won lessons from the field.
            </p>

            {/* CFP teaser for 2026 */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-brand-dark-border bg-brand-dark-card/60 px-5 py-3 text-sm text-slate-400">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse flex-shrink-0" />
              <span>
                Want to speak at <span className="text-white font-medium">RenderCon 2026</span>?
                Session submissions open soon — stay tuned.
              </span>
            </div>
          </div>
        </section>

        {/* Speakers grid */}
        <Speakers />

        {/* CFP CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="bento-card py-12 gradient-border">
              <div className="text-3xl mb-4">🎤</div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Want to speak at RenderCon 2026?
              </h2>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed max-w-md mx-auto">
                We welcome proposals from developers at all levels. If you have a React
                story worth sharing — a lesson learned, a technical deep-dive, or a
                community perspective — we want to hear it.
              </p>
              <div className="inline-flex flex-col items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-xl border border-brand-dark-border bg-white/5 px-6 py-3 text-sm text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                  Session submissions for 2026 are not yet open.
                </div>
                <p className="text-xs text-slate-600">
                  Follow{' '}
                  <a
                    href="https://twitter.com/ReactDevsKe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    @ReactDevsKe
                  </a>
                  {' '}to be the first to know when the CFP opens.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
