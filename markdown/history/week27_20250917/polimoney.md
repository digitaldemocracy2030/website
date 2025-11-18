# Polimoney 9/10~9/17 のGitHub活動まとめ

Polimoneyプロジェクトの最新開発状況をお知らせします。今週は新しい機能のPRが2件マージされました。一方で、データ定義方法の統一やサンキー図のデータ構成など、まだ議論中のIssueも多く存在します。ぜひ興味を持ったトピックに参加してみてください！

---

## 今週完了したタスク

### [PR #196](https://github.com/digitaldemocracy2030/polimoney/pull/196) 東京都 運動費用収支報告書  
- 作成者: shumizu418128 +Devin  
- 選挙運動費用収支報告書の東京都向けデータ対応を追加し、今後ほかの地域での拡張を見据えたREADME整備も行いました。  
- [Issue #191](https://github.com/digitaldemocracy2030/polimoney/issues/191)（選挙運動費用収支報告書への対応）の一部を進める内容となっています。  

### [PR #198](https://github.com/digitaldemocracy2030/polimoney/pull/198) 報告書アップロード用のエンドポイントを追加  
- 作成者: shumizu418128 +Devin  
- 新たに収支報告書をアップロードするためのAPIエンドポイントを実装し、サーバー側でのバリデーションや保存処理を追加しました。  
- [Issue #120](https://github.com/digitaldemocracy2030/polimoney/issues/120)（未掲示）や [Issue #32](https://github.com/digitaldemocracy2030/polimoney/issues/32)（データベース移行）とも関連し、今後のデータ運用がしやすくなる基盤づくりが進んでいます。  

---

## 未完了のタスク & 議論中のトピック

### [Issue #199 資金項目データ定義方法の統一](https://github.com/digitaldemocracy2030/polimoney/issues/199)
- 作成者: grassfieldk  
- 各`data/demo-*.ts`ファイルでバラバラになっている資金項目の定義方法を統一しようという提案です。  
- このIssueを受けて、現在 [PR #200](https://github.com/digitaldemocracy2030/polimoney/pull/200) が作成され、データ構造を一元化する作業が進行中。  
- まだマージ前のため改善点や問題点の洗い出しなど、フィードバック大歓迎です。  

### [Issue #197 サンキー図・一覧表のデータを統一](https://github.com/digitaldemocracy2030/polimoney/issues/197)
- 作成者: grassfieldk  
- サンキー図で扱うFlowデータと、一覧表で扱うTransactionデータを統合・整合性を保つ方向で検討されています。  
- 実際には [Issue #199](https://github.com/digitaldemocracy2030/polimoney/issues/199) と強く関連しているため、両Issue間の連携が活発に議論されています。  
- 既存データの不整合を一部指摘しており、整合性チェック用スクリプトの整備も示唆されています。  

### [Issue #191 選挙運動費用収支報告書に対応](https://github.com/digitaldemocracy2030/polimoney/issues/191)
- 作成者: shumizu418128  
- [PR #196](https://github.com/digitaldemocracy2030/polimoney/pull/196) で一部対応が進んだものの、ほかの地域の選挙運動費用収支報告書にも広げるには追加の検討が必要です。  
- Slack連携や既存の政治資金収支報告書との共通化など、引き続き議論が行われています。  

### [Issue #166 理解の助けになるよう、収支項目の解説を書き込む](https://github.com/digitaldemocracy2030/polimoney/issues/166)
- 作成者: grassfieldk  
- サイトを閲覧する一般のユーザーが政治資金の収支項目をより理解しやすくするため、ツールチップなどのUI改善を提案しています。  
- [Issue #197](https://github.com/digitaldemocracy2030/polimoney/issues/197) とも関連しており、データ構造が整った後にチュートリアルや補足説明を付け加える流れになりそうです。  

### [Issue #32 データベース移行](https://github.com/digitaldemocracy2030/polimoney/issues/32)
- 作成者: nanocloudx  
- 大量データを扱うことを想定して、Postgresなどの本格的なDBへの切り替えを検討しています。  
- [PR #198](https://github.com/digitaldemocracy2030/polimoney/pull/198) の報告書アップロード機能実装とも繋がっており、今後ますます必要性が高まる見込みです。  

---

## 参加のお願い

Polimoneyでは、コードの修正・機能追加だけでなく、ドキュメント作成、データ構造の見直し、UIデザインなどさまざまな形でのコントリビュートを歓迎しています。  
各IssueやPRごとに議論が盛り上がっていますので、ぜひ気になるトピックがあればコメントやレビュー、プルリクエストをお寄せください！  
一緒にデジタル民主主義を前進させていきましょう。  