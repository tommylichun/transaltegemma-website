# TranslateGemma Website

Marketing website for TranslateGemma iOS app built with Next.js, featuring complete SEO optimization, multi-language support, and modern minimalist design.

## Features

- 🌍 8 Language Support (English, Traditional/Simplified Chinese, Japanese, Korean, Spanish, French, German)
- 🎨 Modern Minimalist Design System
- 📱 Fully Responsive
- 🔍 Complete SEO Optimization (Meta tags, Open Graph, Structured Data, Sitemap)
- ⚡ High Performance (Next.js 14, Optimized Images)
- 🎭 Smooth Animations (Framer Motion)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

## Deployment

### Cloudflare Pages

1. Connect your repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. Add environment variable: `NEXT_PUBLIC_BASE_URL`

## SEO Setup

1. Update `NEXT_PUBLIC_BASE_URL` with your actual domain
2. Update `robots.txt` with your domain
3. Submit sitemap to Google Search Console
4. Verify structured data with Google Rich Results Test

## Project Structure

```
promote/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Locale-specific routes
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Base UI components
│   └── ...               # Page sections
├── lib/                  # Utilities
│   ├── i18n.ts          # i18n configuration
│   └── metadata.ts      # SEO metadata
├── messages/            # Translation files
└── public/             # Static assets
```

## License

Copyright © 2026 TranslateGemma. All rights reserved.
