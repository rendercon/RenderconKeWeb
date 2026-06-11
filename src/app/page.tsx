import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyRenderCon from './components/WhyRenderCon';
import CommunityStats from './components/CommunityStats';
import WhyEastAfrica from './components/WhyEastAfrica';
import ConferenceTracks from './components/ConferenceTracks';
import { Speakers } from './components/Speakers';
import Highlights from './components/Highlights';
import Partners from './components/Partners';
import TicketsCTA from './components/TicketsCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "RenderCon Kenya 2026 — East Africa's React Conference",
  description:
    "React. Connect. Build. RenderCon Kenya is East Africa's community-first React conference by ReactDevsKe. Join 200+ developers in Nairobi.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyRenderCon />
        <CommunityStats />
        <WhyEastAfrica />
        <ConferenceTracks />
        <Speakers />
        <Highlights />
        <Partners />
        <TicketsCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
