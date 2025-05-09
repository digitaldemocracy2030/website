# デジタル民主主義2030 第3週（3/27～4/2）のSlackまとめ

以下では、2025年3月27日から4月2日までの1週間に「デジタル民主主義2030」Slackで起こった出来事を、チャンネルごとに簡潔に解説します。

---

## 今週(3/27〜4/2)の主な出来事

今週は **9チャンネル** で合計 **126件** のメッセージがやり取りされました。いくつかの主要な開発プロジェクトやイベント準備が中心的に盛り上がっているようです。

---

### #2_開発_広聴ai (45件のメッセージ)

- **コード整備**  
  PrettierやRuffなどフォーマッター周りの相談があり、MakefileやDocker関連のリファクタが進行中。開発者同士で lint 設定を統一しようとしているところが印象的でした。

- **デプロイ運用・データの永続化問題**  
  Azure Container Appsなどクラウド環境にデプロイする際、新バージョンをリリースすると既存のレポートデータが消えてしまう問題が議論されました。「S3など外部ストレージと連携したほうがいいのでは？」というアイデアが出ています。

- **大規模データへの対応**  
  「3万件などの大規模パブコメにも耐えうる設計にしたい」という声があり、embeddingのメモリ使用やクラスタリング性能をどう改善するかなどの話題が上がっています。

---

### #2_開発_いどばた (30件のメッセージ)

- **環境構築・GitHub連携**  
  OpenRouter APIキーや.env設定、biome.js導入など、環境を整える話が多め。「認証エラーで動かない」「フロントとAPIのキーが食い違う」などが話題に。

- **UI/UX構想・チャット画面統合**  
  議論画面とレポート画面をまとめたい、感謝フィードバックを入れてユーザーのモチベーションを高めたい、といったアイデアが出ています。

- **SNSボットとの連携**  
  ツイッター側で議論ボットを動かしたり、チャット画面への導線をどうするか検討。「長期的には議論AIとの対話がスムーズになる設計が必須」という話も。

---

### #0412_1day_hackathon (28件のメッセージ)

- **4/12開催のハッカソン告知・準備**  
  「参加者をどう集めるか」「当日はアンカンファレンス形式で進めたい」「メンター体制はどうするか」など、具体的な進行が話し合われています。
- **オンライン組のサポート**  
  現地に行けない人でもオンラインで支援できる体制を検討する動きあり。

---

### #1_雑談 (10件のメッセージ)

- **広聴AI関連動画**  
  パブコメ荒らし問題に対する対策案など、YouTube動画のリンク共有。
- **エイプリルフールの話題**  
  「何かジョークを仕掛けるべきか？」「コンプラがあるし難しいね」など軽めのトークがありました。

---

### #2_開発_デジ民ウェブサイト (5件のメッセージ)

- **LP（ランディングページ）改善**  
  「デジタル民主主義2030全体を紹介するウェブサイトをどう構成するか？」が議題に。トップ画像や構成案、Figmaでのワイヤーフレーム化などの話が進んでいます。

---

### #1_freetalk-in-english (3件のメッセージ)

- **海外発表報告**  
  d/acc day in TaipeiでのDD2030紹介スライド共有。「英語で議論したい人はこちらへ」という呼びかけ。

---

### #2_新しいプロジェクトの種 (1件のメッセージ)

- **ログ自動化構想**  
  Slackのログを定期的にJSONエクスポートし、ChatGPTなどで週次レポートを作る仕組みを試行。「将来的にSlackログから自動要約レポートを生成したい」というアイデアが出されています。

---

## まとめ

- 広聴AI・いどばた の2大プロジェクトで開発が盛り上がり、デプロイやデータ保存の課題を解決する議論が中心でした。
- 4/12ハッカソンの準備が活性化。アンカンファレンス形式など、当日の進め方を模索しています。
- ウェブサイト整備やSNS議論ボットなど、コミュニティ向けの情報発信や連携拡大にも動きが活発です。

「興味はあるけどまだ参加していない」という方は、ぜひ気になるプロジェクトのチャンネルを覗いてみてください。週次やイベント前のタイミングで初参加する方も多いので、お気軽にどうぞ！