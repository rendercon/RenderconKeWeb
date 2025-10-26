# RenderCon Website - Yearly Update Guide

This guide explains how to update the RenderCon website for a new year.

## Quick Start: Update for a New Year

All year-specific configuration is centralized in one file: **`src/config/event.ts`**

### Step 1: Update Event Year and Details

Open `src/config/event.ts` and update:

```typescript
export const EVENT_CONFIG = {
  year: 2026,  // ← Change this to the new year
  
  dates: {
    startDate: "2026-10-XX",  // ← Update date
    endDate: "2026-10-XX",
    displayDate: "Xth October 2026",  // ← Update display text
  },
  
  venue: {
    name: "Venue Name",
    location: "Location",
    fullAddress: "Full venue address",
  },
  
  links: {
    tickets: "https://your-ticket-link",
    cfp: "https://your-cfp-link",
    gallery2026: "https://your-gallery-link",  // ← Add new year
    schedule2026: "/schedule",  // ← Add new year schedule
  },
  
  // ... rest of config
};
```

### Step 2: Add Sponsors for New Year

In the same file, add sponsors for the new year:

```typescript
export const SPONSORS_BY_YEAR: Record<number, Array<{...}>> = {
  2026: [  // ← Add new year
    {
      name: "Sponsor Name",
      logo: "/images/logos/sponsor_logo.png",
      link: "https://sponsor-website.com",
      height: 200,
      width: 500,
    }
  ],
  2025: [
    // Previous year sponsors
  ],
};
```

### Step 3: Update Sessionize API (if needed)

If you have a new Sessionize API endpoint:

```typescript
api: {
  sessionize: "https://sessionize.com/api/v2/YOUR_NEW_ID/view/All",
},
```

### Step 4: Update Page Metadata

```typescript
metadata: {
  title: "RenderconKe 2026 — The premier conference experience",
  description: "RenderconKe 2026 is a conference for...",
},
```

## How It Works

### Navigation Behavior

1. **Logo** → Always navigates to home page (`/`)
2. **About** → Separate page (`/about`)
3. **Schedule** → Automatically shows current year, or falls back to previous year if not available
4. **Speakers, Community, Sponsors** → Smooth scroll to sections on home page

### Sponsors Display

- **Has current year sponsors?** → Shows "Our 2026 Sponsors"
- **No current year sponsors?** → Shows "Sponsors & Partners Hall of Fame" (highlighted in yellow)

### Schedule Links

The system automatically determines which schedule to show:
- If current year schedule exists → use it
- Otherwise → fallback to previous year

### Gallery Links

Gallery buttons are automatically generated from 2023 to current year.

## What Updates Automatically

When you change the `year` in `EVENT_CONFIG`:

✅ Hero section year (e.g., "RenderCon KE 2026")  
✅ Event dates and venue  
✅ Page title and meta description  
✅ Schedule link (current or fallback to previous)  
✅ Sponsors section (shows current or hall of fame)  
✅ Gallery buttons (includes all years up to current)  
✅ Ticket and CFP links  

## Adding New Components

If you need to add new sections to the home page:

1. Create the component in `src/app/components/`
2. Add an `id` attribute to the section element
3. Add it to `src/app/page.tsx`
4. Optionally add navigation link in `src/app/components/Navbar.tsx`

## File Structure

```
src/
├── config/
│   └── event.ts          ← UPDATE THIS FOR NEW YEAR
├── app/
│   ├── components/
│   │   ├── Hero.tsx      (uses EVENT_CONFIG)
│   │   ├── Sponsors.tsx  (uses getCurrentSponsors)
│   │   ├── Community.tsx (uses getGalleryLinks)
│   │   └── Navbar.tsx    (uses getScheduleLink)
│   └── page.tsx          (main homepage)
```

## Testing Your Changes

After updating `event.ts`:

```bash
yarn dev
```

Check:
- [ ] Hero shows correct year and dates
- [ ] Sponsors section shows correct message
- [ ] Schedule link goes to right page
- [ ] Gallery buttons include new year
- [ ] All smooth scroll links work

## Questions?

If something doesn't work as expected, check:
1. Is `EVENT_CONFIG.year` updated?
2. Did you add the new year to `SPONSORS_BY_YEAR`?
3. Did you add schedule link to `EVENT_CONFIG.links`?
4. Did you run `yarn install` and restart dev server?

