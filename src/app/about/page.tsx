import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUs, { OurVision, AboutCTA } from '../components/About';
import Organisers from '../components/Organisers';
import CommunityStats from '../components/CommunityStats';
import WhyEastAfrica from '../components/WhyEastAfrica';

export const metadata: Metadata = {
  title: 'About — RenderCon Kenya',
  description:
    "Learn about RenderCon Kenya and the ReactDevsKe community behind East Africa's premier React conference.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* Section 1 — Hero + Why We Exist bento */}
        <AboutUs />
        {/* Section 3 — Community stats (ReactDevsKe) */}
        <CommunityStats />
        {/* Section 4 — Why East Africa */}
        <WhyEastAfrica />
        {/* Section 5 — Organizing team */}
        <Organisers />
        {/* Section 6 — Vision */}
        <OurVision />
        {/* Section 7 — CTA */}
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
