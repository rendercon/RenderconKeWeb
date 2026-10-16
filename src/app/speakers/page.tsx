import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Speakers } from '../components/Speakers';
import { EVENT_CONFIG } from '@/config/event';

export const metadata: Metadata = {
  title: 'Speakers — RenderCon Kenya 2026',
  description: 'Meet the RenderCon Kenya 2026 speakers. Explore their biographies, roles, and sessions, then plan your day with the published programme.',
};

export default function SpeakersPage() {
  return <>
    <Navbar />
    <main className="pt-24 sm:pt-28">
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8" aria-labelledby="speakers-page-title">
        <div className="max-w-3xl">
          <span className="section-label">RenderCon Kenya 2026 · Speakers</span>
          <h1 id="speakers-page-title" className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            The people behind<br /><span className="gradient-text">the programme.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Meet the speakers taking the stage in Nairobi on {EVENT_CONFIG.dates.displayDate}.
            Explore their stories, experience, and sessions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="btn-secondary">Explore speakers below ⬇️</div>
            <Link href={EVENT_CONFIG.links.schedule2026} className="btn-primary">View programme</Link>
          </div>
        </div>
      </section>

      <Speakers />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8" aria-labelledby="programme-link-title">
        <div className="flex flex-col gap-5 border-t border-brand-dark-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="programme-link-title" className="text-2xl font-semibold text-white">Plan your day at RenderCon.</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">Find session times and rooms in the full 2026 programme.</p>
          </div>
          <Link href={EVENT_CONFIG.links.schedule2026} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:underline">
            Explore the schedule <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
