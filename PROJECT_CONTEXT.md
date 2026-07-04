# Project Context

## Purpose & Direction

This is a single-page personal product design portfolio for Khaled Abdalqader. It presents Khaled as a senior/product design lead focused on scalable event platforms, SaaS dashboards, design systems, and AI-assisted workflows.

Visual direction: premium editorial product-design portfolio, warm off-white page background, near-black text, generous whitespace, strong Libre Franklin typography, thin dividers, restrained motion, minimal rounded corners, and no decorative gradients.

## Current Page Order

1. Header / navbar
2. Animated hero
3. Clients / logos focus-reveal
4. Work cards
5. Awards placeholder
6. Stack / tools
7. Contact profile footer

Removed sections: standalone case-study chapters, AI Workflow section, and Experience section.

## Completed Sections

- `Header`: fixed/pill navbar with calm scroll behavior and mobile menu.
- `Hero`: three-line animated mask reveal headline, subtitle, floating pills, mobile pill wrap.
- `Clients`: focus-reveal logo sets with blur/scale crossfade.
- `WorkSection`: dark premium project cards with CSS-only screenshot placeholders.
- `Awards`: placeholder section using current `RecognitionItem`.
- `Stack`: categorized tools section on white background with black pills and user-provided icon assets.
- `Contact`: reference-style two-column contact/profile section with portrait image, intro copy, capability grid, email link, and footer metadata.

## Navbar

Current nav labels and anchors:

- `Work` -> `#selected-work`
- `Awards` -> `#awards-recognition`
- `Stack` -> `#stack`
- `Contact` -> `#contact`

Rules:

- Keep only `Khaled Abdalqader` as the brand.
- No role label in the navbar.
- Smooth anchor scrolling is handled in `Header.tsx` with top offset.
- Motion should remain calm: no bouncy or exaggerated transitions.

## Typography, Spacing & Interaction

- Global font: Libre Franklin via `next/font/google` in `src/app/layout.tsx`.
- Primary text color: `#010101`.
- Main layout max width is generally `max-w-7xl`; clients/stack use full-width treatments where needed.
- Section dividers use `SectionHeader.tsx`: uppercase label, animated line draw, `py-24`.
- Respect `prefers-reduced-motion` via Framer Motion checks where components animate.
- Hover states should be subtle and premium: opacity shifts, small scale on stack pills, no loud effects.
- Do not invent metrics, outcomes, client names, awards, dates, or testimonials.

## Main Components

- `Header.tsx`
- `Hero.tsx`
- `Clients.tsx`
- `WorkSection.tsx`
- `Stack.tsx`
- `Contact.tsx`
- `SectionHeader.tsx`
- `SectionHeading.tsx`
- `SectionLabel.tsx`
- `RecognitionItem.tsx`
- `MediaFrame.tsx`

Older reusable components still exist but are not all currently rendered: `CaseStudyChapter`, `ProjectIndexCard`, `Metric`, `ExperienceItem`.

## Content & Data

Central editable content lives in:

- `src/data/portfolio.ts`

Keep new copy, labels, paths, project metadata, stack tools, logo sets, and contact content in this file unless there is a strong reason not to.

## Assets

Asset folders:

- `public/media/dashboard`
- `public/media/organizer`
- `public/media/attendee`
- `public/media/tables`
- `public/media/logos`
- `public/media/awards`
- `public/media/portrait`
- `public/media/stack`

Current real assets:

- `public/media/portrait/khaled-portrait.png`
- Stack icons in `public/media/stack/*.png`

Placeholder convention:

- Use neutral, clearly labeled placeholders such as `Dashboard screenshot slot`, `Award badge slot`, or CSS-only mock browser frames.
- Do not download external logos, screenshots, stock imagery, or copyrighted assets. Use only user-provided approved assets.

## Pending

- Replace Work card CSS placeholders with approved project screenshots/media.
- Add real awards/recognition copy and approved badge assets.
- Add real links for LinkedIn, Dribbble, and Resume.
- Add a Jira icon if the user provides one; current Jira tool uses fallback mark.
- Update placeholder project summaries when approved case-study copy is provided.
- Run `npm run lint` and `npm run build` before marking future implementation tasks complete.
