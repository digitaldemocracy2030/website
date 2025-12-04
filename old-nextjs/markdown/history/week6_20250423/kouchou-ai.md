# 広聴AI 第6週（2025/4/16~4/23）のGitHub活動まとめ

今週は19件のIssueが完了し、23件のPull Requestがマージされました。特に「Windowsユーザ向け環境構築の改善」や「レポートの編集機能」「意見グループ数やカラーバリエーションの拡充」など、ユーザビリティ面を大きく向上させる修正・新機能の開発が活発でした。一方、未完了のタスクとしては「大量投稿への対処」「階層クラスタリングのさらなる改善」「静的エクスポート周りの高度化」に関する議論が進行中です。以下に詳しくご紹介します。

---

## 今週完了したIssue（抜粋）

1. [Issue #347](https://github.com/digitaldemocracy2030/kouchou-ai/issues/347)  
   - 画像ファイル(broadlistening.png)が大きくモバイルでの読み込みに時間がかかる問題を解決。  
   - 開発者: mtane0412   
   - PRで最適化後の画像を導入したことで静的サイトでも軽量に表示可能になりました。

2. [Issue #330](https://github.com/digitaldemocracy2030/kouchou-ai/issues/330)  
   - 第1階層の意見グループ数上限を20→40に拡充。  
   - 主に nasuka さんや mtane0412 さんが対応し、議論の多いデータセットでもクラスタをより細かく可視化しやすくなりました。

3. [Issue #328](https://github.com/digitaldemocracy2030/kouchou-ai/issues/328)  
   - レポートのタイトルを後から変更できない問題を解消。  
   - mtane0412 さんの実装によってタイトル・調査概要を編集できるようになり、レポート再利用時の混乱を防いでいます。

4. [Issue #317](https://github.com/digitaldemocracy2030/kouchou-ai/issues/317)  
   - レポートのタイムゾーンがUTC表示になっていたため、利用者が混乱しやすい点を修正。  
   - nasuka さんの修正により、JSTで保存されるようになりました。

5. [Issue #297](https://github.com/digitaldemocracy2030/kouchou-ai/issues/297)  
   - Windows ExcelでCSVが文字化けする問題を解決するため、BOM付きCSVのダウンロードオプションを追加。  
   - これにより、Excelユーザーへの配慮が進みました。

上記以外にも多数のバグ修正やリファクタリングが完了しています。完了した全Issueの詳細はリポジトリをご覧ください。

---

## 今週マージされた主なPull Request

1. [PR #336](https://github.com/digitaldemocracy2030/kouchou-ai/pull/336)「レポートのタイトル・調査概要編集を可能にする」  
   - 作者: mtane0412  
   - 作成済みレポートの編集機能が実装され、レポート一覧から直接変更できます。

2. [PR #351](https://github.com/digitaldemocracy2030/kouchou-ai/pull/351)「client-admin/app/create/page.tsx のリファクタリング」  
   - 作者: mtane0412  
   - 長大化していたファイルをコンポーネントやフック単位に整理し、メンテナンス性を向上させました。

3. [PR #320](https://github.com/digitaldemocracy2030/kouchou-ai/pull/320)「レポート作成日時にtimezoneを付与して保存」  
   - 作者: nasuka  
   - Issue #317 への対応。JST表示になり、実際の時刻とのズレが解消されました。

4. [PR #357](https://github.com/digitaldemocracy2030/kouchou-ai/pull/357)「Cluster lv2のmin valueを2→4に調整」  
   - 作者: mtane0412  
   - クラスタ数の設定時に起こる細かい補正表示を減らすため、最小値を再定義しました。

5. [PR #344](https://github.com/digitaldemocracy2030/kouchou-ai/pull/344)「OGP画像生成のリトライ処理導入」  
   - 作者: mtane0412  
   - 大量のレポートを静的サイト出力する際、OGP生成でAPI接続エラーが頻発する問題をリトライで緩和。

他にも、Windows環境向けセットアップ手順を追加する[PR #313](https://github.com/digitaldemocracy2030/kouchou-ai/pull/313)など、多数の改善が行われています。

---

## 今週新たに始まった・議論中のタスク

1. [Issue #346](https://github.com/digitaldemocracy2030/kouchou-ai/issues/346)「同一の内容が大量に投稿される問題への対処法 (実験)」  
   - パブコメやSNSでよく見られるテンプレ投稿・大量投稿をまとめて扱う仕組みについて、nasuka さんを中心に議論中。  
   - 大規模データでクラスタリング精度や表示負荷をどう下げるかが論点となっています。

2. [Issue #342](https://github.com/digitaldemocracy2030/kouchou-ai/issues/342)「文脈をふまえた生データの整形」  
   - masatosasano2 さんの提案で、引用リプライや画像URLなどの文脈情報を活かした前処理の可能性が検討されています。  
   - SNS由来データの解析精度向上が見込めるとのことです。

3. [PR #360](https://github.com/digitaldemocracy2030/kouchou-ai/pull/360)「Adminから静的エクスポートのZIPファイルをダウンロードする試み」  
   - 作者: shgtkshruch  
   - Web UI上でビルドを走らせ、生成された静的ファイル一式をzipで落とせるようにする新機能。  
   - 大量のデータを扱う際のパフォーマンスやセキュリティ面を議論中。

4. [Issue #345](https://github.com/digitaldemocracy2030/kouchou-ai/issues/345)「同一内容大量投稿への対応策の情報整理」  
   - テンプレ投稿をどう見せるか、クラスタに反映するかなど、引き続き有志が意見を出しています。

他にも、[Issue #290](https://github.com/digitaldemocracy2030/kouchou-ai/issues/290)「階層図のUI/UX改善」のさらなる取り組みや、[Issue #303](https://github.com/digitaldemocracy2030/kouchou-ai/issues/303)「CSVアップロード時のクラスタ数のデフォルト設定」など、多数の議論が進んでいます。

---

## 貢献者・後見人の紹介

- 今週の主な実装提案者として活躍したのは、nasuka さん、mtane0412 さん、nishio さん、shingo-ohki さん、masatosasano2 さん、shgtkshruch さんなど多彩なメンバーです。
- 「nsk.smn+Devin」名義のPRは nsk.smn さんがDevin（AIアシスタント）を用いて提出したもので、OSSプロジェクトにおけるAIの活用事例としても注目されています。

こうした多様なメンバー・後見人が存在することで、広聴AIプロジェクトはさまざまな視点の課題を捉えつつ迅速に機能改善を続けています。

---

## まとめと参加の呼びかけ

- 今週はWindowsセットアップやCSV機能周りなど、導入面・効率面のアップデートが多数行われました。  
- 一方で、大量投稿の対処・SNS特有の文脈解析・新たな可視化アプローチなど、未完了のタスクにも多くの提案が寄せられています。  
- これらの議論に興味をお持ちの方は、ぜひ [Issue一覧](https://github.com/digitaldemocracy2030/kouchou-ai/issues) で詳細を確認し、コメントやPull Requestをお寄せください。

あなたのアイデアや開発参加が、デジタル民主主義を加速させる大きな原動力となります。皆さまの積極的なご参加をお待ちしています！