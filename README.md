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
git clone https://github.com/<your-org>/RenderconKeWeb.git
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

---

## Project Structure

```text
├── src/
│   ├── app/
│   │   ├── api/                    # API route handlers
│   │   │   ├── speakers/           # GET /api/speakers
│   │   │   └── submissions/        # POST /api/submissions
│   │   ├── components/             # Page-specific components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Speakers.tsx
│   │   │   ├── Sponsors.tsx
│   │   │   └── ...
│   │   ├── context/                # React context providers
│   │   │   └── ScheduleContext.tsx
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
│   ├── config/
│   │   └── event.ts                # Event configuration
│   └── utils/                      # Utility functions
│       ├── types.ts                # TypeScript types
│       ├── formatSessions.ts       # Session formatting
│       ├── formatDate.ts           # Date utilities
│       └── sessionDetails.ts       # Static session data
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
| `/schedule` | Speaker submission browser |
| `/schedule_24` | Embedded Sessionize schedule |
| `/tickets` | Ticket information |
| `/privacy-policy` | Privacy policy |
| `/media-policy` | Media policy |
| `/code-of-conduct` | Code of conduct |

---

## Data & Integrations

### Speaker API

```
GET /api/speakers
```

Returns the speaker payload defined in `src/app/api/speakers/route.ts`. The endpoint includes permissive CORS headers for `GET` and `OPTIONS` requests.

### Sessionize Integration

The `ScheduleProvider` fetches data from the Sessionize API and formats it for display. Configure the endpoint in `src/config/event.ts`.

### Static Data

Speaker details and submission records are maintained in `src/utils/sessionDetails.ts`.

---

## Updating Event Content

To update the site for a new conference edition:

1. **Update Configuration** — Modify `EVENT_CONFIG` in `src/config/event.ts` with new dates, venue, URLs, and social links
2. **Update Sponsors** — Add new sponsors to `SPONSORS_BY_YEAR`
3. **Update Schedule** — Modify the Sessionize URL and date filters
4. **Update Content** — Update date/year-specific copy in components
5. **Update Speakers** — Replace speaker data in `src/app/api/speakers/route.ts`
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
