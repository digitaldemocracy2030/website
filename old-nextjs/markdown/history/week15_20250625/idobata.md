# いどばたシステム 6/18~6/25 のGitHub活動まとめ

この1週間（2025/06/18～2025/06/25）の「いどばたシステム」リポジトリでの活動をまとめました。  
新機能の把握や今後の議論への参加など、興味を持っていただけるきっかけになれば幸いです。

---

## 今週完了したこと

### マージされたプルリクエスト

- [PR #411](https://github.com/digitaldemocracy2030/idobata/pull/411) : サイドバーが長いときにレイアウトが崩れる問題を解決  
  - **作者:** jujunjun110  
  - サイドバーのレイアウトが崩れる不具合を修正する内容です。見た目のバグ修正のため、一般ユーザーの方でもすぐに恩恵を感じられる改善だと思います。

- [PR #410](https://github.com/digitaldemocracy2030/idobata/pull/410) : Add redirect from root path to README page  
  - **作者:** jujunjun110+Devin（AIアシスタントとの協業）  
  - ルートパス (“/”) にアクセスした際に、自動的に “/view/README.md” にリダイレクトするようにしました。ユーザーがトップページからドキュメントを簡単に読めるようになり、操作性が向上しています。

---

## 今週新たに作成された/更新された主なIssue・PR

### 新規作成のIssue
- [Issue #408](https://github.com/digitaldemocracy2030/idobata/issues/408) : シードデータを投入できない。  
  - **作者:** nishidashib  
  - シードデータを投入しようとしたところ、エラーが発生するという報告です。ドキュメントにはSeederの方法が書かれていますが、実際には `themeId` が重要であることがわかりました。

### 更新されたIssue
- [Issue #405](https://github.com/digitaldemocracy2030/idobata/issues/405) : プルリクエスト優先順位付けのための多元的二次投票  
  - **作成者:** erichfi  
  - 2000件を超えるPRがある状況で、「Connection-Oriented Cluster Match Quadratic Voting」を使ってより民主的に優先順位を付ける方法が議論されています。単なるいいね数ではなく、意見が対立しがちな人々をまたぐ合意を獲得した提案を見つけたいという斬新なアイデアが中心です。  
  - 具体例として、[PR #4](https://github.com/digitaldemocracy2030/idobata/pull/4) や [PR #7](https://github.com/digitaldemocracy2030/idobata/pull/7)、[PR #123](https://github.com/digitaldemocracy2030/idobata/pull/123) などを引き合いに出し、「異なるクラスター間で支持を得るほどスコアを高くする」仕組みが提案されています。  
  - こういった仕組みは大規模なコミュニティで意見を集約する際に非常に注目度が高いので、興味のある方はディスカッションに参加してください。

---

### 新規作成のプルリクエスト
- [PR #409](https://github.com/digitaldemocracy2030/idobata/pull/409) : シードデータ投入のパスを修正  
  - **作者:** nishidashib  
  - 上記 [Issue #408](https://github.com/digitaldemocracy2030/idobata/issues/408) への対応として、シードデータを正しく投入するための `themeId` パラメータをパスに追加しています。  
  - これによりSeeder実行時のエラーが解消される見込みです。

- [PR #407](https://github.com/digitaldemocracy2030/idobata/pull/407) : チャットでマークダウンを表示できるように変更  
  - **作者:** Gurz1019MP  
  - ReactMarkdownを使用してチャット画面にMarkdownを表示できるようにしました。表組などの複雑なMarkdownにも対応できるようです。  
  - 今後のチャットの視認性が向上し、議論がよりスムーズになることが期待されます。  
  - 参考として [Issue #203](https://github.com/digitaldemocracy2030/idobata/issues/203) に言及されています。

### 更新されたプルリクエスト
- [PR #400](https://github.com/digitaldemocracy2030/idobata/pull/400) : Implement SSR for policy-edit frontend  
  - **作者:** jujunjun110+Devin  
  - ポリシー編集用フロントエンドをServer-Side Rendering（SSR）化する大規模な変更です。  
  - SEO、初回ロード速度の向上、メタタグ動的生成など、技術的に高度な実装がされています。社会的に見ても大規模な参画があるOSSでは、SSR化によるパフォーマンス向上や検索性の向上がメリットになる可能性があります。  
  - まだ継続して調整中のようなので、興味を持った方はレビューやコメントをお願いいたします。

---

## 今後の議論ポイント

1. [Issue #405](https://github.com/digitaldemocracy2030/idobata/issues/405) での「多元的二次投票」システム  
   - 衆目を集める大きな議論です。投票システム全体をどう構築するか、どのように多様な視点を反映するのか、といった話題に関心があればコメントしてみてください。

2. [Issue #408](https://github.com/digitaldemocracy2030/idobata/issues/408) と [PR #409](https://github.com/digitaldemocracy2030/idobata/pull/409) の進捗  
   - シードデータ投入の問題が解決するかどうかに注目が集まっています。動作確認など、テスターや開発者の皆さんからの追加報告が求められています。

3. [PR #407](https://github.com/digitaldemocracy2030/idobata/pull/407) でのMarkdown表示機能  
   - マークダウンを活用した表やリスト表示の幅が広がりそうです。どのように運用されるか、UI/UX面のフィードバックも歓迎です。

4. [PR #400](https://github.com/digitaldemocracy2030/idobata/pull/400) のSSR化の最終調整  
   - 大規模な技術変更なので、想定外の不具合やパフォーマンス面の懸念がないか、引き続き確認が必要です。

---

## 参加の呼びかけ

- 新しい機能の提案や既存の不具合の報告は大歓迎です。  
- まだコードを書くのは難しいという方も、Issueへのコメントやテストへの協力など、さまざまな形での貢献が可能です。
- [Issue #405](https://github.com/digitaldemocracy2030/idobata/issues/405) などの大きな議論こそ、多様な視点が集まるとより良い方向に進みます。ぜひご意見をお寄せください。

今週も多くの貢献がありました。興味やアイデアがあれば、ぜひリポジトリをウォッチしたりIssue・PRに参加したりしてみてください！  
みなさんのご協力をお待ちしています。