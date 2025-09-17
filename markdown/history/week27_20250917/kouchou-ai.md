# 広聴AI (kouchou-ai) 9/10~9/17 のGitHub活動まとめ

今週も広聴AI (kouchou-ai) リポジトリへのご関心ありがとうございます。開発が着実に進む一方で、まだ議論中のPRも多くあります。あなたの意見やコントリビュートをぜひお待ちしています！

---

## 今週完了したタスク

### 閉じられたIssue

- [Issue #702](https://github.com/digitaldemocracy2030/kouchou-ai/issues/702)  
  **作成者:** shingo-ohki  
  **内容:**  
  client-adminで`npm run lint`を実行した際に出るエラー修正が必要という指摘でした。  
  → [PR #703](https://github.com/digitaldemocracy2030/kouchou-ai/pull/703) により修正が完了しました！

### マージされたPR

- [PR #703](https://github.com/digitaldemocracy2030/kouchou-ai/pull/703) fix: client-admin lint error  
  **作成者:** shingo-ohki  
  client-admin側のlintエラーおよびテストを解消し、レポート生成のIDバリデーション関連のテストが正しく通るようになりました。  
  開発者でなくても、lintエラーの修正により開発の効率がアップしている点は見逃せません。プロジェクトの保守性向上につながっています。

---

## 未完了のタスク & 議論中の内容

以下のIssueやPRは、まだ作業中または議論が続いています。ぜひ実装やレビュー、議論に参加してみてください！

### 未完了のIssue

- [Issue #701](https://github.com/digitaldemocracy2030/kouchou-ai/issues/701)  
  **作成者:** shingo-ohki  
  clientで発生しているlintエラーへの対応が必要です。  
  コメントがまだ無いため、lintやTypeScript周りに詳しい方がいれば、ぜひフィードバックをお待ちしています。

### レビューが必要なPR (新規作成/更新)

1. [PR #705](https://github.com/digitaldemocracy2030/kouchou-ai/pull/705) Add GitHub Issues extraction and problem awareness analysis  
   **作成者:** NISHIO+Devin  
   GitHub Issuesを自動取得し、クラスタリングや可視化する機能を追加する野心的なPR。  
   URLフィールドによるIssuesへの直接リンク機能も提案されています。  
   APIキーの設定など未検証部分が多いので、実プロジェクトで使用できるかどうかテストしてみてください。

2. [PR #704](https://github.com/digitaldemocracy2030/kouchou-ai/pull/704) Fix remaining lint and test issues after PR #703  
   **作成者:** NISHIO+Devin  
   PR #703 マージ後に残っていたlintエラーやテスト失敗をまとめて修正するPR。  
   ScatterChart.tsxのonClickハンドラ型変更など、UI動作にも関係する修正があり、レビュー歓迎です。

3. [PR #698](https://github.com/digitaldemocracy2030/kouchou-ai/pull/698) [FEATURE] Gemini を利用してレポート生成できるようにする  
   **作成者:** AkioPonkotu  
   Google Gemini API対応のレポート生成を実装する大規模な機能追加です。  
   トークン使用量と推定料金をUI表示できるようにしており、複数のファイルが変更されています。  
   まだマージされていないため、新しいレポートを試してフィードバックをお願いします。

4. [PR #688](https://github.com/digitaldemocracy2030/kouchou-ai/pull/688) fix: Azure Deploy 時に client コンテナの環境変数が未設定になる  
   **作成者:** shingo-ohki  
   Azureデプロイ用ワークフローで環境変数が正しく渡らない不具合を修正するPRです。  
   デプロイ周りに興味ある方やAzure利用者はチェックしてみてください。

---

## コミュニティ参加の呼びかけ

- 初心者の方でもIssueやPRのレビュー・リアクションは大歓迎です！  
- 開発に参加するには、まず[Issue #701](https://github.com/digitaldemocracy2030/kouchou-ai/issues/701)などでコメントを残したり、未レビューのPRにフィードバックをしたりする方法があります。  
- コードを書かなくてもドキュメントの更新やテスト手順の検証など、多様な貢献方法があります。ぜひ、あなたの得意分野でご協力ください。

今後とも広聴AIの発展にご協力をよろしくお願いいたします！  