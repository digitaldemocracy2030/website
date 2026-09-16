# 広聴AI 2026/09/09～09/16 のGitHub活動まとめ

今週は、レポートごとのメタデータ制御や静的出力手法の改善、OpenAI Flex Processing対応など多彩な開発が進みました。まずは「完了したIssueと、それに紐づくPR」を紹介し、その後、現在も議論や実装が続く未完了タスクを整理します。OSS開発にご興味ある方は、ぜひIssueやPRの議論に参加してみてください。

---

## 今週完了した主なIssue

### [Issue #939](https://github.com/digitaldemocracy2030/kouchou-ai/issues/939) [FEATURE] shell配布物にレポート別title・noindexを反映する（#935由来）
- クローズ日: 2026-09-09  
- 対応PR: [PR #940](https://github.com/digitaldemocracy2030/kouchou-ai/pull/940) (作者: nishio)  
- 概要: シェル配布物としてまとめられるHTMLに、レポート固有のタイトルとnoindexを付与しました。限定公開レポートは検索除外されるほか、JavaScript無効環境でも正しいタイトルが表示されるようになりました。  
- 貢献者: nishio +Devin など

### [Issue #916](https://github.com/digitaldemocracy2030/kouchou-ai/issues/916) [FEATURE] OpenAIのAPIをFlex-Processingにしてコストを半額にする
- クローズ日: 2026-09-09  
- 対応PR: [PR #934](https://github.com/digitaldemocracy2030/kouchou-ai/pull/934) (作者: tokoroten)  
- 概要: GPT-5やGPT-6などの対象モデルに Flex Processing オプションを使えるよう変更し、APIコスト削減を実現しました。また、タイムアウトやリトライ戦略の強化、温度パラメータ不許可モデルの例外対策などを実施しています。  
- 貢献者: tokoroten +Devin

---

## 今週マージされたその他のPR

- [PR #935](https://github.com/digitaldemocracy2030/kouchou-ai/pull/935) (作者: yasumorishima)  
  - シェルビルドを実装し、レポート非依存のHTMLをひとつだけ生成する方式を導入。大きなNode依存を減らす基盤として今後の実行ファイル配布などに繋げる取り組み。
- [PR #936](https://github.com/digitaldemocracy2030/kouchou-ai/pull/936) (作者: yasumorishima)  
  - ドキュメント修正により、静的export時にはレポート別のOGP画像が生成されないことを明記し、開発者の混乱を防止。
- [PR #937](https://github.com/digitaldemocracy2030/kouchou-ai/pull/937) (作者: dependabot[bot])  
  - 依存パッケージ(next)のバージョンアップ。セキュリティ修正やバグ修正が含まれています。
- [PR #938](https://github.com/digitaldemocracy2030/kouchou-ai/pull/938) (作者: nishio)  
  - shellビルドの際にReactのハイドレーションエラーが起きる不具合を修正し、クライアント遷移を安定化。

---

## 未完了のタスク・継続中の議論

以下のIssueやPRは、まだクローズされていない、あるいはマージ待ちのものです。さらなるフィードバックや検討が求められています。ぜひコメントやレビューをお寄せください。

### 継続中のIssue

- [Issue #885](https://github.com/digitaldemocracy2030/kouchou-ai/issues/885)  
  Windows単一実行ファイル配布のため、Node runtimeをなくす検討が続いています。public-viewerやstatic-site-builderの役割分担、Python FastAPIへの集約案などが議論の焦点。  
- [Issue #592](https://github.com/digitaldemocracy2030/kouchou-ai/issues/592)  
  Azure OpenAI Service利用時のエラーハンドリング改善。PR #945での管理画面案内強化も含め、分析パイプライン全体の例外処理が今後の議題。  
- [Issue #518](https://github.com/digitaldemocracy2030/kouchou-ai/issues/518)  
  static exportしたページのプレビューを自動化し、エラー検出や動作確認を楽にしたい要望。PR #942でアーティファクトの取得は導入済みだが、常設URL公開は今後検討。  
- [Issue #395](https://github.com/digitaldemocracy2030/kouchou-ai/issues/395)  
  管理画面E2Eテスト拡張の要望。AIアシスタント(devin-ai-integration[bot])が作成。PR #943でAPI接続エラー回りの自動テストが追加されたが、スプレッドシート連携などは引き続き対応中。  
- [Issue #393](https://github.com/digitaldemocracy2030/kouchou-ai/issues/393)  
  フッターのプライバシーポリシーや利用規約リンク等を文書化する要望。PR [#944](https://github.com/digitaldemocracy2030/kouchou-ai/pull/944)が「Closes #393」を含むが、まだマージ待ち。  
- [Issue #130](https://github.com/digitaldemocracy2030/kouchou-ai/issues/130)  
  コード以外での貢献方法の明示を求める要望。PR [#941](https://github.com/digitaldemocracy2030/kouchou-ai/pull/941)で「Closes #130」の予定。こちらもマージ待ち。  
- [Issue #55](https://github.com/digitaldemocracy2030/kouchou-ai/issues/55)  
  濃いクラスタのしきい値をレポート別に設定可能にする機能。PR [#946](https://github.com/digitaldemocracy2030/kouchou-ai/pull/946)が準備中。

### レビューやマージを待っているPR

- [PR #946](https://github.com/digitaldemocracy2030/kouchou-ai/pull/946)  
  - 濃いクラスタの上位%や最小サンプル数をレポート別に保存。Issue [#55](https://github.com/digitaldemocracy2030/kouchou-ai/issues/55) を解決予定。  
- [PR #945](https://github.com/digitaldemocracy2030/kouchou-ai/pull/945)  
  - [Issue #592](https://github.com/digitaldemocracy2030/kouchou-ai/issues/592) 向けに、Azure失敗時の案内を具体的にした管理画面改修。  
- [PR #944](https://github.com/digitaldemocracy2030/kouchou-ai/pull/944)  
  - [Issue #393](https://github.com/digitaldemocracy2030/kouchou-ai/issues/393) をクローズ予定のドキュメント更新。公開前にチェックすべき項目を案内。  
- [PR #943](https://github.com/digitaldemocracy2030/kouchou-ai/pull/943)  
  - [Issue #395](https://github.com/digitaldemocracy2030/kouchou-ai/issues/395) の作成前接続エラーE2Eを実装。さらに拡張テストの追加が要検討。  
- [PR #942](https://github.com/digitaldemocracy2030/kouchou-ai/pull/942)  
  - [Issue #518](https://github.com/digitaldemocracy2030/kouchou-ai/issues/518) の一部対応。静的ビルド成果物をダウンロード可能なアーティファクトとして保存する仕組み。  
- [PR #941](https://github.com/digitaldemocracy2030/kouchou-ai/pull/941)  
  - [Issue #130](https://github.com/digitaldemocracy2030/kouchou-ai/issues/130) をクローズ予定。コードを書かない貢献者向けガイドラインを盛り込む。

---

## 参加への呼びかけ

- バグ発見や改善提案があれば、[Issueを新規作成](https://github.com/digitaldemocracy2030/kouchou-ai/issues)していただけると助かります。
- 実装やドキュメント更新のレビューはもちろん、動作確認や「こう使いたい」といったコメントも立派な貢献です。
- コードを書かない方も気軽に「その機能があると助かる」「実際使ってみた感想」などのフィードバックをお寄せください。

今週はシェルビルドやOpenAI Flex対応など大きな変更が多く、まだ議論や調整が続く箇所もあります。ぜひコミュニティに参加して、次のステップを一緒に作り上げましょう。