# いどばたシステム 6/11~6/18 のGitHub活動まとめ

開発に興味を持っていただきありがとうございます。今週は以下の通り、いどばたシステムの開発が進行しました。  
新機能や議論を把握して、ぜひOSS開発に参加してみてください！

---

## 今週完了したこと

### マージされたPull Request
今週は4件のPull Requestがマージされました。主な実装者はいずれもjujunjun110さんで、複数のファイルにわたる改修を行なっています。

1. [PR #404](https://github.com/digitaldemocracy2030/idobata/pull/404)  
   - 変更の概要: ディレクトリを表示するviewを追加し、大規模な修正(+1579, -60)。  
   - 実装者: jujunjun110  
   - ポイント: 「一つのファイルに変更提案が集中しすぎる問題」を緩和するため、画面を整理する新たなviewが追加されました。  
   
2. [PR #403](https://github.com/digitaldemocracy2030/idobata/pull/403)  
   - 変更の概要: チャットの1件目にAIからの初回メッセージを強制表示し、ユーザーが話しかけやすい雰囲気を作る。  
   - 実装者: jujunjun110  
   - ポイント: 「議論が始まりにくい」という問題に対処すべく、手間なく議論をスタートしやすくなりました。

3. [PR #402](https://github.com/digitaldemocracy2030/idobata/pull/402)  
   - 変更の概要: Viteでの環境変数を明示的にloadenvで読み込むように変更。  
   - 実装者: jujunjun110  
   - ポイント: ビルド環境での設定ミスを減らし、開発者が動作確認しやすくなる環境整備が進みました。

4. [PR #401](https://github.com/digitaldemocracy2030/idobata/pull/401)  
   - 変更の概要: フロントエンドSSG化(一部SSRは難しいため静的サイト生成に切り替え)。  
   - 実装者: jujunjun110  
   - ポイント: シェア時に表示が崩れる問題への対処。ページの表示を改善し、より快適にアクセスしやすくなりました。

---

## まだ進行中の課題・議論

### 新しく追加されたIssue
今週、新たに2件のIssueが追加されました。これらはまだクローズされておらず、まさに議論を募集中です。

- [Issue #406](https://github.com/digitaldemocracy2030/idobata/issues/406)  
  - 作成者: usagi917  
  - 内容: 「チャット入力欄に音声認識機能を追加する」提案。  
  - 目的: キーボード操作が難しいユーザーへのアクセシビリティ改善や、長文入力をスムーズにする利便性向上。  
  - 現状: まだコメントはついておらず、音声認識実装方法などの技術的議論を募集中。

- [Issue #405](https://github.com/digitaldemocracy2030/idobata/issues/405)  
  - 作成者: erichfi  
  - 内容: 「プルリクエスト優先順位付けのための多元的二次投票(Pluralistic Quadratic Voting)」導入アイデア。  
  - 目的: 政策リポジトリで大量のPRを効率よく優先度付けする仕組みを検討。いわゆるConnection-Oriented Cluster Match方式の投票アルゴリズム提案。  
  - ポイント: 単純な”いいね”数ではなく、異なるクラスタ間で合意がとれそうなPRを上位にピックアップする考え方。たとえば[PR #4](https://github.com/digitaldemocracy2030/idobata/pull/4)や[PR #7](https://github.com/digitaldemocracy2030/idobata/pull/7)といった形で投票をしていくイメージが語られています。  
    - なお文中では[PR #123](https://github.com/digitaldemocracy2030/idobata/pull/123)や[PR #456](https://github.com/digitaldemocracy2030/idobata/pull/456)、[PR #1247](https://github.com/digitaldemocracy2030/idobata/pull/1247)などの例も紹介されており、クラスターの違いを可視化する投票システムを実証しようとしています。  
    - 同様の文脈で[PR #1156](https://github.com/digitaldemocracy2030/idobata/pull/1156)との比較も提示され、連合を築く重みをどのように評価するか議論中です。

### 現在オープンのPull Request
- [PR #400](https://github.com/digitaldemocracy2030/idobata/pull/400)  
  - 作成者: jujunjun110+Devin  
  - 内容: 「policy-editフロントエンドへのSSR実装」。  
  - ポイント: Dockerを用いたSSR運用や、開発・本番両モード対応を盛り込む大きめの変更。  
  - 進捗: まだマージされていません。レビューやテストなど、寄稿者が増えると早期に取り込みやすくなります。興味があればぜひチェックをお願いします。

---

## 参加の呼びかけ
いどばたシステムのOSS開発は、さまざまなアイデアや改善提案を歓迎しています。  
新機能の議論やレビュー作業など、コードを書かなくても参加できることは多いです。  
ぜひ以下のアクションにご参加ください:

- 新しいIssueへのコメント: [Issue #406](https://github.com/digitaldemocracy2030/idobata/issues/406), [Issue #405](https://github.com/digitaldemocracy2030/idobata/issues/405)  
- 現在オープン中の[PR #400](https://github.com/digitaldemocracy2030/idobata/pull/400)レビュー・議論  
- 独自の課題やアイデアがあればIssue作成  

みなさまの貢献がデジタル民主主義を前進させます。ぜひ一緒に開発を盛り上げていきましょう！