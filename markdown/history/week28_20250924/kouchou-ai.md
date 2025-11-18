# 広聴AI 9/17~9/24 のGitHub活動まとめ

こんにちは！今週の広聴AI（kouchou-ai）の活動をお知らせします。  
OSS開発に興味のある方はぜひIssuesやPull Requestを覗いてみてください。

---

## 今週完了したタスク

残念ながら今週はクローズされたIssueやマージされたPull Requestがありませんでした。  
今後のアップデートに期待しましょう！

---

## 未完了のタスク・議論の紹介

今週新たに作成・更新されたIssueやPull Requestを紹介します。  
機能改善やバグ修正に向けた議論が進んでいるので、ぜひウォッチ・コメントしてみてください。

### 新規Issue

- [Issue #707](https://github.com/digitaldemocracy2030/kouchou-ai/issues/707)  
  **作成者:** nishio  
  APIが利用可能にもかかわらず、接続チェックが失敗してしまう不具合の報告です。Azure環境下での確認を含め、調査が必要とのこと。  
  もしAzureに詳しい方がいれば、原因究明・修正策のご意見をお待ちしています！

### 更新されたIssue

- [Issue #701](https://github.com/digitaldemocracy2030/kouchou-ai/issues/701) (作成者: shingo-ohki)  
  Lintエラーの解消に向けたリファクタを検討中です。clientディレクトリのスタイル変更や型定義など、フロントエンド側に詳しい方はぜひ検討に参加してください。
- [Issue #683](https://github.com/digitaldemocracy2030/kouchou-ai/issues/683) (作成者: shingo-ohki)  
  静的ファイル出力時に公開レポートがない場合にエラーとなるバグです。エラー文の扱いや未公開レポートの取り扱いなどをどうするか、引き続き議論が続いています。

### 新規Pull Request

- [PR #709](https://github.com/digitaldemocracy2030/kouchou-ai/pull/709) (作成者: NISHIO+Devin)  
  GitHub Pagesサブパスホスティングに対応するため、ハードコードされた画像パスを修正。フッターやレポーター画像のパスをユーティリティ関数に置き換え、正しいベースパスを付けられるようにしています。
- [PR #708](https://github.com/digitaldemocracy2030/kouchou-ai/pull/708) (作成者: NISHIO+Devin)  
  Azure OpenAI設定に関するエラーメッセージをわかりやすく修正。環境変数未設定時の挙動を改善し、管理者向け検証エンドポイントにも対応しました。
- [PR #706](https://github.com/digitaldemocracy2030/kouchou-ai/pull/706) (作成者: mochizuki-pg)  
  [Issue #701](https://github.com/digitaldemocracy2030/kouchou-ai/issues/701) (リファクタでlintエラー対策)に対応する修正で、Lintまわりのエラーやフォーマット崩れを解消しています。

### 更新されたPull Request

- [PR #705](https://github.com/digitaldemocracy2030/kouchou-ai/pull/705) (作成者: NISHIO+Devin)  
  GitHub Issuesを自動で取得・可視化する機能の追加です。CSV出力や問題意識抽出のためのパイプラインが大幅に拡張される予定で、APIトークンが必要になる箇所もあるので要チェック。
- [PR #704](https://github.com/digitaldemocracy2030/kouchou-ai/pull/704) (作成者: NISHIO+Devin)  
  Lintやテストが通らない箇所をまとめて修正。TypeScriptの型チェックやJestテストの依存関係など、フロントエンドの開発環境周りを整備しているようです。
- [PR #699](https://github.com/digitaldemocracy2030/kouchou-ai/pull/699) (作成者: shgtkshruch)  
  用語解説ページとグローバルナビ追加。用語不明な初学者にもやさしいUIを目指しているとのこと。スマホやタブレットでの表示切り替えなど、UIに興味のある方は要チェックです。
- [PR #698](https://github.com/digitaldemocracy2030/kouchou-ai/pull/698) (作成者: AkioPonkotu)  
  Google Geminiを使ったレポート生成機能を実装中。料金計算やトークン消費量の見える化など、より柔軟なAIプロバイダ対応を目指しています。

---

## 開発参加の呼びかけ

- IssueやPull Requestのコメント欄でアイデアやフィードバックを大歓迎しています。  
- バグ修正や新機能の提案など、お気軽にご参加ください。  
- ドキュメント作成やUI改善など、コード以外の貢献も大変助かります。

皆さんのご協力をお待ちしています！一緒に広聴AIの機能を充実させていきましょう。  