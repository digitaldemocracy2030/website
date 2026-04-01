# 広聴AI 3/25~4/1 のGitHub活動まとめ

今週は残念ながら完了(クローズ・マージ)したIssueやPRはありませんでしたが、新たに2件のIssueと1件のPRが作成されています。以下では、まず新規のIssue・PRについて解説し、続いて未完了のタスクに関する議論の概要をご紹介します。

---

## 今週完了した主なIssue / PR

- なし

上記のとおり、今週完了したタスクはありませんでした。

---

## 新規に作成されたIssue

### [Issue #820](https://github.com/digitaldemocracy2030/kouchou-ai/issues/820) 静的エクスポート環境向けのCSP設定ガイドをドキュメントに追加する

- 作成者: tokoroten  
- 内容:  
  - PlotlyでグラフをPNG出力する際、CSP (Content Security Policy) に `blob:` が含まれていないと画像がブロックされる問題が報告されました。  
  - Azure Static Web Appsなどの静的ホスティング環境では、Next.js側での設定だけでは不十分なケースがあるため、CSPの設定ガイドをドキュメントに追加するタスクとなります。  
  - [PR #819](https://github.com/digitaldemocracy2030/kouchou-ai/pull/819) との関連が示唆されています。  

### [Issue #818](https://github.com/digitaldemocracy2030/kouchou-ai/issues/818) PNGでダウンロードボタンが死んでいる可能性がある。

- 作成者: tokoroten  
- 内容:  
  - PNGでグラフをダウンロードするボタンが動作しない可能性があるため要調査。  
  - コンソールにて `img-src 'self' data:'` が原因で `blob:` をブロックしている警告が表示されたとのこと。  

---

## 新規に作成されたPR

### [PR #819](https://github.com/digitaldemocracy2030/kouchou-ai/pull/819) Fix Plotly PNG download blocked by CSP missing blob: in img-src

- 作成者: Copilot  
- 変更点:  
  - PlotlyのPNGエクスポートで `blob:` URL を利用している部分について、CSP上 `img-src 'self' data: blob:` という設定が必要なことを追記。  
  - `apps/public-viewer/next.config.ts` 内の `headers()` で `blob:` を追加。  
- 注意:  
  - `output: 'export'` (静的ビルド) の場合、Next.jsの仕様で `headers()` の設定がno-op（無効）になるため、Azure Static Web Appsなどのサーバ設定で `blob:` を追加する必要があると指摘されています。  

---

## 未完了のタスク・議論のポイント

- 「[Issue #820](https://github.com/digitaldemocracy2030/kouchou-ai/issues/820)」で提案されているCSP設定ガイドのドキュメント追加  
  - 静的ホスティング環境やCDNでのCSP設定をどうやって行うか、具体例について議論が始まりそうです。  
  - Azure Static Web Appsにおける `staticwebapp.config.json` やNginx、Cloudflareなどでの実践的な設定例が検討ポイントになっています。

- 「[Issue #818](https://github.com/digitaldemocracy2030/kouchou-ai/issues/818)」で取り上げられるPNGダウンロード問題  
  - 既に上記の[PR #819](https://github.com/digitaldemocracy2030/kouchou-ai/pull/819)で一部対応が進んでいますが、静的ビルドの場合にどう対応するかが引き続き議論の焦点です。

- 「[PR #819](https://github.com/digitaldemocracy2030/kouchou-ai/pull/819)」のレビューとマージに向けたディスカッション  
  - 追加で検証が必要か、ドキュメントの追記箇所はどこが適切かなど、さらなるレビューが見込まれます。  
  - 特に静的エクスポートのCSP対応は「docを整備すべき」という声が上がっているため、[Issue #820](https://github.com/digitaldemocracy2030/kouchou-ai/issues/820) と併せて集中的な協議がなされる見通しです。

---

## 参加の呼びかけ

- 上記のIssueやPRでは、CSPなどフロントエンドのセキュリティ設定がテーマとなっています。「静的ビルドでのCSP対策」や「Plotlyのエクスポート機能」に興味がある方の参加は大歓迎です。  
- 設定ガイドやドキュメント追加に関するアイデア、テスト検証への協力、レビューなど、OSSプロジェクトにおける多様なコントリビューションをお待ちしております。  

広聴AIは、開発者だけでなく非エンジニアの方の意見や要望もとても重要です。ぜひIssueやPull Requestへのコメント、GitHub Discussionsへの参加など、お気軽にご参加ください。今後もデジタル民主主義の発展に向けて、一緒にプロジェクトを盛り上げていきましょう！