# いどばたシステム 第4週（2025/04/02～04/09）のGitHub活動まとめ

以下は2025/04/02〜04/09（第4週）のidobata系リポジトリの活動をご報告します。新しい開発者の方が参加しやすくなるよう、まずは「完了したタスク」と「それにより実装された内容」をまとめ、その後に「まだ議論中や着手中のタスク」をご紹介します。

---

## 今週「完了」した主な内容

### 1. 「idobata-analyst」リポジトリ

- **[Issue #90](https://github.com/digitaldemocracy2030/idobata-analyst/issues/90): Biomeをrootで実行できるようにする**  
  - **[PR #91](https://github.com/digitaldemocracy2030/idobata-analyst/pull/91)**（実装: [@takker99](https://github.com/takker99)）がマージされ、ルートディレクトリでのBiome実行が可能になりました。  
  - ルートディレクトリにnpmスクリプトを追加し、VSCodeのBiome拡張機能との連携を整備。開発者がどのパッケージ内にいるかを意識せず、フォーマットやLintチェックを一括実行できるようになりました。

- **新機能・不具合修正のPull Request**  
  - **[PR #95](https://github.com/digitaldemocracy2030/idobata-analyst/pull/95): CSVプレビューのバグ修正** （実装: [@spinute](https://github.com/spinute)）  
    - CSV読み込み時の件数表示誤差や末尾の空行問題を修正し、正確な行数が確認可能に。  
  - **[PR #94](https://github.com/digitaldemocracy2030/idobata-analyst/pull/94) / [PR #93](https://github.com/digitaldemocracy2030/idobata-analyst/pull/93): 開発環境でのサンプルCSV読み込みUIの追加** （実装: [@spinute](https://github.com/spinute)）  
    - プロジェクト作成画面に「サンプルCSV読み込み」ボタンを設置。新規参加者が手軽に動作確認用データを取り込めるようになりました。  
  - **[PR #88](https://github.com/digitaldemocracy2030/idobata-analyst/pull/88): make containers-startの微修正** （実装: [@spinute](https://github.com/spinute)）  
    - Docker起動時のコンソールログ表示を改善し、動作確認がしやすくなりました。  
  - **[PR #64](https://github.com/digitaldemocracy2030/idobata-analyst/pull/64): copy-env.shの改善** （実装: [@spinute](https://github.com/spinute)）  
    - 既存の.envファイルがある場合の上書きを防止し、環境設定の安全性を向上。  
  - **[PR #62](https://github.com/digitaldemocracy2030/idobata-analyst/pull/62): コメント種類分布の追加改修** （実装: [@itoma-aikon](https://github.com/itoma-aikon)）  
    - 全体レポートに各コメントの種類別分布を表示。議論の傾向が把握しやすくなりました。

---

## 「未完了」タスクと議論の状況

### 1. 「idobata-analyst」リポジトリ

- **[Issue #105](https://github.com/digitaldemocracy2030/idobata-analyst/issues/105): プロジェクトレポート失敗時の理由表示**  
  - 現状は単に「失敗しました」とのメッセージのみ。API認証失敗やネットワークエラーなど、原因を具体的に表示する機能を検討中。  

- **[Issue #100](https://github.com/digitaldemocracy2030/idobata-analyst/issues/100): 動作確認用サンプルデータの改善**  
  - 乱数による簡易データから、実際の議論や立場を反映した現実的なテストデータセットへの改良を検討中。  

- **[PR #104](https://github.com/digitaldemocracy2030/idobata-analyst/pull/104): Run lint and test on push and pull request (CI整備)** （実装: [@takker99](https://github.com/takker99)）  
  - GitHub Actionsで自動テストやLintチェックを実行し、コード品質の安定化を図る取り組みです。  

- **[PR #103](https://github.com/digitaldemocracy2030/idobata-analyst/pull/103): コメントが過度に捨象される問題の緩和（WIP）** （実装: [@spinute](https://github.com/spinute)）  
  - Issue #39に関連。AIによる要約の過剰さを改善するため、抽出ロジック見直しと「原文表示」ボタンの設置を検討中。  

- **[PR #101](https://github.com/digitaldemocracy2030/idobata-analyst/pull/101): OpenRouter APIリクエスト結果のキャッシュ機能実装（WIP）** （実装: [@spinute](https://github.com/spinute)）  
  - API呼び出しコスト削減のため、レスポンスのキャッシュ機能を提案中です。  

- **[PR #99](https://github.com/digitaldemocracy2030/idobata-analyst/pull/99): コメント左側バーの色を円グラフに合わせる** （実装: [@spinute](https://github.com/spinute)）  
  - 円グラフの色とコメント欄の色を統一し、各コメントの立場が一目で分かるようにする改善です。

### 2. その他のリポジトリ

- **「idobata-discourse-agent」リポジトリ**  
  - Issue例:  
    - [#90](https://github.com/idobata-discourse-agent/idobata-discourse-agent/issues/90): 既読を容易にして通知を整理する  
    - [#89](https://github.com/idobata-discourse-agent/idobata-discourse-agent/issues/89): ファシリテーション機能  
    - [#88](https://github.com/idobata-discourse-agent/idobata-discourse-agent/issues/88): 簡易要約による新規参加者向けサポート  
    - [#87](https://github.com/idobata-discourse-agent/idobata-discourse-agent/issues/87): deep research的なファクトチェック  

- **「idobata-infra」リポジトリ**  
  - **[PR #3](https://github.com/idobata-infra/idobata-infra/pull/3): GCP上に基本的なidobata環境構築ができること**  
    - Yasu-umiさんによるGCPでの初期セットアップをまとめたもので、クラウド環境利用を容易にする基盤開発が進行中。  
    - CLA（コントリビューターライセンス契約）の確認が残っており、今後のマージ調整が予定されています。

---

## コミュニティ参加の呼びかけ

各タスクは、今後も開発者間のみならずユーザー視点でのフィードバックを取り入れながら改善を進めます。  
特に開発環境の整備や分析レポートのUI改善は利用者体験向上に直結するため、アイデア提供やご意見を歓迎しています。

引き続き「デジタル民主主義2030」プロジェクトへのご支援・ご参加をお願い致します。
