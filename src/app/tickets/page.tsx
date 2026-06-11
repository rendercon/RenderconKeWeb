import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TicketsCTA from '../components/TicketsCTA';

export const metadata: Metadata = {
  title: 'Tickets — RenderCon Kenya 2026',
  description:
    'Get your RenderCon Kenya 2026 tickets. Join 200+ React developers in Nairobi for East Africa\'s premier React conference.',
};

export default function TicketsPage() {
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
            <span className="section-label mb-6 inline-flex">Get Your Ticket</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mt-4">
              RenderCon Kenya
              <br />
              <span className="gradient-text">2026</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto">
              One day. Hundreds of developers. Nairobi, Kenya.
            </p>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Pride Inn Azure, Westlands, Nairobi
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                3rd October 2026
              </span>
            </div>
          </div>
        </section>

        {/* Ticket tiers */}
        <TicketsCTA />

        {/* What&apos;s included */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label mb-4 inline-flex">Included</span>
              <h2 className="text-3xl font-bold text-white mt-4">What your ticket gets you</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                { icon: '🎤', title: 'Full Day of Talks', desc: 'Access to all keynotes and breakout sessions across all conference tracks.' },
                { icon: '🤝', title: 'Networking Events', desc: 'Structured and unstructured time to meet developers from across East Africa.' },
                { icon: '🍱', title: 'Lunch & Refreshments', desc: 'Full lunch and refreshment breaks throughout the day.' },
                { icon: '👕', title: 'Conference Swag', desc: 'Exclusive RenderCon 2026 swag bag including t-shirt and stickers.' },
                { icon: '🎥', title: 'Talk Recordings', desc: 'Access to recordings of all sessions after the conference.' },
                { icon: '💼', title: 'Career Opportunities', desc: 'Connect with hiring companies and explore job opportunities on the ground.' },
              ].map((item) => (
                <div key={item.title} className="bento-card text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
