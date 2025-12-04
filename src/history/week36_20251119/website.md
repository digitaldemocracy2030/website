# デジタル民主主義WEB 11/12~11/19 のGitHub活動まとめ

デジタル民主主義WEB(=このリポジトリ)の開発状況を1週間ごとにお届けします。今週は下記のIssueやPRが完了し、新しい機能追加やバグ修正が行われました。また、まだ完了していないタスクにも興味深い議論が進んでいます。ぜひ一緒に参加してみませんか？

---

## 今週完了した主なIssue

### [Issue #176](https://github.com/digitaldemocracy2030/website/issues/176) 「更新が漏れている過去の分の活動状況を補完する」
- 作成者: shingo-ohki
- 過去に更新が漏れていた週次レポートの補完が完了しました。  
  これにより、過去の活動履歴をしっかりと振り返ることができるようになります。

---

## 今週マージされたPR

### [PR #178](https://github.com/digitaldemocracy2030/website/pull/178) 「update weekly summary(week27-35)」
- 作成者: shingo-ohki  
- 大量のファイル変更(+2116)により、滞っていた週次サマリー(week27-35)を一気にまとめて公開しました。  
- 過去週の活動履歴をサイトに反映することで、新規参加者もこれまでの流れを把握しやすくなっています。

### [PR #175](https://github.com/digitaldemocracy2030/website/pull/175) 「feat: Google Tag Managerを追加し、依存関係を更新」
- 作成者: moai-redcap  
- 関連Issue: [Issue #174](https://github.com/digitaldemocracy2030/website/issues/174)  
- Google Tag Manager(GTM)を導入しました。これにより、ウェブサイトのアクセス解析や追加のマーケティングタグ管理が行いやすくなっています。  
- 一般ユーザには見えにくい変更ですが、アクセス解析がしやすくなることで今後のサイト向上に大きく貢献する実装です。

---

## まだ完了していない主なタスクと議論

### [Issue #177](https://github.com/digitaldemocracy2030/website/issues/177) 「今後の更新を可能な限り自動化する」
- 作成者: shingo-ohki
- 週次レポートや活動更新を自動化して効率化しようという提案です。  
- 「GitHub Actionsをどう活用するか」「自動化しすぎて人的チェックがおろそかにならないか」などの観点で引き続き意見を募集中です。

### [Issue #174](https://github.com/digitaldemocracy2030/website/issues/174) 「Google Analytics を導入してアクセス解析をできるようにする」
- 作成者: shingo-ohki
- すでに[PR #175](https://github.com/digitaldemocracy2030/website/pull/175)でGoogle Tag Managerは導入されましたが、純粋なGoogle Analyticsとの使い分けや追跡パラメータの管理など、詳細は検討中です。  
- 「プライバシー保護との両立をどこまで行うか」など、追加の議論が行われる見込みです。

### [Issue #173](https://github.com/digitaldemocracy2030/website/issues/173) 「毎週のプロジェクトの活動状況の更新処理が適切に動いていない」
- 作成者: shingo-ohki
- 毎週の自動更新がうまく動作していない部分があり、Pull Requestのブランチが使い回されてしまうなどの問題が議論されています。  
- 処理の設計を見直し、「人のレビュー待ち」と「自動化」のバランスをどうするかがポイントです。

### [PR #171](https://github.com/digitaldemocracy2030/website/pull/171) 「Week27 Summary Update」
- 作成者: github-actions[bot]  
- 自動生成された週次サマリーですが、レビュー待ちになっている模様です。  
- Botが作成したPull Requestでも人間の確認は必要なため、「どのタイミングでdraftを解除してレビューに回すのか」などが議論の対象となっています。

---

## 今週のまとめと参加の呼びかけ
- 過去週のサマリーが多数反映され、新たにGoogle Tag Managerが導入されるなど、活発な開発が継続しています。  
- いくつか自動化やレポートの更新方法について継続的に議論しているIssueがあり、皆さんの知見や意見をお待ちしています。
- 小さな修正でもウェブサイト改善に役立つ重要な一歩です。気軽にIssueやPRを立ててみてください！

今週の活動を見て興味を持った方は、ぜひ[GitHubリポジトリ](https://github.com/digitaldemocracy2030/website)へアクセスしてみてください。あなたの参加が、デジタル民主主義プロジェクトをさらに盛り上げます！