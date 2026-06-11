import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Code of Conduct — RenderCon Kenya',
};

const sections = [
  {
    title: 'The Short Version',
    body: 'Our conference is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, or technology choices. We do not tolerate harassment of participants in any form. Conference participants violating these rules may be sanctioned or expelled without a refund at the discretion of the organizers.',
  },
  {
    title: 'The Long Version',
    body: `Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, or technology choices; sexual images in public spaces; deliberate intimidation; stalking; following; harassing photography or recording; sustained disruption of talks or other events; inappropriate physical contact; and unwelcome sexual attention.\n\nParticipants asked to stop any harassing behaviour are expected to comply immediately.\n\nSponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other material. Booth staff (including volunteers) should not use sexualised clothing, uniforms, or costumes, or otherwise create a sexualised environment.\n\nIf a participant engages in harassing behaviour, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.\n\nIf you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified as they'll be wearing branded clothing and badges.\n\nConference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference.`,
  },
];

export default function CodeOfConductPage() {
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
              Code of Conduct
            </h1>
            <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-xl">
              All attendees, speakers, sponsors, and volunteers at RenderCon are required to follow this Code of Conduct. Organisers will enforce it throughout the event. We expect cooperation from all participants to help ensure a safe environment for everybody.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Breach of CoC? Contact our enforcement team at{' '}
              <a href="mailto:info@rendercon.org" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                info@rendercon.org
              </a>
              {' '}or approach any crew member (look for SUDO / CREW tags or purple jackets labelled &ldquo;CREW&rdquo;).
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-semibold text-white mb-4">{s.title}</h2>
                <div className="space-y-4">
                  {s.body.split('\n\n').map((para, i) => (
                    <p key={i} className="text-sm text-slate-400 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Footer note */}
            <div className="border-t border-brand-dark-border pt-8 space-y-2 text-xs text-slate-600">
              <p>We expect participants to follow these rules at all conference venues and related social events.</p>
              <p>
                Original source and credit:{' '}
                <a href="http://2012.jsconf.us/#/about" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white underline underline-offset-2 transition-colors">
                  jsconf.us 2012
                </a>
                {' '}& The Ada Initiative. Licensed under a{' '}
                <a href="http://creativecommons.org/licenses/by/3.0/deed.en_US" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white underline underline-offset-2 transition-colors">
                  Creative Commons Attribution 3.0 Unported License
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
