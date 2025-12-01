# Polimoney 6/4~6/11 のGitHub活動まとめ

今週のPolimoneyリポジトリ（https://github.com/digitaldemocracy2030/polimoney）での活動状況をまとめました。OSS開発への参加を検討中の方も、実際の開発の様子や未完了タスクの議論をぜひ参考にしてください！

---

## 今週完了したこと

### クローズされたIssue

- [Issue #109](https://github.com/digitaldemocracy2030/polimoney/issues/109):  
  OCRのページごとにカテゴリID重複が発生しないように調整。  
  → PRでの修正により、最終的にマージ時にカテゴリが統合される機能が追加されました。  
  **作成者:** @dotneet

- [Issue #108](https://github.com/digitaldemocracy2030/polimoney/issues/108):  
  集計金額や親カテゴリが誤ってtransaction扱いになる問題を修正。  
  → OCRの段階で集計行を除外する実装が入り、converter.ts やサンキー図への影響を最小化しました。  
  **作成者:** @dotneet

### マージされたPull Request

下記のPRがマージされ、それぞれ新機能や不具合修正が反映されています。実装者の貢献にも注目です！

1. [PR #128](https://github.com/digitaldemocracy2030/polimoney/pull/128) (by @shumizu418128)  
   - 政治家のデモページ作成マニュアルを追加。OSSの使い方や資料化へ貢献。

2. [PR #123](https://github.com/digitaldemocracy2030/polimoney/pull/123) (by @shumizu418128)  
   - 新しい顔写真の追加。  
   - 政治家のビジュアル情報更新で閲覧者の理解度向上。

3. [PR #122](https://github.com/digitaldemocracy2030/polimoney/pull/122) (by @shumizu418128)  
   - 複数年分の財務レポートをドロップダウン切替できる機能を実装。  
   - UI/UX向上に大きく寄与。

4. [PR #119](https://github.com/digitaldemocracy2030/polimoney/pull/119) (by @dotneet)  
   - PDFをWeb表示用JSONへ変換する新スクリプトを追加。  
   - コマンド一発で簡単にレポート生成可能に。

5. [PR #117](https://github.com/digitaldemocracy2030/polimoney/pull/117) (by @dotneet)  
   - レポートページのコミット漏れを追加。主にUIページ関連ファイル。  
   - OCR結果をWebに表示する機能がより安定。

6. [PR #116](https://github.com/digitaldemocracy2030/polimoney/pull/116) (by @dotneet)  
   - ビルドエラーを修正し、CI上でのNext.jsビルドチェックを導入。  
   - 継続的インテグレーションの改善。

7. [PR #115](https://github.com/digitaldemocracy2030/polimoney/pull/115) (by @dotneet)  
   - OCR結果JSONからWeb表示までの一気通貫化を実現。  
   - 大規模財務報告書の取り扱いがしやすくなり、デバッグ効率も向上。

8. [PR #113](https://github.com/digitaldemocracy2030/polimoney/pull/113) (by @shumizu418128)  
   - 収支報告書の基本情報抽出機能を強化。  
   - 会計責任者や組織種別など、細かい情報も記載できるように。

9. [PR #111](https://github.com/digitaldemocracy2030/polimoney/pull/111) (by dependabot[bot])  
   - 依存パッケージ更新(tar-fs)。  
   - セキュリティや保守性の観点で重要な作業。

10. [PR #110](https://github.com/digitaldemocracy2030/polimoney/pull/110) (by @dotneet)  
    - アイキャッチ画像の追加。  
    - [Issue #101](https://github.com/digitaldemocracy2030/polimoney/issues/101)対応で中立性を保つための変更。

11. [PR #107](https://github.com/digitaldemocracy2030/polimoney/pull/107) (by @dotneet)  
    - 代表者や事務所所在地などの基本情報をJSONに出力する機能。  
    - 収支報告書の内容がますますリッチに。

---

## 未完了のタスク・進行中の議論

「始まったばかりで議論が熱いIssueやPR」です。ぜひコメントや実装で参加してみてください！

### 新規で作成されたIssue

- [Issue #124](https://github.com/digitaldemocracy2030/polimoney/issues/124) (by @kotaro-yamasaki)  
  サンキー図を資料用にコピーする機能の要望。  
  → 後述のPR #125でも検討進行中です！

- [Issue #120](https://github.com/digitaldemocracy2030/polimoney/issues/120) (by @TakumiAdachiGWS)  
  一般公開前に政治家にプライベート環境で試してもらうための認証機能実装。

- [Issue #118](https://github.com/digitaldemocracy2030/polimoney/issues/118) (by @dotneet)  
  カテゴリの数や深さが多すぎる際のサンキー図の見づらさへの対処案。

- [Issue #112](https://github.com/digitaldemocracy2030/polimoney/issues/112) (by @Nozomi-M21)  
  政治家さんのサイト・SNSへのリンク追加で活動を伝えたい提案。

### 更新されたがクローズされていないIssue

- [Issue #106](https://github.com/digitaldemocracy2030/polimoney/issues/106) (by @moai-redcap)  
  会計ソフト仕様書づくり。freee等に相談する案や自作案などで議論中。

- [Issue #104](https://github.com/digitaldemocracy2030/polimoney/issues/104) (by @dotneet)  
  OCRにプロフィール出力を追加する議論が続く。関連PRをさらに調整する可能性あり。

- [Issue #103](https://github.com/digitaldemocracy2030/polimoney/issues/103) (by @kotaro-yamasaki)  
  シェアボタン実装の要望。→ すでに[PR #126](https://github.com/digitaldemocracy2030/polimoney/pull/126)が出ています！

- [Issue #101](https://github.com/digitaldemocracy2030/polimoney/issues/101) (by @Nozomi-M21)  
  検索結果のアイキャッチ画像問題。アイキャッチ画像をDD2030ロゴに変える対応中。

- [Issue #29](https://github.com/digitaldemocracy2030/polimoney/issues/29) (by @nanocloudx)  
  E2Eつなぎこみ動作確認。OCR精度は悪くてもまずは一通り動かす議論を継続。

### 新規で作成されたPR（まだマージされていない）

- [PR #127](https://github.com/digitaldemocracy2030/polimoney/pull/127) (by @dotneet)  
  LLMをOpenAIやAnthropicで利用できるようにLangChainを導入。Gemini専用実装から汎用化へ。  
  → AI活用の幅が広がるため、興味ある方はレビュー大歓迎！

- [PR #126](https://github.com/digitaldemocracy2030/polimoney/pull/126) (by @kotaro-yamasaki)  
  [Issue #103](https://github.com/digitaldemocracy2030/polimoney/issues/103)で議論中のシェアボタン機能を実装。  
  → SNSやリンクコピーで広く情報を共有できるようにする。

- [PR #125](https://github.com/digitaldemocracy2030/polimoney/pull/125) (by @kotaro-yamasaki)  
  [Issue #124](https://github.com/digitaldemocracy2030/polimoney/issues/124)要望のサンキー図コピー機能。  
  → 資料に貼り付けられる操作性を目指す。レビュー募集中！

- [PR #114](https://github.com/digitaldemocracy2030/polimoney/pull/114) (by @shumizu418128)  
  coderabbitに日本語をしゃべらせる試み。  
  → ドキュメント生成などで日本語対応の幅を広げる。

---

## 参加の呼びかけ

- これらのIssue・PRにコメントする、コードを書いてみる、ドキュメントを整備する…といった多種多様な関わり方が可能です。
- OSS開発は、デザイナー・プログラマー・ドキュメンター・テスターなどあらゆる立場が必要とされています。  
- 新しい機能を試してみたり、表示のデバッグをしてみたり、あるいは政治家の方へのフィードバックを伝えることも大歓迎です。  

ぜひPolimoneyの開発にご参加ください！  