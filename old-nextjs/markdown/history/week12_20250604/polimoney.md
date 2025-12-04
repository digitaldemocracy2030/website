# Polimoney 5/28～6/4 のGitHub活動まとめ

今週(2025-05-28 ～ 2025-06-04)のPolimoneyプロジェクトにおけるGitHub上の活動まとめです。  
「やってみようかな？」と思われた方はぜひIssueやPRにコメントを残し、OSS開発に参加してください！

---

## 完了したタスク

### 1. 画像前処理モジュールの追加 ([Issue #95](https://github.com/digitaldemocracy2030/polimoney/issues/95))
- **PR:** [PR #97](https://github.com/digitaldemocracy2030/polimoney/pull/97)  
- **作成者:** ymori1212  
- **内容:**  
  - PDFを画像に変換する際の前処理機能（グレースケール化・二値化・ノイズ除去など）を追加  
  - `pdf_to_images.py` に `--preprocess` オプションを導入  
  - `output_images/processed/`に前処理後の画像およびログが出力される  
  - OCR 精度向上に寄与する大きなアップデート  
- **ポイント:**  
  - ユーザ視点では「OCRの認識率がアップし、データの正確性が高まる」嬉しい改良です  
  - 実装者は ymori1212さん。「画像の前処理や機械学習周りに興味がある方は是非チェックしてみてください！」  

### 2. Issueテンプレートの整備 ([PR #99](https://github.com/digitaldemocracy2030/polimoney/pull/99), [PR #100](https://github.com/digitaldemocracy2030/polimoney/pull/100))
- **作成者:** moai-redcap +Devin  
- **内容:**  
  - PR用やDEV用など、用途別にIssueテンプレートを追加・修正  
  - 今後、新しいIssueを作成するときに迷わずに投稿しやすくなりました  
- **ポイント:**  
  - コミュニティが増えるほど、「どこに・どんな形で課題を作るか」が重要になります  
  - テンプレート整備によって、開発参加のハードルが下がりました  

### 3. JSON-LDの追加＆robots.txtの整備 ([PR #96](https://github.com/digitaldemocracy2030/polimoney/pull/96))
- **作成者:** dotneet  
- **内容:**  
  - 検索エンジン対策のためのJSON-LDメタデータを追加  
  - robots.txtによってテスト用画像などへのクロールを制限し、意図しない個人写真が検索結果に出ないように調整  
- **ポイント:**  
  - 「ウェブ公開しているデータの検索結果がどう表示されるか」への配慮が進みました  
  - 政治家の写真など機微情報を扱うため、検索エンジンへの露出制御は重要なテーマです  

---

## 未完了のタスク・議論中のTopic

ここからは、まだ完了していないIssueやPRの一部をご紹介します。議論の参加、大歓迎です！

### 新規Issue例

- [Issue #108](https://github.com/digitaldemocracy2030/polimoney/issues/108)  
  OCR出力で「合計」や「小計」などを誤って個別取引として扱ってしまう問題を解決したい、という要望です。  
  → すでに [Issue #1](https://github.com/digitaldemocracy2030/polimoney/issues/1) とも関連があり、「集計行をどう除外するか」について活発な議論が期待されています。  

- [Issue #106](https://github.com/digitaldemocracy2030/polimoney/issues/106)  
  会計ソフトの仕様書がないため開発が進められない…という課題。  
  → freee への打診など、ソフトウェア面でのネゴシエーション案も出ています。  

- [Issue #105](https://github.com/digitaldemocracy2030/polimoney/issues/105)  
  「継続フロー：タイムライン決定～公開までの作成」に関する検討。  
  → Slack上でのやりとりを踏まえ、年末～年明けにどうアップデートしていくかを模索中です。  

- [Issue #104](https://github.com/digitaldemocracy2030/polimoney/issues/104)  
  OCRの出力項目でプロフィール情報などが欠落している。  
  → 基本情報の取得が必要との声が上がり、現在進行形で取り組み中。  

- [Issue #103](https://github.com/digitaldemocracy2030/polimoney/issues/103)  
  「シェアボタンの実装」  
  → 政治家ページをSNSで拡散する仕組みを作り、より多くの人に関心を持ってもらう狙い。  
  → 初心者でもUI周りの実装を手伝えるチャンスです！  

- [Issue #102](https://github.com/digitaldemocracy2030/polimoney/issues/102)  
  Coming Soon..パネル表示。UI強化案です。  
  → デザインやフロントエンドが得意な方の参加が求められています。  

- [Issue #101](https://github.com/digitaldemocracy2030/polimoney/issues/101)  
  Polimoneyを検索したときに、特定の政治家の画像がアイキャッチになりがちなのを避けたい。  
  → [PR #96](https://github.com/digitaldemocracy2030/polimoney/pull/96) で部分対応済みですが、より良い対処方法を引き続き検討中。  

### OpenなPR

- [PR #107](https://github.com/digitaldemocracy2030/polimoney/pull/107) 基本情報のjsonへの出力  
  - **作成者:** dotneet  
  - **Issue参照:** [Issue #104](https://github.com/digitaldemocracy2030/polimoney/issues/104)  
  - 政治団体名や代表名、事務所所在地などの「基本情報」もOCRで取得してJSONに含める提案  
  - lintエラー修正なども加わり、レビュー途中です。  

上記のように、現在も多くのIssueやPRで議論が活発に行われています。参加の仕方はさまざま。「コーディングだけでなく仕様議論やドキュメントづくりもOSS貢献としてとても大切」ですので、どなたでも気軽にコメントいただければ大歓迎です！

---

## 参加方法

1. 気になるIssueを見つけたら「コメント」や「いいね」をしてみる  
2. 実装や改善案を思いついたらDraft PRで提案してみる  
3. 不明点は「どこに質問すればいいか分からない」ことも含めてIssueに投げてOK  

Polimoneyは「デジタル民主主義2030」の一環として、多様なコントリビューターを歓迎しています。ぜひ一緒に盛り上げていきましょう！