# Astro Business Boilerplate

A modern, minimal business website boilerplate built with Astro 5, Tailwind CSS v4, and TypeScript. Zero client-side JavaScript by default for maximum performance.

## Features

- **Astro 5** - Latest version with Content Collections and optimized build
- **Tailwind CSS v4** - Utility-first CSS via Vite plugin
- **TypeScript** - Full type safety
- **SEO Ready** - Reusable SEO component with Open Graph and Twitter Card support
- **Sitemap** - Auto-generated sitemap.xml
- **Blog System** - Markdown-based blog with Content Collections
- **Analytics Ready** - Placeholder for Google Analytics / Vercel Analytics
- **Mobile Responsive** - Fully responsive design with mobile navigation
- **Zero JS by Default** - Pure Astro components, no React/Vue overhead

## Quick Start

### Using npm

```bash
# Clone the repository
npx degit maci-kb24/astrobase my-business-site

# Navigate to the project
cd my-business-site

# Install dependencies
npm install

# Start development server
npm run dev
```

### Using pnpm

```bash
# Clone the repository
pnpm dlx degit maci-kb24/astrobase my-business-site

# Navigate to the project
cd my-business-site

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Using yarn

```bash
# Clone the repository
yarn dlx degit maci-kb24/astrobase my-business-site

# Navigate to the project
cd my-business-site

# Install dependencies
yarn install

# Start development server
yarn dev
```

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── placeholder-*.{jpg,png,svg}
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── BlogPreview.astro
│   │   ├── Contact.astro
│   │   ├── CTA.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Pricing.astro
│   │   ├── SEO.astro
│   │   ├── Services.astro
│   │   └── Testimonials.astro
│   ├── content/
│   │   └── blog/
│   │       ├── getting-started.md
│   │       ├── our-process.md
│   │       └── why-choose-us.md
│   ├── data/
│   │   └── site.ts          # All site configuration
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── about.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── pricing.astro
│   │   └── services.astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Configuration

All site data is centralized in `src/data/site.ts`. Edit this file to customize:

### Basic Info

```typescript
export const siteConfig = {
  name: "Your Company",
  description: "Your company description",
  url: "https://yoursite.com",
  email: "hello@yoursite.com",
  phone: "+1 (555) 123-4567",
  address: "123 Business St, City, State 12345",
};
```

### Navigation

```typescript
export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];
```

### Services, Pricing, Testimonials, FAQ

All content sections are configured in the same file with TypeScript interfaces for type safety.

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Landing page with all sections |
| About | `/about` | Company story, mission, values, team |
| Services | `/services` | Services grid with process steps |
| Pricing | `/pricing` | Pricing tiers with FAQ |
| Blog | `/blog` | Blog listing page |
| Blog Post | `/blog/[slug]` | Individual blog post |
| Contact | `/contact` | Contact form and info |

## Components

All components are in `src/components/` and are pure Astro (no client-side JavaScript):

- **SEO** - Meta tags, Open Graph, Twitter Cards
- **Header** - Sticky navigation with mobile hamburger menu
- **Footer** - Multi-column footer with links and social
- **Hero** - Hero section with stats
- **About** - Company story section
- **Services** - Services grid with icons
- **Testimonials** - Customer testimonials
- **Pricing** - Pricing table with highlighted plan
- **FAQ** - Accordion FAQ section
- **CTA** - Call-to-action banner
- **Contact** - Contact form with validation
- **BlogPreview** - Latest blog posts grid

## Blog

The blog uses Astro Content Collections with Markdown files.

### Creating a New Post

Add a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A brief description"
pubDate: 2024-01-15
author: "Author Name"
image: "/placeholder.jpg"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Schema

The blog schema is defined in `src/content.config.ts` with Zod validation:

- `title` (required) - Post title
- `description` (required) - Meta description
- `pubDate` (required) - Publication date
- `author` (optional) - Author name
- `image` (optional) - Featured image path
- `tags` (optional) - Array of tags

## Styling

### Design System

The boilerplate uses a monochrome color palette:

- **Primary**: `#0a0a0a` (near-black)
- **Background**: `#fafafa` (off-white)
- **Muted**: `#737373` (gray)
- **Border**: `#e5e5e5` (light gray)

### Customizing Colors

Edit the CSS custom properties in `src/styles/global.css`:

```css
@theme inline {
  --color-background: #fafafa;
  --color-foreground: #0a0a0a;
  --color-primary: #0a0a0a;
  --color-muted: #737373;
  /* ... */
}
```

### Typography

The boilerplate uses a system font stack for optimal performance:

```css
--font-sans: ui-sans-serif, system-ui, sans-serif;
```

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:3000` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

## Deployment

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Other Platforms

Astro generates static HTML by default. Deploy the `dist/` folder to any static hosting provider.

## Adding Integrations

### React Components

```bash
npx astro add react
```

### Vue Components

```bash
npx astro add vue
```

### MDX Support

```bash
npx astro add mdx
```

## License

MIT License - feel free to use this for personal or commercial projects.

## Credits

Built with:

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://typescriptlang.org)
