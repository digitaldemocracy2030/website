# デジタル民主主義WEB 7/23~7/30 のGitHub活動まとめ

この1週間(2025-07-23～2025-07-30)における「デジタル民主主義WEB」のGitHub活動をまとめました。  
新機能や改善の情報を追って、ぜひOSS開発に参加してみてください！

---

## 今週完了した内容 (マージされたPR)

今週は2件のPull Requestがマージされました。

### [PR #152](https://github.com/digitaldemocracy2030/website/pull/152) week19
- **作者:** kuboon  
- 新しい週報(week19)のまとめを反映する内容が中心です。  
- 表向き大きな改修はありませんが、継続的な更新に貢献されています。

### [PR #143](https://github.com/digitaldemocracy2030/website/pull/143) week18
- **作者:** kuboon  
- week18分の更新を反映しています。  
- こちらもマージすることでサイトを最新化し続け、安定性を保つことに寄与しています。

> **注:** 今週完了した機能はユーザ目線で大きな変化を感じにくい場合もありますが、OSSプロジェクトの持続的な更新にとって重要な貢献です。

---

## 現在進行中のトピック・議論 (未完了タスク)

以下はIssueやPRがまだクローズされていない、あるいは検討中のものです。興味のある方はぜひコメントやレビューでご参加ください。

### 新規に作成されたIssue

1. [Issue #153](https://github.com/digitaldemocracy2030/website/issues/153) Slack への参加ができない  
   - **作者:** grassfieldk  
   - Slackの参加ボタンが期限切れ、もしくは現在受付が終了している可能性について提案・質問が行われています。  
   - 「もう募集が終了してしまったのか？」というユーザの声を踏まえ、対応が検討されています。

2. [Issue #151](https://github.com/digitaldemocracy2030/website/issues/151) textlint を入れてもいいかもしれない  
   - **作者:** noritaka1166  
   - 記事やドキュメントが増えた際の文言の統一性を担保するために、textlintの導入を提案。  
   - 導入するかどうか、またルール設定などの議論が期待されています。

3. [Issue #147](https://github.com/digitaldemocracy2030/website/issues/147) [Question]Discouseサーバについて  
   - **作者:** takeruhukushima  
   - Discourseサーバーの公式提供があるのか？ もし無い場合は今後作る予定があるのか？ という質問です。  
   - コミュニティ拡大に向けた意見交換の場としてDiscourseが使えそうなので、実現できればユーザ同士の交流の幅が広がる可能性があります。

4. [Issue #145](https://github.com/digitaldemocracy2030/website/issues/145) CMSを導入する  
   - **作者:** moai-redcap  
   - WebサイトのCMS導入を検討。lume.land/cms/やazure上でのホスティングなどの案が挙がっています。  
   - 更新フローが整えば、コントリビューションのハードルがさらに下がる見込みです。

---

### 作成されたがまだマージされていないPR

1. [PR #150](https://github.com/digitaldemocracy2030/website/pull/150) chore: npm audit fix 実行  
   - **作者:** noritaka1166  
   - npmパッケージの脆弱性を修正するため、`npm audit fix` を実行したPRです。  
   - ビルドやLintの動作確認済みなので、マージされればセキュリティ面が強化されます。

2. [PR #149](https://github.com/digitaldemocracy2030/website/pull/149) refactor: オプショナルチェーンを使用  
   - **作者:** noritaka1166  
   - コードをよりコンパクトにし、可読性を向上させるリファクタリングです。  
   - 細かな調整ですが、将来的なバグ予防にも役立ちます。

3. [PR #148](https://github.com/digitaldemocracy2030/website/pull/148) Footerコンポーネントから不要なspanを削除  
   - **作者:** noritaka1166  
   - 空の<span>タグを削除し、UIを微調整。  
   - 小さな修正ですが、見た目の洗練やコードベースの軽量化に繋がっています。

4. [PR #146](https://github.com/digitaldemocracy2030/website/pull/146) feat: Polimoney Webサイトのリンクの追加  
   - **作者:** takeruhukushima  
   - トップページやPolimoneyページにPolimoney公式サイトへのリンクを追加。  
   - 新機能として、サイトから他プロジェクトへの動線が強化されています。

---

### 更新中のPR

- [PR #142](https://github.com/digitaldemocracy2030/website/pull/142) Replace Twitter links with proper embeds using XEmbed component  
  - **作者:** Shutaro+Devin (「Shutaro + AIアシスタント」としての共同作業)  
  - 既存のTwitterリンクを埋め込みに置き換え、よりリッチな表示を可能にする機能の提案です。  
  - まだマージには至っていませんが、ページのUI/UXを大幅に向上させる可能性があるため、注目度が高いです。

---

## 参加の呼びかけ

- 小さなPRでも大歓迎です。ドキュメントの修正や空タグの削除といった細かな改良が積み重なることで、プロジェクトがより良いものになっています。  
- 今週も moai-redcap さんや takeruhukushima さん、noritaka1166 さん、kuboon さんなど、多様なコントリビューターが参加しています。  
- Slackの招待やDiscourseサーバーについてのIssueもあるため、コミュニティ運営や参加に興味のある方はぜひ議論に加わってください。

「デジタル民主主義WEB」は常に新しいアイデアや改善を歓迎しています。気になるIssueやPRがあればぜひコメント・レビュー・PR送信でご参加ください！  