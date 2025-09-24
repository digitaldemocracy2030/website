# 広聴AI 9/17~9/24 のGitHub活動まとめ

今週（2025/09/17～2025/09/24）の開発状況をまとめました。OSS開発に興味がある方はぜひコントリビュートやディスカッションに参加してください。

---

## 今週完了したタスク
今週はクローズされたIssueやマージされたPRはありませんでした。

開発中の機能やバグ修正の多くがまだ進行中です。新しい機能要望やバグ報告、ドキュメント整備など、さまざまな形での参加を歓迎しています。

---

## 進行中の主な議論と未完了タスク

以下では、今週新たに作成されたIssueや議論の進んでいるIssue・PRを紹介します。

### 新規Issue

- [Issue #707](https://github.com/digitaldemocracy2030/kouchou-ai/issues/707) ([BUG]APIが利用可能であってもAPI接続チェックが失敗する)  
  - 作成者: nishio  
  - API接続チェックの結果が誤判定となってしまうバグ報告です。Azure環境で問題なく利用できる状態でもエラーが出るとのこと。再現手順やエラーメッセージが詳しく書かれているので、該当環境をお持ちの方は原因調査や修正PRにご協力ください。

### 更新されたIssue

- [Issue #701](https://github.com/digitaldemocracy2030/kouchou-ai/issues/701) ([REFACTOR] client: lint error が出ている)  
  - 作成者: shingo-ohki  
  - client側で`npm run lint`を行った際のエラーが報告されています。関連する変更を扱う[PR #706](https://github.com/digitaldemocracy2030/kouchou-ai/pull/706)が既に作成され、修正に取り組み中です。

- [Issue #683](https://github.com/digitaldemocracy2030/kouchou-ai/issues/683) ([BUG] 静的ファイル出力時に公開状態のレポートがない場合にエラーとなる)  
  - 作成者: shingo-ohki  
  - 静的エクスポート機能に関するバグ報告です。公開レポートが存在しないとエクスポート時にエラーが発生するとのこと。対処として、適切なエラーメッセージの表示や、公開状態以外でも出力できるようにする案などが検討されています。

### 新規PR

- [PR #709](https://github.com/digitaldemocracy2030/kouchou-ai/pull/709) (Fix hardcoded image paths for GitHub Pages subpath hosting)  
  - 作成者: NISHIO+Devin  
  - 画像パスのハードコードを解消し、`getImageFromServerSrc()`ユーティリティを使ってGitHub Pagesのサブパスでも表示できるようにする修正です。まだ動作確認が十分でないそうなので、テスト協力歓迎です。

- [PR #708](https://github.com/digitaldemocracy2030/kouchou-ai/pull/708) (Improve Azure OpenAI setup experience with better error handling)  
  - 作成者: NISHIO+Devin  
  - Azure OpenAI設定の際に直感的でない環境変数名や曖昧なエラーメッセージを改善するPRです。Azureを利用している方はレビューやテストでぜひ協力をお願いします。

- [PR #706](https://github.com/digitaldemocracy2030/kouchou-ai/pull/706) ([REFACTOR] client: lint error が出ている)  
  - 作成者: mochizuki-pg  
  - 上記の[Issue #701](https://github.com/digitaldemocracy2030/kouchou-ai/issues/701)を解決する内容です。lintエラーの解消やコードフォーマット修正を含むため、影響範囲が広い可能性があります。確認をお待ちしています。

### 更新されたPR

- [PR #705](https://github.com/digitaldemocracy2030/kouchou-ai/pull/705) (Add GitHub Issues extraction and problem awareness analysis)  
  - 作成者: NISHIO+Devin  
  - GitHub Issuesを自動取得して「問題意識」を可視化する機能追加です。まだAPIキー未設定で完全なテストが十分にできていないようなので、レビューと動作確認に協力いただける方お待ちしています。

- [PR #704](https://github.com/digitaldemocracy2030/kouchou-ai/pull/704) (Fix remaining lint and test issues after PR #703)  
  - 作成者: NISHIO+Devin  
  - 他のPRをマージした後に残存していたlintやテストエラーを解消する修正です。`ScatterChart.tsx`やclient-adminの依存関係更新などに変更が含まれているため、ご利用の環境で影響がないか確認にご協力ください。

- [PR #699](https://github.com/digitaldemocracy2030/kouchou-ai/pull/699) ([client] 用語解説ページとグローバルナビゲーションを追加)  
  - 作成者: shgtkshruch  
  - 用語解説やFAQページの追加、グローバルナビゲーションの新設などUI周りの改善です。モバイル対応も含まれていますので、実機確認やスタイルのフィードバックを受け付けています。

- [PR #698](https://github.com/digitaldemocracy2030/kouchou-ai/pull/698) ([FEATURE] Gemini を利用してレポート生成できるようにする)  
  - 作成者: AkioPonkotu  
  - Google GeminiのAPIを使ったレポート生成を新たにサポートする大型変更です。環境変数や料金計算ロジックも追加されているので、設定手順や動作確認レポート歓迎します。

---

## コミュニティへの参加方法

- Issueのコメントでアイデアを共有したり、バグ検証に協力してみてください。  
- ドキュメントの誤字修正など、小さな貢献でも大歓迎です。  
- これからOSS開発に参加してみたい方や、コントリビュートの仕方がわからない方は、ぜひ[Issue #707](https://github.com/digitaldemocracy2030/kouchou-ai/issues/707)などのバグ修正に挑戦してみるか、ドキュメント改善系Issueにコメントしてみてください。

皆さんの参加によって「広聴AI」のサービスがより多くの人に活用されやすいものとなります。ぜひ気になるIssueやPRにコメントをよろしくお願いします！