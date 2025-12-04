# いどばたシステム 4/23~4/30のGitHub活動まとめ

この1週間（2025-04-23～2025-04-30）における「いどばたシステム」のGitHub活動をまとめました。OSS開発に興味を持っていただき、ぜひ一緒に開発を進めていただければ幸いです。

---

## 1. 今週完了したタスク

### 1-1. クローズされたIssue（6件）

以下6件のIssueがクローズされました。使い勝手の向上や開発環境の整備など、多岐にわたる修正が進んでいます。

- [Issue #95](https://github.com/digitaldemocracy2030/idobata/issues/95) (作成者: jujunjun110)  
  「テーマ一覧のタップ可能エリアが小さすぎる」問題を解消  

- [Issue #88](https://github.com/digitaldemocracy2030/idobata/issues/88) (作成者: moai-redcap)  
  Windows環境でのビルドエラーを修正し、型チェックの対応を完了  

- [Issue #37](https://github.com/digitaldemocracy2030/idobata/issues/37) (作成者: devin-ai-integration[bot] → 実質: <人間>+Devin)  
  キークエスチョンを簡潔にする方針がまとまり、対応を完了  

- [Issue #24](https://github.com/digitaldemocracy2030/idobata/issues/24) (作成者: jujunjun110)  
  CI/CD整備により、Push時のコード品質チェック環境を整備  

- [Issue #15](https://github.com/digitaldemocracy2030/idobata/issues/15) (作成者: jujunjun110)  
  レポート作成の可読性を高める案が固まり、対応が完了  

- [Issue #13](https://github.com/digitaldemocracy2030/idobata/issues/13) (作成者: jujunjun110)  
  プロジェクトをコンテナビルドできるようにして開発しやすい環境を実現  

### 1-2. マージされたPull Request（30件）

合計30件のPRがマージされ、機能追加やバグ修正、ドキュメント整備など幅広い改善が行われました。作者がbotの場合は「<人間>+Devin」などを表記し、多様なコントリビューターが参加している様子がうかがえます。

1. [PR #98](https://github.com/digitaldemocracy2030/idobata/pull/98) (作成者: jujunjun110+Devin)  
   - QuestionDetail.tsxで実際のデータを取得できるように実装  
2. [PR #97](https://github.com/digitaldemocracy2030/idobata/pull/97) (作成者: jujunjun110)  
   - リンクを追加することでシャープな問一覧へ簡単に遷移できるように修正  
3. [PR #96](https://github.com/digitaldemocracy2030/idobata/pull/96) (作成者: jujunjun110)  
   - MongoDBの慣習（_id）に合わせてフロントエンド側の型やID指定を修正  
4. [PR #94](https://github.com/digitaldemocracy2030/idobata/pull/94) (作成者: jujunjun110)  
   - テーマ詳細ページをデータとつなぎ込み、UIを改善する大きな実装  
5. [PR #92](https://github.com/digitaldemocracy2030/idobata/pull/92) (作成者: jujunjun110)  
   - ハンバーガーメニューでもテーマ一覧を表示し、アクセス性を向上  
6. [PR #90](https://github.com/digitaldemocracy2030/idobata/pull/90) (作成者: jujunjun110)  
   - テーマ一覧ページで実際のテーマデータを表示可能に  
7. [PR #89](https://github.com/digitaldemocracy2030/idobata/pull/89) (作成者: spinute)  
   - 型チェック用npmコマンドの追加と既存エラー修正、CIへの型チェック導入  
8. [PR #87](https://github.com/digitaldemocracy2030/idobata/pull/87) (作成者: spinute)  
   - ドキュメントにFigmaへのリンクを追加  
9. [PR #86](https://github.com/digitaldemocracy2030/idobata/pull/86) (作成者: spinute)  
   - docsディレクトリへドキュメントを集約し、リポジトリの構成を整理  
10. [PR #82](https://github.com/digitaldemocracy2030/idobata/pull/82) (作成者: jujunjun110+Devin)  
    - 新規Issueを自動的に特定プロジェクトへ紐付けるGitHub Actionsの修正  
11. [PR #79](https://github.com/digitaldemocracy2030/idobata/pull/79) (作成者: jujunjun110+Devin)  
    - @biomejs/biomeを追加してコードフォーマットを統一  
12. [PR #78](https://github.com/digitaldemocracy2030/idobata/pull/78) (作成者: jujunjun110+Devin)  
    - 管理画面ログイン機能を実装（パスワード＋JWT認証）  
13. [PR #77](https://github.com/digitaldemocracy2030/idobata/pull/77) (作成者: Shutaro Aoyama+Devin)  
    - ViteのallowedHostsを.envから設定できるようにし、デプロイ時の柔軟性を向上  
14. [PR #76](https://github.com/digitaldemocracy2030/idobata/pull/76) (作成者: Shutaro Aoyama+Devin)  
    - CORS_ORIGINをルートの.envから別々に設定し、複数アプリが干渉しないように調整  
15. [PR #75](https://github.com/digitaldemocracy2030/idobata/pull/75) (作成者: jujunjun110)  
    - ドキュメント化(Feature/documentation)でプロジェクト状況を可視化  
16. [PR #74](https://github.com/digitaldemocracy2030/idobata/pull/74) (作成者: jujunjun110+Devin)  
    - 管理画面実装(別アプリの追加)によりテーマ管理機能を充実化  
17. [PR #73](https://github.com/digitaldemocracy2030/idobata/pull/73) (作成者: jujunjun110)  
    - マイページにテーマ一覧リンクを追加してUI向上  
18. [PR #70](https://github.com/digitaldemocracy2030/idobata/pull/70) (作成者: spinute)  
    - VSCodeでBiomeを活用するための設定を更新  
19. [PR #69](https://github.com/digitaldemocracy2030/idobata/pull/69) (作成者: spinute)  
    - ESLintとPrettierの残存設定を削除し、Biomeに一本化  
20. [PR #68](https://github.com/digitaldemocracy2030/idobata/pull/68) (作成者: jujunjun110+Devin)  
    - frontendディレクトリからESLint/Prettierファイルを廃止し、Biomeに統一  
21. [PR #67](https://github.com/digitaldemocracy2030/idobata/pull/67) (作成者: jujunjun110+Devin)  
    - 問い個別ページを実装し、議論や意見一覧を見やすく拡充  
22. [PR #66](https://github.com/digitaldemocracy2030/idobata/pull/66) (作成者: spinute)  
    - Vitestの導入に合わせてテストの例をいくつか追加  
23. [PR #65](https://github.com/digitaldemocracy2030/idobata/pull/65) (作成者: spinute)  
    - 前PRで追加し損ねていたpackage-lock.jsonの変更を反映  
24. [PR #64](https://github.com/digitaldemocracy2030/idobata/pull/64) (作成者: spinute)  
    - migrateToThemes.jsにフォーマッタを適用し、コメントを整理  
25. [PR #63](https://github.com/digitaldemocracy2030/idobata/pull/63) (作成者: spinute)  
    - Makefile修正の際に反映できていなかった差分を補完  
26. [PR #62](https://github.com/digitaldemocracy2030/idobata/pull/62) (作成者: spinute)  
    - Vitestを導入し、package.jsonをリファクタリング  
27. [PR #61](https://github.com/digitaldemocracy2030/idobata/pull/61) (作成者: spinute)  
    - Biomeでのフォーマットを大規模に適用し、コード全体を整形  
28. [PR #59](https://github.com/digitaldemocracy2030/idobata/pull/59) (作成者: spinute)  
    - 不要になった.env.exampleを削除してプロジェクト構成を整理  
29. [PR #58](https://github.com/digitaldemocracy2030/idobata/pull/58) (作成者: spinute)  
    - Makefileを追加し、開発者がビルドや起動を簡単に実行できるように整備  
30. [PR #55](https://github.com/digitaldemocracy2030/idobata/pull/55) (作成者: jujunjun110)  
    - Chat UIのリファクタリングにより、シート表示を分割して可読性改善  

---

## 2. 未完了のタスクと議論の様子

ここからはクローズされていないIssueや、新規・更新されたIssueのうち注目度が高そうなものをピックアップします。さらなる意見やコントリビュートをお待ちしています。

### 2-1. 新規で作成された主なIssue

- [Issue #91](https://github.com/digitaldemocracy2030/idobata/issues/91)  
  各ホスティング主体がサイト名やabout文を管理画面から変更できるようにしたい。複数人が運営する場合などを想定。  
- [Issue #57](https://github.com/digitaldemocracy2030/idobata/issues/57) (作成者: <人間>+Devin)  
  AIの「確信度レバー」を追加し、議論の初期と後期でAIの反論レベルを可変にしたいという提案。Slack上でも活発に議論中。  
- [Issue #50](https://github.com/digitaldemocracy2030/idobata/issues/50) (作成者: blu3mo)  
  シャープな問い生成前にreasoningを入れることでクオリティを高めるアイデア。より深いレビューを求める声あり。  
- [Issue #56](https://github.com/digitaldemocracy2030/idobata/issues/56) (作成者: <人間>+Devin)  
  PRに不要な改行が挿入される問題。可読性向上のためにどう修正するか検討中。  
- [Issue #35](https://github.com/digitaldemocracy2030/idobata/issues/35) (作成者: <人間>+Devin)  
  差分を最小化してレビューの効率を上げる、という文書生成ロジック改善の提案。  

上記以外にも、UIやデザイン移行 (#85, #84, #83 など)、チャットログ保存 (#22) やレポートへの貢献表示 (#21)、多彩なログイン手段 (#16, #20) の導入など、多数のIssueが立てられています。  
気になるトピックへのコメントやプルリクは大歓迎です！

### 2-2. 更新されたIssue

- [Issue #6](https://github.com/digitaldemocracy2030/idobata/issues/6)  
  「非技術者ユーザーがGit概念に戸惑うため、専門用語を日本語化＆直感的ワークフローに」という議論が続いています。  
  現状はUI側で隠蔽してしまうか、ある程度Gitを学んでもらうかで意見が分かれており、検討が進行中です。

### 2-3. オープン状態のPR

- [PR #1](https://github.com/digitaldemocracy2030/idobata/pull/1) (作成者: itoma-aikon)  
  readmeの作成と.env.exampleの作成を行い、セットアップしやすくしようというドキュメント充実の試み。現在レビュー待ちです。  

---

## 3. 今後の参加方法

- IssueやPRへのコメント・提案  
- ドキュメントのレビュー、翻訳  
- コードへの直接コントリビュート  

初心者の方も大歓迎です。  
複数の開発メンバーや「<人間>+Devin」連携Botなど、多彩な貢献者が日々活発に議論・実装を進めています。ぜひ気になるIssueやPRにコメントいただき、一緒に「いどばたシステム」を育てていきましょう！

興味を持たれた方は、GitHubのIssueやPRでお気軽に発言・質問してください！