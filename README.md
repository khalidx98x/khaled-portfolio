# Khaled Abdalqader Portfolio

Single-page portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Local Development

Use Node.js `20.9.0` or newer.

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

Run lint:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

## Cloudflare Pages Deployment

This portfolio is configured as a static Next.js export for Cloudflare Pages.

Use these Cloudflare Pages settings:

- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: `20.9.0` or newer

After changing these settings, trigger a fresh deployment.

## Vercel Deployment

This project is compatible with Vercel's standard Next.js deployment.

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. Keep the default framework preset: `Next.js`.
4. Use the default build command: `npm run build`.
5. Use the default output handling from Next.js.

The resume file is served from `public/resume.pdf`. Static images and logos are served from `public/media`.
# khaled-portfolio
# khaled-portfolio
# khaled-portfolio
