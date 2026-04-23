# O'PETIT CAFE Landing Page

Modern, premium, multilingual landing page for O'PETIT CAFE built with Next.js App Router and Tailwind CSS.

## Stack
- Next.js (App Router)
- Tailwind CSS
- TypeScript

## Run locally
1. Install Node.js 18.18+ (or 20+ recommended) from [nodejs.org](https://nodejs.org/)
2. Install dependencies:
   - `npm install`
3. Start dev server:
   - `npm run dev`
4. Open:
   - `http://localhost:3000`

## Features
- Responsive mobile-first landing page
- RU/EN/KZ language switcher (Russian default)
- Interactive menu preview with category tabs
- Floating WhatsApp and Telegram buttons
- Smooth scrolling navigation
- Sections: Hero, About, Menu, Gallery, Services, Contact, Footer
- SEO metadata in `app/layout.tsx`
- Lazy-loaded optimized images via `next/image`

## Replaceable content
- Menu data: `data/menu.json`
- Translations: `data/translations.ts`
- WhatsApp link: `app/page.tsx`
