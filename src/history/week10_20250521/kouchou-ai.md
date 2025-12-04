# 広聴AI 5/14〜5/21 のGitHub活動まとめ

コミュニティのみなさん、今週もお疲れさまでした！ この1週間（2025-05-14 〜 2025-05-21）に行われた広聴AIリポジトリの活動を、完了分と未完了（議論・レビュー中）のタスクにわけてご紹介します。新機能や進行中の議論を見て、ぜひ興味のあるトピックでOSS開発に参加してみてください！

---

## 今週完了した主なタスク

### マージされたプルリクエスト（計16件）

1. [PR #554](https://github.com/digitaldemocracy2030/kouchou-ai/pull/554) - コードのスタイル修正 (作者: nishio)  
   コードのフォーマットを調整することで、可読性と一貫性が向上しています。

2. [PR #550](https://github.com/digitaldemocracy2030/kouchou-ai/pull/550) - セグメントビュー（全体・濃い意見・階層の切り替え）のデザイン更新 (作者: shgtkshruch)  
   チャートの切り替えUIを一新し、モバイルとデスクトップのレイアウト最適化を行っています。

3. [PR #544](https://github.com/digitaldemocracy2030/kouchou-ai/pull/544) - DeepWikiバッジの追加 (作者: mtane0412)  
   リポジトリのREADMEにDeepWiki対応のバッジが入り、ドキュメント自動更新がしやすくなっています。

4. [PR #541](https://github.com/digitaldemocracy2030/kouchou-ai/pull/541) - デジタル民主主義2030(DD2030)説明文の更新 (作者: nasuka)  
   フッターに「広聴AI」とプロジェクトの説明を追加し、ユーザーに向けた情報がわかりやすくなりました。

5. [PR #540](https://github.com/digitaldemocracy2030/kouchou-ai/pull/540) - 利用規約リンクをoptional化 (作者: nasuka)  
   [Issue #539](https://github.com/digitaldemocracy2030/kouchou-ai/issues/539) の対応で、利用規約リンクを不要な場合は非表示にするように修正。

6. [PR #536](https://github.com/digitaldemocracy2030/kouchou-ai/pull/536) - トークン使用量の追跡と表示機能 (作者: 種延真之+Devin)  
   レポート作成時のトークン消費量を可視化し、全体・入力・出力の使用量を表示する機能を追加しました。

7. [PR #535](https://github.com/digitaldemocracy2030/kouchou-ai/pull/535) - PRテンプレートの整理 (作者: shingo-ohki)  
   コントリビューター向けとレビュアー向けの項目を分け、見通しをよくしています。

8. [PR #534](https://github.com/digitaldemocracy2030/kouchou-ai/pull/534) - Local LLMのUI説明文修正 (作者: shingo-ohki)  
   [Issue #532](https://github.com/digitaldemocracy2030/kouchou-ai/issues/532) の対応。実装済みの機能を「将来実装予定」と誤記していた文を修正。

9. [PR #533](https://github.com/digitaldemocracy2030/kouchou-ai/pull/533) - コードレビューガイドラインの更新 (作者: masatosasano2)  
   デザインフェーズから開発フェーズへの移行プロセスが明確になりました。

10. [PR #527](https://github.com/digitaldemocracy2030/kouchou-ai/pull/527) - 不要なプロンプトファイルの削除 (作者: tokoroten)  
   使われていないファイルを整理し、リポジトリの混乱を減らしています。

11. [PR #526](https://github.com/digitaldemocracy2030/kouchou-ai/pull/526) - OpenRouter対応 (作者: takumi19910112)  
   [Issue #402](https://github.com/digitaldemocracy2030/kouchou-ai/issues/402) の対応。OpenRouter経由でOpenAIやGeminiモデルが使えるようになりました。

12. [PR #525](https://github.com/digitaldemocracy2030/kouchou-ai/pull/525) - biome fix (作者: masatosasano2)  
   コードフォーマットの再適用と細かなスタイル調整を行ったものです。

13. [PR #524](https://github.com/digitaldemocracy2030/kouchou-ai/pull/524) - Windows環境での直実行をサポート (作者: take365)  
   DockerなしでWindows上で動かしたい人向けにセットアップ手順と起動スクリプトを追加。  
   ([Issue #509](https://github.com/digitaldemocracy2030/kouchou-ai/issues/509) 参照)

14. [PR #521](https://github.com/digitaldemocracy2030/kouchou-ai/pull/521) - Embedding生成時のProvider適用 (作者: nasuka)  
   EmbeddingでもAzureやOpenRouterなどをきちんと利用できるよう修正。

15. [PR #512](https://github.com/digitaldemocracy2030/kouchou-ai/pull/512) - アサイン状況に応じたステータス自動変更 (作者: masatosasano2)  
   誰かがIssueをアサイン/アンサインすると、プロジェクトボードのステータスが自動で「In Progress / Ready」などに切り替わるギミックです。

16. [PR #487](https://github.com/digitaldemocracy2030/kouchou-ai/pull/487) - セグメントビュー切り替え (作者: nsk.smn+Devin)  
   全体・濃い意見・階層の3つを直感的に切り替えできるUIを導入。モバイルでも使いやすくなっています。

---

## 今週新しく発生・議論中の主なタスク

### 新規のプルリクエスト（作業中）

- [PR #555](https://github.com/digitaldemocracy2030/kouchou-ai/pull/555) - report_status.json を上書きするテストの削除 (作者: mtane0412)  
  テストが本番ファイルを汚染してしまう問題を修正する意図。テスト後に状態をクリアする実装が提案されています。

- [PR #549](https://github.com/digitaldemocracy2030/kouchou-ai/pull/549) - レポートページに推定コスト表示機能を追加 (作者: 種延真之+Devin)  
  [Issue #284](https://github.com/digitaldemocracy2030/kouchou-ai/issues/284) 対応で、LLMの料金計算をリアルタイムに表示する試みです。  
  コスト感覚をつかむため、多くの利用者からリクエストがあった機能です。

- [PR #543](https://github.com/digitaldemocracy2030/kouchou-ai/pull/543) - 管理画面での無限リロードを抑止 (作者: tokoroten)  
  完了・エラー状態のレポートでも何度も更新リクエストが送られていた点を修正し、サーバログを大量に圧迫しないようにする提案です。

- [PR #538](https://github.com/digitaldemocracy2030/kouchou-ai/pull/538) - 属性フィルタ機能（PR #531）のリファクタ (作者: shinta.nakayama+Devin)  
  すでに導入された属性フィルタをより型安全・パフォーマンスよく改善する内容。前PRを活かしつつ大幅に整えている最中です。

### 継続中のIssue・機能提案

- [Issue #514](https://github.com/digitaldemocracy2030/kouchou-ai/issues/514) のように並列実行結果の順序が変わってしまうケースや、  
  [Issue #310](https://github.com/digitaldemocracy2030/kouchou-ai/issues/310) のようにクラスタ名を手動修正したい要望など、引き続き改善が検討されています。  
  既に[PR #545](https://github.com/digitaldemocracy2030/kouchou-ai/pull/545)で一部解決されたものの、さらなる改良ポイントが議論中です。

- 大量の類似意見が投稿されたPDFなどのデータをどう扱うか ([Issue #346](https://github.com/digitaldemocracy2030/kouchou-ai/issues/346) ほか) では、あらかじめまとめるアルゴリズムやUI案などが議論されています。

---

## 参加の呼びかけ

今週はOpenRouter対応やトークン使用量の可視化など、ユーザーが待ち望んでいた機能が多数取り込まれました。一方で新しいプルリクエストや議論中のタスクも盛りだくさんです。ぜひ以下のような形で参加してみてください！

- コードレビューに参加する  
- デザインやUI改善のアイデアを提案する  
- 他開発者が試せるテストデータやスクリプトを提供する  
- SlackやGitHub Issueでフィードバックを積極的に投稿する  

皆さんの意見が、より多くの人に使いやすい「広聴AI」を作る力になります。今後とも、どうぞよろしくお願いいたします。ぜひ気になるIssueやPRにコメントを残し、一緒にプロジェクトを盛り上げましょう！