import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Speakers } from '../components/Speakers';

export const metadata: Metadata = {
  title: 'Speak at RenderCon Kenya 2026',
  description:
    'Submit a session proposal for RenderCon Kenya 2026 — East Africa\'s premier React conference. Share your React story with 200+ developers.',
};

const speakerPerks = [
  { icon: '🎤', title: 'Main Stage Access', desc: 'Present to 200+ React developers from across East Africa' },
  { icon: '✈️', title: 'Speaker Support', desc: 'Travel and accommodation support for selected speakers' },
  { icon: '🌍', title: 'Community Reach', desc: 'Talk recordings shared with our 7K+ community online' },
  { icon: '🤝', title: 'Speaker Dinner', desc: 'Exclusive networking dinner with fellow speakers and organisers' },
];

const whySpeakReasons = [
  { icon: '⚛️', title: 'Share Your Expertise', desc: 'Present your ideas, lessons, and experiences to one of East Africa\'s most engaged React communities.' },
  { icon: '🌍', title: 'Grow Your Profile', desc: 'Build visibility within the React ecosystem and establish yourself as a trusted voice among developers and engineering leaders.' },
  { icon: '🤝', title: 'Connect with Builders', desc: 'Meet fellow maintainers, founders, and community leaders from across Kenya and East Africa.' },
  { icon: '🚀', title: 'Showcase Your Work', desc: 'Building products, contributing to open source, or solving interesting challenges — RenderCon is your platform.' },
  { icon: '💡', title: 'Inspire Others', desc: 'Your story and lessons could help another developer take the next step in their career.' },
  { icon: '🌱', title: 'Strengthen the Ecosystem', desc: 'Help grow the React and React Native community across East Africa by contributing your experience and perspective.' },
];

const talkTypes = [
  { label: 'Deep Dive', desc: '40 min technical deep-dive on a React topic' },
  { label: 'Lightning Talk', desc: '10 min focused insight or lesson learned' },
  { label: 'Workshop', desc: 'Hands-on session with the audience' },
];

export default function SpeakersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero — Speaker CTA */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 90% 70% at 50% -5%, rgba(109,58,168,0.28) 0%, transparent 65%)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-48"
              style={{ background: 'linear-gradient(to top, #0F0B1E, transparent)' }}
            />
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold text-purple-300 uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              CFP Open · RenderCon Kenya 2026
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-white">Your talk.</span><br />
              <span className="gradient-text">East Africa&apos;s stage.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              RenderCon Kenya 2026 is looking for practitioners — developers who are
              actively building with React and have a story worth sharing. No fluff.
              Just real lessons from the field. <br /> <br />
              <span className="text-slate-400 text-lg">
                We would love to have you speak at RenderCon Kenya 2026.
              </span>
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/Hes3NQUtcMe1ro3q7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                I Want to Speak
              </a>
              <a
                href="https://twitter.com/ReactDevsKe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-8 py-4"
              >
                Follow for Updates
              </a>
            </div>

            {/* Event details */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                3rd October 2026
              </span>
              <span className="w-px h-4 bg-slate-700" />
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Nairobi, Kenya
              </span>
              <span className="w-px h-4 bg-slate-700" />
              <span>200+ Attendees</span>
            </div>
          </div>
        </section>

        {/* Why Speak */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label mb-4 inline-flex">Why Speak?</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
                Why Speak at RenderCon?
              </h2>
              <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
                Beyond the stage, speaking at RenderCon opens doors — professionally, socially, and within the East African tech ecosystem.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whySpeakReasons.map((reason) => (
                <div key={reason.title} className="bento-card p-6 flex gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{reason.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{reason.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
              {speakerPerks.map((perk) => (
                <div key={perk.title} className="bento-card p-6 flex flex-col gap-3">
                  <span className="text-3xl">{perk.icon}</span>
                  <h3 className="font-semibold text-white">{perk.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Talk formats */}
        <section className="py-8 pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bento-card gradient-border p-8 sm:p-12">
              <div className="grid sm:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="section-label mb-4 inline-flex">What We&apos;re Looking For</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-4">
                    Any React story is worth telling
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    We welcome talks from developers at every level — whether it&apos;s
                    your first conference talk or your tenth. If you&apos;ve solved a problem,
                    built something interesting, or learned something the hard way, our
                    audience will find it valuable.
                  </p>
                  <a
                    href="https://forms.gle/Hes3NQUtcMe1ro3q7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex text-sm px-6 py-3"
                  >
                    I Want to Speak
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
                <div className="space-y-3">
                  {talkTypes.map((type) => (
                    <div key={type.label} className="flex items-start gap-4 rounded-xl bg-white/5 border border-brand-dark-border px-5 py-4">
                      <svg className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="text-white text-sm font-medium">{type.label}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{type.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past speakers section */}
        <section className="py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label mb-4 inline-flex">Past Edition</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
                RenderCon 2025 Speakers
              </h2>
              <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
                Practitioners who took the stage at our 3rd edition — engineers
                actively building with React and sharing hard-won lessons from the field.
              </p>
            </div>
          </div>
        </section>

        {/* Speakers grid */}
        <Speakers />
      </main>
      <Footer />
    </>
  );
}
