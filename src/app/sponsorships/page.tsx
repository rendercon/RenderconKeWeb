import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sponsors from '../components/Sponsors';
import Technologies from '../components/Technologies';
import { EVENT_CONFIG } from '@/config/event';

export const metadata: Metadata = {
  title: `Sponsors & Partners — RenderCon Kenya ${EVENT_CONFIG.year}`,
  description: `Meet the sponsors and partners supporting RenderCon Kenya ${EVENT_CONFIG.year}, and the supporters of previous editions.`,
};

export default function Sponsorship() {
  return (
    <>
      <Navbar />
      <main className="pt-28 sm:pt-32">
        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8" aria-labelledby="sponsorships-title">
          <h1 id="sponsorships-title" className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">Supporting RenderCon Kenya {EVENT_CONFIG.year}</h1>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">Thank you to our sponsors, partners, and attendees for making RenderCon possible.</p>
          <Sponsors />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${EVENT_CONFIG.emails.sponsors}`} className="btn-primary">Become a Sponsor</a>
            <Link href="/partners#prospectus" className="btn-secondary">View Sponsorship Prospectus</Link>
          </div>
        </section>
        <Technologies />
      </main>
      <Footer />
    </>
  );
}
