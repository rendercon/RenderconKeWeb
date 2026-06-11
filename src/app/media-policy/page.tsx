import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Media Policy — RenderCon Kenya',
};

const items = [
  {
    title: 'Use of Photos and Videos',
    body: 'RenderCon may capture photographs and video footage during the event for marketing and promotional purposes. These may be published on our website, social media channels, newsletters, and other marketing materials.',
  },
  {
    title: 'Consent to Be Filmed or Photographed',
    body: 'By entering the event venue, you are giving your consent to be filmed, photographed, and recorded. These media assets may feature you alongside other attendees in both group and individual settings.',
  },
  {
    title: 'No Compensation',
    body: 'RenderCon does not offer compensation for the use of any media in which you may appear. Participation in the event constitutes permission to use these images or recordings.',
  },
  {
    title: 'Rights Reserved',
    body: 'RenderCon reserves the right to use any media captured during the event for marketing and promotional purposes, including sharing images and recordings across our website, social media, newsletters, and other materials.',
  },
  {
    title: 'Opting Out',
    body: 'If you prefer not to be included in any media assets, please notify a RenderCon crew member at the registration desk and we will do our best to accommodate your request. However, we cannot guarantee that you will not appear in photos or footage captured in group settings.',
  },
];

export default function MediaPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* Hero */}
        <section className="relative py-16 sm:py-20 overflow-hidden border-b border-brand-dark-border">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(109,58,168,0.15) 0%, transparent 60%)' }}
          />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <span className="section-label mb-4 inline-flex">RenderCon Kenya</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Media Policy
            </h1>
            <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-xl">
              At RenderCon, we are committed to creating an engaging and memorable experience for all participants. As part of this effort, we capture photos and videos throughout the event for marketing and promotional purposes.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              By attending RenderCon and entering the event venue, you acknowledge and agree to the following.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <ol className="space-y-8">
              {items.map((item, i) => (
                <li key={item.title} className="flex gap-5">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="text-base font-semibold text-white mb-1.5">{item.title}</h2>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Closing note */}
            <div className="border-t border-brand-dark-border mt-12 pt-8">
              <p className="text-xs text-slate-600 leading-relaxed">
                By choosing to attend RenderCon and being present at the venue, you are providing your consent to this media policy. Questions or concerns? Reach us at{' '}
                <a href="mailto:info@rendercon.org" className="text-slate-500 hover:text-white underline underline-offset-2 transition-colors">
                  info@rendercon.org
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
