# 広聴AI 10/14~10/21 のGitHub活動まとめ

今週（2026-10-14T17:25:26.041241+09:00 ～ 2026-10-21T17:25:26.041241+09:00）も多数のPull Requestがマージされ、機能修正や開発上の改善が進められました。また、新たなIssueやPull Requestの提案が行われています。以下に内容をまとめます。

---

## 今週完了した主な内容（マージ済み PR）

合計で29件のPull Requestがマージされました。ここでは、開発者ではない方にも活用度の高い変更や目立った修正をいくつかピックアップして紹介します。

- [PR #1047](https://github.com/digitaldemocracy2030/kouchou-ai/pull/1047)  
  - 作者: nishio  
  - 概要: 再利用の実行計画テストを調整し、テスト前提を整理。テストが失敗する問題を修正。  
  - 意義: 実行計画のテストが安定し、CIの信頼性を向上。

- [PR #1046](https://github.com/digitaldemocracy2030/kouchou-ai/pull/1046)  
  - 作者: nishio  
  - 概要: 公開ページで「濃い意見」が0件のとき、他の有効な表示に自動で切り替わるように修正。  
  - 意義: 管理者が設定した可視化チャート以外が勝手に表示されないようにし、ユーザが「0件かどうか」を正しく理解できるUIに。

- [PR #1045](https://github.com/digitaldemocracy2030/kouchou-ai/pull/1045)  
  - 作者: nishio  
  - 概要: レポート生成完了後も管理画面カードが「作成中」のままで止まるバグを修正。アップロード失敗時に適切にエラーを出すよう改善。  
  - 意義: 作成完了の正しいステータスが反映されるため、管理画面の操作性が向上。

- [PR #1044](https://github.com/digitaldemocracy2030/kouchou-ai/pull/1044)  
  - 作者: nishio  
  - 概要: 再利用報告の複製時、抽出から再実行されてしまう問題を解消し、中間成果物を正しく再利用できるようにした。  
  - 意義: 複製元のレポートの手直し内容をスムーズに引き継げるため、再解析の時間とコスト削減に貢献。

- [PR #1039](https://github.com/digitaldemocracy2030/kouchou-ai/pull/1039)  
  - 作者: nishio  
  - 概要: OGP画像生成まわりなど公開ビューアの不具合を大量に修正。  
  - 意義: メタ画像周りの設定統合やエラー時の挙動が改善され、広聴AI公開ページの安定性が向上。

- [PR #1014](https://github.com/digitaldemocracy2030/kouchou-ai/pull/1014)  
  - 作者: shingo-ohki  
  - 概要: CI環境のうち、ドキュメント公開や定期的なE2Eテストを本家リポジトリに限定するように変更。  
  - 意義: フォーク先で意図せずデプロイなどが走らないようにし、CIの混乱を防止する運用改善。


このほかにも、さまざまなバグ修正やコード上の改善が行われています。マージされたPRは以下のリンクから一覧を確認できます。  
→ [Pull Requests一覧](https://github.com/digitaldemocracy2030/kouchou-ai/pulls?q=is%3Apr+is%3Amerged+sort%3Aupdated-desc)

---

## 今週新規に作成・まだ議論中のIssue/PR

### 新規Issue

- [Issue #1042](https://github.com/digitaldemocracy2030/kouchou-ai/issues/1042) (作者: tokoroten)  
  「AnthoropicのAPIに対応する」という提案。エンジニアに人気のClaudeCodeを使ったAPIクレジットの余剰を有効に使うと、OSSユーザ層を広げられるかどうかが議論されています。

- [Issue #1023](https://github.com/digitaldemocracy2030/kouchou-ai/issues/1023) (作者: nishio)  
  散布図において「全件フィルタしたクラスタラベルを薄く表示するかどうか」の仕様整理。実装案を2パターン (a)(b) のPRに分岐して提案中。

### 新規またはオープンなPR

- [PR #1050](https://github.com/digitaldemocracy2030/kouchou-ai/pull/1050) (作者: nishio)  
  2027年以降に必ず落ちるテストコードの修正案。将来的な日付依存バグを回避し、運用を安定させる取り組み。

- [PR #1049](https://github.com/digitaldemocracy2030/kouchou-ai/pull/1049) (作者: nishio)  
  analysis-coreの.envファイル読み込み先を「インストール先パス」ではなく「カレントディレクトリ」基準に変更。CLI利用時にユーザーが置いた.envを正しく読めるように改善中。

- [PR #1048](https://github.com/digitaldemocracy2030/kouchou-ai/pull/1048) (作者: nishio)  
  テストがローカルの.envキーで実際に外部LLMを呼んでしまう問題を解決する提案。単体テスト中の不要な課金とHTTP通信を回避できるかが議論点。

- [PR #1024](https://github.com/digitaldemocracy2030/kouchou-ai/pull/1024) / [PR #1025](https://github.com/digitaldemocracy2030/kouchou-ai/pull/1025) (作者: nishio)  
  Issue [#1023](https://github.com/digitaldemocracy2030/kouchou-ai/issues/1023) に対する「(a) 全点フィルタされたクラスタラベルを薄く表示」案 / 「(b) フィルタ済みラベルの薄表示を削除し常に同色にする」案。どちらを採用するか意見交換が進行中。

- [PR #1026](https://github.com/digitaldemocracy2030/kouchou-ai/pull/1026) (作者: nishio)  
  取り下げ表明あり。今後改めて提出される可能性があるが、現時点ではクローズ方向。

---

## 今週のまとめと参加の呼びかけ

- 今週はレポート作成フローや公開ページの不具合修正、再利用処理の大幅な改善が多く取り込まれました。管理画面での「作成中」表示が正しく更新されるようになり、UI/UX面でも使いやすさが向上しています。  
- 散布図のフィルタ済みラベル表示方法やAnthoropic API対応など、まだ確定していない仕様提案も活発に議論中です。  
- 特に [Issue #1042](https://github.com/digitaldemocracy2030/kouchou-ai/issues/1042)（Anthoropic対応）や [Issue #1023](https://github.com/digitaldemocracy2030/kouchou-ai/issues/1023)（クラスタラベル表示）は、多くの開発者・ユーザが興味を持ちそうな話題です。意見や実装案の提案にぜひご参加ください。

本プロジェクトはオープンソースで進めており、ドキュメント改善やコードレビュー、プログラムの修正提案など、さまざまな形でのコントリビュートを歓迎します。ご関心のある方は、Issue や Pull Request へのコメントをぜひお寄せください。  