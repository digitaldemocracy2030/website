# 広聴AI 9/10~9/17 のGitHub活動まとめ

こんにちは！今週(2025-09-10〜2025-09-17)の広聴AIのGitHubリポジトリでの活動をまとめました。新機能の追加やバグ修正など、OSS開発に興味がある方はぜひ参考にしてみてください。

---

## 今週完了したタスク

### 1. [Issue #702](https://github.com/digitaldemocracy2030/kouchou-ai/issues/702) (client-admin: lint error が出ている)
- 作成者: shingo-ohki  
- 内容: client-admin 側のlintエラーを修正するIssueでした。  
- Issue #702 を修正するためのPR ([PR #703](https://github.com/digitaldemocracy2030/kouchou-ai/pull/703)) がマージされ、問題が解決しました。

### 2. [PR #703](https://github.com/digitaldemocracy2030/kouchou-ai/pull/703) (fix: client-admin lint error)
- 作成者: shingo-ohki  
- 内容: client-admin 内で発生していたlintエラーを解消する修正。  
- Issue [Issue #702](https://github.com/digitaldemocracy2030/kouchou-ai/issues/702) の解決が目的。バリデーションテストへの影響がないことも確認され、無事マージされました。  

これらによってclient-admin関連のlintエラーは解決し、開発者だけでなく利用者にとっても、開発環境の安定化が進みました。

---

## 進行中のタスクと議論

以下はまだ未完了のIssueやPRです。興味のある方はぜひ覗いてみて、コメントや実装の協力をお待ちしています！

### 1. [Issue #701](https://github.com/digitaldemocracy2030/kouchou-ai/issues/701) (client: lint error が出ている)
- 作成者: shingo-ohki  
- 内容: client 側のlintエラーに関するIssue。解決策としてはフォーマットの見直しやTypeScriptの型修正などが議論になる見込みです。  
- フロントエンドの方に関わりたい方は、ぜひIssueをチェックし、修正案を検討してみてください。

### 2. [PR #705](https://github.com/digitaldemocracy2030/kouchou-ai/pull/705) (Add GitHub Issues extraction and problem awareness analysis)
- 作成者: NISHIO+Devin  
- 内容: GitHub Issuesを自動取得して広聴AIで「問題意識」を抽出・クラスタリングする機能を追加するPR。  
- GITHUB_TOKENやOPENAI_API_KEYをセットした本番環境での最終テストが未完了。実社会のIssue分析に向けて有用な機能になりそうです。

### 3. [PR #704](https://github.com/digitaldemocracy2030/kouchou-ai/pull/704) (Fix remaining lint and test issues after PR #703)
- 作成者: NISHIO+Devin  
- 内容: [PR #703](https://github.com/digitaldemocracy2030/kouchou-ai/pull/703) マージ後に残っていたlintエラーやテスト失敗を追加修正。  
- ScatterChart.tsxのonClickハンドラの型変更やclient-adminの依存関係見直しなど、まだテストやレビューが必要です。

### 4. [PR #698](https://github.com/digitaldemocracy2030/kouchou-ai/pull/698) ([FEATURE] Gemini を利用してレポート生成できるようにする)
- 作成者: AkioPonkotu  
- 内容: Google GeminiのAPIを使用したレポート生成機能を追加する大きな変更。  
- レポート生成時にモデルの選択やトークン使用量、推定料金を表示するUIを実装。APIキーの設定やセットアップドキュメントの拡充も含まれています。

### 5. [PR #688](https://github.com/digitaldemocracy2030/kouchou-ai/pull/688) (fix: Azure Deploy 時に client コンテナの環境変数が未設定になる)
- 作成者: shingo-ohki  
- 内容: Azure デプロイ時にclientコンテナの環境変数が正しく設定されない問題の修正。  
- ワークフローの更新で環境変数管理の安定化を図っています。CI上のデプロイテストの確認やレビューが歓迎されます。

---

## 参加の呼びかけ

- 新機能を試してみたい方: lintエラー修正やデプロイ関連の改善が進んでいるので、ローカル環境で動かしてみてぜひフィードバックをお寄せください。  
- 開発や議論に参加したい方: GitHub上でIssueにコメントしたり、レビューを行うだけでも大歓迎です。  
- AIに関する知見を活かしたい方: [PR #705](https://github.com/digitaldemocracy2030/kouchou-ai/pull/705) など、機械学習や自然言語処理の知識が活かせるタスクもあります。

多くのコントリビューションによってOSSの「広聴AI」は成長していきます。気になるIssueやPRがあれば、ぜひコメントや実装を試してみてください！  