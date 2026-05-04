# Environment Variables Guide

This project uses a professional environment variable setup for Next.js.

## Files

| File | Purpose | Git |
|---|---|---|
| `.env.example` | Template with all available variables and documentation | ✅ Committed |
| `.env.local` | Your actual local development values | ❌ Ignored |
| `lib/env.ts` | Type-safe accessor and validation utility | ✅ Committed |

## Quick Start

1. **Copy the example file** (if starting fresh):
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your values** in `.env.local`

3. **Access in code**:
   ```ts
   import { publicEnv, serverEnv } from "@/lib/env";

   // Browser + Server (must use NEXT_PUBLIC_ prefix)
   console.log(publicEnv.site.name);

   // Server only (API routes, server components, actions)
   console.log(serverEnv.databaseUrl);
   ```

## Rules

- **Public variables**: Must start with `NEXT_PUBLIC_`. Available everywhere.
- **Server variables**: No prefix. Available only in server code.
- **Never commit secrets**: `.env.local` is gitignored. Only commit `.env.example`.
- **Runtime changes**: Client-side public env vars are baked at build time. Server vars are read at request time.

## Validation

Call `validateEnv()` early in your app to ensure required variables are present:

```ts
import { validateEnv } from "@/lib/env";
validateEnv();
```

## Categories Included

- **Site**: Name, URL, version, description, language
- **API**: Base URL, version
- **Auth**: OAuth credentials, JWT settings, magic link toggles
- **Analytics**: Google Analytics, GTM, Plausible
- **Database**: Connection strings, pool size
- **Cache**: Redis configuration
- **Email**: SMTP, Resend, SendGrid
- **Storage**: AWS S3, Cloudinary
- **Payments**: Stripe (keys, webhooks, redirect URLs)
- **Security**: CORS origins, rate limiting, CSP
- **Third-party**: OpenAI, Anthropic
- **Feature Flags**: Toggle features without redeploying

## Deployment

On Vercel, add environment variables in the project dashboard under **Settings > Environment Variables**.
