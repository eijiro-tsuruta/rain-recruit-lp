import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Rain Recruit｜LINEで応募、Googleで採用管理",
  description: "応募者対応をLINEでスムーズに。企業の採用管理は、使い慣れたGoogleで。質問・応募・面接予約までをつなぐ採用支援サービスです。",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "Rain Recruit",
    title: "Rain Recruit｜LINEで応募、Googleで採用管理",
    description: "応募者対応をLINEでスムーズに。企業の採用管理は、使い慣れたGoogleで。",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Rain Recruitのサービスイメージ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rain Recruit｜LINEで応募、Googleで採用管理",
    description: "応募者対応をLINEでスムーズに。企業の採用管理は、使い慣れたGoogleで。",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
