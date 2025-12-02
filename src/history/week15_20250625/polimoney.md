# Polimoney 2025/06/18 ~ 2025/06/25 のGitHub活動まとめ

今週のPolimoneyリポジトリ (https://github.com/digitaldemocracy2030/polimoney) では、以下の活動が行われました。新機能を知る良い機会にもなりますので、ぜひご覧ください。

---

## 今週完了したこと

### Issueのクローズ

- [Issue #135](https://github.com/digitaldemocracy2030/polimoney/issues/135) (UIとデータフォーマットの統一)  
  - 開発者: dotneet  
  - PRとしては [PR #137](https://github.com/digitaldemocracy2030/polimoney/pull/137) がマージされて完了。複数あったデータ構造を「Transaction」型にまとめ、UI側も日付データ・サブカテゴリ・支出目的を扱えるようになりました。  
  - DB化を見据えていた下準備が完了した形です。

### マージされたPull Request (全5件)

1. [PR #140](https://github.com/digitaldemocracy2030/polimoney/pull/140) (Bump urllib3 from 2.4.0 to 2.5.0 in /tools)  
   - 開発者: dependabot[bot] + チーム  
   - セキュリティ修正・依存パッケージアップデートによる安定性向上

2. [PR #139](https://github.com/digitaldemocracy2030/polimoney/pull/139) (refs [Issue #102](https://github.com/digitaldemocracy2030/polimoney/issues/102) 準備中のComing Soon...パネルを追加)  
   - 開発者: Osei37  
   - 「近日公開」機能の枠組みが追加され、トップページなどで拡張機能を案内する仕掛けが入りました。UIがよりわかりやすくなっています。

3. [PR #138](https://github.com/digitaldemocracy2030/polimoney/pull/138) (翌年への繰越額が出力されない不具合の修正)  
   - 開発者: dotneet  
   - 「翌年への繰越額」が必ず表示されるようになり、計算スクリプトの安定性が向上しました。

4. [PR #137](https://github.com/digitaldemocracy2030/polimoney/pull/137) (データフォーマットの統一)  
   - 開発者: dotneet  
   - 上記 [Issue #135](https://github.com/digitaldemocracy2030/polimoney/issues/135) の解決PR。複数の旧形式を廃止して新しいTransaction形式に統合し、AIやUI実装も見据えたデータ構造になりました。

5. [PR #136](https://github.com/digitaldemocracy2030/polimoney/pull/136) (Bump protobuf from 4.25.6 to 4.25.8 in /tools)  
   - 開発者: dependabot[bot] + チーム  
   - protobufのバージョンアップでツールチェーンの脆弱性を解消し、今後の開発に備えています。

---

## 未完了のタスクと議論中のポイント

以下のIssueはまだクローズされていませんが、活発なアップデートや議論が行われています。興味のある方はぜひコメントやコントリビュートをお願いします。

- [Issue #129](https://github.com/digitaldemocracy2030/polimoney/issues/129) (セキュリティアラートの解決)  
  セキュリティアラートの詳細解消や依存関係の整理について、追加の対応が検討されています。

- [Issue #120](https://github.com/digitaldemocracy2030/polimoney/issues/120) (認証機能によるプライベート試用環境実装)  
  公開前に政治家の方などにクローズド環境を触ってもらうための実装が議論中。DashbordをGoogle Cloud上にデプロイする件も含め、Slackなどで意見交換が続いています。

- [Issue #118](https://github.com/digitaldemocracy2030/polimoney/issues/118) (カテゴリ数や深さが一定を超えるとサンキー図がとても見づらくなる)  
  大量のトランザクションを可視化する際の問題をどう緩和するか、「重要度の低いカテゴリは自動でまとめる」などの案が出ています。

- [Issue #112](https://github.com/digitaldemocracy2030/polimoney/issues/112) (政治家さんのwebサイト・SNSへのリンク追加)  
  ユーザが政治家の活動をさらに知れるようにリンクを追加する提案。より深い理解につながるため、設計やUIの方向性について意見が飛び交っています。

- [Issue #32](https://github.com/digitaldemocracy2030/polimoney/issues/32) (データベース移行)  
  大量データを扱うため、Postgresへの移行とAPI化が進行中。今後の拡張性やデータ保管方式について、引き続き要件のすり合わせが行われています。

---

## 参加の呼びかけ

- 新機能の提案やバグ報告は大歓迎です。  
- 「Issueを立てる」「PRを送る」「ドキュメントを充実させる」といった多様なコントリビュートでプロジェクトに参加できます。  

Polimoneyは多くの方の力で完成度が高まっていくOSSです。ぜひ興味を持ったところから参加してみてください。お待ちしています!  