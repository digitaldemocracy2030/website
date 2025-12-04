# デジタル民主主義WEB 4/23~4/30 のGitHub活動まとめ

今週(2025/4/23〜4/30)は「デジタル民主主義WEB」のリポジトリで多くのIssueがクローズされ、新機能を中心に大きな進展がありました。また、新しく立ち上がったタスクや議論も盛り上がりを見せています。プロジェクトに興味を持たれた方は、ぜひIssueやPRにコメントしてみてください！

---

## 今週完了した主なトピック

### Docsページの実装とビルド関連の修正  
- [Issue #41](https://github.com/digitaldemocracy2030/website/issues/41) (Docsページの計画を建てる) が完了し、実際のDocsページ群の作成が行われました。  
- 大きく関連するPRとして、下記がマージされました:  
  - [PR #48](https://github.com/digitaldemocracy2030/website/pull/48) (Docsページ制作完了) → 作者: moai-redcap  
  - [PR #56](https://github.com/digitaldemocracy2030/website/pull/56) (docsページBuildエラー対応) → 作者: moai-redcap  
  - [PR #53](https://github.com/digitaldemocracy2030/website/pull/53) (fix Error: Route "/docs/[...slug]" …) → 作者: moai-redcap  
  - これらの修正により、ドキュメント関連ページのビルドエラーが解消されました。今後はユーザがDocsを使って具体的な手順を学びやすくなる見込みです。

### いどばたの活用事例ページへのリンク
- [Issue #39](https://github.com/digitaldemocracy2030/website/issues/39) (いどばたの活用事例ページへのリンクを貼る) が完了し、サイト内から直接該当ページへ飛べるようになりました。小さな修正ですが、OSS利用者にとって必要な導線が整ったということで大きな意義があります。

### Githubのセキュリティ通知対応
- [Issue #36](https://github.com/digitaldemocracy2030/website/issues/36) (Githubのセキュリティ通知直す) の対応が完了しており、関連するPull Requestがいくつかマージされています。  
  - 具体的なPRとして [PR #46](https://github.com/digitaldemocracy2030/website/pull/46), [PR #45](https://github.com/digitaldemocracy2030/website/pull/45) などで Next.js のアップデートを実施。これにより潜在的な脆弱性が修正され、サイトの安定運用に貢献しています。

### アクティビティページのデザイン改善
- [Issue #29](https://github.com/digitaldemocracy2030/website/issues/29) (アクティビティページのデザイン改善) がクローズされました。  
  - 連動するPRとして [PR #35](https://github.com/digitaldemocracy2030/website/pull/35) (広聴AIページに歴史セクションを追加) や [PR #34](https://github.com/digitaldemocracy2030/website/pull/34) (week6) などが統合され、デザイン・コンテンツ両面の改善が進んでいます。  

### 広聴AI v2.0.0 リリース周りのドキュメント整備  
- [PR #47](https://github.com/digitaldemocracy2030/website/pull/47) (Add news page for kouchou-ai v2.0.0 release) や [PR #57](https://github.com/digitaldemocracy2030/website/pull/57) (広聴AI v2.0.0リリースページにコントリビューターリストを追加) がマージされ、リリース情報や貢献者リストが明示化されました。  
  - これにより、本プロジェクトに参加する多様なエンジニアの活動が可視化され、OSSプロジェクトの魅力がさらに高まりました。  
  - コントリビューターリストを充実させる動きは、参加希望者のモチベーションにもつながります。

---

## まだ進行中の議論やタスク

### PRプレビューデプロイメントの実装  
- [Issue #50](https://github.com/digitaldemocracy2030/website/issues/50) → これを実装する [PR #52](https://github.com/digitaldemocracy2030/website/pull/52) が作成されましたが、まだマージはされていません。  
  - 作者は NISHIO Hirokazu+Devin で、PRがマージされると自動でPRプレビュー環境が生成されるようになります。  
  - プレビュー環境導入はレビュー効率の向上に直結するため、OSS参加者にとって大変メリットがあります。

### ボードメンバーをaboutページに追加
- [Issue #43](https://github.com/digitaldemocracy2030/website/issues/43) では、新たなボードメンバーの紹介が検討されています。  
  - 画像やSNSリンクの扱いなどが議論されており、ウェブサイトにおけるメンバーの役割説明が期待されています。  
  - ボードや貢献者の顔が見えることで組織への信頼感が高まるため、コミュニティ貢献にもつながるでしょう。

### 宇多津町のブロードリスニング事例を追加
- [PR #58](https://github.com/digitaldemocracy2030/website/pull/58) にて、新たな市町村導入事例を紹介するページの追加が提案されています。  
  - 作者は NISHIO Hirokazu+Devin でまだマージ前です。広聴AIの活用事例が増えることで、他の自治体やユーザが具体的に利用イメージを掴みやすくなります。

### その他の活用事例やSEO関連Issue
- [Issue #40](https://github.com/digitaldemocracy2030/website/issues/40) (活用事例ページをmdで管理できるようにする) など、まだオープンになっている機能的な改善案があります。  
- [Issue #12](https://github.com/digitaldemocracy2030/website/issues/12) (SEO的に必要なメタタグ等の項目の整理) も引き続き議論されており、情報発信力を高めるためにも注目度が高いです。

---

## 参加の呼びかけ

新機能の提案やバグ修正だけでなく、小さなUI改善やテキスト修正などでも十分にOSSに貢献できます。今回も多くの開発者が参加していますが、人手はいくらあっても足りません。新しく参加を検討中の方は、ぜひ以下の点から始めてみてください:

- 見つけた不具合や気になる点を [Issue](https://github.com/digitaldemocracy2030/website/issues) に登録  
- ドキュメントの誤字脱字修正や日本語訳改善  
- 提案や要望をコメントして議論に参加  

多くの貢献者や開発者がサポートしてくれますので、気軽に書き込んでみてください。初めてのOSS参加の場としても「デジタル民主主義WEB」はおすすめです！

---

今週も多様な開発者・協力者が力を合わせてプロジェクトを前進させています。引き続き、コミュニティ全体で新しいアイデアや機能改善を支援していきましょう。ご参加お待ちしています！