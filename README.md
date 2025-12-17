# FlowOptimo Web

Marketing and pricing website for FlowOptimo - Vacation Home Rental Operations Software for Costa del Sol

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel (Git Integration)

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/flowoptimo-web.git
cd flowoptimo-web

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_APP_URL` | Main application URL | `https://app.flowoptimo.com` |
| `NEXT_PUBLIC_SITE_URL` | This site's URL | `https://flowoptimo.com` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | - |

## Deployment

### Vercel Setup (Git Integration)

Vercel automatically deploys when you push to GitHub. No CI/CD configuration needed.

1. **Connect GitHub repo to Vercel**
   - Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
   - Select `flowoptimo-web` repository
   - Framework: Next.js (auto-detected)

2. **Add environment variables** in Vercel dashboard:
   - `NEXT_PUBLIC_APP_URL` = `https://app.flowoptimo.com`

3. **Configure branch deployments**:
   - `main` branch → Production (`flowoptimo.com`)
   - `staging` branch → Staging (`staging.flowoptimo.com`)

4. **Domain setup** (in Vercel Project Settings → Domains):
   - Add `flowoptimo.com` for production
   - Add `staging.flowoptimo.com` for staging branch

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── layout/       # Header, Footer
│   ├── landing/      # Landing page sections
│   ├── pricing/      # Pricing page components
│   └── ui/           # Base UI components
├── lib/              # Utilities and config
└── types/            # TypeScript types
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run format   # Format with Prettier
```

## License

Proprietary - All rights reserved.
