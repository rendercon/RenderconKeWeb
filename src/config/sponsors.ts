import type { StaticImageData } from 'next/image';
import { EVENT_CONFIG } from './event';

import LogoReactFoundation from '../app/components/reactfoundation.png';
import LogoLOOP from '../app/components/LOOP-white.png';
import LogoKilimoPower from '../app/components/kilimopower.png';
import LogoAfricaVibeCoders from '../app/components/africavibecoders.png';
import LogoIshiMoments from '../app/components/ishimoments.png';
import LogoZenlipa from '../app/components/zenlipa.png';
import LogoALX from '../app/components/alx-logo.jpeg';
import LogoOrganisingCommunity from '../app/components/reactjs.svg';
import LogoCloudinary from '../app/images/logos/cloudinary_logo_white.png';
import LogoSupabase from '../app/images/logos/supabase_logo_wordmark.png';
import LogoLemonade from '../app/images/logos/lemonade.png';
import LogoReactDevsKe from '../app/images/logos/ReactdevskeLogo.png';
import LogoDevKenya from '../app/images/logos/devkenya_logo.png';
import LogoPayd from '../app/images/logos/payd.png';
import LogoOscaNairobi from '../app/images/logos/oscarnrb.png';
import LogoSpaceYaTech from '../app/images/logos/SPACEYATECH_LOGO.png';
import LogoMentorlist from '../app/images/logos/mentorlst.png';

export type SponsorCategory = 'main' | 'event' | 'special' | 'organising';
export type SponsorLabel = 'Main Sponsor' | 'Silver Sponsor' | 'Partner' | 'Venue Sponsor' | 'Gift Partner' | 'Tickets Partner' | 'Organising Community';

type HistoricalProfile = {
  description: string;
  tagline?: string;
  socials?: Record<string, string>;
};

export type Sponsor = {
  name: string;
  logo?: StaticImageData;
  logoBackground?: 'light' | 'dark';
  link?: string;
  category?: SponsorCategory;
  label?: SponsorLabel;
  historicalRole?: string;
  history?: HistoricalProfile[];
};

// Existing assets are used as supplied, without filters or recoloring.
export const SPONSORS_BY_YEAR: Record<number, Sponsor[]> = {
  2026: [
    { name: 'React Foundation', category: 'main', label: 'Main Sponsor', logo: LogoReactFoundation, logoBackground: 'light' },
    { name: 'LOOP', category: 'main', label: 'Silver Sponsor', logo: LogoLOOP, logoBackground: 'light', link: 'https://loop.co.ke/' },
    { name: 'Kilimo Power', category: 'event', label: 'Partner', logo: LogoKilimoPower, link: 'https://kilimopower.co.ke' },
    { name: 'Africa Vibe Coders', category: 'event', label: 'Partner', logo: LogoAfricaVibeCoders, link: 'https://africavibecoders.co.ke/' },
    { name: 'ALX, The Piano', category: 'special', label: 'Venue Sponsor', logo: LogoALX, logoBackground: 'light', link: 'https://www.alxafrica.com/' },
    { name: 'Ishi Moments', category: 'special', label: 'Gift Partner', logo: LogoIshiMoments, link: 'https://ishimoments.com' },
    { name: 'Zenlipa', category: 'special', label: 'Tickets Partner', logo: LogoZenlipa, logoBackground: 'light', link: EVENT_CONFIG.links.tickets },
    { name: 'ReactDevsKe', category: 'organising', label: 'Organising Community', logo: LogoOrganisingCommunity, logoBackground: 'light', link: EVENT_CONFIG.links.community },
  ],
  // This is the only explicit historical sponsor/year association in the old config.
  2025: [
    { name: 'Cloudinary', logo: LogoCloudinary, link: 'https://cloudinary.com/' },
  ],
};

// Previous site listings did not specify years for these supporters.
// Preserve their names, links, roles and profiles without assigning invented dates.
export const HISTORICAL_SUPPORTERS: Sponsor[] = [
  { name: "Cloudinary", logo: LogoCloudinary, link: "https://cloudinary.com/", historicalRole: "Sponsor", history: [
    {
      "description": "Cloudinary is a cloud-based media management platform that enables developers and businesses to store, optimize, transform, and deliver images and videos with powerful APIs, AI-powered editing tools, and seamless integrations for scalable, high-performing digital experiences.",
      "socials": {
        "twitter": "https://twitter.com/cloudinary",
        "linkedin": "https://www.linkedin.com/company/cloudinary",
        "facebook": "https://facebook.com/cloudinary",
        "instagram": "https://instagram.com/cloudinary",
        "youtube": "https://www.youtube.com/cloudinary",
        "website": "https://cloudinary.com/"
      }
    },
    {
      "tagline": "Media infrastructure for the modern web.",
      "description": "Cloudinary supported RenderCon developers with workshops on modern media workflows, image optimisation, and web performance — skills that directly impact what East African engineers ship."
    }
  ] },
  { name: "Supabase", logo: LogoSupabase, link: "https://supabase.com/", historicalRole: "Sponsor", history: [
    {
      "tagline": "The open source Firebase alternative.",
      "description": "Supabase empowered builders at RenderCon to ship full-stack applications faster, bringing open source database tools and auth directly to the East African developer community."
    }
  ] },
  { name: "Lemonade", logo: LogoLemonade, link: "https://mylemonade.io/", historicalRole: "Sponsor", history: [
    {
      "tagline": "Built for the modern African market.",
      "description": "Lemonade stepped up as a sponsor for RenderCon, investing in the East African developer ecosystem and aligning their mission of accessible, modern financial tools with the builders shaping Africa's tech future."
    }
  ] },
  { name: "ReactDevsKe", logo: LogoReactDevsKe, link: "https://reactdevske.org", historicalRole: "Organiser", history: [
    {
      "description": "ReactDevsKe is Kenya's leading community for React developers, fostering collaboration and growth through events, learning opportunities, and networking. It supports both beginners and experienced developers, driving innovation and development within the local tech ecosystem.",
      "socials": {
        "twitter": "https://twitter.com/ReactDevsKe",
        "linkedin": "https://www.linkedin.com/company/reactdevske",
        "website": "https://reactdevske.org"
      }
    },
    {
      "tagline": "RenderCon is brought to you by ReactDevsKe.",
      "description": "ReactDevsKe is the community behind RenderCon — East Africa's largest React developer community, growing the ecosystem year-round through meetups, mentorship, newsletters, and East Africa's flagship React conference."
    }
  ] },
  { name: "Dev Kenya", logo: LogoDevKenya, historicalRole: "Sponsor", history: [
    {
      "tagline": "Growing Kenya's developer ecosystem.",
      "description": "Dev Kenya amplified RenderCon's reach by rallying their wide community of Kenyan developers — helping grow awareness, bring more builders into the room, and strengthen the East African React ecosystem."
    }
  ] },
  { name: "Payd", logo: LogoPayd, link: "https://paydexp.com/", historicalRole: "Community Partner" },
  { name: "OSCA Nairobi", logo: LogoOscaNairobi, link: "https://github.com/OSCA-Nairobi", historicalRole: "Community Partner" },
  { name: "Space Ya Tech", logo: LogoSpaceYaTech, link: "https://spaceyatech.com/", historicalRole: "Community Partner" },
  { name: "Mentorlist", logo: LogoMentorlist, logoBackground: 'light', link: "https://mentorlist.io/", historicalRole: "Community Partner" },
];

export const SPONSOR_CATEGORIES: { id: SponsorCategory; title: string }[] = [
  { id: 'main', title: 'Main Sponsors' },
  { id: 'event', title: 'Event Partners' },
  { id: 'special', title: 'Special Partners' },
  { id: 'organising', title: 'Organising Community' },
];

export const getCurrentSponsors = () => ({
  sponsors: SPONSORS_BY_YEAR[EVENT_CONFIG.year] || [],
  currentYear: EVENT_CONFIG.year,
});

export const getPastSponsors = (): Sponsor[] => {
  const currentNames = new Set(getCurrentSponsors().sponsors.map(sponsor => sponsor.name));
  const previousEditions = Object.entries(SPONSORS_BY_YEAR)
    .filter(([year]) => Number(year) < EVENT_CONFIG.year)
    .flatMap(([, sponsors]) => sponsors);
  const past = new Map<string, Sponsor>();
  for (const sponsor of [...previousEditions, ...HISTORICAL_SUPPORTERS]) {
    if (!currentNames.has(sponsor.name)) {
      past.set(sponsor.name, { ...past.get(sponsor.name), ...sponsor });
    }
  }
  return Array.from(past.values());
};
