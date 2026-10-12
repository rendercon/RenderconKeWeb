import type { Metadata } from 'next';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProgrammeSchedule from '../components/ProgrammeSchedule';

export const metadata: Metadata = {
  title: 'Schedule — RenderCon Kenya 2026',
  description: 'Explore the RenderCon Kenya 2026 sessions, speakers, times, and rooms. All schedule times are displayed in Africa/Nairobi.',
};

export default function SchedulePage() {
  return <>
    <Navbar />
    <main className="min-h-screen pt-24 pb-10 px-4 sm:px-6 sm:pt-28 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 max-w-3xl">
          <span className="section-label">2026 Programme</span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">RenderCon 2026 Schedule</h1>
          <p className="mt-5 text-base leading-relaxed text-slate-400">Explore the sessions, choose a room, and plan your day.</p>
        </div>
        <ProgrammeSchedule />
      </div>
    </main>
    <Footer />
  </>;
}
