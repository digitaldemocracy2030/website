# Polimoney (2025/4/16~4/23) のGitHub活動まとめ

本レポートでは、2025年4月16日から4月23日までに行われたPolimoneyリポジトリの開発活動を振り返ってみます。開発者の方も、これから参加したい方もぜひご覧ください！

---

## 今週完了したこと

今週は合計7件のPull Requestがマージされ、機能追加や改善が行われました。PRごとに概要と貢献者をご紹介します。

1. [PR #14](https://github.com/digitaldemocracy2030/polimoney/pull/14)  
   - タイトル: Add LICENSE file (AGPL-3.0)  
   - 概要: [Issue #12](https://github.com/digitaldemocracy2030/polimoney/issues/12) で要望のあったAGPL-3.0ライセンスファイルが追加されました。  
   - 貢献者: annyotaka + Devin

2. [PR #11](https://github.com/digitaldemocracy2030/polimoney/pull/11)  
   - タイトル: jsonスキーマを採用  
   - 概要: Gemini APIのJSON出力対応を見据えたスキーマ適用を行っています。再試行コードの追加など、実装方針について議論の余地があるとのこと。  
   - 貢献者: shumizu418128

3. [PR #10](https://github.com/digitaldemocracy2030/polimoney/pull/10)  
   - タイトル: Update: 支出を表すアイコンを `BanknoteArrowUpIcon` から `BanknoteArrowDownIcon` に変更  
   - 概要: Lucide Iconsで推奨されている使い方に沿ってアイコンをより直感的に変更。  
   - 貢献者: yoshimatsu567

4. [PR #9](https://github.com/digitaldemocracy2030/polimoney/pull/9)  
   - タイトル: Update: アイテムカテゴリを増やした  
   - 概要: カテゴリ数を増やすことで、可視化や分析の際に情報の分類が細かく行えるようになりました。  
   - 貢献者: jujunjun110

5. [PR #8](https://github.com/digitaldemocracy2030/polimoney/pull/8)  
   - タイトル: Feature/improve gemini format  
   - 概要: Geminiを使った書き出しフォーマットの改善と並列化対応を実装。出力されたJSONを一括でマージするスクリプトも追加されました。  
   - 貢献者: jujunjun110

6. [PR #7](https://github.com/digitaldemocracy2030/polimoney/pull/7)  
   - タイトル: Feature/pdf2image2gemini  
   - 概要: PDFを画像化し、それをGeminiにかける一連のワークフローを構築するための対応。OCRなどの拡張も期待されます。  
   - 貢献者: nanocloudx

7. [PR #6](https://github.com/digitaldemocracy2030/polimoney/pull/6)  
   - タイトル: 可視化にデータを繋ぎこむ処理を実装  
   - 概要: 実際の支出報告書データから可視化用のデータを生成するしくみを追加。Node.jsのCLIツールとして変換処理を行う例も示されています。  
   - 貢献者: spinute

---

## 未完了のタスク・議論中のトピック

今週新たに作成されたIssueと、まだマージされていないPRをご紹介します。興味のある方はぜひコメントやレビューをお寄せください！

### 新規Issue

- [Issue #13](https://github.com/digitaldemocracy2030/polimoney/issues/13): OGPタグを書く  
  - 作成者: takahiroanno  
  - 目的: SNSでURLをシェアしたときにOGPカードが正しく表示されるようにしたい。サイト中央のサンキーダイアグラムや議員名が見える状態が望ましいとのこと。

- [Issue #12](https://github.com/digitaldemocracy2030/polimoney/issues/12): LICENSE / CLAを書く  
  - 作成者: takahiroanno  
  - 目的: デジタル民主主義プロジェクト「広聴AI」(kouchou-ai)にならったライセンス表記と、コントリビューター契約を明確化したい。

### マージ待ちのPR

- [PR #16](https://github.com/digitaldemocracy2030/polimoney/pull/16): docstring整備  
  - 作成者: shumizu418128  
  - 概要: コードの動きをより理解しやすくするためのドキュメント追加。特にGemini連携周りの実装と整合性を取るため、説明の修正を議論中です。

- [PR #15](https://github.com/digitaldemocracy2030/polimoney/pull/15): Add CLA and PR template  
  - 作成者: annyotaka + Devin  
  - 概要: Contributors向けの「Contributor License Agreement (CLA)」とPR用テンプレートを追加。  
  - [Issue #12](https://github.com/digitaldemocracy2030/polimoney/issues/12)を解決するための取り組みの一環で、実際のフォーマットや運用方法について追加議論があると良いかもしれません。

---

## 参加方法や次のステップ

- バグ報告や提案、ドキュメント修正など、気軽に[Issue](https://github.com/digitaldemocracy2030/polimoney/issues)や[Pull Request](https://github.com/digitaldemocracy2030/polimoney/pulls)を作成してみてください。  
- コードへの貢献だけでなく、ドキュメント作成やUI/UXの改善提案も大歓迎です。  
- 新たに参加される方は、ライセンスやCLAについて分からない点があれば[Issue #12](https://github.com/digitaldemocracy2030/polimoney/issues/12)や[PR #15](https://github.com/digitaldemocracy2030/polimoney/pull/15)の議論を参考にしてみてください。

みなさんのご参加を心よりお待ちしています！コミュニティの多様な意見や視点は、OSS開発にとって大きな力になります。ぜひ次回のリポジトリ更新もお楽しみに。  