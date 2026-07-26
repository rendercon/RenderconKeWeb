# RenderCon Kenya Website

The public website for RenderCon Kenya, the ReactDevsKe community conference for React, React Native, and modern web developers in East Africa. The site is built with the Next.js App Router and presents the 2026 conference experience while retaining selected 2025 speakers, schedule data, and sponsor history.

## Contents

- [Technology](#technology)
- [Getting started](#getting-started)
- [Available commands](#available-commands)
- [Application structure](#application-structure)
- [Routes](#routes)
- [Data and integrations](#data-and-integrations)
- [Updating event content](#updating-event-content)
- [Styling and assets](#styling-and-assets)
- [Deployment](#deployment)
- [Current content notes](#current-content-notes)

## Technology

- **Framework:** Next.js 13.4.1 with React 18 and the App Router
- **Language:** TypeScript with strict compiler checks
- **Styling:** Tailwind CSS 3 with global component utility classes
- **Motion:** Framer Motion
- **Icons:** React Icons and inline SVGs
- **Data fetching:** Axios for the Sessionize schedule feed; browser `fetch` for local speaker data
- **Analytics:** Vercel Analytics
- **Package manager:** Yarn Classic (`yarn.lock` is committed)

## Getting started

### Prerequisites

- Node.js 18.17 or later (Node.js 20 LTS recommended)
- Yarn 1.22.x

### Install and run

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables are currently required. Speaker images, the embedded schedule, ticket links, and the Sessionize API are external services, so a network connection is needed for those parts of the experience.

## Available commands

| Command | Purpose |
| --- | --- |
| `yarn dev` | Start the Next.js development server. |
| `yarn build` | Create an optimized production build. |
| `yarn start` | Serve the production build after `yarn build`. |
| `yarn lint` | Run the project lint command. |

## Application structure

```text
src/
  app/
    api/                 Local JSON endpoints for speakers and submissions
    components/          Reusable page sections, navigation, and UI helpers
    context/             Client-side schedule context
    images/              Imported conference photography, logos, and prospectus PDF
    about/ ... tickets/  App Router routes
    globals.css          Tailwind directives and shared visual primitives
    layout.tsx           Root metadata, font, analytics, scroll reset, providers
    page.tsx             Home page composition
  components/            Shared IconWrapper used by legacy surfaces
  config/event.ts        Event links, metadata, sponsor helpers, and configuration
  utils/                 Schedule types, formatter, date filters, and static data
public/                  Public Next.js assets
```

The root layout applies Poppins, Vercel Analytics, `ScrollToTop`, and `ScheduleProvider` to every route. Most current marketing pages use `Navbar` and `Footer`; the legacy schedule route uses `Header` instead.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | 2026 landing page: hero, conference value, community statistics, tracks, 2025 speakers, highlights, partners, ticket CTA, and FAQ. |
| `/about` | Conference mission, community context, organisers, vision, and CTA. |
| `/attend` | Attendee-focused 2026 experience with ticket, venue, schedule, and FAQ information. |
| `/speakers` | Speaker programme information plus the reusable 2025 speaker grid. |
| `/community` | ReactDevsKe community information, platforms, and community CTAs. |
| `/partners` | 2026 partnership pitch, sponsorship tiers, comparison table, partner spotlight, and prospectus link. |
| `/sponsorships` | Legacy sponsor listing and technology marquee. |
| `/schedule` | Legacy speaker-submission browser with search, filters, modal details, and profile-photo enrichment. |
| `/schedule_24` | Embedded Sessionize schedule at `renderconke24.sessionize.com`. |
| `/tickets` | Redirects to `/attend#tickets`. |
| `/speakers-schedule` | Redirects to `/attend`. |
| `/privacy-policy` | Privacy policy. |
| `/media-policy` | Media policy. |
| `/code-of-conduct` | Code of conduct and reporting instructions. |

## Data and integrations

### Speaker API

`GET /api/speakers` returns the static 2025 speaker payload defined directly in `src/app/api/speakers/route.ts`. The `Speakers` component uses it to render loading, error/retry, modal-detail, and responsive “view all” states. The legacy `/schedule` route also uses the response to replace matching static speaker placeholders with profile photos.

The endpoint returns permissive CORS headers for `GET` and `OPTIONS`. Speaker image hosts must be listed in `next.config.js` if components are changed to use optimized `next/image`; the current speaker grid uses native `img` elements.

### Sessionize schedule

`ScheduleProvider` requests the Sessionize “All” endpoint and passes its result through `formatSessions`. That helper joins session speaker IDs and room IDs to the API’s speaker and room collections, then groups sessions with the date predicates in `src/utils/formatDate.ts`.

The current provider is mounted globally but is not consumed by the current route pages. The legacy `/schedule_24` surface embeds Sessionize in an iframe instead. If the provider is reintroduced in a schedule UI, update all three of these together:

1. `EVENT_CONFIG.api.sessionize`
2. the URL hard-coded in `ScheduleContext.tsx`
3. the day boundaries in `formatDate.ts`

### Static schedule and submissions

`src/utils/sessionDetails.ts` holds the older, manually curated session list and `SpeakerSubmission` records for `/schedule`. This is application data, not a form submission backend: `src/app/api/submissions/route.ts` does not currently implement a request handler.

## Updating event content

Start each conference cycle with `src/config/event.ts`:

1. Set `EVENT_CONFIG.year`, dates, venue, ticket/CFP/gallery/schedule URLs, emails, social links, and metadata.
2. Add sponsors to `SPONSORS_BY_YEAR`. `getCurrentSponsors()` falls back to a hall-of-fame state when the selected year has no entries.
3. Replace or extend the Sessionize URL and date filters if the programme uses the schedule context.
4. Update date-, year-, venue-, and ticket-specific copy in components and route pages.
5. Replace previous-edition speaker data in `/api/speakers` when the new programme is ready.
6. Replace images and logos under `src/app/images/`, keeping import references in the relevant components in sync.
7. Update root and route metadata, especially social preview image URLs.

The partnership prospectus is an imported PDF at `src/app/images/assets/RenderCon-Kenya-2026_Q2.pdf`. Keep its filename or update the import/link when replacing it.

## Styling and assets

Tailwind scans `src/app`, `src/components`, and `src/pages` as configured in `tailwind.config.js`. The shared brand palette uses purple, gold, and dark backgrounds. `globals.css` provides reusable classes such as:

- `bento-card` for bordered content panels
- `btn-primary`, `btn-secondary`, and `btn-gold` for CTAs
- `section-label` for section badges
- `gradient-text` and `gradient-text-purple` for branded headings
- `glass-card`, `noise-bg`, and animation helpers for decorative treatments

Static images are imported from `src/app/images`, while `public/` is available for URL-addressable assets. Remote image optimization currently allows `sessionize.com` and Vercel Blob’s speaker-image host in `next.config.js`.

## Deployment

The application is configured for a standard Next.js deployment. Vercel is the natural target because the project already includes `@vercel/analytics`, but any Node.js host that can run `next build` and `next start` will work.

```bash
yarn install --frozen-lockfile
yarn build
yarn start
```

Before deploying, verify all external URLs, ticket links, mailto addresses, the prospectus, and remote image hosts. Use the production domain in `metadataBase` and Open Graph metadata when it changes.
