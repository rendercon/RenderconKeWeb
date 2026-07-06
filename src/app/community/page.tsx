import type { Metadata } from 'next';
import { EVENT_CONFIG } from '@/config/event';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommunityStats from '../components/CommunityStats';

export const metadata: Metadata = {
  title: 'ReactDevsKe Community — RenderCon Kenya',
  description:
    'React Developer Community Kenya. A vibrant community of developers passionate about React, Next.js, React Native and the ecosystem. Join ReactDevsKe.',
};

const platforms = [
  {
    name: 'Twitter / X',
    handle: '@ReactDevsKe',
    href: 'https://twitter.com/ReactDevsKe',
    description: 'Updates, threads, and community conversations.',
    stat: '7K+',
    statLabel: 'Followers',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp Community',
    handle: 'ReactDevsKe',
    href: 'https://chat.whatsapp.com/reactdevske',
    description: 'Real-time discussions, job postings, and peer support.',
    stat: '1.8K+',
    statLabel: 'Members',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.857L.057 23.01a.75.75 0 00.932.932l5.153-1.477A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.953 9.953 0 01-5.384-1.572l-.386-.228-3.058.877.877-3.058-.228-.386A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    handle: 'ReactDevsKe',
    href: 'https://t.me/reactdevske',
    description: 'Tech news, event announcements, and open-source drops.',
    stat: '1.6K+',
    statLabel: 'Members',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@ReactDevsKe',
    href: 'https://youtube.com/@ReactDevsKe',
    description: 'Talk recordings, community sessions, and tutorials.',
    stat: '200+',
    statLabel: 'Subscribers',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const pillars = [
  {
    title: 'Grow',
    description:
      'Level up through talks, workshops, and peer learning — whether you\'re just starting out or a seasoned engineer.',
  },
  {
    title: 'Collaborate',
    description:
      'Work on open-source projects, study groups, and community initiatives that make the ecosystem stronger.',
  },
  {
    title: 'Create',
    description:
      'Build meaningful solutions to real problems. We celebrate shipped products, not just theories.',
  },
];

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-10 sm:py-14 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(109,58,168,0.18) 0%, transparent 60%)',
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label mb-6 inline-flex">Community</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mt-4">
              React Developer<br />
              <span className="gradient-text">Community Kenya</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We are a tech community in Kenya focused on the React JS library and its ecosystem.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://twitter.com/ReactDevsKe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-3.5"
              >
                Follow @ReactDevsKe
              </a>
              <a
                href="https://kommunity.com/reactjs-developer-community-kenya-reactdevske"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-3.5"
              >
                Join on Kommunity
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-label mb-4 inline-flex">About Us</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
                  A vibrant community of<br />
                  <span className="gradient-text">React developers</span>
                </h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>
                    We are a vibrant community of developers passionate about React, Next.js,
                    React Native, and the powerful ecosystem that surrounds them.
                  </p>
                  <p>
                    Our mission is to empower developers — from full-stack experts to frontend
                    enthusiasts — to grow, collaborate, and create meaningful solutions. Join us
                    to connect, learn, and contribute to the future of web development.
                  </p>
                </div>
              </div>

              {/* Pillars */}
              <div className="space-y-4">
                {pillars.map((p, i) => (
                  <div key={p.title} className="bento-card flex items-start gap-5">
                    <div className="text-3xl font-black gradient-text flex-shrink-0 w-10 text-right">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{p.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <CommunityStats />

        {/* Platforms */}
        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label mb-4 inline-flex">Find Us</span>
              <h2 className="text-3xl font-bold text-white mt-4">
                Join the conversation
              </h2>
              <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                Pick your platform — we&apos;re active across all of them.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bento-card group hover:border-purple-500/40 transition-all duration-300 flex items-start gap-5 no-underline"
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:bg-purple-500/20 transition-colors duration-300">
                    {platform.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-base font-bold text-white">{platform.name}</span>
                      <span className="text-xs text-slate-500">{platform.handle}</span>
                    </div>
                    <p className="text-sm text-slate-400 mb-3">{platform.description}</p>
                    <div>
                      <span className="text-xl font-bold gradient-text">{platform.stat}</span>
                      <span className="ml-1.5 text-xs text-slate-500">{platform.statLabel}</span>
                    </div>
                  </div>
                  <svg
                    className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors duration-200 flex-shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="bento-card py-6">
              <h2 className="text-2xl font-bold text-white mb-3">Ready to join?</h2>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed max-w-md mx-auto">
                Connect with hundreds of React developers across East Africa.
                Share knowledge, find collaborators, and grow together.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://twitter.com/ReactDevsKe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-8 py-3.5"
                >
                  Follow @ReactDevsKe
                </a>
                <a href={EVENT_CONFIG.links.tickets} target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-3.5">
                  Get RenderCon Tickets
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
