# デジタル民主主義WEB 11/19~11/26 のGitHub活動まとめ

デジタル民主主義WEB（以下、websiteリポジトリ）における今週の開発状況をまとめました。  
新機能リリースやタスクの完了、また継続中の議論などを紹介します。OSS開発に興味をお持ちの方のご参考になれば幸いです。

---

## 今週完了したIssueとPR

### Issue

- [Issue #180](https://github.com/digitaldemocracy2030/website/issues/180)  
  新規参加者向けに「プロジェクトが今どんな状態なのか」をざっくり紹介する案の提案です。  
  実際のSlackでの議論や既存ページ（/history）のテキストをAIに要約させたものをウェブサイトに載せる重要性が話し合われ、最終的にはたたき台の文章が完成しました。  
  作者は shingo-ohki さんです。

- [Issue #174](https://github.com/digitaldemocracy2030/website/issues/174)  
  Google Analytics の導入でアクセス解析を可能にする件です。  
  「historyページがどれくらい見られているか？」という問いが発端になっています。  
  作者は shingo-ohki さんで、ウェブサイトの運営改善を考えるうえでも重要なIssueでした。

### マージされたPull Request

- [PR #181](https://github.com/digitaldemocracy2030/website/pull/181) 「初めての方へ」ページを追加  
  - [Issue #180](https://github.com/digitaldemocracy2030/website/issues/180) を受けて作られたPRです。  
  - 作者は shingo-ohki さんで、サイト内に新規参加者向けのガイドページが追加されました。  
  - 「このプロジェクトは今どんな状態なのか」「どんなチャンネルに参加するとよいか」などがまとめられ、オンボーディングに役立つ内容です。

- [PR #179](https://github.com/digitaldemocracy2030/website/pull/179) Week36 Summary Update  
  - 毎週自動生成されるプロジェクト活動まとめの更新です。  
  - 作者は github-actions[bot] ですが、定例的にSlackのやりとり等をサマリーしてくれる仕組みを整備することで、履歴の見やすさを上げています。

---

## 継続中のタスクと議論

### 継続中Issue

- [Issue #177](https://github.com/digitaldemocracy2030/website/issues/177) 「プロジェクトの歴史」の更新自動化  
  - 毎週の自動まとめ機能のさらなる発展がテーマです。  
  - 自動生成の精度向上や手動レビューとの協業をどうスムーズにするか、方法が検討されています。

- [Issue #173](https://github.com/digitaldemocracy2030/website/issues/173) 毎週の活動状況更新処理の不具合  
  - Pull Requestが週ごとに異なるブランチで作成されず、同じブランチが使われる問題が報告されています。  
  - 「draft → ready → review → merge」というフローが滞った場合にどうなるか、ワークフローの見直しを含めた議論が続いています。

### 更新があったPull Request（オープン／ドラフト）

- [PR #171](https://github.com/digitaldemocracy2030/website/pull/171) Week27 Summary Update (作者: github-actions[bot])  
- [PR #169](https://github.com/digitaldemocracy2030/website/pull/169) Week26 Summary Update (作者: github-actions[bot])  
- [PR #161](https://github.com/digitaldemocracy2030/website/pull/161) Slack招待リンクを再修正 (作者: kuboon)  
- [PR #155](https://github.com/digitaldemocracy2030/website/pull/155) week21 (作者: kuboon)  
- [PR #142](https://github.com/digitaldemocracy2030/website/pull/142) Replace Twitter links with proper embeds using XEmbed component (作者: Shutaro+Devin)  
- [PR #141](https://github.com/digitaldemocracy2030/website/pull/141) week17 (作者: kuboon)  
- [PR #140](https://github.com/digitaldemocracy2030/website/pull/140) Add comprehensive idobata case study content (作者: Shutaro+Devin)  
- [PR #95](https://github.com/digitaldemocracy2030/website/pull/95) Fix CSS and image loading on top and history pages in PR preview (作者: nishio)

いずれも開発途中の機能拡張や修正です。特に以下のような話題が注目されています:

- Slack招待リンク修正 ([PR #161](https://github.com/digitaldemocracy2030/website/pull/161))  
  ちょっとした変更ですが、新規参加希望者が即座にコミュニティに入れるかどうかに直結する重要ポイントです。  
  手軽ではあるものの、こうした細かい修正がサイトのユーザビリティ向上に寄与しています。

- Twitterリンクの埋め込み ([PR #142](https://github.com/digitaldemocracy2030/website/pull/142))  
  Shutaro+Devin（人間 + AIアシスタント）の協力により、ページ上で直接ツイートを表示する仕組みを検討中。  
  Reactバージョン等の制約がありつつも、ユーザーに分かりやすい形でSNS情報を伝える工夫が期待されています。

- 「idobata」詳細ページへのコンテンツ追加 ([PR #140](https://github.com/digitaldemocracy2030/website/pull/140))  
  いどばたの事例紹介を充実させ、外部サービス連携や実証実験の成果をより広く知らせることを目指しています。  
  Shutaro+Devin の取り組みが活発で、内容の充実が進行中です。

---

## 参加・コントリビュートの呼びかけ

- 「初めての方へ」ページ([PR #181](https://github.com/digitaldemocracy2030/website/pull/181))が追加されました。  
  まだ参加していない方は是非ご覧ください。Slackに入る方法や、各種プロジェクトの概況を確認できます。
- Google Analytics導入([Issue #174](https://github.com/digitaldemocracy2030/website/issues/174))等、運営面の改善にも多くの議論があります。技術的な実装だけでなく、運営や広報方面のアイデアなど、どなたでも大歓迎です。
- OSS開発は、コードを書くだけでなく、Issueでアイデアを出すことや、ドキュメント改善、デザイン検討など多彩な関わり方があります。

今週も多くのコントリビューションが集まり、次々と新しい改善が生まれています。小さな修正から大きな機能追加まで、みんなの力で形づくられていくのがOSSの魅力です。ぜひ気になるトピックに参加してみてください。  