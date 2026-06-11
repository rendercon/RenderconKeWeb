import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — RenderCon Kenya',
};

const sections = [
  {
    title: 'Information We Collect',
    body: 'We may collect personal data such as your name, email address, and other contact details when you register for the event, participate in sessions, or engage in our community spaces. We also collect technical information when you interact with our website, such as your IP address, browser type, and cookies.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use your information to manage your event registration, provide updates, facilitate your participation, and communicate important event information. We may also use your data to improve the user experience of our website and events.',
  },
  {
    title: 'How We Share Your Information',
    body: 'RenderCon will not sell or rent your personal information to third parties. We may share your data with our event partners or sponsors in the context of event coordination or participation. Any data sharing will be in compliance with applicable privacy laws.',
  },
  {
    title: 'Data Security',
    body: 'We take reasonable measures to protect your personal information from unauthorised access, disclosure, or alteration. However, no internet-based system can guarantee absolute security.',
  },
  {
    title: 'Your Rights',
    body: 'You have the right to access, correct, or delete the personal information we hold about you. If you wish to exercise any of these rights or have questions about our privacy policy, please contact us at privacy@rendercon.org.',
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-xl">
              At RenderCon, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you attend our event or use our website.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-semibold text-white mb-3">{s.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {s.title === 'Your Rights'
                    ? <>
                        You have the right to access, correct, or delete the personal information we hold about you. If you wish to exercise any of these rights or have questions about our privacy policy, please contact us at{' '}
                        <a href="mailto:privacy@rendercon.org" className="text-purple-400 hover:text-purple-300 transition-colors">
                          privacy@rendercon.org
                        </a>
                        .
                      </>
                    : s.body}
                </p>
              </div>
            ))}

            {/* Closing note */}
            <div className="border-t border-brand-dark-border pt-8">
              <p className="text-xs text-slate-600 leading-relaxed">
                By attending RenderCon or using our website, you consent to the terms of this privacy policy. We may update this policy periodically — please check back for any changes.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
