# いどばたシステム 7/16~7/23のGitHub活動まとめ

「いどばたシステム」(リポジトリ: digitaldemocracy2030/idobata) の今週(2025-07-16～2025-07-23)のGitHub上での活動をまとめます。新機能の実装や改善提案が盛りだくさんですので、ぜひ皆さんもご意見・コントリビュートをお願いいたします。

---

## 今週完了したタスク
- 今週はクローズされたIssueやマージされたPull Requestがありませんでした。

---

## 今週新たに作成されたIssue

- [Issue #431](https://github.com/digitaldemocracy2030/idobata/issues/431)  
  **作成者:** kurokawamomo  
  **概要:**  
  Mac Safariで日本語入力を確定するEnterがそのまま送信に使われてしまう不具合報告です。Chromeでは再現せず、OSはmacOS Sequoiaという条件とのこと。Safariユーザーにとって操作しづらくなるため、早期の修正が望まれます。

---

## 今週新たに作成されたPR (未マージ)

1. [PR #430](https://github.com/digitaldemocracy2030/idobata/pull/430)  
   **作成者:** Shutaro+Devin  
   **概要:**  
   policy-editフロントエンドでチャット機能を環境変数によって無効化できるようにする提案。  
   - `VITE_DISABLE_CHAT` が `"true"` の場合、チャットパネルを非表示にし、コンテンツ領域を全幅表示に。  
   - Docker Composeでも設定可能。  
   - 会話に参加したくない場合や、開発・デモ時に一時的にチャットを隠す場面で便利です。

2. [PR #429](https://github.com/digitaldemocracy2030/idobata/pull/429)  
   **作成者:** kuboon+Devin  
   **概要:**  
   GitHub APIを直接呼び出し、MCP（Model Context Protocol）サーバをバイパスする大きな構造変更。  
   - OctokitとGitHub App認証を導入。  
   - バックエンドの通信回数を減らしてパフォーマンス向上が期待。  
   - MCP不要化によりnpmワークスペースの整理も進行中。  

3. [PR #428](https://github.com/digitaldemocracy2030/idobata/pull/428)  
   **作成者:** nishidashib  
   **概要:**  
   管理画面の文言「シャープな問い(と、問い)」を「重要論点」に統一する変更。  
   - UI上の表記ずれを解消  
   - ユーザーが「重要論点」という用語で統一的に理解しやすくなります。

---

## 継続中の主なPR (アップデートや議論あり)

1. [PR #425](https://github.com/digitaldemocracy2030/idobata/pull/425) (Shutaro+Devin)  
   - 新規ユーザー登録時にランダムなアイコンを割り当てる機能  
   - 「名前のランダム生成」に加え、6種類のカラフルなアバターをランダムに付与  

2. [PR #424](https://github.com/digitaldemocracy2030/idobata/pull/424) (Shutaro+Devin)  
   - 新しいチャット開始時にAIが自動挨拶を送る機能  
   - 従来の“空メッセージ判定”ではなく、`isConversationStart` というパラメータを導入して明示的に会話開始を検知  

3. [PR #416](https://github.com/digitaldemocracy2030/idobata/pull/416) (Shutaro+Devin)  
   - 重複して表示されてしまうチャット通知を1回にまとめる修正  
   - チャットマネージャの初期化時に、通知を二重に呼んでいた箇所をフラグ制御で防止  

4. [PR #415](https://github.com/digitaldemocracy2030/idobata/pull/415) (Shutaro+Devin)  
   - policy-editフロントエンドでのエラーメッセージを標準化  
   - 「申し訳ありません、内部でエラーが発生しました…」という形に統一し、ユーザーにわかりやすく表示  

---

## コミュニティへの呼びかけ

- Mac Safariでの不具合対応([Issue #431](https://github.com/digitaldemocracy2030/idobata/issues/431))は早急に直したいポイントなので、テスターやデバッグ経験者の皆さんの協力を歓迎します。  
- 以下のPRに関心がある方、ぜひレビューやコメントをお待ちしています:  
  - [PR #430](https://github.com/digitaldemocracy2030/idobata/pull/430): チャット無効化の環境変数対応  
  - [PR #429](https://github.com/digitaldemocracy2030/idobata/pull/429): MCPバイパスによるOctokit直接呼び出し  
  - [PR #428](https://github.com/digitaldemocracy2030/idobata/pull/428): 用語の統一によるUI改善  
- 継続中のPR([PR #425](https://github.com/digitaldemocracy2030/idobata/pull/425)や[PR #424](https://github.com/digitaldemocracy2030/idobata/pull/424)など)も、動作確認や細かなUI改善、ドキュメント追記など、多様な形でのコントリビューションが可能です。

皆さんの積極的な参加とフィードバックをお待ちしています！共同でより良い「いどばたシステム」を作り上げていきましょう。