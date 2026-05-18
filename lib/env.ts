/**
 * Environment Variable Configuration
 *
 * This module provides type-safe access to environment variables
 * with runtime validation for required values.
 */

// =============================================================================
// Public Environment Variables (Available in Browser & Server)
// =============================================================================

export const publicEnv = {
  site: {
    name: process.env.NEXT_PUBLIC_SITE_NAME || "Sena",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    version: process.env.NEXT_PUBLIC_SITE_VERSION || "0.1.0",
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "",
    author: process.env.NEXT_PUBLIC_SITE_AUTHOR || "",
    language: process.env.NEXT_PUBLIC_SITE_LANGUAGE || "en",
  },
  branding: {
    logoUrl: process.env.NEXT_PUBLIC_LOGO_URL || "/logo.svg",
    faviconUrl: process.env.NEXT_PUBLIC_FAVICON_URL || "/favicon.ico",
    ogImageUrl: process.env.NEXT_PUBLIC_OG_IMAGE_URL || "/og-image.png",
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
    version: process.env.NEXT_PUBLIC_API_VERSION || "v1",
  },
  auth: {
    providerName: process.env.NEXT_PUBLIC_AUTH_PROVIDER_NAME || "Credentials",
    enableMagicLink: process.env.NEXT_PUBLIC_ENABLE_MAGIC_LINK === "true",
    enableOAuth: process.env.NEXT_PUBLIC_ENABLE_OAUTH === "true",
  },
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    gtmContainerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID,
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
    plausibleApiHost: process.env.NEXT_PUBLIC_PLAUSIBLE_API_HOST,
  },
  features: {
    betaDashboard: process.env.NEXT_PUBLIC_FEATURE_BETA_DASHBOARD === "true",
    newOnboarding: process.env.NEXT_PUBLIC_FEATURE_NEW_ONBOARDING === "true",
    debugPanel: process.env.NEXT_PUBLIC_FEATURE_DEBUG_PANEL === "true",
  },
  social: {
    twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
    facebookAppId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
    githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL,
  },
} as const;

// =============================================================================
// Server-Only Environment Variables (Node.js Runtime Only)
// =============================================================================

function optionalEnv(key: string): string | undefined {
  return process.env[key];
}

export const serverEnv = {
  // Auth
  authSecret: optionalEnv("AUTH_SECRET"),
  authUrl: optionalEnv("AUTH_URL"),
  googleClientId: optionalEnv("GOOGLE_CLIENT_ID"),
  googleClientSecret: optionalEnv("GOOGLE_CLIENT_SECRET"),
  githubClientId: optionalEnv("GITHUB_CLIENT_ID"),
  githubClientSecret: optionalEnv("GITHUB_CLIENT_SECRET"),
  jwtSecret: optionalEnv("JWT_SECRET"),
  jwtMaxAge: optionalEnv("JWT_MAX_AGE") || "30d",

  // Database
  databaseUrl: optionalEnv("DATABASE_URL"),
  databaseDirectUrl: optionalEnv("DATABASE_DIRECT_URL"),
  databasePoolSize: Number(optionalEnv("DATABASE_POOL_SIZE")) || 10,

  // Cache
  redisUrl: optionalEnv("REDIS_URL"),
  redisToken: optionalEnv("REDIS_TOKEN"),

  // Email
  smtp: {
    host: optionalEnv("SMTP_HOST"),
    port: Number(optionalEnv("SMTP_PORT")) || 587,
    user: optionalEnv("SMTP_USER"),
    password: optionalEnv("SMTP_PASSWORD"),
    from: optionalEnv("SMTP_FROM"),
    secure: optionalEnv("SMTP_SECURE") === "true",
  },
  resendApiKey: optionalEnv("RESEND_API_KEY"),
  sendgridApiKey: optionalEnv("SENDGRID_API_KEY"),

  // Storage
  aws: {
    accessKeyId: optionalEnv("AWS_ACCESS_KEY_ID"),
    secretAccessKey: optionalEnv("AWS_SECRET_ACCESS_KEY"),
    region: optionalEnv("AWS_REGION") || "us-east-1",
    s3BucketName: optionalEnv("AWS_S3_BUCKET_NAME"),
    s3PublicUrl: optionalEnv("AWS_S3_PUBLIC_URL"),
  },
  cloudinary: {
    cloudName: optionalEnv("CLOUDINARY_CLOUD_NAME"),
    apiKey: optionalEnv("CLOUDINARY_API_KEY"),
    apiSecret: optionalEnv("CLOUDINARY_API_SECRET"),
  },

  // Payments
  stripe: {
    publishableKey: optionalEnv("STRIPE_PUBLISHABLE_KEY"),
    secretKey: optionalEnv("STRIPE_SECRET_KEY"),
    webhookSecret: optionalEnv("STRIPE_WEBHOOK_SECRET"),
    successUrl: optionalEnv("STRIPE_SUCCESS_URL"),
    cancelUrl: optionalEnv("STRIPE_CANCEL_URL"),
  },

  // Security
  corsOrigins: (optionalEnv("CORS_ORIGINS") || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
  rateLimit: {
    max: Number(optionalEnv("RATE_LIMIT_MAX")) || 100,
    windowMs: Number(optionalEnv("RATE_LIMIT_WINDOW_MS")) || 60000,
  },
  cspNonceSecret: optionalEnv("CSP_NONCE_SECRET"),

  // Third-party APIs
  openaiApiKey: optionalEnv("OPENAI_API_KEY"),
  anthropicApiKey: optionalEnv("ANTHROPIC_API_KEY"),

  // Debug
  debug: optionalEnv("DEBUG") === "true",
  logLevel: optionalEnv("LOG_LEVEL") || "info",
  prettyPrintLogs: optionalEnv("PRETTY_PRINT_LOGS") === "true",
} as const;

// =============================================================================
// Validation Helper
// =============================================================================

/**
 * Validates that all required environment variables are present.
 * Call this early in your application lifecycle (e.g., in layout.tsx or middleware).
 */
export function validateEnv(): void {
  const required: string[] = [];

  // Add required variables here based on your app needs
  // Example:
  // if (!serverEnv.authSecret) required.push("AUTH_SECRET");
  // if (!serverEnv.databaseUrl) required.push("DATABASE_URL");

  if (required.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${required.map((k) => `  - ${k}`).join("\n")}`
    );
  }
}
