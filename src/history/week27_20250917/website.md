# デジタル民主主義WEB 9/10~9/17 のGitHub活動まとめ

今週（2025-09-10～2025-09-17）の「デジタル民主主義WEB」リポジトリでの活動状況をご紹介します。OSS開発の様子を知り、興味を持っていただけるきっかけになれば幸いです。

---

## 今週完了した内容

### [PR #169](https://github.com/digitaldemocracy2030/website/pull/169) - Week26 Summary Update
- 作者: GitHub Actions + Devin
- 変更ファイル: 5ファイル、+220行
- マージ日: 2025-09-10
- 概要: 毎週自動生成される「Week26 Summary」を追加。Webサイトの更新としては一見地味ですが、SlackログなどをもとにまとめられたAI生成の活動サマリが反映されています。

このPRにより、サイト上の週次レポートが更新され、外部から参加する方にもプロジェクトの動きを把握しやすくなりました。

---

## 今週未完了のタスクと議論の状況

### [Issue #170](https://github.com/digitaldemocracy2030/website/issues/170) - 毎週のプロジェクトの活動状況の更新処理を移管する
- 作成者: shingo-ohki
- 内容: 「https://dd2030.org/history」の更新処理を「nishio/oss_weekly_reporter」から当リポジトリ（digitaldemocracy2030/website）へ移管する試み。
  
#### どんな議論が行われているか
- Slack APIキーやFreeプランの制限、LLM(OpenAI/ Azure)のAPIキー管理など、継続的かつ安定的に更新するための体制づくりが話題に。  
- 「nishio/oss_weekly_reporter」のデータをこのリポジトリへうまく持ってくる手法や、スクリプトをどこに配置するべきか（ワークフローごと移すのか、部分的に流用するのか）といった詳細が検討されています。  
- 「Shingo OHKI」さんや「kuboon」さん、「NISHIO Hirokazu」さんといったメンバーがSlack上で活発に意見を交換しており、作業の移管ステップに関する技術的な課題や、管理者権限・認証情報の整理などが主なトピックとなっています。

### 参考として議論に登場したIssue/PR
- [Issue #9](https://github.com/digitaldemocracy2030/website/issues/9): 過去に「1週間ごとの活動紹介をつくる」方針について議論されていたもの。現状は /history と /activity の使い分けが曖昧で、今後の整理が必要という話題が出ました。  
- [PR #166](https://github.com/digitaldemocracy2030/website/pull/166): 「定期的に“プロジェクトの歴史”を更新するGitHub workflowを追加」した際の議論が継続中。Slackアプリ連携の引き継ぎやスクリプト部分の分割に関しても意見が出ています。

---

## 参加の呼びかけ

- 新機能としては見えにくい部分かもしれませんが、Slackのログ取得やワークフローの自動化など、裏側の仕組みづくりはプロジェクトを円滑に回す上でとても重要です。  
- PythonスクリプトのメンテナンスやGitHub Actionsの設定など、多様な技術要素に触れられる機会があります。  
- ぜひ、IssueやPull Requestへのコメント、アイデア提供、大歓迎です。小さな修正でもご協力いただけるとプロジェクトの改善につながります。

---

まずは「Issue #170」の議論に目を通していただき、興味が湧いたらぜひ参加してみてください。お待ちしています！