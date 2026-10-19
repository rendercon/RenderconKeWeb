/**
 * RenderCon Event Configuration
 * 
 * Update this file each year to change event-specific details across the site.
 * This makes it easy to maintain the site year after year.
 */

const SESSIONIZE_BASE_URL = "https://sessionize.com/api/v2/c1nslc55/view";

export const EVENT_CONFIG = {
  // Current event year
  year: 2026,
  
  // Event dates
  dates: {
    startDate: "2026-10-17",
    endDate: "2026-10-17",
    displayDate: "17th October 2026",
  },
  
  // Venue information
  venue: {
    name: "ALX The Piano",
    location: "Westlands, Nairobi",
    fullAddress: "ALX The Piano — Westlands, Nairobi",
  },
  
  // External links
  links: {
    tickets: "https://zenlipa.co.ke/events/k6NMNf",
    gallery2023: "https://bit.ly/rcke23pics",
    gallery2024: "https://bit.ly/rcke24pics",
    gallery2025: "https://bit.ly/rcke25pics",
    schedule2024: "/schedule_24",
    schedule2026: "/schedule",
  },
  
  // API endpoints
  api: {
    sessionize: {
      // The agenda embed has its own published view; speaker JSON uses the
      // existing API export above.
      agendaEmbed: "https://sessionize.com/api/v2/b7swgk5n/view/GridSmart",
      all: `${SESSIONIZE_BASE_URL}/All`,
      gridSmart: `${SESSIONIZE_BASE_URL}/GridSmart`,
      sessions: `${SESSIONIZE_BASE_URL}/Sessions`,
      speakers: `${SESSIONIZE_BASE_URL}/Speakers`,
      speakerWall: `${SESSIONIZE_BASE_URL}/SpeakerWall`,
    },
  },

  programme: {
    timeZone: "Africa/Nairobi",
    // Confirmed by the project owner: offset-free exports are Nairobi wall
    // time, never UTC or the visitor/server timezone.
    offsetForLocalTimestamps: "+03:00",
    revalidateSeconds: 300,
    timeoutMilliseconds: 10000,
  },
  
  // Email addresses
  emails: {
    sponsors: "sponsors@rendercon.org",
    partnerships: "partnerships@rendercon.org",
  },
  
  // Social media
  social: {
    twitter: "https://twitter.com/renderconke",
    github: "https://github.com/reactdevske",
    // Add more as needed
  },
  
  // Page metadata
  metadata: {
    title: "RenderconKe 2026 — The premier conference experience for Web and Mobile",
    description: "RenderconKe 2026 is a conference for Web and Mobile developers. We bring together a diverse group of people from all across the world to share their knowledge and experience.",
  },
};

// Helper function to get current year galleries
export const getGalleryLinks = () => {
  const galleries = [];
  const currentYear = EVENT_CONFIG.year;
  
  // Show galleries from 2023 to current year
  for (let year = 2023; year <= currentYear; year++) {
    galleries.push({
      year,
      label: `View Gallery(${year})`,
      url: EVENT_CONFIG.links[`gallery${year}` as keyof typeof EVENT_CONFIG.links] || "#",
    });
  }
  
  return galleries;
};

// Helper function to get schedule link (current year or fallback to previous)
export const getScheduleLink = () => {
  const currentYear = EVENT_CONFIG.year;
  const currentYearSchedule = EVENT_CONFIG.links[`schedule${currentYear}` as keyof typeof EVENT_CONFIG.links];
  
  // If current year schedule exists, use it
  if (currentYearSchedule) {
    return currentYearSchedule as string;
  }
  
  // Otherwise, fallback to previous year
  const previousYear = currentYear - 1;
  const previousYearSchedule = EVENT_CONFIG.links[`schedule${previousYear}` as keyof typeof EVENT_CONFIG.links];
  return previousYearSchedule as string || "/schedule";
};

// Sponsors configuration by year
export const SPONSORS_BY_YEAR: Record<number, Array<{name: string; logo: string; link: string; height: number; width: number}>> = {
  2026: [
    // Add 2025 sponsors here when available
  ],
  2025: [
    {
      name: "Cloudinary",
      logo: "/images/logos/cloudinary_logo_white.png",
      link: "https://cloudinary.com/",
      height: 200,
      width: 500,
    }
  ],
};

// Helper to get current or show hall of fame
export const getCurrentSponsors = () => {
  const currentYear = EVENT_CONFIG.year;
  const sponsors = SPONSORS_BY_YEAR[currentYear];
  
  return {
    sponsors: sponsors || [],
    showHallOfFame: !sponsors || sponsors.length === 0,
    currentYear,
  };
};
