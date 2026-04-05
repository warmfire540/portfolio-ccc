# Curious Cat Consulting — Website

A modern, responsive site for Curious Cat Consulting LLC: services, projects, and expertise as a software engineering and architecture consulting firm.

## Overview

- Company information and service offerings
- Project portfolio with categories and detail pages
- Team, values, and contact
- Dark/light mode (`next-themes`)
- Static export suitable for edge/CDN hosting

Built with **Next.js** (App Router), **React**, **TypeScript**, and **Tailwind CSS**.

## Project structure

```
portfolio-ccc/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Home
│   ├── layout.tsx          # Root layout, fonts, theme
│   ├── globals.css         # Global styles
│   ├── brand/              # Brand kit page
│   ├── privacy-policy/     # Privacy policy
│   ├── terms-of-service/   # Terms of service
│   ├── projects/[id]/      # Project detail routes
│   └── _components/        # Feature UI (hero, header, projects, etc.)
├── api/                    # Vercel serverless (e.g. marketing helpers)
├── public/                 # Static assets
├── next.config.ts          # e.g. static export, images
└── vercel.json             # Deploy headers, routing hints
```

Content and copy for sections live next to their components under `app/_components/` (for example `projects/data.ts`, `services/data.ts`).

## Technologies

- **Next.js** — App Router, static export (`output: 'export'`)
- **React** & **TypeScript**
- **Tailwind CSS** v4
- **next-themes** — color scheme
- **Font Awesome** (`@fortawesome/*`) — icons
- **@formspree/react** — contact form submissions
- **@xyflow/react** — diagrams where used
- **ESLint** — `eslint-config-next`

## Setup

**Prerequisites:** Node.js 20+ (recommended; align with `@types/node` in `package.json`).

```bash
git clone https://github.com/warmfire540/portfolio-ccc.git
cd portfolio-ccc
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description                    |
| ------------- | ------------------------------ |
| `yarn dev`    | Development server             |
| `yarn build`  | Production build (static `out/`) |
| `yarn start`  | Serve production build locally |
| `yarn lint`   | ESLint                         |
| `yarn format` | Prettier                       |

## Production build

```bash
yarn build
```

With static export, the output is the `out/` directory (not `build/`). Deploy that folder or let Vercel run `next build` and use the configured output directory.

## Deployment

Configured for **Vercel** (see `vercel.json` for headers and serverless `api/` routes). Deployment details (branch names, project URL) live in your Vercel dashboard.

## Integrations

- **Contact:** Formspree — configure the form endpoint in the contact components / env as needed.
- **HubSpot:** A HubSpot script is loaded from the root layout for marketing/automation (see `app/layout.tsx`).

## Customization

- **Projects:** `app/_components/projects/data.ts`
- **Services:** `app/_components/services/data.ts`

Edit those modules and rebuild; project detail URLs follow the `id` field and `app/projects/[id]/`.

## License

MIT

---

© 2026 Curious Cat Consulting LLC. All rights reserved.
