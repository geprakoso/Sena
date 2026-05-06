This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Changelog

### 2026-05-04
- **add env setup**
  - Menambahkan konfigurasi environment variables (`.env.example`, `ENV_SETUP.md`, `lib/env.ts`).
  - Memperbarui `next.config.ts` untuk mendukung environment variables.
  - Menambahkan logo/icon baru (`public/images/logo/icon-only-resized.png`).
  - Memperbarui `.gitignore` dan komponen `Navbar`.

### 2026-05-03
- **Studies Case**
  - Menambahkan halaman detail studi kasus dinamis (`app/portfolio/[slug]/page.tsx`).
  - Mengimplementasikan komponen UI untuk studi kasus: Hero, Business Challenge, Product Essentials, Architecture Section, Architecture Detail, Tech Stack, Dev Timeline, Results, Testimonial, dan CTA.
  - Memperkaya data konten dan tipe data untuk mendukung studi kasus.

- **add portfolio page**
  - Menambahkan halaman utama (`app/(home)/page.tsx`) dan halaman portfolio (`app/portfolio/page.tsx`).
  - Mengimplementasikan komponen UI utama: Hero Section, Services Section, Case Studies Section, Approach Section, CTA Section, dan Trusted By.
  - Menambahkan komponen layout: Navbar dan Footer.
  - Menambahkan fitur filter pada halaman portfolio (`PortfolioFilter`).
  - Memperbarui styling global (`globals.css`) dan tipe data (`types/index.ts`).

### 2026-05-02
- **Initial commit from Create Next App**
  - Setup awal project Next.js.
  - Konfigurasi dasar termasuk TypeScript, ESLint, PostCSS, dan struktur aplikasi awal.
