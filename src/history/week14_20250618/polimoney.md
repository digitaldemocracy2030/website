# Polimoney 6/11~6/18 のGitHub活動まとめ

開発の状況をまとめました。この1週間で完了したタスクと、現在も議論・作業中のタスクを紹介します。新機能や改善が進んでいますので、ぜひOSS開発への参加を検討してください！

---

## 今週完了したタスク

### 閉じられたIssue

- [Issue #124](https://github.com/digitaldemocracy2030/polimoney/issues/124) サンキー図のコピー機能  
  - 「サンキー図」をコピーして資料などで活用できるようになりました。  
  - 元の[PR #125](https://github.com/digitaldemocracy2030/polimoney/pull/125)がありましたが、コンフリクト修正込みの[PR #132](https://github.com/digitaldemocracy2030/polimoney/pull/132)を使う形で無事マージされました。  
  - 実装は主に「kotaro-yamasaki」さんや「dotneet」さんが貢献し、画像コピー用のパッケージ(html2canvas)を追加しました。

- [Issue #103](https://github.com/digitaldemocracy2030/polimoney/issues/103) シェアボタンの実装  
  - 各ページの「シェアボタン」を押すだけでSNS（X, LINE, Facebookなど）へのリンク共有が可能になりました。  
  - [PR #126](https://github.com/digitaldemocracy2030/polimoney/pull/126)により実装。作者は「kotaro-yamasaki」さんで、SNS共有ライブラリの導入やUIの調整が含まれています。

### マージされたPull Request

- [PR #133](https://github.com/digitaldemocracy2030/polimoney/pull/133)  
  - モバイル画面でサンキー図のコピー機能が意図通り動作しなかったため、一時的に非表示にする対応を行いました。  
  - 「kotaro-yamasaki」さんが修正を行い、スマホ利用者のページ崩れを防止しています。

- [PR #132](https://github.com/digitaldemocracy2030/polimoney/pull/132)  
  - 上の[Issue #124](https://github.com/digitaldemocracy2030/polimoney/issues/124)対応版PR。  
  - 「dotneet」さんの貢献でコンフリクトを解消し、サンキー図のコピー機能が完成しました。

- [PR #130](https://github.com/digitaldemocracy2030/polimoney/pull/130)  
  - 「dependabot[bot]」によるセキュリティアップデートで、Pythonライブラリ`requests`をバージョン2.32.4に更新。  
  - バージョンアップにより脆弱性が解消され、安心して開発を続けられます。

- [PR #128](https://github.com/digitaldemocracy2030/polimoney/pull/128)  
  - 「shumizu418128」さんによるドキュメント整備。仮設ページ作成の手順や注意点をまとめたマニュアルが追加されました。  
  - 新規開発者にとって参考になる内容が増えています。

- [PR #127](https://github.com/digitaldemocracy2030/polimoney/pull/127)  
  - 「dotneet」さんがOpenAIとAnthropicをサポートできるようコードを大きくリファクタ。  
  - LangChainに対応し、将来的な拡張がしやすい仕組みに改善されています。

---

## 未完了のタスク・議論中の話題

- [Issue #134](https://github.com/digitaldemocracy2030/polimoney/issues/134) [シェア機能]タイトルとサムネイルを変更する  
  - シェア時にページタイトルや画像を、その政治家固有のものにしたいという要望。  
  - 「kotaro-yamasaki」さんが提案中。シェアボタンが整備されたので、より見栄えを良くするための議論が進んでいます。

- [Issue #131](https://github.com/digitaldemocracy2030/polimoney/issues/131) 渉外時の承諾確認リストを作成  
  - 「Nozomi-M21」さんが提案した、渉外（データ提供やインタビュー依頼など）フローの確認事項整理のタスク。  
  - 営業資料などで合意のとり方を明示し、プロジェクトへの信頼性を高める取り組みが行われています。

- [Issue #129](https://github.com/digitaldemocracy2030/polimoney/issues/129) セキュリティアラートの解決  
  - 「moai-redcap」さんが指摘。Dependabot以外にも残るセキュリティアラートがあるとのこと。  
  - 複数ライブラリのバージョンアップ確認や依存関係を整理するため、追加の修正が必要です。

- [Issue #102](https://github.com/digitaldemocracy2030/polimoney/issues/102) 準備中の「Coming Soon..」パネルをUIに追加  
  - 「Nozomi-M21」さんが作成。未公開の政治家データを「Coming Soon..」パネルで表示して期待感を高めたい案。  
  - マージのタイミングやUIデザイン詳細はまだ詰めきれていないため、引き続き議論中です。

---

## コミュニティへの参加募集

- 上記のようにUI・ドキュメント・インフラ・新機能など多方面での開発が進行中です。  
- 「自分でもコントリビュートできるかも？」と思ったら、ぜひIssueやPull Requestにコメントしてください。  
- 初心者歓迎！デザイン・ドキュメント整理・細かいバグ修正など、あらゆる貢献をお待ちしています。

プロジェクトの活性化に、みなさんのアイデアとご協力が欠かせません。今後ともPolimoneyをよろしくお願いします！  