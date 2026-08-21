export const siteConfig = {
  demoUrl:
    process.env.NEXT_PUBLIC_DEMO_URL ?? "https://lin.ee/Swo1FIm",
  contactUrl:
    process.env.NEXT_PUBLIC_CONTACT_URL ??
    "mailto:rainaiproject@gmail.com?subject=Rain%20Recruit%E5%B0%8E%E5%85%A5%E7%9B%B8%E8%AB%87",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://rain-recruit-lp.vercel.app",
  operatorUrl:
    process.env.NEXT_PUBLIC_OPERATOR_URL ?? "https://www.rainaiproject.com/",
  privacyUrl:
    process.env.NEXT_PUBLIC_PRIVACY_URL ?? "https://www.rainaiproject.com/privacy",
  termsUrl:
    process.env.NEXT_PUBLIC_TERMS_URL ?? "https://www.rainaiproject.com/terms",
} as const;
