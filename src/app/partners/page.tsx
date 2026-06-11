import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Partners from '../components/Partners';

export const metadata: Metadata = {
  title: 'Partners & Sponsors — RenderCon Kenya 2026',
  description:
    'Partner with RenderCon Kenya 2026. Sponsorship opportunities to reach East Africa\'s top React and React Native developers.',
};

const whyPartner = [
  {
    icon: '🎯',
    title: 'Targeted Developer Reach',
    description:
      'RenderCon attracts React and React Native developers — not a general tech crowd. If you\'re hiring or marketing to frontend engineers, this is your audience.',
  },
  {
    icon: '🌍',
    title: 'East African Market Access',
    description:
      'Be seen as a company that invests in African tech. Brand recognition in a fast-growing market with 400M+ potential users.',
  },
  {
    icon: '🤝',
    title: 'Community Trust',
    description:
      'ReactDevsKe is a trusted community brand. Sponsoring RenderCon signals that you care about developers — not just customers.',
  },
  {
    icon: '📈',
    title: 'Year-Round Visibility',
    description:
      'Sponsorship includes visibility across our social channels (7K+ community), event communications, and year-round ReactDevsKe programming.',
  },
];

export default function PartnersPage() {
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
            <span className="section-label mb-6 inline-flex">Partnerships</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mt-4">
              Partner with<br />
              <span className="gradient-text">RenderCon</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
              Join the companies investing in East Africa&apos;s most engaged React developer
              community. Real developers. Real impact.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sponsors@rendercon.org" className="btn-primary px-8 py-3.5">
                Get in Touch
              </a>
              <a href="#prospectus" className="btn-secondary px-8 py-3.5">
                View Prospectus
              </a>
            </div>
          </div>
        </section>

        {/* Why partner */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="section-label mb-4 inline-flex">Why Partner</span>
              <h2 className="text-3xl font-bold text-white mt-4">
                Why companies sponsor RenderCon
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyPartner.map((item) => (
                <div key={item.title} className="bento-card">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tiers + current sponsors */}
        <div id="prospectus">
          <Partners />
        </div>

        {/* Contact */}
        <section className="py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="bento-card py-12">
              <h2 className="text-2xl font-bold text-white mb-3">Ready to partner?</h2>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                Send us an email and we&apos;ll get back to you within 24 hours with a
                customised partnership proposal.
              </p>
              <a href="mailto:sponsors@rendercon.org" className="btn-primary px-8 py-3.5">
                Email sponsors@rendercon.org
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
