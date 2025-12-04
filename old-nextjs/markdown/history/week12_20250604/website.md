# デジタル民主主義WEB 5/28~6/4 のGitHub活動まとめ

今週はユーザビリティの向上につながるIssueの対応を中心に、いくつかPull Requestがマージされました。特に、「お知らせページ」の導線づくりや広聴AIのリリース記事追加など、ユーザが新機能をより発見しやすくなる更新が含まれています。以下に、完了済みタスクと未完了タスクそれぞれを紹介します。

---

## 今週完了したタスク

### 完了したIssue

- [Issue #128](https://github.com/digitaldemocracy2030/website/issues/128) 「お知らせページへの動線がない」  
  トップページからお知らせページ (https://dd2030.org/news) への導線がなく、わかりにくいとの指摘がありました。  
  → このIssueは [PR #130](https://github.com/digitaldemocracy2030/website/pull/130) のマージによって解決されました。

### マージされたPR

- [PR #130](https://github.com/digitaldemocracy2030/website/pull/130) 「お知らせページへの動線作り」  
  - 作成者: kotaro-yamasaki  
  - ホーム画面に最新のお知らせ欄を作成し、タスクバーからもお知らせページに移動できるようになりました。今後は「最新のお知らせを動的に更新する」仕組みの実装が期待されています。  

- [PR #129](https://github.com/digitaldemocracy2030/website/pull/129) 「Add kouchou-ai v3.0.0 release announcement article」  
  - 作成者: NISHIO+Devin  
  - 広聴AI v3.0.0 リリース記事を追加し、新機能（LocalLLM対応、ソースリンク機能、コスト表示機能など）をわかりやすく紹介しています。  

- [PR #124](https://github.com/digitaldemocracy2030/website/pull/124) 「week11」  
  - 作成者: nishio  
  - 細かなコード調整と思われますが、ウェブサイトの改善に貢献するコミットです。  

---

## 未完了のタスクと議論

以下のIssueは現在も議論や検討が進行中です。もしご意見や実装のアイデアがあれば、ぜひご参加ください！

- [Issue #131](https://github.com/digitaldemocracy2030/website/issues/131) 「最新のお知らせを動的に更新する」  
  - CMSなどを活用して自動更新できないか検討中。  
  - ホーム画面との連動で、更新作業を効率化するアイデアが出ています。  

- [Issue #127](https://github.com/digitaldemocracy2030/website/issues/127) 「ウェブサイトの入場時にアニメーションをつける」  
  - “名探偵コナン”風の演出やロゴを活かす演出案が提案されています。  
  - 「扉が開くようなアニメーション」など、デザイン面の議論が進みそうです。  

- [Issue #126](https://github.com/digitaldemocracy2030/website/issues/126) 「各プロダクトの詳細ページから活用事例に飛べるようにする」  
  - ユーザが直感的に活用事例にアクセスできるよう、リンクを設置する案があがっています。  
  - メニュー構成・UI面での改善アイデアを募集中です。  

- [Issue #125](https://github.com/digitaldemocracy2030/website/issues/125) 「[活用事例]リンク追加/UI改善」  
  - 活用事例ページ内のリンク形式を統一するか、ボタン式にするかで意見交換中。  
  - 事例が増えた際のスケールを見越したデザインが検討課題です。  

---

## 参加の呼びかけ

「デジタル民主主義WEB」の開発では、多様な貢献者のアイデアや実装を大歓迎しています。UIデザイン、機能提案、ドキュメント修正など、どんな形のコントリビュートも貴重です。興味を持たれた方は、ぜひIssueやPRで気軽にコメントや提案をお寄せください！  

今後も多くの改善と新機能リリースが控えています。皆さんの参加が、より良い民主主義プラットフォームの実現につながります。ご協力、よろしくお願いいたします。