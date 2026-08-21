import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "./site-config";

export const metadata: Metadata = {
  title: "Rain Recruit｜LINEで応募、Googleで採用管理",
  description:
    "応募者対応をLINEでスムーズに。企業の採用管理は、使い慣れたGoogleで。質問・応募・面接予約までをつなぐ採用支援サービスです。",
};

const challenges = [
  ["01", "応募に気づくのが遅れる", "忙しい時間帯や営業時間外の応募に、すぐ対応できない。"],
  ["02", "同じ質問対応が続く", "仕事内容や条件について、同じ回答を何度も繰り返している。"],
  ["03", "面接調整の往復が多い", "候補日の確認、再調整、キャンセル対応で連絡が増える。"],
  ["04", "情報があちこちに散らばる", "求人媒体、メール、チャット、カレンダーを行き来している。"],
];

const functions = [
  ["吹", "LINE応募フロー", "企業が承認した質問順に沿って、応募情報を会話形式で収集します。"],
  ["?", "求人Q&A", "企業が用意したFAQをもとに、求人に関するよくある質問へ回答します。"],
  ["整", "AI要約", "回答を要約し、必須条件・希望条件・要確認事項に整理します。"],
  ["表", "応募者一覧", "応募者情報を、企業所有のGoogleスプレッドシートで確認できます。"],
  ["日", "面接管理", "候補日時の提示から選択、Googleカレンダー登録までを支援します。"],
  ["通", "担当者LINE通知", "応募完了時に企業担当者へLINEで知らせ、初動を支援します。"],
  ["依", "対応依頼", "日程変更・キャンセル・相談など、人の対応が必要な案件を整理します。"],
  ["複", "複数求人対応", "求人ごとに導線、質問、FAQ、条件を分けて運用できます。"],
];

const flow = [
  ["01", "求人にQRコードを掲載", "既存の求人広告を入口にします。Rain Recruit自体は求人媒体ではありません。"],
  ["02", "応募者がLINEを追加", "応募者は新しいアプリを入れず、LINEから質問・応募へ進みます。"],
  ["03", "質問・応募をLINEで完了", "承認済みの質問順で情報を収集し、AIが内容を整理・要約します。"],
  ["04", "担当者がGoogleで確認", "応募完了通知を受け、スプレッドシートで内容を確認して面接を判断します。"],
  ["05", "面接候補をLINEへ送信", "企業が入力した候補日時から、応募者が都合のよい時間を選びます。"],
  ["06", "カレンダーへ予定登録", "確定した面接をGoogleカレンダーへ登録。変更依頼も管理します。"],
];

const faqs = [
  ["求人広告も作ってくれますか？", "Rain Recruitは求人媒体ではなく、既存の求人広告から応募後のコミュニケーションをつなぐサービスです。求人原稿制作の対応範囲は導入相談時にご確認ください。"],
  ["応募者は新しいアプリが必要ですか？", "必要ありません。普段お使いのLINEから質問、応募、面接日時の選択まで進められます。"],
  ["AIが不採用を決めますか？", "いいえ。AIの役割は回答支援と情報整理・要約です。面接実施や採用・不採用の最終判断は、必ず企業の採用担当者が行います。"],
  ["企業側に専用管理画面は必要ですか？", "必要ありません。Googleスプレッドシートで応募者を確認し、Googleカレンダーで面接予定を管理します。"],
  ["複数求人に対応できますか？", "はい。求人ごとにQRコード・LINE導線、質問、FAQ、条件を設定できます。詳細な対応数は導入時に確認します。"],
  ["日程変更やキャンセルにも対応できますか？", "はい。応募者からの変更・キャンセル・相談を対応依頼として整理し、担当者の確認につなげます。"],
  ["自社のLINE公式アカウントを利用できますか？", "はい。導入企業が所有するLINE公式アカウントへの接続を前提としています。接続条件はヒアリング時に確認します。"],
  ["応募者データは誰が所有しますか？", "LINE公式アカウント、Googleアカウント、応募者データは導入企業が所有します。具体的な取扱いは契約・運用設計時に明確にします。"],
  ["面接評価・記録付きプランでは、AIが応募者を採点しますか？", "いいえ。企業が定めた評価項目に沿って、採用担当者が入力したスコアや所見を整理する機能です。性格・表情・声・容姿などをAIが評価したり、スコアだけで採用・不採用を決定したりするものではありません。"],
];

const Arrow = () => <span aria-hidden="true">→</span>;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Rain Recruit",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, LINE",
    description: "LINEでの応募者対応とGoogleでの採用管理をつなぐ採用支援サービス",
    url: siteConfig.siteUrl,
    offers: [
      { "@type": "Offer", name: "スタンダード", price: "25000", priceCurrency: "JPY" },
      { "@type": "Offer", name: "面接評価・記録付き", price: "35000", priceCurrency: "JPY" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rain Recruit トップ">
          <span className="brand-mark" aria-hidden="true">R</span>
          <span>Rain Recruit</span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#demo">LINE体験</a>
          <a href="#features">特徴</a>
          <a href="#flow">ご利用の流れ</a>
          <a href="#pricing">料金</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button button-small" href={siteConfig.contactUrl}>導入相談</a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span /> LINE採用コミュニケーション</p>
            <h1>応募のハードルを下げ、<br />採用対応をもっと軽やかに。</h1>
            <p className="hero-lead">応募者対応をLINEでスムーズに。<br />企業の採用管理は、使い慣れたGoogleで。</p>
            <p className="hero-note">Rain Recruitは、既存の求人広告から質問・応募・面接予約までをつなぐ採用支援サービスです。</p>
            <div className="hero-actions">
              <a className="button" href={siteConfig.demoUrl} target="_blank" rel="noopener noreferrer">LINE応募を体験する <Arrow /></a>
              <a className="text-link" href="#pricing">料金を見る <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="hero-visual" aria-label="LINE、AI整理、GoogleスプレッドシートとGoogleカレンダーの連携イメージ">
            <div className="visual-glow" />
            <div className="phone-card">
              <div className="phone-top"><span className="avatar">R</span><b>Rain Recruit</b><i /></div>
              <div className="chat chat-right">応募する</div>
              <div className="chat chat-left">応募を開始します。<br />まず、お名前を教えてください。</div>
              <div className="phone-menu"><span>＋<small>応募</small></span><span>?</span><span>人</span></div>
            </div>
            <div className="flow-line flow-line-one" />
            <div className="ai-node"><span>AI</span><small>整理・要約</small></div>
            <div className="flow-line flow-line-two" />
            <div className="google-stack">
              <div className="google-card"><span className="app-icon sheet-icon">▦</span><div><b>応募者を確認</b><small>Google スプレッドシート</small></div><em>確認</em></div>
              <div className="google-card"><span className="app-icon calendar-icon">21</span><div><b>面接予定を管理</b><small>Google カレンダー</small></div><em>確定</em></div>
            </div>
            <div className="visual-caption"><span>応募者</span><span>Rain Recruit</span><span>採用担当者</span></div>
          </div>
        </section>

        <section className="proof-strip" aria-labelledby="proof-title">
          <div className="section-shell proof-inner">
            <div className="proof-intro">
              <p className="section-kicker">WHY MOBILE FIRST</p>
              <h2 id="proof-title">応募しやすさは、<br />応募機会を左右する。</h2>
            </div>
            <div className="proof-number"><strong>79<sup>%</sup></strong><p>Indeedで完了した応募のうち、<br />モバイル経由の割合</p></div>
            <div className="proof-number"><strong>+40<sup>%</sup></strong><p>Indeed Apply対応求人の<br />平均応募開始数</p></div>
            <div className="proof-number"><strong>44<sup>秒</sup></strong><p>Indeed Applyで応募を<br />完了する時間の中央値</p></div>
          </div>
          <p className="source-note section-shell">出典：Indeed「Indeed Apply: Attract Candidates with a Simplified Application Process」（世界データ、2026年5月更新）。数値はIndeed Applyに関するもので、Rain Recruitの導入効果を保証するものではありません。</p>
        </section>

        <section className="section demo-section" id="demo" aria-labelledby="demo-title">
          <div className="section-shell demo-layout">
            <div className="demo-copy">
              <p className="section-kicker">TRY IT ON LINE</p>
              <h2 id="demo-title">説明を読むより、<br />まずLINEで体験。</h2>
              <p>応募者が実際に使うLINEで、求人への質問から応募、面接日時の選択までの流れをお試しいただけます。</p>
              <ol className="demo-steps" aria-label="LINE応募体験の内容">
                <li><span>01</span>求人について質問</li>
                <li><span>02</span>LINEで応募回答</li>
                <li><span>03</span>面接日時を選択</li>
              </ol>
              <a className="button demo-button" href={siteConfig.demoUrl} target="_blank" rel="noopener noreferrer">LINE応募を体験する <Arrow /></a>
              <p className="demo-disclaimer">※デモ求人です。実際の求人への応募にはなりません。案内に沿ってサンプル情報でお試しください。</p>
            </div>
            <a className="qr-card" href={siteConfig.demoUrl} target="_blank" rel="noopener noreferrer" aria-label="LINEでRain Recruitの応募デモを開く">
              <span className="qr-badge">無料デモ</span>
              <Image src="/line-demo-qr.png" width={360} height={360} sizes="280px" alt="Rain RecruitのLINE応募デモを開くQRコード" />
              <strong>スマートフォンで読み取る</strong>
              <small>クリックしてLINEを開くこともできます</small>
            </a>
          </div>
        </section>

        <section className="section challenge-section" aria-labelledby="challenge-title">
          <div className="section-shell">
            <div className="section-heading split-heading">
              <div><p className="section-kicker">RECRUITING CHALLENGES</p><h2 id="challenge-title">応募は来ている。<br />でも、対応が追いつかない。</h2></div>
              <p>日々の業務と並行する採用対応。小さな遅れや連絡の往復が、応募者との接点を失う原因になります。</p>
            </div>
            <div className="challenge-grid">
              {challenges.map(([number, title, description]) => <article className="challenge-card" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section change-section" id="features" aria-labelledby="change-title">
          <div className="section-shell">
            <div className="section-heading center-heading"><p className="section-kicker">A BETTER FLOW</p><h2 id="change-title">応募者には、いつものLINE。<br />企業には、いつものGoogle。</h2><p>新しい操作を増やさず、応募から面接までの情報をひとつの流れにします。</p></div>
            <div className="role-flow">
              <article><span className="role-icon line-role">吹</span><small>応募者</small><h3>LINEで完結</h3><p>質問・応募・面接予約まで、スマートフォンからスムーズに。</p></article>
              <i aria-hidden="true">→</i>
              <article><span className="role-icon ai-role">AI</span><small>Rain Recruit</small><h3>情報を整理</h3><p>回答を収集し、要約。確認すべき条件を見やすく整理します。</p></article>
              <i aria-hidden="true">→</i>
              <article><span className="role-icon google-role">G</span><small>企業</small><h3>Googleで判断</h3><p>スプレッドシートで確認し、採用担当者が面接を判断します。</p></article>
              <i aria-hidden="true">→</i>
              <article><span className="role-icon calendar-role">21</span><small>面接</small><h3>予定を共有</h3><p>確定した日時をGoogleカレンダーで管理します。</p></article>
            </div>
          </div>
        </section>

        <section className="section real-ui-section" aria-labelledby="real-ui-title">
          <div className="section-shell">
            <div className="real-ui-intro"><p className="section-kicker">FAMILIAR TOOLS</p><h2 id="real-ui-title">専用UIを、<br />あえて増やさない。</h2><p>毎日使うGoogleの中に採用業務を置くから、新しい管理画面を覚える必要はありません。権限のある担当者が、PCでもスマートフォンでも同じ情報を確認できます。</p><ul><li>導入時の操作教育をシンプルに</li><li>応募者・面接・対応依頼を迷わず確認</li><li>企業がアカウントとデータを所有</li></ul></div>
            <div className="ui-showcase">
              <figure className="ui-window ui-main"><div className="window-bar"><span/><span/><span/><small>Google スプレッドシート</small></div><Image src="/sheets-dashboard.png" width={2000} height={1160} sizes="(max-width: 900px) 90vw, 620px" alt="Rain RecruitのGoogleスプレッドシート操作メニュー画面" /><figcaption>設定から応募・面接確認まで、入口をひとつに。</figcaption></figure>
              <figure className="ui-window ui-sub"><div className="window-bar"><span/><span/><span/><small>対応依頼</small></div><Image src="/sheets-requests.png" width={2000} height={1160} sizes="(max-width: 900px) 75vw, 480px" alt="変更、キャンセル、相談を管理する対応依頼シート" /><figcaption>人の対応が必要な依頼だけを、分かりやすく。</figcaption></figure>
            </div>
          </div>
        </section>

        <section className="section flow-section" id="flow" aria-labelledby="flow-title">
          <div className="section-shell">
            <div className="section-heading split-heading"><div><p className="section-kicker">HOW IT WORKS</p><h2 id="flow-title">応募から面接まで、<br />ひとつながり。</h2></div><p>応募者への案内と、企業側の確認・判断を切り分けながら、連絡の往復を減らします。</p></div>
            <ol className="flow-list">
              {flow.map(([number,title,description]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}
            </ol>
            <div className="screen-pair">
              <figure className="line-screen"><div className="screen-label"><span>応募者</span><b>LINEで応募</b></div><div className="screen-crop"><Image src="/line-application.png" width={828} height={1600} sizes="(max-width: 560px) 88vw, 360px" alt="Rain RecruitのLINE応募画面。応募開始と質問への回答を会話形式で行う" /></div></figure>
              <div className="pair-arrow" aria-hidden="true">→</div>
              <figure className="calendar-screen"><div className="screen-label"><span>企業</span><b>Googleで予定確認</b></div><div className="screen-crop"><Image src="/google-calendar.png" width={2000} height={1170} sizes="(max-width: 560px) 88vw, 650px" alt="Googleカレンダーに登録された採用面接の予定" /></div></figure>
            </div>
            <p className="demo-note">※掲載画面は開発中のデモ環境です。表示内容は運用設定により異なります。</p>
          </div>
        </section>

        <section className="section functions-section" id="functions" aria-labelledby="functions-title">
          <div className="section-shell">
            <div className="section-heading center-heading"><p className="section-kicker">FUNCTIONS</p><h2 id="functions-title">採用担当者の確認を、<br />必要なところに集中させる機能。</h2></div>
            <div className="function-grid">
              {functions.map(([icon,title,description]) => <article className="function-card" key={title}><span>{icon}</span><h3>{title}</h3><p>{description}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section pricing-section" id="pricing" aria-labelledby="pricing-title">
          <div className="section-shell">
            <div className="section-heading center-heading"><p className="section-kicker">PRICING</p><h2 id="pricing-title">必要な機能を、<br />分かりやすい月額で。</h2><p>LINE応募からGoogleでの採用管理まで。面接評価・記録の必要性に合わせて選べます。</p></div>
            <div className="pricing-grid">
              <article className="price-card">
                <div className="price-card-head"><span>STANDARD</span><h3>スタンダード</h3><p>応募対応と面接調整をスムーズにしたい企業へ。</p></div>
                <p className="price"><small>月額</small><strong>25,000</strong><span>円</span></p>
                <p className="tax-note">税別</p>
                <ul>
                  <li>LINEでの求人質問・応募フロー</li>
                  <li>応募内容のAI整理・要約</li>
                  <li>Googleスプレッドシートでの確認</li>
                  <li>面接候補送信・カレンダー登録</li>
                  <li>担当者通知・対応依頼・複数求人</li>
                </ul>
                <a className="button price-button" href={siteConfig.contactUrl}>このプランを相談する <Arrow /></a>
              </article>
              <article className="price-card price-card-featured">
                <div className="recommended">面接の記録まで一元化</div>
                <div className="price-card-head"><span>INTERVIEW SUPPORT</span><h3>面接評価・記録付き</h3><p>面接内容を共通項目で整理し、社内確認をしやすく。</p></div>
                <p className="price"><small>月額</small><strong>35,000</strong><span>円</span></p>
                <p className="tax-note">税別</p>
                <ul>
                  <li>スタンダードのすべての機能</li>
                  <li>企業が定めた面接評価項目</li>
                  <li>担当者が入力したスコア・所見の整理</li>
                  <li>応募回答と面接記録の一元確認</li>
                  <li>要確認事項の見える化</li>
                </ul>
                <a className="button price-button" href={siteConfig.contactUrl}>このプランを相談する <Arrow /></a>
              </article>
            </div>
            <div className="pricing-notes">
              <p>※料金は1社あたりの月額・税別です。初期設定費、対応求人・応募数、個別設定の範囲は導入内容を確認のうえご案内します。</p>
              <p>※面接評価・記録付きプランは、企業が設定した項目と担当者の記録を整理する機能です。AIが人物を自動採点したり、採用・不採用を決定したりするものではありません。</p>
            </div>
          </div>
        </section>

        <section className="section safety-section" aria-labelledby="safety-title">
          <div className="section-shell safety-layout">
            <div className="safety-copy"><p className="section-kicker light">RESPONSIBLE BY DESIGN</p><h2 id="safety-title">AIに任せきらない。<br />判断は、人が行う。</h2><p>Rain Recruitは、採用判断を置き換えるためのサービスではありません。AIの役割と企業の役割を明確に分けて運用します。</p><a className="button button-light" href={siteConfig.contactUrl}>安心設計について相談する <Arrow /></a></div>
            <div className="safety-list">
              <article><span>01</span><div><h3>最終判断は採用担当者</h3><p>面接実施、採用・不採用の最終判断は必ず企業が行います。</p></div></article>
              <article><span>02</span><div><h3>AIは情報整理と回答支援</h3><p>性格・表情・声・容姿などを評価せず、回答の整理・要約に限定します。</p></div></article>
              <article><span>03</span><div><h3>承認済みの質問・ルール</h3><p>企業が事前に確認した質問順、FAQ、客観的条件にもとづき制御します。</p></div></article>
              <article><span>04</span><div><h3>企業がアカウントとデータを所有</h3><p>LINE公式アカウント、Googleアカウント、応募者データは導入企業が所有します。</p></div></article>
            </div>
          </div>
        </section>

        <section className="section onboarding-section" aria-labelledby="onboarding-title">
          <div className="section-shell">
            <div className="section-heading center-heading"><p className="section-kicker">ONBOARDING</p><h2 id="onboarding-title">導入前に一緒に整え、<br />確認してから始めます。</h2></div>
            <ol className="onboarding-list">
              {["ヒアリング","求人・質問・FAQ・条件設定","LINE／Google接続","動作テスト","運用開始"].map((item,index) => <li key={item}><span>{String(index+1).padStart(2,"0")}</span><b>{item}</b></li>)}
            </ol>
            <p className="onboarding-note">運用中の求人内容や応募フローに合わせて、必要な設定を確認します。</p>
          </div>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="section-shell faq-layout">
            <div className="faq-title"><p className="section-kicker">FAQ</p><h2 id="faq-title">よくあるご質問</h2><p>導入前に気になる点をまとめました。</p></div>
            <div className="faq-list">
              {faqs.map(([question,answer],index) => <details key={question} open={index===0}><summary><span>Q</span>{question}<i aria-hidden="true" /></summary><div className="answer"><span>A</span><p>{answer}</p></div></details>)}
            </div>
          </div>
        </section>

        <section className="final-cta" id="contact" aria-labelledby="contact-title">
          <div className="rain-dots" aria-hidden="true"><i/><i/><i/><i/><i/></div>
          <p className="section-kicker light">LET&apos;S TALK</p>
          <h2 id="contact-title">応募対応の流れを、<br />一緒に軽くしませんか。</h2>
          <p>現在の求人・応募対応を伺い、Rain Recruitでどこまで整えられるかをご案内します。</p>
          <a className="button button-light cta-large" href={siteConfig.contactUrl}>Rain Recruitの導入について相談する <Arrow /></a>
          <small>まだ導入が決まっていなくてもご相談いただけます。</small>
        </section>
      </main>

      <footer>
        <div className="footer-main section-shell"><a className="brand footer-brand" href="#top"><span className="brand-mark">R</span><span>Rain Recruit<small>LINE採用コミュニケーション</small></span></a><div className="footer-links"><a href={siteConfig.operatorUrl}>運営者情報</a><a href={siteConfig.privacyUrl}>プライバシーポリシー</a><a href={siteConfig.termsUrl}>利用規約</a><a href={siteConfig.contactUrl}>お問い合わせ</a></div></div>
        <div className="footer-bottom section-shell"><p>Rain Recruitは求人媒体ではありません。</p><small>© 2026 Rain AI Project</small></div>
      </footer>
    </>
  );
}
