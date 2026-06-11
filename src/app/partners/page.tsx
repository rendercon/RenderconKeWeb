'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Logos
import LogoCloudinary  from '../images/logos/cloudinary_logo_white.png';
import LogoSupabase    from '../images/logos/supabase_logo_wordmark.png';
import LogoLemonade    from '../images/logos/lemonade.png';
import LogoPayd        from '../images/logos/payd.png';
import LogoDevKenya    from '../images/logos/devkenya_logo.png';
import LogoReactDevsKe from '../images/logos/ReactdevskeLogo.png';
import LogoMentorlist  from '../images/logos/mentorlst.png';
import LogoOscaNairobi from '../images/logos/oscarnrb.png';
import LogoSpaceYaTech from '../images/logos/SPACEYATECH_LOGO.png';

// Event photos
import Photo1 from '../images/assets/conf_web_asset_1.webp';
import Photo2 from '../images/assets/conf_web_asset_2.webp';
import Photo3 from '../images/assets/conf_web_asset_3.webp';
import Photo4 from '../images/assets/conf_web_asset_4.webp';

/* ──────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────── */

const impactStats = [
  { value: '200+',   label: 'RenderCon 2025 Attendees',       desc: 'In-person developers who attended in Nairobi',           color: 'purple' },
  { value: '7,000+', label: 'ReactDevsKe Community Members',  desc: 'Active developers across the East African ecosystem',    color: 'gold'   },
  { value: '1,800+', label: 'Newsletter Subscribers',         desc: 'Developers receiving weekly React ecosystem updates',    color: 'purple' },
  { value: '20+',    label: 'Technical Sessions (2025)',       desc: 'Talks, workshops, and lightning sessions per edition',   color: 'gold'   },
  { value: '5+',     label: 'Countries Represented',          desc: 'Kenya, Uganda, Tanzania, Rwanda, Ethiopia, and beyond',  color: 'purple' },
  { value: '3rd',    label: 'Conference Edition in 2026',      desc: 'Growing year on year since the inaugural 2023 edition',  color: 'gold'   },
];

const partners = [
  { name: 'Cloudinary',          logo: LogoCloudinary,  link: 'https://cloudinary.com/',             tier: 'Sponsor'   },
  { name: 'Supabase',            logo: LogoSupabase,    link: 'https://supabase.com/',               tier: 'Sponsor'   },
  { name: 'Lemonade',            logo: LogoLemonade,    link: 'https://mylemonade.io/',              tier: 'Sponsor'   },
  { name: 'ReactDevsKe',         logo: LogoReactDevsKe, link: 'https://reactdevske.org',             tier: 'Organiser' },
  { name: 'Dev Kenya',           logo: LogoDevKenya,    link: 'https://smeresponse.clinic/2023/10/24/nurturing-mental-wellness-insights-from-entrepreneur-constanza/',                tier: 'Sponsor'   },
  { name: 'Payd',                logo: LogoPayd,        link: 'https://paydexp.com/',                tier: 'Community' },
  { name: 'OSCA Nairobi',        logo: LogoOscaNairobi, link: 'https://github.com/OSCA-Nairobi',     tier: 'Community' },
  { name: 'Space Ya Tech',       logo: LogoSpaceYaTech, link: 'https://spaceyatech.com/',            tier: 'Community' },
  { name: 'Mentorlist',          logo: LogoMentorlist,  link: 'https://mentorlist.io/',              tier: 'Community' },
];

const spotlights = [
  {
    name: 'Cloudinary',
    role: 'Sponsor',
    tagline: 'Media infrastructure for the modern web.',
    description:
      'Cloudinary supported RenderCon developers with workshops on modern media workflows, image optimisation, and web performance — skills that directly impact what East African engineers ship.',
    link: 'https://cloudinary.com/',
    color: 'purple',
  },
  {
    name: 'Supabase',
    role: 'Sponsor',
    tagline: 'The open source Firebase alternative.',
    description:
      'Supabase empowered builders at RenderCon to ship full-stack applications faster, bringing open source database tools and auth directly to the East African developer community.',
    link: 'https://supabase.com/',
    color: 'gold',
  },
  {
    name: 'Lemonade',
    role: 'Sponsor',
    tagline: 'Built for the modern African market.',
    description:
      'Lemonade stepped up as a sponsor for RenderCon, investing in the East African developer ecosystem and aligning their mission of accessible, modern financial tools with the builders shaping Africa\'s tech future.',
    link: 'https://mylemonade.io/',
    color: 'purple',
  },
  {
    name: 'Dev Kenya',
    role: 'Sponsor',
    tagline: 'Growing Kenya\'s developer ecosystem.',
    description:
      'Dev Kenya amplified RenderCon\'s reach by rallying their wide community of Kenyan developers — helping grow awareness, bring more builders into the room, and strengthen the East African React ecosystem.',
    link: 'https://smeresponse.clinic/2023/10/24/nurturing-mental-wellness-insights-from-entrepreneur-constanza/',
    color: 'gold',
  },
  {
    name: 'ReactDevsKe',
    role: 'Organiser',
    tagline: 'RenderCon is brought to you by ReactDevsKe.',
    description:
      'ReactDevsKe is the community behind RenderCon — East Africa\'s largest React developer community, growing the ecosystem year-round through meetups, mentorship, newsletters, and East Africa\'s flagship React conference.',
    link: 'https://reactdevske.org',
    color: 'purple',
  },
];

const whyCards = [
  {
    title: 'Targeted Developer Reach',
    body: 'Reach highly engaged React and React Native developers — engineers actively building and shipping, not just browsing a job board.',
    color: 'purple',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Community Trust',
    body: 'Partner with one of East Africa\'s most active React communities. ReactDevsKe carries genuine developer trust — your brand inherits that credibility.',
    color: 'gold',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Regional Visibility',
    body: 'Access developers from Kenya, Uganda, Tanzania, Rwanda, Ethiopia, and beyond — a fast-growing market building on React and React Native.',
    color: 'purple',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Ecosystem Impact',
    body: 'Support developer education, networking, mentorship, and career growth throughout one of the world\'s fastest-growing tech regions.',
    color: 'gold',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const ecosystemItems = [
  { title: 'Community Events',    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>, color: 'purple' },
  { title: 'RenderCon Conference', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" /></svg>, color: 'gold' },
  { title: 'Workshops',           icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>, color: 'purple' },
  { title: 'Mentorship',          icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>, color: 'gold' },
 
  { title: 'Open Source',         icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>, color: 'gold' },
  { title: 'Ecosystem Growth',    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>, color: 'purple' },
  { title: 'Newsletter & Content', icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>, color: 'gold' },
];

// Perks table
type Check = true | false | string;
const tablePerks: { label: string; ecosystem: Check; platinum: Check; gold: Check; silver: Check; community: Check }[] = [
  { label: 'Exclusive Naming Rights',    ecosystem: true,      platinum: false,     gold: false,      silver: false,    community: false   },
  { label: 'Main Stage Keynote Slot',    ecosystem: true,      platinum: true,      gold: false,      silver: false,    community: false   },
  { label: 'Branded Workshop / Session', ecosystem: true,      platinum: true,      gold: true,       silver: false,    community: false   },
  { label: 'Exhibition Booth',           ecosystem: 'Premium', platinum: 'Large',   gold: 'Standard', silver: false,    community: false   },
  { label: 'Logo on All Materials',      ecosystem: 'Hero',    platinum: 'Large',   gold: 'Medium',   silver: 'Small',  community: 'Listed'},
  { label: 'Attendee Data Access',       ecosystem: true,      platinum: true,      gold: true,       silver: false,    community: false   },
  { label: 'Social Media Campaign',      ecosystem: true,      platinum: true,      gold: true,       silver: true,     community: true    },
  { label: 'Speaker Dinner Access',      ecosystem: true,      platinum: true,      gold: false,      silver: false,    community: false   },
  { label: 'After Party Branding',       ecosystem: true,      platinum: true,      gold: true,       silver: false,    community: false   },
  { label: 'Dedicated Blog Post',        ecosystem: true,      platinum: true,      gold: false,      silver: false,    community: false   },
  { label: 'Complimentary Tickets',      ecosystem: '10',      platinum: '6',       gold: '3',        silver: '1',      community: '1'     },
];

const tiers = [
  { key: 'ecosystem', label: 'Ecosystem Partner', price: '$20K', color: 'purple', badge: 'Premier'  },
  { key: 'platinum',  label: 'Platinum Partner',  price: '$10K', color: 'slate',  badge: null       },
  { key: 'gold',      label: 'Gold Partner',       price: '$5K',  color: 'gold',   badge: null       },
  { key: 'silver',    label: 'Silver Partner',     price: '$2.5K',color: 'slate',  badge: null       },
  { key: 'community', label: 'Community Partner',  price: 'Custom',color: 'slate', badge: null       },
] as const;

/* ──────────────────────────────────────────────────────────
   Sub-components
   ────────────────────────────────────────────────────────── */

function Check({ ok }: { ok: Check }) {
  if (ok === false) return <span className="text-brand-dark-border text-lg">—</span>;
  if (ok === true)  return (
    <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-purple-500/20">
      <svg className="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
  return <span className="text-xs font-semibold text-white">{ok}</span>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="section-label mb-4 inline-flex">{children}</span>;
}

/* ──────────────────────────────────────────────────────────
   Page
   ────────────────────────────────────────────────────────── */

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">

        {/* ── SECTION 1 — Hero ──────────────────────────────── */}
        <section className="relative py-24 sm:py-36 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div style={{ background: 'radial-gradient(ellipse 100% 80% at 50% -10%, rgba(109,58,168,0.28) 0%, transparent 65%)' }} className="absolute inset-0" />
            <div style={{ background: 'linear-gradient(to top, #0F0B1E, transparent)' }} className="absolute bottom-0 left-0 right-0 h-48" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            {[...Array(6)].map((_, i) => (
              <div key={i} className="absolute rounded-full opacity-20" style={{ width: [4,6,3,5,4,3][i], height: [4,6,3,5,4,3][i], background: i%2===0?'#8B5CF6':'#F4B942', top:`${[12,35,65,20,78,50][i]}%`, left:`${[8,80,22,65,12,88][i]}%`, animation:`float ${[5,7,6,8,5.5,6.5][i]}s ease-in-out infinite`, animationDelay:`${[0,1,2,0.5,1.5,2.5][i]}s` }} />
            ))}
          </div>

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionLabel>Partnerships — RenderCon 2026</SectionLabel>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mt-6">
              <span className="text-white">Partner With</span>
              <br />
              <span className="gradient-text">RenderCon</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-7 text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Join the organisations helping shape the future of React, React Native, and modern web engineering across East Africa.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-3 text-base text-slate-500 max-w-xl mx-auto">
              RenderCon is more than a conference. It is the flagship gathering of East Africa&apos;s React ecosystem.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:sponsors@rendercon.org" className="btn-primary px-8 py-4 text-base">
                Become A Partner
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              <a href="#prospectus" className="btn-secondary px-8 py-4 text-base">
                View Sponsorship Prospectus
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 2 — Impact Delivered ─────────────────── */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(109,58,168,0.07) 0%, transparent 70%)' }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mb-16">
              <SectionLabel>Impact Delivered</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 leading-tight">
                Building More Than<br />
                <span className="gradient-text">An Event</span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                Every partnership directly supports developer education, community growth, networking opportunities, and ecosystem development throughout East Africa.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {impactStats.map((stat, i) => {
                const isPurple = stat.color === 'purple';
                return (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22,1,0.36,1] }} className="bento-card group relative">
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: isPurple ? 'radial-gradient(ellipse at 20% 20%, rgba(109,58,168,0.2) 0%, transparent 60%)' : 'radial-gradient(ellipse at 20% 20%, rgba(244,185,66,0.12) 0%, transparent 60%)' }} />
                    <div className="relative z-10">
                      <div className={`text-4xl sm:text-5xl font-bold tabular-nums mb-2 ${isPurple ? 'gradient-text-purple' : 'text-brand-gold'}`}>{stat.value}</div>
                      <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                      <div className="text-xs text-slate-500 leading-relaxed">{stat.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — Trusted By ───────────────────────── */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(109,58,168,0.07) 0%, transparent 70%)' }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
              <SectionLabel>Past Partners</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
                Trusted By Organisations<br />
                <span className="gradient-text">Investing In Developers</span>
              </h2>
              <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto">
                These organisations have partnered with RenderCon and the ReactDevsKe community to support East African developers.
              </p>
            </motion.div>

            {/* Organiser */}
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold mb-4">Organiser</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {partners.filter(p => p.tier === 'Organiser').map((p, i) => (
                  <motion.a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="partner-logo-card relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-brand-gold/30 bg-brand-dark-card/60 h-[110px] overflow-hidden"
                  >
                    {p.logo && (
                      <div className="relative w-full flex-1 px-4 pt-3">
                        <Image src={p.logo} alt={p.name} fill className="object-contain brightness-200 filter" unoptimized />
                      </div>
                    )}
                    <span className="text-xs text-slate-500 font-medium pb-2">{p.name}</span>
                    <span className="absolute top-2 right-2 text-[9px] font-semibold uppercase tracking-wider text-brand-gold border border-brand-gold/30 rounded-full px-1.5 py-0.5">Organiser</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Sponsors */}
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4">Sponsors</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {partners.filter(p => p.tier === 'Sponsor').map((p, i) => (
                  <motion.a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="partner-logo-card relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-brand-dark-border bg-brand-dark-card/60 h-[110px] overflow-hidden"
                  >
                    {p.logo && (
                      <div className="relative w-full flex-1 px-4 pt-3">
                        <Image src={p.logo} alt={p.name} fill className="object-contain brightness-200 filter" unoptimized />
                      </div>
                    )}
                    <span className="text-xs text-slate-500 font-medium pb-2">{p.name}</span>
                    <span className="absolute top-2 right-2 text-[9px] font-semibold uppercase tracking-wider text-purple-400 border border-purple-500/30 rounded-full px-1.5 py-0.5">Sponsor</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Community Partners */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Community Partners</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {partners.filter(p => p.tier === 'Community').map((p, i) => (
                  <motion.a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="partner-logo-card relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-brand-dark-border bg-brand-dark-card/60 h-[110px] overflow-hidden"
                  >
                    {p.logo
                      ? (
                        <div className="relative w-full flex-1 px-4 pt-3">
                          <Image src={p.logo} alt={p.name} fill className="object-contain brightness-200 filter" unoptimized />
                        </div>
                      )
                      : <span className="flex-1 flex items-center text-sm font-bold text-slate-300 text-center leading-tight px-4">{p.name}</span>
                    }
                    {p.logo && <span className="text-xs text-slate-500 font-medium pb-2">{p.name}</span>}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — Partner Spotlights ───────────────── */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 70% 50%, rgba(109,58,168,0.06) 0%, transparent 70%)' }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mb-14">
              <SectionLabel>Partner Spotlights</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
                Partners Who{' '}
                <span className="gradient-text">Showed Up</span>
              </h2>
              <p className="mt-5 text-lg text-slate-400 leading-relaxed">
                These organisations didn&apos;t just put a logo on a page — they showed up for the East African developer community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {spotlights.map((s, i) => {
                const isPurple = s.color === 'purple';
                const isOrganiser = s.role === 'Organiser';
                const badgeClass = isOrganiser
                  ? 'bg-brand-gold/10 text-brand-gold border border-brand-gold/30'
                  : s.role === 'Sponsor'
                  ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                  : 'bg-slate-500/10 text-slate-400 border border-slate-500/20';
                return (
                  <motion.div key={s.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className={`bento-card group relative flex flex-col ${isOrganiser ? 'md:col-span-2 lg:col-span-3' : ''} gradient-border`}>
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: isPurple ? 'radial-gradient(ellipse at 20% 20%, rgba(109,58,168,0.18) 0%, transparent 60%)' : 'radial-gradient(ellipse at 20% 20%, rgba(244,185,66,0.1) 0%, transparent 60%)' }} />
                    <div className="relative z-10 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className={`text-lg font-bold ${isPurple ? 'gradient-text-purple' : 'text-brand-gold'}`}>{s.name}</h3>
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider flex-shrink-0 ${badgeClass}`}>{s.role}</span>
                      </div>
                      <p className="text-xs text-slate-500 mb-4 font-medium">{s.tagline}</p>
                      <p className="text-sm text-slate-400 leading-relaxed flex-1">{s.description}</p>
                      <a href={s.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-5 text-xs text-purple-400 hover:text-purple-300 transition-colors font-medium">
                        Visit {s.name}
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SECTION 5 — Why Companies Partner ────────────── */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 40% 50%, rgba(109,58,168,0.07) 0%, transparent 70%)' }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-14">
              <SectionLabel>Why Partner</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
                Why Companies Partner<br />
                <span className="gradient-text">With RenderCon</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {whyCards.map((card, i) => {
                const isPurple = card.color === 'purple';
                return (
                  <motion.div key={card.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22,1,0.36,1] }} className="bento-card group relative">
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: isPurple ? 'radial-gradient(ellipse at 20% 20%, rgba(109,58,168,0.2) 0%, transparent 60%)' : 'radial-gradient(ellipse at 20% 20%, rgba(244,185,66,0.12) 0%, transparent 60%)' }} />
                    <div className="relative z-10">
                      <div className={`inline-flex w-10 h-10 rounded-xl items-center justify-center mb-4 ${isPurple ? 'bg-purple-500/10 text-purple-400' : 'bg-yellow-500/10 text-brand-gold'}`}>{card.icon}</div>
                      <h3 className="text-sm font-semibold text-white mb-2">{card.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{card.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SECTION 6 — Building the Ecosystem ───────────── */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(109,58,168,0.06) 0%, transparent 70%)' }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <SectionLabel>More Than Sponsorship</SectionLabel>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 leading-tight">
                  Building The East African<br />
                  <span className="gradient-text">React Ecosystem</span>
                </h2>
                <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                  Partnerships help us create opportunities for developers through programmes that run year-round — not just on conference day.
                </p>
                <p className="mt-4 text-base text-slate-500 leading-relaxed">
                  When you partner with RenderCon, you&apos;re investing in the full ecosystem: the community that meets monthly, the newsletter that lands every week, the mentors who show up, and the developers who keep building.
                </p>
                <div className="mt-8">
                  <a href="mailto:sponsors@rendercon.org" className="btn-primary px-7 py-3.5">
                    Start a Conversation
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </a>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
                {ecosystemItems.map((item, i) => {
                  const isPurple = item.color === 'purple';
                  return (
                    <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} className="bento-card group p-4 flex flex-col items-start gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isPurple ? 'bg-purple-500/10 text-purple-400' : 'bg-yellow-500/10 text-brand-gold'}`}>{item.icon}</div>
                      <span className="text-xs font-semibold text-slate-300 leading-snug">{item.title}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 7 — Sponsorship Tiers ────────────────── */}
        <section id="prospectus" className="py-20 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(109,58,168,0.08) 0%, transparent 60%)' }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
              <SectionLabel>Sponsorship Opportunities</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
                Choose Your Level of<br />
                <span className="gradient-text">Partnership</span>
              </h2>
              <p className="mt-5 text-lg text-slate-400">
                Choose the tier that aligns with your goals. Every partnership delivers meaningful brand exposure and genuine community impact across East Africa&apos;s React ecosystem.
              </p>
            </motion.div>

            {/* Tier cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16 pt-5">
              {tiers.map((tier, i) => {
                const isPurple = tier.color === 'purple';
                const isGold   = tier.color === 'gold';
                return (
                  <motion.div key={tier.key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className={`bento-card relative flex flex-col ${isPurple ? 'gradient-border !overflow-visible pt-8' : ''}`}>
                    {tier.badge && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                        <span className="inline-flex rounded-full bg-purple-600 px-3 py-0.5 text-xs font-bold text-white shadow-glow-purple">{tier.badge}</span>
                      </div>
                    )}
                    <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${isPurple ? 'text-purple-400' : isGold ? 'text-brand-gold' : 'text-slate-400'}`}>{tier.label}</div>
                    <div className="text-2xl font-bold text-white mb-5">{tier.price}</div>
                    <ul className="space-y-2 mt-auto">
                      {tablePerks.filter(p => {
                        const val = p[tier.key as keyof typeof p];
                        return val !== false;
                      }).slice(0, 5).map(p => (
                        <li key={p.label} className="flex items-start gap-2 text-xs text-slate-400">
                          <svg className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${isPurple ? 'text-purple-400' : isGold ? 'text-brand-gold' : 'text-slate-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          {p.label}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-brand-dark-border">
                      <a href="mailto:sponsors@rendercon.org" className={`w-full text-center text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 block ${isPurple ? 'btn-primary' : 'btn-secondary'}`}>
                        {tier.key === 'ecosystem' ? 'Inquire Now' : 'Get In Touch'}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Sponsorship deck CTA */}
            <div className="flex justify-center mb-12">
              <a
                href="https://drive.google.com/file/d/1_SxovPhaFgQ7vZZQquzMJfXMp937tuN2/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-brand-dark-border bg-brand-dark-card/60 px-6 py-3 text-sm font-medium text-slate-300 hover:text-white hover:border-purple-500/50 transition-all duration-200"
              >
                <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Full Sponsorship Deck
                <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Perks comparison table */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bento-card overflow-hidden p-0">
              <div className="px-6 py-5 border-b border-brand-dark-border">
                <h3 className="text-base font-semibold text-white">Full Benefits Comparison</h3>
                <p className="text-sm text-slate-500 mt-1">See exactly what&apos;s included in each partnership tier.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px]">
                  <thead>
                    <tr className="border-b border-brand-dark-border">
                      <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-widest w-40">Benefit</th>
                      {tiers.map(t => (
                        <th key={t.key} className={`text-center px-4 py-4 text-xs font-bold uppercase tracking-wider ${t.color === 'purple' ? 'text-purple-400' : t.color === 'gold' ? 'text-brand-gold' : 'text-slate-400'}`}>
                          {t.label.replace(' Partner', '').replace(' Sponsor', '')}<br />
                          <span className="text-white font-semibold normal-case tracking-normal">{t.price}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-dark-border">
                    {tablePerks.map((perk, i) => (
                      <tr key={perk.label} className={`transition-colors ${i % 2 === 0 ? '' : 'bg-white/[0.015]'} hover:bg-white/[0.03]`}>
                        <td className="px-6 py-3.5 text-sm text-slate-300 font-medium">{perk.label}</td>
                        {tiers.map(t => (
                          <td key={t.key} className="px-4 py-3.5 text-center">
                            <Check ok={perk[t.key as keyof typeof perk] as Check} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-brand-dark-border bg-white/[0.015] text-xs text-slate-600 text-center">
                Custom packages available. Contact <a href="mailto:sponsors@rendercon.org" className="text-purple-400 hover:text-purple-300 transition-colors">sponsors@rendercon.org</a> to discuss bespoke options.
              </div>
            </motion.div>
          </div>
        </section>



        {/* ── SECTION 8 — Event Highlights ─────────────────── */}
        <section className="py-10 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(109,58,168,0.05) 0%, transparent 70%)' }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
              <SectionLabel>RenderCon in Action</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
                Where Real Developers<br />
                <span className="gradient-text">Show Up</span>
              </h2>
              <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto">
                A glimpse into what happens when East Africa&apos;s React community gathers in one place.
              </p>
            </motion.div>

            {/* Masonry-style photo grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0 }} className="lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden border border-brand-dark-border relative group">
                <Image src={Photo1} alt="RenderCon 2025 — Main Stage" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-sm font-semibold text-white">Main Stage Keynote</span>
                  <p className="text-xs text-slate-400 mt-0.5">RenderCon Kenya 2025</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }} className="rounded-2xl overflow-hidden border border-brand-dark-border relative group">
                <Image src={Photo2} alt="RenderCon 2025 — Community" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs font-semibold text-white">Community Networking</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }} className="rounded-2xl overflow-hidden border border-brand-dark-border relative group">
                <Image src={Photo3} alt="RenderCon 2025 — Workshop" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs font-semibold text-white">Workshops & Sessions</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.16 }} className="lg:col-span-2 rounded-2xl overflow-hidden border border-brand-dark-border relative group">
                <Image src={Photo4} alt="RenderCon 2025 — Audience" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs font-semibold text-white">200+ Developers in the Room</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SECTION 9 — Final CTA ────────────────────────── */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(109,58,168,0.15) 0%, transparent 60%)' }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24" style={{ background: 'linear-gradient(to bottom, transparent, rgba(109,58,168,0.4), transparent)' }} />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <SectionLabel>Let&apos;s Talk</SectionLabel>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mt-6">
                Let&apos;s Build The<br />
                <span className="gradient-text">Future Together</span>
              </h2>
              <p className="mt-7 text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
                Join the organisations investing in East Africa&apos;s next generation of builders.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:sponsors@rendercon.org" className="btn-primary text-base px-8 py-4">
                  Become A Partner
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
                <a href="#prospectus" className="btn-secondary text-base px-8 py-4">
                  View Prospectus
                </a>
                <a href="mailto:sponsors@rendercon.org" className="btn-secondary text-base px-8 py-4">
                  Contact Sponsors Team
                </a>
              </div>

              <p className="mt-8 text-sm text-slate-600">
                Email us directly at{' '}
                <a href="mailto:sponsors@rendercon.org" className="text-purple-400 hover:text-purple-300 transition-colors">sponsors@rendercon.org</a>
                {' '}— we respond within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
