# デジタル民主主義WEB 6/25~7/2 のGitHub活動まとめ

今週(2025-06-25～2025-07-02)の開発状況をお知らせします。  
新しい機能を知るチャンスでもありますので、ぜひご覧ください!

---

## 今週完了したPR

### [PR #138](https://github.com/digitaldemocracy2030/website/pull/138) 寄付金メールの設定
- 作成者: moai-redcap  
- 内容: 寄付金に関するメールの設定を行う機能が追加されました。まだ規模は小さい修正ですが、メールでの寄付受付を考える上での土台になっています。  
- マージ日: 2025-06-30

### [PR #137](https://github.com/digitaldemocracy2030/website/pull/137) week15
- 作成者: kuboon  
- 内容: 5ファイル分の大きな更新が行われ、週のまとめなどが追加されています。ユーザからは見えにくい部分もありますが、プロジェクトの定期的な進捗共有に役立ちます。  
- マージ日: 2025-06-27

---

## 未完了のPRと議論

以下のPRについては、作成・更新はされているものの、まだマージされていません。新機能の追加や改善提案など、開発者同士の議論の呼び水になる内容が多いので、ぜひウォッチ＆コメントをお願いします。

### [PR #132](https://github.com/digitaldemocracy2030/website/pull/132) week12
- 作成者: nishio  
- 5ファイルにわたる更新が含まれますが、コメントはまだ特になく、レビュー待ちの状態です。

### [PR #129](https://github.com/digitaldemocracy2030/website/pull/129) Add kouchou-ai v3.0.0 release announcement article
- 作成者: NISHIO+Devin  
- LocalLLM対応やソースリンク機能、コスト表示機能の追加など、ユーザから見ても分かりやすい新要素が盛り込まれています。  
- リリース記事を通じて、広聴AIをどう活用するかがわかりやすくなっており、レビューや追加の改善点の提案が歓迎されるところです。

### [PR #124](https://github.com/digitaldemocracy2030/website/pull/124) week11
- 作成者: nishio  
- 大きなファイル変更がありますが、公開情報が少なく、主に週次活動のまとめを更新していると見られます。引き続きレビューを募集しています。

### [PR #107](https://github.com/digitaldemocracy2030/website/pull/107) Revert "UI微修正"
- 作成者: kotaro-yamasaki  
- 一度行ったUI修正をリバート(取消)する変更で、まだマージはされていません。リバート後のUIをどう再調整するか、意見を募集中です。

### [PR #96](https://github.com/digitaldemocracy2030/website/pull/96) disable preview deploy
- 作成者: nishio  
- PR作成時のプレビューデプロイが意図した通りに動かない問題を一旦止めようとしている提案です。プレビューデプロイに関するワークフロー改善を考える方はぜひコメントを。

### [PR #94](https://github.com/digitaldemocracy2030/website/pull/94) 週ごとのダイジェスト表示機能を追加
- 作成者: nishio  
- 歴史ページに週ごとのダイジェスト表示を可能にする機能です。ドキュメントを整理しながら、ユーザが見やすく週次まとめを確認できる工夫が含まれています。

### [PR #93](https://github.com/digitaldemocracy2030/website/pull/93) Fix PR preview 404 error
- 作成者: nishio  
- PRプレビューデプロイ時の404エラーを修正する試みです。GitHub Actionsのファイル構造調整がメインのため、継続的な検証が必要です。

### [PR #92](https://github.com/digitaldemocracy2030/website/pull/92) マークダウンファイルの構造を整理
- 作成者: nishio  
- 大規模なマークダウンファイルの再編成です。過去の履歴やドキュメントが整理されるため、コントリビューターにとっては全体像が把握しやすくなる変更です。

### (他にも [week9](https://github.com/digitaldemocracy2030/website/pull/81), [week8](https://github.com/digitaldemocracy2030/website/pull/73), [貢献者向けガイドラインを追加](https://github.com/digitaldemocracy2030/website/pull/71) など、多数のPRが更新されています。)

---

## 参考: 注目の議論

- [PR #52](https://github.com/digitaldemocracy2030/website/pull/52) PRプレビューデプロイメントの実装  
  → プレビューデプロイによってレビューの効率が上がる試みですが、現在は[PR #59](https://github.com/digitaldemocracy2030/website/pull/59)（[PR #52](https://github.com/digitaldemocracy2030/website/pull/52) のマージコンフリクト解消）や [PR #96](https://github.com/digitaldemocracy2030/website/pull/96)（プレビューを一旦無効に）など、複数の対応が並行して検討されています。  
  → 関連して "Fixes [Issue #50](https://github.com/digitaldemocracy2030/website/issues/50)" とも書かれています。

- [PR #129](https://github.com/digitaldemocracy2030/website/pull/129) Add kouchou-ai v3.0.0 release announcement article  
  → 住民の声を聞くAIをどうアップデートするかに注目が集まっています。LocalLLM対応やソースリンク機能など、ユーザにとって大事な情報が含まれているため、引き続きレビューが期待されます。

---

## 最後に

小さな修正から大きな新機能の提案まで、コミットやプルリクエストすべてがプロジェクトを前進させる大切な貢献です。  
「これなら自分も意見できそう!」「デザインやUIなら手伝えそう!」など、興味を持ったPRがあればぜひコメントやレビューをお願いします。

今週も新しい開発や議論にご参加いただき、プロジェクトを一緒に盛り上げていきましょう!  