# デジタル民主主義WEB 4/30~5/7 のGitHub活動まとめ

今週(2025-04-30～2025-05-07)は4件のIssueが完了し、15件のPull Requestがマージされました。新機能や改善点も多数含まれ、Webサイト利用者にとってより便利になるアップデートが行われました。また、未完了のIssueでは新たな提案や改善に向けた議論が進行中です。

---

## 完了した主なIssue

### [Issue #69](https://github.com/digitaldemocracy2030/website/issues/69) どのページに遷移しても空白ページになる
- 作成者: masatosasano2
- 空白ページが発生する深刻なバグでしたが、Incognito Windowで発生しないなど、キャッシュ周りの問題である可能性が高いことが判明。数件のPRにて関連する設定を修正し、無事解決しました。

### [Issue #50](https://github.com/digitaldemocracy2030/website/issues/50) PRプレビューデプロイメントの実装
- 作成者: NISHIO Hirokazu+Devin
- プルリク時に自動でプレビュー環境が生成されるようになり、レビュー効率が大幅にアップ。  
- 対応PR: [PR #52](https://github.com/digitaldemocracy2030/website/pull/52) など。

### [Issue #30](https://github.com/digitaldemocracy2030/website/issues/30) アクティビティページのコンテンツ整理：「プロジェクトの歴史」
- 作成者: NISHIO Hirokazu+Devin
- アクティビティページを時系列で整理して「プロジェクトの歴史」として見やすくする提案が出され、無事完了。  
- 実装の一環として、新しく「/history」ページへのリンクも追加されています。
- [Issue #28](https://github.com/digitaldemocracy2030/website/issues/28) アクティビティページ(dd2030.org/activity)の改善

---

## マージされた主なPRと実装者

今週は15件のPRがマージされました。ここでは新機能やバグ修正など、注目ポイントをピックアップしてご紹介します。

- [PR #72](https://github.com/digitaldemocracy2030/website/pull/72) lintエラー修正  
  - 作者: moai-redcap  
  - コードのlintエラーを修正し、開発環境を安定化。

- [PR #71](https://github.com/digitaldemocracy2030/website/pull/71) 貢献者向けガイドラインを追加  
  - 作者: kojino  
  - 新規参加者向けのドキュメントが充実し、OSS参加へのハードルが下がりました。

- [PR #70](https://github.com/digitaldemocracy2030/website/pull/70) next.configが複数ファイルあったので削除  
  - 作者: moai-redcap  
  - 重複設定を解消し、プロジェクトの構造をシンプルに。

- [PR #65](https://github.com/digitaldemocracy2030/website/pull/65) サイドメニューの活動履歴のリンクを /activity から /history に変更  
  - 作者: masatosasano2  
  - 関連: [Issue #9](https://github.com/digitaldemocracy2030/website/issues/9)  
  - UI上での導線がわかりやすくなり、変更意図が明確化。

- [PR #64](https://github.com/digitaldemocracy2030/website/pull/64) Fix PR preview deployment 404 error  
  - 作者: NISHIO Hirokazu+Devin  
  - PRプレビューデプロイのリンク切れ問題を修正し、プレビュー確認がスムーズに。

- [PR #59](https://github.com/digitaldemocracy2030/website/pull/59) Fix merge conflicts in [PR #52](https://github.com/digitaldemocracy2030/website/pull/52)  
  - 作者: 小野翔太（モアイ）+Devin  
  - マージコンフリクト解消で、新機能をスピーディーに取り込むことに成功。

- [PR #52](https://github.com/digitaldemocracy2030/website/pull/52) PRプレビューデプロイメントの実装  
  - 作者: NISHIO Hirokazu+Devin  
  - [Issue #50](https://github.com/digitaldemocracy2030/website/issues/50)を解決。PR作成時にプレビューが自動デプロイされる大きなアップデートです。

他にも細かな体裁修正やコンフリクト解消、コンテンツ追加など、多くの改善・新機能が取り込まれています。小さな改修も積み重ねてWebの使い勝手が向上している点は重要です。

---

## 未完了のタスク・進行中の議論

### [Issue #66](https://github.com/digitaldemocracy2030/website/issues/66) [FEATURE]デモサイトへのリンクがほしい
- 作成者: masatosasano2
- デモサイトを設置すべきか、あるいは代わりに画面キャプチャや動画での紹介にすべきか、議論が始まったばかり。  
- 実際の環境が開発用なので対外的に公表してもよいか検討中。  
- デモに興味のある方はぜひIssueで意見をお寄せください。

### [Issue #4](https://github.com/digitaldemocracy2030/website/issues/4) 紹介する事例案
- 作成者: nishio
- 「デジタル民主主義2030の広聴AIを試してみた！」などの事例紹介をどう整理し、Webに掲載していくか検討中。  
- 具体的な事例を追加することで、外部の人が取り組みを理解しやすくなる狙いがあります。

---

## 参加の呼びかけ

- 新しい機能を試してみたい、ドキュメントを整備してみたい、バグを見つけた…など、どんな形でのコントリビューションも歓迎です。  
- [Issue #66](https://github.com/digitaldemocracy2030/website/issues/66) や [Issue #4](https://github.com/digitaldemocracy2030/website/issues/4) では、まだまだ意見を募集中。ぜひお気軽にコメントをお寄せください！

今週もさまざまな方が多様な形で貢献し、着実に前進しています。次週以降も新機能はもちろん、さらなる改善の提案や議論をお待ちしています。あなたの参加が「デジタル民主主義2030」をより豊かにしてくれます。お気軽にご参加ください！