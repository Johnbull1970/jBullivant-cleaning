# J Bullivant Cleaning

Production website for J Bullivant Cleaning, built with Next.js and ready for
deployment on Vercel.

## Requirements

- Node.js 24.x
- npm

## Local development

```bash
npm ci
npm run dev
```

## Production checks

```bash
npm run build
npm test
npm run lint
```

## Deploying to Vercel

Import the GitHub repository into Vercel. Vercel should detect Next.js and use
the repository defaults:

- Install command: `npm ci`
- Build command: `npm run build`
- Output: Next.js default
- Node.js: 24.x

The public website currently requires no environment variables.

## Existing Sites compatibility

The original Sites/Cloudflare workflow remains available through
`npm run dev:sites`, `npm run build:sites`, and `npm run start:sites`.
