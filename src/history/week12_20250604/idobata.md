# いどばたシステム 5/28~6/4のGitHub活動まとめ

「いどばたシステム」(idobata-*) では、政策立案に関わる多様なメンバーが共同編集できるよう、日々開発が進んでいます。今週(5/28~6/4)は多数のIssueクローズやPRマージがあり、新機能やデザインの改善が行われました。以下に完了した内容と、現在進行中の未完了タスクや議論状況をまとめます。OSS開発に参加していただくきっかけになれば幸いです。

---

## 今週完了した内容

### クローズされたIssue (5件)

1. [Issue #341](https://github.com/digitaldemocracy2030/idobata/issues/341)  
   政策担当者が担当政策のPRを簡単に見つけられるようにラベル自動付与を検討していたIssueです。GitHub ActionsやAI Hookを用いたラベリング案などが出されました。bot経由で議論されていましたが、最終的に実装方針とレビュー体制がまとまりクローズされました。

2. [Issue #285](https://github.com/digitaldemocracy2030/idobata/issues/285)  
   「GitHubがわからない人でも使いやすくするUI体験」という方向性で改善案が提示されていたIssueです。mdファイルだけをナビゲートできるようにする案などを検討し、不明・専門用語をUIから隠蔽する機能が導入されました。

3. [Issue #252](https://github.com/digitaldemocracy2030/idobata/issues/252)  
   PCユーザー向けにチャット欄を右に固定するレイアウト調整のIssueです。画面幅とUXを考慮し、フロントエンドの大幅リファクタに合わせて対応し、クローズされました。

4. [Issue #213](https://github.com/digitaldemocracy2030/idobata/issues/213)  
   チャットを開いたときに特定条件でプロンプト文が2重に表示されるバグ報告。再現条件が不明でしたが、フロントエンドのステート管理を調整して解消済みです。

5. [Issue #211](https://github.com/digitaldemocracy2030/idobata/issues/211)  
   キークエスチョンの文字数やタイトル命名について議論していたIssueです。Slack上での意見交換もあり、短くキャッチーな名称と丁寧な説明を切り分ける方向で対応されました。

### マージされたPull Request (16件)

1. [PR #394](https://github.com/digitaldemocracy2030/idobata/pull/394) (by jujunjun110)  
   - unittest向け型の記述ミス修正。ビルドが通らなくなる不具合を解決。  

2. [PR #393](https://github.com/digitaldemocracy2030/idobata/pull/393) (by jujunjun110+Devin)  
   - 環境変数でfaviconを動的設定できるように対応("VITE_FAVICON_URL")。react-helmetによるメタデータ管理追加。  

3. [PR #392](https://github.com/digitaldemocracy2030/idobata/pull/392) (by jujunjun110+Devin)  
   - ページタイトルを"VITE_SITE_NAME"から取得して動的に反映。メタタグの更新も合わせて実施。  

4. [PR #391](https://github.com/digitaldemocracy2030/idobata/pull/391) (by jujunjun110)  
   - GitHubクライアントをモック化し、開発環境でAPIレートリミットを回避。  

5. [PR #390](https://github.com/digitaldemocracy2030/idobata/pull/390) (by jujunjun110)  
   - GitHub周りの処理をclientパターンにリファクタリングし、保守性を向上。  

6. [PR #389](https://github.com/digitaldemocracy2030/idobata/pull/389) (by jujunjun110)  
   - MCP関連のclientとserviceを分割し、役割を明確に。  

7. [PR #388](https://github.com/digitaldemocracy2030/idobata/pull/388) (by jujunjun110)  
   - プロジェクトファイルのフォーマット統一。  

8. [PR #387](https://github.com/digitaldemocracy2030/idobata/pull/387) (by jujunjun110)  
   - neverthrowを使ったバックエンド側のエラーハンドリング強化。  

9. [PR #386](https://github.com/digitaldemocracy2030/idobata/pull/386) (by jujunjun110)  
   - フロントのチャットパネルをneverthrowベースでリファクタリング。  

10. [PR #385](https://github.com/digitaldemocracy2030/idobata/pull/385) (by jujunjun110+Devin)  
    - policy-editチャット用の型安全なHTTPクライアントを実装。  

11. [PR #384](https://github.com/digitaldemocracy2030/idobata/pull/384) (by jujunjun110+Devin)  
    - 動的カラーパレット生成システムを導入し、テーマカラーを自由に変更できるように拡張。  

12. [PR #381](https://github.com/digitaldemocracy2030/idobata/pull/381) (by jujunjun110+Devin)  
    - コンポーネントを階層構造に整理し、`policy-edit/frontend` の保守性を向上。  

13. [PR #380](https://github.com/digitaldemocracy2030/idobata/pull/380) (by jujunjun110)  
    - サイトロゴを環境変数で指定できるように。ブランドカスタマイズ性を強化。  

14. [PR #379](https://github.com/digitaldemocracy2030/idobata/pull/379) (by jujunjun110)  
    - shadcn-ui導入、デザインベースの刷新。ヘッダーやフォント周りを改善。  

15. [PR #378](https://github.com/digitaldemocracy2030/idobata/pull/378) (by jujunjun110+Devin)  
    - policy-editフロントエンドへshadcn/uiコンポーネントを導入。ボタンやテキストエリアをUI統一。  

16. [PR #376](https://github.com/digitaldemocracy2030/idobata/pull/376) (by miyakosis)  
    - openrouterのAPI Callでtoolsのdescriptionを渡すように修正。LLMへの追加情報を充実させる対応。  

---

## 現在進行中の主な未完了タスク・議論

今週新たに作成されたIssueや、未クローズ/未マージのIssue・PRの動きについて紹介します。ぜひ興味のある議題への参加やレビューをお待ちしています。

### 新規Issue (2件)

1. [Issue #377](https://github.com/digitaldemocracy2030/idobata/issues/377) (by jujunjun110)  
   他のホスティング主体が利用しやすいよう、サイト名を管理画面からカスタマイズ可能にする提案。いどばたを自治体や企業でも導入しやすくする狙いがあります。  
   
2. [Issue #375](https://github.com/digitaldemocracy2030/idobata/issues/375) (by miyakosis)  
   オープンルーターAPIにtoolsのdescriptionを渡す改善案。PRの作成や更新時により豊富な情報をLLMに提供し、AIアシスタントが多角的に判断できるようにする試みです。

### 更新されたIssue (5件)
(※ すでに作成済かつクローズされていないもの)

- [Issue #343](https://github.com/digitaldemocracy2030/idobata/issues/343)  
  「/research」というコマンドでコンテクストリサーチを行うアイデアや、ベータ版としてAIの根拠URLを返す方針が議論されており、実装が前進。 
- [Issue #311](https://github.com/digitaldemocracy2030/idobata/issues/311)  
  PR一覧を見た有権者が提案者名を見て混乱しないよう、表記をそろえる案。表記ブレをなくし透明性を高める話題です。  
- [Issue #284](https://github.com/digitaldemocracy2030/idobata/issues/284)  
  MCPプルリク作成時にごく稀にファイルが重複してしまう不具合。再現条件が不明で、原因究明中。  
- [Issue #204](https://github.com/digitaldemocracy2030/idobata/issues/204)  
  「何から話せばいいかわからない」というUI困りごと。チャット開始時にテンプレメッセージを表示するなどのアイデアが検討されています。  
- [Issue #203](https://github.com/digitaldemocracy2030/idobata/issues/203)  
  AIがMarkdown形式の回答をした場合に整形表示してほしい要望。フロントでのMarkdownレンダリングが検討・実装予定。

### 新規作成されたPR (2件・未マージ)

- [PR #383](https://github.com/digitaldemocracy2030/idobata/pull/383) (by jujunjun110+Devin)  
  カスタムカラー対応の強化案で、より柔軟なカラーパレット生成を提案。Tailwindとも連携する大規模カラーマッピングが議論に。  
- [PR #382](https://github.com/digitaldemocracy2030/idobata/pull/382) (by jujunjun110+Devin)  
  chroma.jsを利用した5段階のカラーレベル生成。今後のテーマ切り替え機能などに活かす狙い。

### 更新されたが未マージのPR (一部抜粋)

- [PR #372](https://github.com/digitaldemocracy2030/idobata/pull/372)  
  フロントエンド両方に “Powered by Digital Democracy 2030” クレジットを追加しようという案。OSSらしくクレジットを可視化している。  
- [PR #371](https://github.com/digitaldemocracy2030/idobata/pull/371)  
  本番デプロイ設定を追加。Dockerやnginx設定、バックアップスクリプトなどが含まれ、デプロイの安定化が期待される。  
- [PR #370](https://github.com/digitaldemocracy2030/idobata/pull/370)  
  引用スタイルを改善し、ソースURLの表示を行う試み。Markdown表示に混乱がないか議論中。  
- その他、UI文言の変更(「話題を変える」→「再スタート」)や、ユーザー体験向上のためのプロフィール保存エラー表示改善など、多数のPRが活発に議論されています。

---

## 参加方法・今後の展望

- IssuesやPRに自由にコメント可能です。
- バグ報告やドキュメント修正、UIやUXアイデアなども大歓迎です。
- GitHubが初めての方も、[Issue #285](https://github.com/digitaldemocracy2030/idobata/issues/285)のようにわかりやすい仕組みづくりを進めていますので、ぜひ気軽にご参加ください。

「いどばたシステム」は今後も政策立案の民主化をめざし、日々進化していきます。OSSの強みは、多様な貢献者がそれぞれの視点でアイデアを持ち寄れること。興味のある方は、ぜひIssueやPRでの議論や実装に参加していただければ幸いです。  