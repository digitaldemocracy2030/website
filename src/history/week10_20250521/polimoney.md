# Polimoney 5/14~5/21 のGitHub活動まとめ

Polimoneyプロジェクトのこの1週間(2025-05-14～2025-05-21)の開発状況をまとめました。新しく完了したタスクや議論中のタスクを紹介しますので、ぜひご覧いただき、OSS開発への参加を検討してみてください。

---

## 1. 今週完了したタスク

今週は合計7件のIssueがクローズされ、20件のPull Requestがマージされました。  
新機能や改善点が多数あるので、ぜひ活用してみてください！

### 主な完了Issue

- [Issue #64](https://github.com/digitaldemocracy2030/polimoney/issues/64)  
  - PythonコードのLintを通すため、ruffのチェックを有効化。  
  - 作成者: dotneet  
  - ruff導入の結果、コード全体のスタイル統一が進み、開発者以外の方にも読みやすくなりました。

- [Issue #54](https://github.com/digitaldemocracy2030/polimoney/issues/54)  
  - TypeScriptのフォーマッター導入 (Biome + lefthook)。  
  - 作成者: dotneet  
  - コードフォーマットが統一されたことで、貢献時の差分がきれいになり、レビューが格段にしやすくなりました。

- [Issue #46](https://github.com/digitaldemocracy2030/polimoney/issues/46)  
  - 検索結果のサムネイル画像を差し替え。  
  - 作成者: adust09  
  - デフォルト画像が仮のお顔写真だったものを、公共性の高いイメージに変更。プロジェクトを知らないユーザが初めて見たときの印象が改善されました。

- [Issue #34](https://github.com/digitaldemocracy2030/polimoney/issues/34)  
  - Pythonのlinter・formatter導入のまとめ。  
  - 作成者: tdaira  
  - コードの可読性向上に加えて、今後の開発でのコード整形ルールが明確になりました。

- [Issue #25](https://github.com/digitaldemocracy2030/polimoney/issues/25)  
  - devcontainerの設定。  
  - 作成者: adust09  
  - 未導入の方もVisual Studio Code上で一発で開発環境を整えられます。新しく参加する人にはありがたい機能！

- [Issue #4](https://github.com/digitaldemocracy2030/polimoney/issues/4)  
  - 総務省ウェブサイトからの政治資金収支報告書PDF自動取得機能。  
  - 作成者: Olemi-llm-apprentice  
  - ボタンひとつで大量の政治資金収支報告書PDFをダウンロードできるようになり、分析作業の準備時間を大幅に短縮。OSSとしても非常に魅力的な機能です。

- [Issue #3](https://github.com/digitaldemocracy2030/polimoney/issues/3)  
  - Gemini API呼び出しの並列化とエラーハンドリング強化。  
  - 作成者: Olemi-llm-apprentice  
  - 一時的な通信エラーなどで止まらないようにするなど、大規模処理の安定性が向上しました。

### 主なマージPRと貢献者

- [PR #73](https://github.com/digitaldemocracy2030/polimoney/pull/73) / [PR #72](https://github.com/digitaldemocracy2030/polimoney/pull/72) / [PR #71](https://github.com/digitaldemocracy2030/polimoney/pull/71) / [PR #70](https://github.com/digitaldemocracy2030/polimoney/pull/70) など  
  - 作者: dotneet  
  - Pythonのlefthook対応や並列処理オプション、PDFダウンローダーの不具合修正、VSCode拡張の更新など多岐にわたる改善を実装。

- [PR #66](https://github.com/digitaldemocracy2030/polimoney/pull/66) / [PR #48](https://github.com/digitaldemocracy2030/polimoney/pull/48) / [PR #47](https://github.com/digitaldemocracy2030/polimoney/pull/47)  
  - 作者: shumizu418128  
  - E2Eテストを実現するGeminiプロンプトの改良や、複数のJSON結果をマージするスクリプトの更新を行い、複数ページのOCR結果をスムーズにつなげられるように。

- [PR #59](https://github.com/digitaldemocracy2030/polimoney/pull/59), [PR #65](https://github.com/digitaldemocracy2030/polimoney/pull/65)  
  - 作者: dotneet  
  - Pythonへのruff・pyright導入、そして実際にエラーが出ない状態まで調整。自動化されたチェックのおかげで品質管理が容易に。

- [PR #60](https://github.com/digitaldemocracy2030/polimoney/pull/60)  
  - 作者: dotneet  
  - [Issue #4](https://github.com/digitaldemocracy2030/polimoney/issues/4) と連動し、政治資金収支報告書一括ダウンロードの実装を完了。操作マニュアルや細かなエラーハンドリング付き。

- [PR #55](https://github.com/digitaldemocracy2030/polimoney/pull/55)  
  - 作者: dotneet  
  - Gemini APIによる画像解析時、指数バックオフを用いた複数回リトライを実装し、大量画像を扱う処理の安定度を向上。

- [PR #50](https://github.com/digitaldemocracy2030/polimoney/pull/50)  
  - 作者: hatsu38  
  - バージョン指定をコミットハッシュ基準に変更し、外部部品のセキュリティを強化。タグの書き換えリスクを回避できます。

- [PR #45](https://github.com/digitaldemocracy2030/polimoney/pull/45)  
  - 作者: adust09  
  - devcontainerのDockerfileやVS Code設定の整備。コンテナ起動ですぐに環境をセットアップできます。

これら以外にも多くのPRがマージされ、総合的に機能向上が図られています。議論・提案・レビュー・実装など、多彩なコントリビューションが行われました。

---

## 2. 議論中または未完了のタスク

続いて、まだクローズされていないIssueと、その背後で行われている議論を紹介します。  
ここから参加してみるのも大歓迎です！

- [Issue #69](https://github.com/digitaldemocracy2030/polimoney/issues/69) 「Github Discussionを有効にする」  
  - 作成者: adust09  
  - OSSでの議論をしやすくするため、GitHub Discussionを整備してはどうかという提案。#30 や [Issue #31](https://github.com/digitaldemocracy2030/polimoney/issues/31) のようなCloseしにくい話題をオープンに議論できる場が必要との声が出ています。

- [Issue #63](https://github.com/digitaldemocracy2030/polimoney/issues/63) 「PRIVACY.mdを策定する」  
  - 作成者: adust09  
  - プライバシーポリシー文書の整備。個人献金の詳細を公表する上で、どこまで個人情報を重視し伏せるべきかも含め、ディスカッションが必要です。

- [Issue #51](https://github.com/digitaldemocracy2030/polimoney/issues/51) 「CONTRIBUTING.mdを作成する」  
  - 作成者: adust09  
  - IssueやPR作成時のガイドラインをまとめることで、初めてのコントリビューションに役立ちます。[PR #49](https://github.com/digitaldemocracy2030/polimoney/pull/49) でテンプレートが整備済み。このガイドライン策定が今後の開発効率を左右するかもしれません。

- [Issue #40](https://github.com/digitaldemocracy2030/polimoney/issues/40) 「対内外向け資料作成」  
  - 作成者: cKinu  
  - プロジェクト理解を促す資料をFigmaやスライドで用意。ユーザー向け・ビューアー向け・プロジェクト内部向けと三種類を検討中。

- [Issue #32](https://github.com/digitaldemocracy2030/polimoney/issues/32) 「データベース移行」  
  - 作成者: nanocloudx  
  - 現状GitHub Pagesに配置しているデータをPostgresなどのDBに移し、大量データへの対応見込みを立てる議論が続いています。

- [Issue #31](https://github.com/digitaldemocracy2030/polimoney/issues/31) 「議論：収支報告書に不記載（裏金）の情報について」  
  - 作成者: nanocloudx  
  - 収支報告書にも載っていない寄付金・支出の問題をどう扱うか。技術的にも社会的にも難易度が高く、議論が必要とされています。

- [Issue #30](https://github.com/digitaldemocracy2030/polimoney/issues/30) 「議論：個人献金の個人情報を隠す必要性について」  
  - 作成者: nanocloudx  
  - 政治資金収支報告書には個人名や住所が記載されるため、プライバシー保護とのバランスをどう取るか議論中。

- [Issue #29](https://github.com/digitaldemocracy2030/polimoney/issues/29) 「E2E動作確認（つなぎこみ）」  
  - 作成者: nanocloudx  
  - OCR結果を統合してHTML出力まで一気通貫に行うためのテスト。プロンプトの改良やJSONのマージスクリプトなど、技術的検討が続いています。

- [Issue #20](https://github.com/digitaldemocracy2030/polimoney/issues/20) 「収支報告書のフォーマット調査」  
  - 作成者: shumizu418128  
  - 各都道府県や団体種別ごとに様式が違うため、OCR精度向上のために「どのフォーマットがどれくらいあるのか」を掴む調査。

- [Issue #19](https://github.com/digitaldemocracy2030/polimoney/issues/19) 「OCR（画像認識）の精度強化」  
  - 作成者: shumizu418128  
  - Geminiを活用し、収支報告書の手書き情報や訂正印付きの部分などをどこまで正確に読み取れるか検討。処理ログを詳細に残すなどの取り組みが課題。

---

## 3. 参加方法・今後の方針

- まずは[Issue一覧](https://github.com/digitaldemocracy2030/polimoney/issues)をご覧ください。小さな修正やドキュメント追加など、誰でも気軽に始められるタスクがあります。  
- [Issue #69](https://github.com/digitaldemocracy2030/polimoney/issues/69) で議論されているGitHub Discussionが有効化されれば、意見交換しやすくなる見込みです。  
- 開発環境の準備は [Issue #25](https://github.com/digitaldemocracy2030/polimoney/issues/25) で導入されたdevcontainerが便利。VS Codeで簡単にセットアップ可能です。  

細かい確認や提案、コードの変更はもちろん、立場を活かしたドキュメント整備やテスト協力など、どんな形でも歓迎しています。政治資金の「見える化」を目指すこのプロジェクトに、ぜひご参加ください！  