# 広聴AI 1/21~1/28 のGitHub活動まとめ

この1週間の広聴AIリポジトリ(digitaldemocracy2030/kouchou-ai)の活動をまとめました。  
新しく参加した方も、これを機会にぜひ開発に関わっていただければと思います！

---

## 今週完了した主なIssue・機能追加

今週は以下8件のIssueがクローズされ、あわせて12件のPull Requestがマージされました。ユーザー視点では「デバッグログの大量出力」「タイトル概要必須の廃止」「管理画面のエラーメッセージ改善」「JSONダウンロード機能」など、便利になる変更が多く含まれています。開発者向けにはRuff formatやpandas→polarsの移行など、参加しやすい改善も行われました。

### 完了したIssue一覧

- [Issue #764](https://github.com/digitaldemocracy2030/kouchou-ai/issues/764)  
  → 大量に出ていたDEBUGログの削減が完了。  
  対応PR: [PR #765](https://github.com/digitaldemocracy2030/kouchou-ai/pull/765) (作成: nishio)

- [Issue #752](https://github.com/digitaldemocracy2030/kouchou-ai/issues/752)  
  → レポート生成時の「タイトル」「概要」が必須ではなくなり、空でも作成が可能に。  
  対応PR: [PR #759](https://github.com/digitaldemocracy2030/kouchou-ai/pull/759) (作成: nishio)

- [Issue #751](https://github.com/digitaldemocracy2030/kouchou-ai/issues/751)  
  → pre-pushフックにRuff formatを追加し、ローカルでの静的解析や整形がしやすく。  
  対応PR: [PR #757](https://github.com/digitaldemocracy2030/kouchou-ai/pull/757) (作成: nishio)

- [Issue #750](https://github.com/digitaldemocracy2030/kouchou-ai/issues/750)  
  → .envファイルとshell環境変数が食い違っている場合、起動時に分かりやすい警告を表示する機能が実装されました。  
  （大規模リファクタ[PR #746](https://github.com/digitaldemocracy2030/kouchou-ai/pull/746)内などでまとめて対応）

- [Issue #749](https://github.com/digitaldemocracy2030/kouchou-ai/issues/749)  
  → 管理画面での「レポート取得失敗」メッセージをより親切に。  
  対応PR: [PR #756](https://github.com/digitaldemocracy2030/kouchou-ai/pull/756) (作成: nishio)

- [Issue #748](https://github.com/digitaldemocracy2030/kouchou-ai/issues/748)  
  → レポート結果のJSONダウンロード機能が追加。BIツールや独自解析との連携がしやすく。  
  対応PR: [PR #755](https://github.com/digitaldemocracy2030/kouchou-ai/pull/755) (作成: nishio)

- [Issue #747](https://github.com/digitaldemocracy2030/kouchou-ai/issues/747)  
  → 全体のドキュメントを整理し、MkDocs Materialで公開するフローが整備。  
  対応PR: [PR #754](https://github.com/digitaldemocracy2030/kouchou-ai/pull/754) (作成: nishio)

- [Issue #745](https://github.com/digitaldemocracy2030/kouchou-ai/issues/745)  
  → バックエンド処理をpandasからpolarsへ移行し、高速化。  
  元の発案: 101ta28 / 対応PR: [PR #753](https://github.com/digitaldemocracy2030/kouchou-ai/pull/753) (実装: nishio)

### その他大きな変更

- 大規模リファクタ [PR #746](https://github.com/digitaldemocracy2030/kouchou-ai/pull/746) (作成: nishio)  
  - アプリを「apps/api」「apps/admin」「apps/public-viewer」などに分割  
  - プラグインシステムを整備（YouTube入力など）  
  - パイプライン部分を「analysis-core」パッケージとして切り出し  
  - CIやドキュメント構成の大幅改修  
  - これにより新機能実装時の拡張性・安全性が向上しました。

---

## 未完了のタスクと進行中の議論

現時点でまだクローズされていないPRやIssueも複数あります。参加してみたい方は、以下のようなトピックで議論していただけると嬉しいです。

- [PR #744](https://github.com/digitaldemocracy2030/kouchou-ai/pull/744)  
  バックエンドをpolarsへ移行するアイデアを最初に提案したブランチ。既に #753 がマージされたことで競合しており、どのように扱うか議論が必要です。提案者は 101ta28 さん。

- [PR #743](https://github.com/digitaldemocracy2030/kouchou-ai/pull/743)  
  npmパッケージqsのバージョンアップを行うDependabotのPRです。CI互換など影響範囲の議論が続いています。

- [PR #761](https://github.com/digitaldemocracy2030/kouchou-ai/pull/761)  
  MkDocs周りのドキュメント修正がさらに追加されているPR。別ブランチ (#754) と重複する部分もあるため、取り込み方が検討中です。

- [PR #768](https://github.com/digitaldemocracy2030/kouchou-ai/pull/768)  
  CLI実行時にAPIキー設定の不備を早期に検知するためのfail-fast機能。未マージですがテスト実装済です。CLI使用者には歓迎されそうです。

- [PR #769](https://github.com/digitaldemocracy2030/kouchou-ai/pull/769)  
  「レポート複製機能」の設計方針をまとめたドキュメント追加。実際の実装に向けて議論・フィードバックが期待されています。

- [PR #770](https://github.com/digitaldemocracy2030/kouchou-ai/pull/770)  
  pnpmを採用する意義やプラグインデータ出力仕様など、開発者目線のドキュメント改善です。ホイスティング問題などの解決策について具体化が進められています。

- [PR #771](https://github.com/digitaldemocracy2030/kouchou-ai/pull/771)  
  public-viewerにてAPI接続エラー時のメッセージをわかりやすくする機能。コンテナ環境の設定ミスにも対応しやすくなるため、フィードバックを募集中です。

---

## 貢献者への感謝

今週は主に nishio さんが多くの機能開発やバグ修正を行ってくださっています。また、pandasからpolarsへの移行を提案してくださった 101ta28 さんのIssue (#745) も大変参考になりました。  
一方、「devin-ai-integration[bot]」は人間が使うAIアシスタントであり、実装の中心となっているのは「nishio + Devin」といった形です。

OSSは多様なコントリビューターの協力で成り立っています。みなさまも気軽にIssueやPRを立てたり、既存の議論にコメントいただければうれしいです。

---

## 参加の呼びかけ

- バグ報告や改善アイデアがあれば [Issue](https://github.com/digitaldemocracy2030/kouchou-ai/issues) で教えてください  
- コードに直接貢献したい方は [Pull Request](https://github.com/digitaldemocracy2030/kouchou-ai/pulls) をぜひ！  
- 新しいプラグインの提案や、UI改善アイデアなど大歓迎です

今週もたくさんのコントリビューションに感謝します。  
これからも「デジタル民主主義2030」プロジェクトの一環として、広聴AIをみんなで盛り上げていきましょう！  