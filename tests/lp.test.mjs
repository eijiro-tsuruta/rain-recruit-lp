import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("主要な訴求と安全表現が実装されている", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  for (const phrase of [
    "応募のハードルを下げ",
    "使い慣れたGoogle",
    "Rain Recruit自体は求人媒体ではありません",
    "最終判断は必ず企業",
    "性格・表情・声・容姿などを評価せず",
    "初期設定費",
    "98,000",
    "LINE Developersアカウント取得・初期設定サポート",
  ]) assert.match(page, new RegExp(phrase));

  for (const anchor of ["demo", "features", "flow", "functions", "pricing", "faq", "contact"]) {
    assert.match(page, new RegExp(`id=\\"${anchor}\\"`));
  }
});

test("SEO・問い合わせ設定・公開画像が揃っている", async () => {
  const [layout, config] = await Promise.all([
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/site-config.ts", root), "utf8"),
  ]);
  assert.match(layout, /openGraph/);
  assert.match(layout, /twitter/);
  assert.match(layout, /canonical/);
  assert.match(config, /NEXT_PUBLIC_CONTACT_URL/);
  assert.match(config, /NEXT_PUBLIC_DEMO_URL/);
  assert.match(config, /NEXT_PUBLIC_SITE_URL/);
  assert.match(config, /https:\/\/recruit\.rainaiproject\.com/);
  assert.doesNotMatch(config, /rain-recruit-lp\.vercel\.app/);

  for (const asset of ["og.png", "line-demo-qr.png", "line-application.png", "sheets-dashboard.png", "sheets-requests.png", "google-calendar.png"]) {
    await access(new URL(`public/${asset}`, root));
  }
});

test("旧Vercel URLは独自ドメインへ恒久転送される", async () => {
  const nextConfig = await readFile(new URL("next.config.ts", root), "utf8");

  assert.match(nextConfig, /rain-recruit-lp\.vercel\.app/);
  assert.match(nextConfig, /https:\/\/recruit\.rainaiproject\.com\/:path\*/);
  assert.match(nextConfig, /type: "host"/);
  assert.match(nextConfig, /permanent: true/);
});

test("専用UIを増やさない項目から取扱説明書PDFをダウンロードできる", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");

  assert.match(page, /href="\/rain-recruit-spreadsheet-manual\.pdf"/);
  assert.match(page, /download/);
  assert.match(page, /スプレッドシート取扱説明書をダウンロード/);
  await access(new URL("public/rain-recruit-spreadsheet-manual.pdf", root));
});
