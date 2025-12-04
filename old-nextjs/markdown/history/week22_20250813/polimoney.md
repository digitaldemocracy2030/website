# Polimoney 8/6~8/13 のGitHub活動まとめ

今週のPolimoneyリポジトリの活動をまとめました。新機能や改善がいくつも提案・実装されています。OSSに興味のある方は、ぜひIssueやPRの内容をきっかけに、さらに開発に参加してみてください！

---

## 今週完了したタスク (マージ済みPull Request)

今週はIssueのクローズこそありませんでしたが、合計4件のPull Requestがマージされました。すべてのPRをnoritaka1166さんが作成しており、詳細は以下のとおりです。

- [PR #174](https://github.com/digitaldemocracy2030/polimoney/pull/174) feat: robots.txt の更新  
  - 「robots.txt」に特定画像のクローラー取得を禁止する設定を追加し、ogp配下のディレクトリをクローラーに許可する設定を行いました。  
  - Issueとの関連: [Issue #101](https://github.com/digitaldemocracy2030/polimoney/issues/101)

- [PR #171](https://github.com/digitaldemocracy2030/polimoney/pull/171) fix: サムネイルのURLを絶対パスに更新  
  - サムネイル画像が正しく表示されるよう、相対パスを絶対パスに変更しました。  
  - Issueとの関連: [Issue #101](https://github.com/digitaldemocracy2030/polimoney/issues/101)

- [PR #170](https://github.com/digitaldemocracy2030/polimoney/pull/170) feat: SNS共有リンクに名前を追加 & ハッシュタグ追加  
  - SNS共有時に、政治家の名前と「Polimoney」「デジタル民主主義2030」のハッシュタグが自動で付与されるようになりました。  
  - Issueとの関連: [Issue #134](https://github.com/digitaldemocracy2030/polimoney/issues/134)

- [PR #169](https://github.com/digitaldemocracy2030/polimoney/pull/169) chore: 使用していない @eslint/eslintrc を削除  
  - 現在はbiomeを使用しているため、不要となっていたESLint関連のファイルを削除し、整理しました。  

上記の更新によって、SNS共有や検索エンジンへの対応が改善され、コードベースの整理も進みました。エンドユーザー向けには「共有時のタイトルやハッシュタグが自動設定される」点が、わかりやすい新機能といえます。

---

## 未完了のタスクと進行中の議論

完了には至っていないIssueや新規PRもいくつか出ています。今後さらにディスカッションや開発が進む見込みがありますので、ぜひコメントやコントリビュートをお待ちしています。

### [Issue #172](https://github.com/digitaldemocracy2030/polimoney/issues/172) スマホで開いた時にもSNS共有リンクが表示されるようにする  
- 作成者: noritaka1166  
- スマホ画面にSNS共有ボタンを表示させたいという要望です。PC版では表示されるが、モバイル表示では共有ボタンがないため、UIの改善が求められています。  
- UX向上のためにも重要な機能なので、実装方針やデザインのご意見を募集中です。

### [Issue #166](https://github.com/digitaldemocracy2030/polimoney/issues/166) 理解の助けになるよう、収支項目の解説を書き込む  
- 作成者: grassfieldk  
- 「個人からの寄附」等の政治や経済に関する専門用語を、ツールチップ等を使ってわかりやすく解説しようという提案です。  
- 政治リテラシーが高くない人にも使いやすいUI/UXを目指しており、説明の仕方や導入するタイミングについて意見が交わされています。

### [PR #175](https://github.com/digitaldemocracy2030/polimoney/pull/175) feat: 404ページの実装  
- 作成者: noritaka1166  
- 存在しないURLにアクセスした際、独自の404ページを表示するようにする変更です。トップページへ戻るリンクを設置し、デザインの統一感も保とうとしています。  
- デフォルトの404に比べ、ユーザーが迷わないための親切設計になることが期待されます。

### [PR #173](https://github.com/digitaldemocracy2030/polimoney/pull/173) feat: 存在しないページの場合にはトップページにリダイレクトされるようにした  
- 作成者: noritaka1166  
- 未存在ページへのアクセス時に、自動リダイレクトでトップページに戻す案です。PR #175とは別アプローチで、404処理をどう扱うかの議論が必要になります。  
- エラー画面を表示するか、自動リダイレクトするか、ユーザー体験やSEO観点など総合的な検討が必要です。

---

## 参加の呼びかけ

- 「スマホでのSNS共有ボタンの実装」([Issue #172](https://github.com/digitaldemocracy2030/polimoney/issues/172))や「収支項目のツールチップ説明」([Issue #166](https://github.com/digitaldemocracy2030/polimoney/issues/166))は、UI/UX、デザイン、コピーライティングなど幅広い観点のフィードバックが大歓迎です。  
- 404ページ周りのPR([PR #175](https://github.com/digitaldemocracy2030/polimoney/pull/175)、[PR #173](https://github.com/digitaldemocracy2030/polimoney/pull/173))では、ユーザー体験とSEOを踏まえた最適解を模索しています。ぜひ意見を出してみてください。

今後も引き続き、多くの方のご意見やコントリビュートをお待ちしています。興味を持ったIssueやPRがあれば、お気軽にコメントやレビューをお願いします！デジタル民主主義を一緒に発展させましょう。