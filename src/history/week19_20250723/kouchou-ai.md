# 広聴AI 2025/07/16 ~ 2025/07/23 のGitHub活動まとめ

この1週間で行われたIssueやPull Requestのクローズ、新規作成、更新の内容をまとめました。  
「こんな機能ができるようになったんだ」「この議論、少し手伝ってみたいかも！」というきっかけになれば幸いです。

---

## 完了したタスク

### クローズされたIssue

- [Issue #664](https://github.com/digitaldemocracy2030/kouchou-ai/issues/664) (作成者: shgtkshruch)  
  レポート単体での HTML書き出し機能を要望していたIssueです。  
  → 後述の[PR #665](https://github.com/digitaldemocracy2030/kouchou-ai/pull/665)マージにより機能が実装され、クローズされました。

### マージされたPull Request

- [PR #665](https://github.com/digitaldemocracy2030/kouchou-ai/pull/665) (作成者: shgtkshruch)  
  管理画面からレポートを単体でHTMLとしてエクスポートできるようにする機能を実装しました。  
  - Action Menuに「HTML書き出し」を追加し、個別レポートのslugを指定してビルドできるように改良  
  - ビルド中はUI上でloadingのToastを表示し、ユーザーに進捗を伝えるように改善  
  - 新機能実装やUI改善に貢献したshgtkshruchさんの取り組みにより、必要なレポートだけを素早く書き出せるようになりました。

---

## 進行中の議論やタスク

「まだクローズしていないIssue」と「マージされていないPull Request」には、引き続き議論・実装が必要です。ここから参加してみるのも大歓迎です！

### 新しく作成されたIssue

- [Issue #669](https://github.com/digitaldemocracy2030/kouchou-ai/issues/669) (作成者: shingo-ohki)  
  「GitHub Actionsで行うAzureへのデプロイ処理を最適化する」リファクタリング方針。  
  - 複数コンテナをビルドする際の責務を整理し、処理を分割する議論が行われています。  
  - CI/CDのパイプライン最適化に興味がある方はぜひディスカッションに参加してみてください！

### 既存Issueの更新

- [Issue #475](https://github.com/digitaldemocracy2030/kouchou-ai/issues/475) (作成者: tokoroten)  
  「envのUSE_AZUREを剥がす」というリファクタリングIssue。Azure専用フラグが不要になりつつあるため、不要コードを削除していく提案です。

- [Issue #111](https://github.com/digitaldemocracy2030/kouchou-ai/issues/111) (作成者: nishio)  
  用語解説ページを作る提案が行われています。クローズはされていませんが、OSS利用者へのわかりやすさに直結するタスクです。

### 新しく作成されたPull Request

- [PR #671](https://github.com/digitaldemocracy2030/kouchou-ai/pull/671) (作成者: mochizuki-pg)  
  上述の[Issue #475](https://github.com/digitaldemocracy2030/kouchou-ai/issues/475)対応として、envのUSE_AZUREを剥がす修正を行っています。  
  - +0 / -37のファイル修正で、一気に不要コードを削除しています。  
  - リファクタリング好きや環境変数まわりの整備に興味のある方はレビュー歓迎です。

- [PR #670](https://github.com/digitaldemocracy2030/kouchou-ai/pull/670) (作成者: dependabot[bot])  
  依存パッケージ(“form-data”)のバージョンアップ PRです。  
  - ボットが自動生成したPRですが、依存関係更新はセキュリティや安定性に影響する重要な作業です。

- [PR #668](https://github.com/digitaldemocracy2030/kouchou-ai/pull/668) (作成者: shgtkshruch)  
  意見グループ編集時のデータ取得とAPI呼び出しをサーバーサイドFunctionsに移行し、APIキーをフロント側に露出させないようにするセキュリティ改善PRです。

- [PR #667](https://github.com/digitaldemocracy2030/kouchou-ai/pull/667) (作成者: NISHIO+Devin)  
  Windows環境でPyTorch実装が失敗する問題の修正。  
  - Dockerビルドフローの最適化が含まれています。  
  - Windowsユーザーにとっては非常に嬉しい改善です。

### 更新のあった既存Pull Request

- [PR #660](https://github.com/digitaldemocracy2030/kouchou-ai/pull/660) (作成者: Shingo Ohki+Devin)  
  OpenAI / OpenRouterのAPIキーをフォームから入力できるようにする機能を開発中。  
  - トークン使用状況の追跡や既存の`extract_arguments`呼び出しのリファクタもあり、議論が広がっています。

- [PR #642](https://github.com/digitaldemocracy2030/kouchou-ai/pull/642) (作成者: shingo-ohki)  
  mainブランチがマージされた際にAzureにデプロイするGitHub Actionsワークフローを実装中。  
  - デモ環境を自動更新するためのインフラ整備で、[Issue #622](https://github.com/digitaldemocracy2030/kouchou-ai/issues/622)とも関連。  
  - デプロイの自動化に興味がある方は必見のPRです。

---

## 今後の参加の呼びかけ

- 「コードのリファクタリングやバグ修正から始めてみたい」→ [Issue #475](https://github.com/digitaldemocracy2030/kouchou-ai/issues/475)や[PR #671](https://github.com/digitaldemocracy2030/kouchou-ai/pull/671)から触ってみるのがおすすめです。  
- 「プロジェクトのCI/CD構築やAzureデプロイに興味がある」→ [Issue #669](https://github.com/digitaldemocracy2030/kouchou-ai/issues/669)や[PR #642](https://github.com/digitaldemocracy2030/kouchou-ai/pull/642)に注目してみてください。  
- 「ユーザー向けの使いやすさを向上させたい」→ 用語解説ページ提案の[Issue #111](https://github.com/digitaldemocracy2030/kouchou-ai/issues/111)に意見を出していただけると助かります。

このように広聴AIは、様々な観点から多くの方々が貢献してくださっています。ぜひ気になるタスクや議論に参加してみてください！一緒にプロジェクトを盛り上げていきましょう。  