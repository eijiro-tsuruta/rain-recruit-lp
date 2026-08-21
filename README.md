# Rain Recruit 企業向けサービスLP

LINEでの応募者対応と、Googleスプレッドシート／Googleカレンダーでの企業側管理を伝える、Rain Recruitの独立LPプロジェクトです。

## 技術構成

- Next.js 16（App Router）
- React 19
- TypeScript
- レスポンシブCSS
- Vercel向け標準Next.jsビルド

## ローカル確認

```bash
npm install
npm run dev
```

`http://localhost:3000` を開きます。

## 環境変数

`.env.example` を参照してください。すべて未設定でもローカル表示できますが、公開前に本番値を確認します。

| 変数 | 用途 |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | canonical、OGP、構造化データの基準URL |
| `NEXT_PUBLIC_CONTACT_URL` | 全問い合わせCTAのリンク先 |
| `NEXT_PUBLIC_OPERATOR_URL` | 運営者情報 |
| `NEXT_PUBLIC_PRIVACY_URL` | プライバシーポリシー |
| `NEXT_PUBLIC_TERMS_URL` | 利用規約 |

## 品質確認

```bash
npm run build
npm run lint
npx tsc --noEmit
npm test
npm audit --omit=dev
```

## 公開

本番公開は、次の順序だけで行います。

1. このプロジェクトの全公開ファイルをGitで管理する
2. GitHubの`main`へ意図したコミットを反映する
3. 接続済みVercelプロジェクトの自動デプロイ完了を確認する
4. 本番URLでステータス、表示内容、CTA、OGPを確認する

Vercel CLIからの本番デプロイ、手動の昇格、エイリアス差し替えは行いません。

接続先Vercelプロジェクト: `rain-recruit-lp`

## 数値訴求について

79%、+40%、44秒はIndeed Applyに関するIndeed公開データです。Rain Recruit固有の導入効果として表示せず、出典と非保証注記をLP内に併記しています。
