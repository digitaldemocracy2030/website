# いどばたシステム 7/30~8/6のGitHub活動まとめ

いどばたシステム（idobata-*）の今週のGitHubリポジトリ活動状況をまとめました。  
新しく参加を考えている方の参考になれば幸いです。

---

## 今週完了した主な変更点（マージされたPR）

今週は下記5件のPull Requestがマージされ、新しい機能やデザイン変更が反映されています。開発者以外のユーザにとっても、どんな改修が行われたかを知る良い機会です。

1. [PR #446](https://github.com/digitaldemocracy2030/idobata/pull/446)  
   - タイトル: Update: チャット数を表示  
   - 作成者: jujunjun110  
   - 概要: 投稿チャット数を画面表示できるようにしたもの。ウタコデザインに合わせたレイアウト調整も含みます。

2. [PR #445](https://github.com/digitaldemocracy2030/idobata/pull/445)  
   - タイトル: Feature/question detail  
   - 作成者: jujunjun110  
   - 概要: テーマの詳細ページデザインを実装。ウタコデザインを反映してUIが刷新されました。

3. [PR #443](https://github.com/digitaldemocracy2030/idobata/pull/443)  
   - タイトル: 使い方ページを実装した  
   - 作成者: spinute  
   - 概要: 「いどばたビジョン」のUIをもとに、使い方ページを追加。新規ユーザでも利用フローを把握しやすくなりました。

4. [PR #442](https://github.com/digitaldemocracy2030/idobata/pull/442)  
   - タイトル: Update: breadcrumb  
   - 作成者: jujunjun110  
   - 概要: 画面上部などに表示されるパンくずリストのデザイン修正。ウタコデザインに沿った形で実装され、画面遷移がより分かりやすくなりました。

5. [PR #440](https://github.com/digitaldemocracy2030/idobata/pull/440)  
   - タイトル: implement idobata vision top page for v1  
   - 作成者: spinute  
   - 概要: いどばたビジョンのトップページを一新。モバイル表示も考慮して、より洗練されたUIデザインが実装されました。

---

## 未完了のタスクと議論中の内容

今週は新しいIssueやPRがいくつか登場し、既存PRも更新されています。さらなる議論や実装への参加を歓迎しています！

### 新しく作成されたIssue

- [Issue #441](https://github.com/digitaldemocracy2030/idobata/issues/441)  
  - タイトル: ユーザが投稿した意見を、X等に投稿してみんなで議論できるようにする  
  - 作成者: FigureSkateIT  
  - 概要: AIチャットで投稿された意見を自動で公式X（旧Twitter）にも投稿し、ライトユーザ層も巻き込んだ議論を行う仕組みを検討する提案。X連携の具体的なフロー（API使用、モデレーション対応など）も提示されており、実装方法を中心に議論中です。

### 新しく作成されたPR

1. [PR #448](https://github.com/digitaldemocracy2030/idobata/pull/448)  
   - タイトル: refactor: 使用していない crypto を削除  
   - 作成者: noritaka1166  
   - 概要: パッケージの不要な依存関係を削除し、npm実行時に出るワーニングを解消しようとしています。

2. [PR #447](https://github.com/digitaldemocracy2030/idobata/pull/447)  
   - タイトル: chore: idea-discussion 内の不要な devDependencies を削除  
   - 作成者: noritaka1166  
   - 概要: deprecated状態にある型定義パッケージを整理。メンテ性向上のための修正となっています。

3. [PR #444](https://github.com/digitaldemocracy2030/idobata/pull/444)  
   - タイトル: Adjust merge vision UI to main  
   - 作成者: jujunjun110  
   - 概要: gitの差分挙動を確認するためのテストPRとのことですが、UI関連の差分も多いので慎重にレビューが行われています。

### 更新されたPR（まだマージされていないもの）

1. [PR #432](https://github.com/digitaldemocracy2030/idobata/pull/432)  
   - タイトル: import_comments.pyのエンドポイント修正  
   - 作成者: nishidashib  
   - 概要: テストデータのアップロードスクリプトにおけるエンドポイント変数の誤りを修正。まだレビュー意見は少ない様子なので、テスト運用興味がある方の参加を歓迎します。

2. [PR #425](https://github.com/digitaldemocracy2030/idobata/pull/425)  
   - タイトル: Add random profile image assignment for new user accounts  
   - 作成者: Shutaro+Devin  
   - 概要: 新規ユーザが作成された際、ランダムでアバター画像を割り当てる機能を実装。環境構成の都合上テストが手薄ということで、実際の動作確認にご協力いただける方を募集しています。

---

## 参加方法・今後の呼びかけ

- 興味のあるIssueやPRにコメントするだけでもOSS貢献の第一歩になります。  
- バグ発見や改善案の提案、デザイン面のフィードバックなど、あらゆる視点からの参加を歓迎しています。  
- Pull Requestを送る前に簡単に「どんな変更を想定しているか」をIssueで共有していただけると、スムーズな連携ができます。

引き続き、いどばたシステムの発展に向けてご協力よろしくお願いします！  

何か質問があればお気軽にコメントしてください。  