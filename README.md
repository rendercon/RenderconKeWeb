<p align="center">
  <img src="src/app/images/logos/rendercon-logo.svg" alt="RenderCon Kenya" width="200"/>
</p>

<h1 align="center">RenderCon Kenya</h1>

<p align="center">
  The official website for <strong>RenderCon Kenya</strong> — East Africa's premier React, React Native, and modern web development conference.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#docker">Docker</a> •
  <a href="#local-development">Local Dev</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## Overview

RenderCon Kenya is the annual conference organized by **ReactDevsKe**, bringing together developers, engineers, and technology leaders from across East Africa and beyond. This repository contains the conference marketing website, built with modern web technologies and designed for performance, accessibility, and maintainability.

---

## Features

| Feature | Description |
|---|---|
| **Responsive Design** | Mobile-first layout with Tailwind CSS |
| **Dynamic Content** | Speaker profiles, schedules, and sponsor data |
| **Animations** | Smooth transitions with Framer Motion |
| **SEO Optimized** | Next.js App Router with metadata API |
| **Production Ready** | Docker support with multi-stage builds |
| **Type Safe** | Full TypeScript coverage |
| **Fast** | Optimized images, static generation, and edge-ready |

---

## Technology Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 13.4 |
| Language | TypeScript | 5.0 |
| Styling | Tailwind CSS | 3.3 |
| Animation | Framer Motion | 12.4 |
| Icons | React Icons, Lucide | — |
| Data Fetching | Axios, Native Fetch | — |
| Analytics | Vercel Analytics | — |
| Package Manager | Yarn (via Corepack) | 4.x |
| Containerization | Docker & Docker Compose | — |

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

| Requirement | Version | Installation |
|---|---|---|
| Node.js | 18.17+ (20 LTS recommended) | [nodejs.org](https://nodejs.org) |
| Yarn | 4.x | `corepack enable` |
| Docker | 20.10+ | [docker.com](https://docker.com) |
| Docker Compose | 2.x | Included with Docker Desktop |

---

## Docker

The recommended way to run the application. Docker ensures a consistent environment across all machines and simplifies deployment.

### Quick Start

```bash
# Clone the repository
git clone https://github.com/rendercon/RenderconKeWeb.git
cd RenderconKeWeb

# Build and start the container
docker compose up --build
```

The application will be available at **http://localhost:3000**.

### Docker Commands

| Action | Command | Description |
|---|---|---|
| Build & Start | `docker compose up --build` | Build image and start container |
| Start (detached) | `docker compose up -d` | Start container in background |
| View Logs | `docker compose logs -f` | Stream container logs |
| Stop | `docker compose down` | Stop and remove containers |
| Stop & Clean | `docker compose down -v` | Stop and remove volumes |
| Rebuild | `docker compose build --no-cache` | Force rebuild without cache |
| Shell Access | `docker compose exec web sh` | Open shell inside container |

### Docker Architecture

The Dockerfile uses a **multi-stage build** to optimize image size and security:

```
┌─────────────────────────────────────────────────────────────┐
│                     Multi-Stage Build                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐                                           │
│  │    deps      │  Install dependencies with Yarn 4         │
│  │              │  Copy package.json, yarn.lock, .yarnrc.yml│
│  └──────┬───────┘                                           │
│         │                                                   │
│         ▼                                                   │
│  ┌──────────────┐                                           │
│  │   builder    │  Compile Next.js application              │
│  │              │  Run yarn build with standalone output    │
│  └──────┬───────┘                                           │
│         │                                                   │
│         ▼                                                   │
│  ┌──────────────┐                                           │
│  │    runner    │  Production runtime                       │
│  │              │  Non-root user, port 3000, minimal deps   │
│  └──────────────┘                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Docker Configuration

| Setting | Value | Description |
|---|---|---|
| Base Image | `node:20-alpine` | Minimal Node.js runtime |
| Port | `3000` | Exposed application port |
| User | `nextjs` (UID 1001) | Non-root runtime user |
| Output | `standalone` | Self-contained server.js |
| Telemetry | Disabled | `NEXT_TELEMETRY_DISABLED=1` |

---

## Local Development

For developers who prefer running the application directly on their machine.

### Installation

```bash
# Clone the repository
git clone https://github.com/rendercon/RenderconKeWeb.git
cd RenderconKeWeb

# Enable Corepack (Yarn 4)
corepack enable

# Install dependencies
yarn install
```

### Development Server

```bash
# Start development server with hot reload
yarn dev
```

Open **http://localhost:3000** in your browser.

### Production Build

```bash
# Create optimized production build
yarn build

# Serve the production build
yarn start
```

### Available Scripts

| Command | Description |
|---|---|
| `yarn dev` | Start development server with hot reload |
| `yarn build` | Create optimized production build |
| `yarn start` | Serve production build (requires `yarn build` first) |
| `yarn lint` | Run ESLint code analysis |
| `yarn verify:sessionize` | Run focused programme regression checks |

---

## Project Structure

```text
├── src/
│   ├── app/
│   │   ├── api/                    # API route handlers
│   │   │   ├── speakers/           # GET /api/speakers
│   │   │   ├── schedule/           # GET /api/schedule
│   │   │   └── submissions/        # Unimplemented route stub
│   │   ├── components/             # Page-specific components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Speakers.tsx
│   │   │   ├── Sponsors.tsx
│   │   │   └── ...
│   │   ├── images/                 # Static images & assets
│   │   │   ├── logos/              # Sponsor & partner logos
│   │   │   ├── Organisers/         # Organizer photos
│   │   │   └── assets/             # PDFs & other assets
│   │   ├── about/                  # About page
│   │   ├── attend/                 # Attend page
│   │   ├── community/              # Community page
│   │   ├── partners/               # Partners page
│   │   ├── schedule/               # Schedule pages
│   │   ├── speakers/               # Speakers page
│   │   ├── tickets/                # Tickets page
│   │   ├── globals.css             # Global styles & Tailwind
│   │   ├── layout.tsx              # Root layout
│   │   └── page.tsx                # Home page
│   ├── components/                 # Shared components
│   │   └── IconWrapper.tsx
│   ├── content/archive/2025.ts     # Previous public records, never a 2026 fallback
│   ├── lib/
│   │   ├── sessionize.ts           # Server fetch and validated Data Cache
│   │   ├── sessionize-normalize.ts # Runtime validation and public mapping
│   │   └── sessionize-types.ts     # Verified upstream field contracts
│   ├── config/
│   │   └── event.ts                # Event configuration
│   └── utils/                      # Utility functions
│       ├── types.ts                # TypeScript types
│       └── formatDate.ts           # Explicit timestamp parsing and Nairobi display
├── public/                         # Public static assets
├── .dockerignore                   # Docker build exclusions
├── .yarnrc.yml                     # Yarn configuration
├── Dockerfile                      # Multi-stage build definition
├── docker-compose.yml              # Container orchestration
├── next.config.js                  # Next.js configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies & scripts
```

---

## Routes

| Route | Description |
|---|---|
| `/` | Home page — hero, stats, tracks, speakers, partners, FAQ |
| `/about` | Conference mission, vision, and organizers |
| `/attend` | Attendee experience, tickets, venue info |
| `/speakers` | Speaker lineup and profiles |
| `/community` | ReactDevsKe community information |
| `/partners` | Partnership opportunities and tiers |
| `/sponsorships` | Sponsor listings |
| `/schedule` | Live 2026 Sessionize GridSmart agenda and session details |
| `/schedule_24` | Unchanged 2024 Sessionize schedule archive |
| `/speakers-schedule` | Redirects to `/attend` |
| `/tickets` | Ticket information |
| `/privacy-policy` | Privacy policy |
| `/media-policy` | Media policy |
| `/code-of-conduct` | Code of conduct |

---

## Data & Integrations

### RenderCon 2026 programme

`src/config/event.ts` centralizes the five public exports for event API ID
`c1nslc55`: `All`, `GridSmart`, `Sessions`, `Speakers`, and `SpeakerWall`.
`All` supplies the normalized speaker and programme API routes. The visible
agenda uses the separate published JavaScript embed at
`https://sessionize.com/api/v2/b7swgk5n/view/GridSmart`, configured as
`api.sessionize.agendaEmbed`. Its fresh iframe document supports Sessionize's
`document.write` loader on initial loads and client-side navigation, resizes to
the agenda content, and keeps session dialogs in the visible viewport. It has
a loading state and retry button if the embed cannot load within 20 seconds.
`public/sessionize-theme.css` themes the live embed and its session dialogs to
match the site. The iframe reuses the site's palette and self-hosted font faces.
The organizer schedule-builder URL is not used.

- `GET /api/speakers` returns normalized 2026 speaker profiles and their sessions.
- `GET /api/schedule` returns the normalized 2026 programme and session records.
- `/` previews the first four speakers in the server's deterministic ordering,
  with links to the full lineup and programme. `/speakers` is the dedicated
  speaker showcase, with biographies and associated sessions in profile modals.
- `/schedule` displays the live Sessionize GridSmart agenda. `/attend` groups
  tickets, venue, the same live agenda, and FAQs.
  The existing `/speakers-schedule` redirect remains intact.
- Main navigation is Home, About, Speakers, Partners, and Attend. Attend groups tickets, venue,
  schedule, and FAQs in a desktop disclosure and the mobile menu. Other routes
  remain accessible through the existing footer and direct links.

The server adapter validates identifiers, collections, required names/titles,
optional fields, and relationships before constructing an explicit public
field allowlist. Session IDs are strings; speaker references are joined by ID.
Speakers can have several sessions, and sessions can have several speakers.
Speaker ordering is highlighted speakers first, then English full name and ID.
Sessions are ordered by complete start instant, then room and ID; unscheduled
sessions appear last. Biographies and abstracts render as text. Missing or
broken photos use a neutral local icon, without an external avatar request.

Submission contacts, custom question answers, administrative acceptance flags,
and unused upstream properties are never returned or cached by the adapter.
The old public speaker and session content is retained in
`src/content/archive/2025.ts`, with contact fields and fabricated current dates
omitted. It is not imported by any 2026 consumer. The 2024 iframe is unchanged.

### Observed export structures (12 October 2026)

All five exports returned HTTP 200 and `application/json; charset=utf-8`:

| Export | Observed structure |
|---|---|
| `All` | Object: 20 `speakers`, 17 `sessions`, two `rooms`; empty `categories` and `questions`. Session IDs are strings, speaker IDs are strings, and room IDs are numbers. Sessions reference speaker IDs; speaker session references are numbers. |
| `GridSmart` | Array of one date, with two rooms, room sessions, and nine `timeSlots`; slots contain room/session entries. |
| `Sessions` | Array of one group containing 17 sessions; presenters are nested `{id, name}` records and room names are included. |
| `Speakers` | Array of 20 detailed profiles; sessions are nested `{id, name}` records with numeric IDs. |
| `SpeakerWall` | Array of 20 compact profiles; no biographies, links, or session relationships. |

All 17 exported sessions were accepted, informed, confirmed, and scheduled on
17 October 2026. Two sessions have multiple presenters. The adapter uses the
public export selection rather than inventing an additional publication rule.

The profiles supply `fullName`, `bio`, `tagLine`, `profilePicture`,
`isTopSpeaker`, and social `links` (LinkedIn and Twitter). `tagLine` is displayed
verbatim as the role/company line: no separate role/company split is inferred.
Photos currently use `cdn.sessionize.com`. Abstracts use session `description`.
No separate formats or tracks were exported; category fields are empty, and
the normalized API retains the verified rooms.
These observations describe the JSON export ID `c1nslc55`. The agenda now uses
the separate JavaScript embed ID `b7swgk5n` rather than those JSON records.

### Timezone policy

The verified start/end strings have no offset or timezone field, for example
`2026-10-17T10:05:00`. The event configuration explicitly interprets these as
Nairobi wall time (`+03:00`) and displays/groups all instants in `Africa/Nairobi`.
Explicit `Z` or numeric offsets are honored when supplied. Parsing never uses
the visitor or host timezone. Missing/invalid start times remain unscheduled;
missing or earlier end times do not produce invented durations.

The project owner has confirmed that offset-free Sessionize timestamps are
Nairobi local time. Keep `programme.offsetForLocalTimestamps` at `+03:00` for
this event; do not reinterpret those values as UTC or visitor-local time.

The 2026 CFP is closed. Speaker discovery contains no CFP block or submission
CTA. Homepage and attendee FAQs retain a concise closure notice. Historical
speaker benefits and CFP formats are preserved in `src/content/archive/2026-cfp.ts`
for reference; they are not API session classifications or open invitations.
There is no active submission link or promise of a future reopening.

### Cache and failure behavior

`src/lib/sessionize.ts` uses the installed Next.js 13.4 `next/cache`
`unstable_cache` API, constructed inside the request context required by this
version. The cache key includes the event URL and a public-schema version.
Only successfully validated, normalized public data is cached. Upstream
fetches inside the callback are uncached; HTTP, content-type, JSON, and schema
failures throw before a cache write. Requests have a ten-second timeout.

The centralized revalidation interval is five minutes. Stale cached data is
served while Next retries in the background; failed retries preserve the last
valid programme. Concurrent refreshes share an in-process promise, which is
only request deduplication, not persistent storage. Valid empty exports are
cached as empty; upstream failures are never converted into empty success.
Cold failures return HTTP 503 with a retryable UI state. Client refresh errors
also retain any programme already displayed.

Public route responses use `Cache-Control: no-store`, leaving freshness to the
shared server Data Cache. Both routes are dynamic, avoiding build-time
Sessionize requests. Next stores the Data Cache under `.next/cache`; the Docker
runtime user is given write access. Disk recovery is tested with a separate
Node process using Next's actual cache. It requires the same filesystem;
container replacement/redeployment without retained storage is a cold start.
No persistence across container replacement or separate instances is assumed.

### Integration verification

```bash
yarn exec tsc --noEmit --incremental false
yarn lint --no-cache
yarn verify:sessionize
yarn verify:sessionize --live  # Needs access to Sessionize
yarn build
```

The focused verifier uses installed TypeScript in memory and Node assertions;
no test framework or dependency is added. It covers multi-presenter and
multi-session relationships, privacy, missing fields, parallel sessions,
complete dates, offsets, malformed/empty responses, timeout, actual Next cache
fallback, cold failure, and disk recovery across processes. `--live` validates
the current All export without saving a raw snapshot. Browser checks should
also cover mobile expansion, search/room filters, modal close/Escape, broken
images, API retry, and the unchanged 2024 archive and redirect.

---

## Updating Event Content

To update the site for a new conference edition:

1. **Update Configuration** — Modify `EVENT_CONFIG` in `src/config/event.ts` with new dates, venue, URLs, and social links
2. **Update Sponsors** — Update `SPONSORS_BY_YEAR` in `src/config/sponsors.ts` (categories and exact labels). The shared `Sponsors` component serves the homepage, `/partners`, and `/sponsorships`. Keep past-edition records and `HISTORICAL_SUPPORTERS`; current names are excluded from Past Sponsors automatically. Logos use existing static imports; missing logos render the organization name and category.
3. **Update Programme** — Update the centralized Sessionize base URL, event year, and explicit timezone policy; verify the real exports
4. **Update Content** — Update date/year-specific copy in components
5. **Update Speakers and Sessions** — Manage public programme data in Sessionize; keep prior-edition records separate
6. **Update Assets** — Replace images and logos in `src/app/images/`
7. **Update Metadata** — Update root and route metadata, especially social preview images

---

## Contributing

We welcome contributions from the community. Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/your-feature`)
3. **Commit** your changes (`git commit -m "feat: add your feature"`)
4. **Push** to the branch (`git push origin feature/your-feature`)
5. **Open** a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org):

| Type | Description |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code style changes (formatting, semicolons) |
| `refactor` | Code refactoring |
| `chore` | Maintenance tasks |
| `test` | Adding or updating tests |

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

- **Website:** [renderconke.com](https://renderconke.com)
- **Twitter:** [@RenderConKe](https://twitter.com/RenderConKe)
- **Community:** [ReactDevsKe](https://reactdevske.com)

---

<p align="center">
  Built by the ReactDevsKe community
</p>
