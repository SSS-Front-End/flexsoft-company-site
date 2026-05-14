<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# flexsoft-company-site
Demo
>>>>>>> 27f38716c2e45fe749c1dd6943646db46c42ddac



# FlexSoft Company Website

Современный корпоративный сайт компании на базе Next.js + TailwindCSS.

---

# Tech Stack

## Frontend

- Next.js (App Router)
- React
- TailwindCSS v3
- Framer Motion
- Axios

---

# Project Goal

Создать современный premium corporate website с:

- красивым UI
- responsive layout
- анимациями
- CMS интеграцией
- SEO optimization
- scalable architecture

---

# Planned CMS

Планируется подключение:

- Strapi
или
- Sanity

Для:
- постов
- проектов
- кейсов
- услуг
- изображений
- контента администратора

---

# Current Project Structure

```txt
src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   └── shared/
├── sections/
│   └── home/
├── hooks/
├── lib/
├── services/
├── styles/
└── constants/
```

---

# Installed Packages

```bash
npm install framer-motion axios clsx
```

---

# Tailwind Setup

Используется TailwindCSS v3.

## tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/sections/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

# globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Используется custom dark theme:

- background: #0B0F19
- primary: #5B67FF
- secondary: #8B5CF6

---

# Completed Components

## UI Components

### Container.jsx

Reusable responsive container.

### Button.jsx

Primary rounded button component.

### SectionTitle.jsx

Reusable section typography component.

---

# Layout Components

## Header.jsx

Features:

- fixed navbar
- glassmorphism
- responsive navigation
- CTA button

---

# Sections

## HeroSection.jsx

Features:

- glow background
- gradient heading
- CTA buttons
- premium hero layout

---

## ServicesSection.jsx

Features:

- responsive cards
- hover animation
- reusable grid system

---

# Current Homepage Structure

```jsx
<Header />

<main>
  <HeroSection />
  <ServicesSection />
</main>
```

---

# Design System

## Colors

```txt
Background: #0B0F19
Card: #131A2A
Primary: #5B67FF
Secondary: #8B5CF6
Muted: #A1A1AA
```

---

# UI Style

- dark modern tech style
- rounded UI
- glassmorphism
- gradients
- glow effects
- premium startup aesthetic

---

# Resolved Issues

## Tailwind v4 issue

Была проблема с:

```txt
@tailwindcss/oxide
```

Решение:
- переход на TailwindCSS v3
- переинициализация configs

---

# GitHub

Repository:

```txt
flexsoft-company-site
```

---

# Current Progress

✅ Next.js setup  
✅ Tailwind setup  
✅ GitHub setup  
✅ Design system  
✅ Header  
✅ Hero section  
✅ Services section  
✅ Responsive structure  
✅ Reusable UI components

---

# Next Steps

## Planned Development

### UI
- Mobile menu
- Footer
- About section
- Projects section
- Testimonials
- Contact section

### Animation
- Framer Motion integration
- Scroll animations
- Hover interactions

### Backend/CMS
- Strapi or Sanity setup
- API integration
- Dynamic content
- Admin dashboard

### Production
- SEO optimization
- Metadata
- Sitemap
- Deployment

---

# Development Commands

## Start development

```bash
npm run dev
```

---

# Git Commands

## Commit changes

```bash
git add .
git commit -m "update"
git push
```

---

# Notes For Future Sessions

Проект строится как production-ready scalable architecture.

Main stack:

```txt
Next.js
TailwindCSS
Framer Motion
CMS (planned)
```

Style direction:
- premium
- modern
- minimal
- dark tech company aesthetic

Reference:
FlexSoft Figma Design
```