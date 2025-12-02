# デジタル民主主義WEB 5/21~5/28 のGitHub活動まとめ

今週は5件のIssueがクローズされ、合計14件のPull Requestがマージされました。新機能追加からデザイン調整、リンク修正など、多岐にわたる修正・改善が行われています。以下ではまず「完了したタスク」を、その後「まだ議論中のタスク」を紹介します。

---

## 今週完了したタスク

### 完了したIssue
1. [Issue #118](https://github.com/digitaldemocracy2030/website/issues/118)  
   - 直近の活動に飛んだ際、自動で一番新しい週までスクロールされるようにする改善
2. [Issue #103](https://github.com/digitaldemocracy2030/website/issues/103)  
   - [広聴AI]の直近の活動がスマホ画面にはみ出す不具合修正
3. [Issue #90](https://github.com/digitaldemocracy2030/website/issues/90)  
   - Googleフォームのリンク入れ替え
4. [Issue #87](https://github.com/digitaldemocracy2030/website/issues/87)  
   - シェアボタンを押した際の初期テキストを、画面内容に応じて変えられるようにする
5. [Issue #38](https://github.com/digitaldemocracy2030/website/issues/38)  
   - 広聴AIページに使い方ボタンを追加 → GitHubのhow_to_useへのリンク

### マージされた主なPR
(作者名はGitHub上のアカウント名です)

- [PR #120](https://github.com/digitaldemocracy2030/website/pull/120) (kotaro-yamasaki)  
  自動スクロールの微修正により、より自然に最新週へ移動できるよう調整
- [PR #119](https://github.com/digitaldemocracy2030/website/pull/119) (kotaro-yamasaki)  
  [Issue #118](https://github.com/digitaldemocracy2030/website/issues/118) を実装し、最新週まで自動スクロールされる機能を提供
- [PR #116](https://github.com/digitaldemocracy2030/website/pull/116) (akai-OolongBreaker)  
  [Issue #87](https://github.com/digitaldemocracy2030/website/issues/87) 対応。シェア時の初期テキストが各画面の内容を反映するように
- [PR #115](https://github.com/digitaldemocracy2030/website/pull/115) (akai-OolongBreaker)  
  Slack招待リンクの不具合を修正
- [PR #114](https://github.com/digitaldemocracy2030/website/pull/114) (masatosasano2)  
  Lintアクションを改善し、PR作成や編集時に自動でスタイルを修正する仕組みを導入
- [PR #105](https://github.com/digitaldemocracy2030/website/pull/105) (moai-redcap)  
  buildエラー解消で開発の安定性を向上
- [PR #101](https://github.com/digitaldemocracy2030/website/pull/101) (Nozomi-M21)  
  Webサイトの活用事例のコンテンツを追加
- [PR #99](https://github.com/digitaldemocracy2030/website/pull/99) (nishio)  
  “week10”の活動内容をサイトに追加し、情報を拡充

そのほかにもUIの細かい調整やレスポンシブ対応など、小さいながらもユーザー体験を改善する変更が多数含まれました。多くの開発者・デザイナーの方々が幅広く貢献してくださっています。

---

## 未完了・議論中のタスク

### 新しく作成されたIssue
- [Issue #123](https://github.com/digitaldemocracy2030/website/issues/123)  
  プロダクト別事例ページを横断的なニュース一覧にリニューアルしようという提案。タグ付けやComing Soon情報の表示などで盛り上がりを可視化する案が出ています
- [Issue #121](https://github.com/digitaldemocracy2030/website/issues/121)  
  公式ロゴ差し替えに伴うheaderまわりのデザイン調整。Figma上で検討が始まっています
- [Issue #117](https://github.com/digitaldemocracy2030/website/issues/117)  
  プライバシーポリシーや利用規約の正式な文章掲載。準備中からの更新を進めるかが主題
- [Issue #113](https://github.com/digitaldemocracy2030/website/issues/113)  
  PC表示時にも幅をしっかり使ったレイアウトにしたいというデザイン改善案
- [Issue #112](https://github.com/digitaldemocracy2030/website/issues/112)  
  小見出しへ飛ぶナビゲーション追加の提案。アクセシビリティ向上目的
- [Issue #100](https://github.com/digitaldemocracy2030/website/issues/100)  
  アクセシビリティをより強化して、多くのユーザーに利用してもらうための改善提案

### WIP (作業途中)のPRや継続中の議論
- [PR #122](https://github.com/digitaldemocracy2030/website/pull/122) (masatosasano2)  
  ロゴの差し替えを試みるも、複数ファビコンの対応や白黒化の問題があり中断。追加のデザイン検討を募集中
- [PR #97](https://github.com/digitaldemocracy2030/website/pull/97) (nishio)  
  「history」パスが重複して404になる問題を修正中。ルーティング設定の調整に関する議論が進んでいます

今後、デザイン案の検討やアクセシビリティ基準をどのように実装に落とし込むかなど、多くのアイデアが集まりそうです。ぜひ気になるIssueやPRをチェックしてみてください。

---

## コミュニティ参加の呼びかけ

「デジタル民主主義WEB」はオープンソースで開発されています。  
デザイナー、エンジニア、ライターをはじめ、ユーザーとしてのフィードバックも大歓迎です。  
まだ未完了のタスクにはアイデアやレビューが必要なものも多いので、気軽にIssueやPRにコメントをお願いします。

皆さんの参加が、より使いやすく魅力的なサイトづくりにつながります。ぜひ一緒に盛り上げていきましょう！