# 広聴AI 4/30~5/7 のGitHub活動まとめ

今週は、UI改善やセットアップ時間短縮の対応など、多数のIssueが完了し、多様な新機能・改善PRがマージされました。さらに、未完了のタスクをめぐっては、新たに多くの議論が行われています。以下にまとめますので、「広聴AI」に興味を持った方はぜひOSS開発に参加してみてください！

---

## 今週完了したIssue（17件）

以下のIssueはいずれも解決済みです。新機能や改善内容を知るチャンスですので、ぜひチェックしてください。

1. [Issue #436](https://github.com/digitaldemocracy2030/kouchou-ai/issues/436)  
   - 提案内容: 「#427のデザイン案をもとに、PC/タブレット/スマホで最適な文字数制限VDを作成」  
   - 作成者: UtkNggc  
   - デザイン関連のIssueです。新しい画面構成や文字数制限を検討し、UI案を固めました。

2. [Issue #432](https://github.com/digitaldemocracy2030/kouchou-ai/issues/432)  
   - 提案内容: 「Macでのセットアップに時間がかかるが、正常進行かどうか」  
   - 作成者: shingo-ohki  
   - セットアップ時の負荷が高い問題について原因分析。解決策としてDockerビルド時間の短縮等が行われました。

3. [Issue #424](https://github.com/digitaldemocracy2030/kouchou-ai/issues/424)  
   - 提案内容: 「client画面の見た目を修正」  
   - 作成者: nasuka  
   - クライアント向け画面のデザイン微調整にまつわる議論。全体のUIを整えるためのIssueです。

4. [Issue #420](https://github.com/digitaldemocracy2030/kouchou-ai/issues/420)  
   - 提案内容: 「資料整備のテストIssue」  
   - 作成者: masatosasano2  
   - ドキュメント整備や開発フローのフィードバックを募集するためのIssue。

5. [Issue #415](https://github.com/digitaldemocracy2030/kouchou-ai/issues/415)  
   - 提案内容: 「マスターデザインデータの作成(Figma)」  
   - 作成者: UtkNggc  
   - 管理画面やレポート表示を整理するためのデザイン案をFigmaに集約する施策。

6. [Issue #409](https://github.com/digitaldemocracy2030/kouchou-ai/issues/409)  
   - 提案内容: 「Issue内容から自動ラベルを判定して付与したい」  
   - 作成者: masatosasano2  
   - 複数の属性を持ちうるIssueに、Github Actions＋LLMで自動的にラベル付けを行う試み。

7. [Issue #403](https://github.com/digitaldemocracy2030/kouchou-ai/issues/403)  
   - 提案内容: 「metadata をオプショナル化」  
   - 作成者: nanocloudx  
   - レポート作成者やアイコン画像を指定しなくてもエラーにならないようにリファクタリング。  

8. [Issue #401](https://github.com/digitaldemocracy2030/kouchou-ai/issues/401)  
   - 提案内容: 「“クラスタ”を“グループ”に言い換える」  
   - 作成者: masatosasano2  
   - 一般ユーザーにも分かりやすいように用語を修正。

9. [Issue #304](https://github.com/digitaldemocracy2030/kouchou-ai/issues/304)  
   - 提案内容: 「CSVアップロード時にコメント列を自動で特定」  
   - 作成者: masatosasano2  
   - CSV取り込みの煩雑さを軽減するため、自動で列を判定する仕組みを導入。

10. [Issue #303](https://github.com/digitaldemocracy2030/kouchou-ai/issues/303)  
    - 提案内容: 「CSVアップロード時にクラスタ数をデフォルト設定してほしい」  
    - 作成者: masatosasano2  
    - 一手間省くUI改善で、クイックにクラスタリングできるよう対応。

11. [Issue #302](https://github.com/digitaldemocracy2030/kouchou-ai/issues/302)  
    - 提案内容: 「『公開』ボタンを押すときの挙動を分かりやすく」  
    - 作成者: masatosasano2  
    - ボタンの表示とアクションが逆にならないようUIを改修。

12. [Issue #291](https://github.com/digitaldemocracy2030/kouchou-ai/issues/291)  
    - 提案内容: 「.envファイルがMac Finderで不可視になる問題」  
    - 作成者: nishio  
    - Macユーザ向けに .env を編集するための方法をREADMEで明記。

13. [Issue #288](https://github.com/digitaldemocracy2030/kouchou-ai/issues/288)  
    - 提案内容: 「zipでのリリースを検討」  
    - 作成者: nishio  
    - Gitを導入できない環境でも使いやすくするためのzip配布案。

14. [Issue #269](https://github.com/digitaldemocracy2030/kouchou-ai/issues/269)  
    - 提案内容: 「クラスタタイトルが抽象的になる問題の検証」  
    - 作成者: nasuka  
    - アルゴリズムやプロンプトレベルなど、多角的に原因を検証して改善。

15. [Issue #207](https://github.com/digitaldemocracy2030/kouchou-ai/issues/207)  
    - 提案内容: 「レポート一覧のクリック可能範囲を広げる」  
    - 作成者: nishio  
    - UI改善。グレーの領域だけでなくブロック全体をクリックできるように。

16. [Issue #122](https://github.com/digitaldemocracy2030/kouchou-ai/issues/122)  
    - 提案内容: 「コード以外の貢献も可視化する」  
    - 作成者: shingo-ohki  
    - コード以外のレビューやSNS発信なども見える化する施策について提議。

17. [Issue #24](https://github.com/digitaldemocracy2030/kouchou-ai/issues/24)  
    - 提案内容: 「濃いクラスタ表示時に、クラスタ説明文も濃いクラスタに合わせたい」  
    - 作成者: nasuka  
    - フィルタ適用時の表示整合性を高める修正。

---

## 今週マージされたPull Request（15件）

下記15件のPRがマージされました。中にはユーザーには目立ちにくい仕組み改善も多いですが、OSSに参加する上では重要な貢献です。

1. [PR #449](https://github.com/digitaldemocracy2030/kouchou-ai/pull/449)  
   - 「ところてんさんをメンテナーに追加」  
   - 作成者: nasuka  
   - プロジェクトのメンテナー拡充を行い、レビュー体制を強化。

2. [PR #446](https://github.com/digitaldemocracy2030/kouchou-ai/pull/446)  
   - 「Labeling prompt improvement」  
   - 作成者: masatosasano2  
   - 自動ラベリング時のプロンプトを修正し、精度向上を図ったPR。

3. [PR #442](https://github.com/digitaldemocracy2030/kouchou-ai/pull/442)  
   - 「apiコンテナのビルド時間短縮」  
   - 作成者: shingo-ohki  
   - GPUサポート不要なユーザー向けにビルドを軽量化し、セットアップ時間を半分以下に。

4. [PR #435](https://github.com/digitaldemocracy2030/kouchou-ai/pull/435)  
   - 「metadataが未設定でもリンクエラーにならないように」  
   - 作成者: takumi19910112  
   - オプショナルな項目を扱いやすくする改善。

5. [PR #429](https://github.com/digitaldemocracy2030/kouchou-ai/pull/429)  
   - 「カラムの自動選択アルゴリズム追加」  
   - 作成者: tokoroten  
   - CSVアップロード時にコメント列を自動判定する機能を実装。

6. [PR #423](https://github.com/digitaldemocracy2030/kouchou-ai/pull/423)  
   - 「[REFACTOR] metadata のオプショナル化 #403」  
   - 作成者: takumi19910112  
   - Issue #403対応。本格的にmetadataを任意指定の仕組みに。

7. [PR #421](https://github.com/digitaldemocracy2030/kouchou-ai/pull/421)  
   - 「Client-AdminにOpenAI APIKeyの確認画面を追加」  
   - 作成者: tokoroten  
   - Env設定が正しいかを簡単に確認できるUIを管理画面に追加。

8. [PR #418](https://github.com/digitaldemocracy2030/kouchou-ai/pull/418)  
   - 「ラジオボタンに見た目を変更」  
   - 作成者: takumi19910112  
   - 「公開/非公開」ボタンをラジオにして分かりやすく改善。

9. [PR #413](https://github.com/digitaldemocracy2030/kouchou-ai/pull/413)  
   - 「static exportでbase pathを設定可能に (Github Pages対応)」  
   - 作成者: mtane0412  
   - GitHub Pagesでサブディレクトリ公開する際のパス解決が楽に。

10. [PR #411](https://github.com/digitaldemocracy2030/kouchou-ai/pull/411)  
   - 「GitHub Projects運用ポリシーをドキュメント化」  
   - 作成者: nasuka  
   - イシュー管理フローをまとめて、参加者の混乱を防止。

11. [PR #410](https://github.com/digitaldemocracy2030/kouchou-ai/pull/410)  
   - 「Issueに自動ラベリングするGitHub Actionsの実装」  
   - 作成者: masatosasano2  
   - Issue #409対応。複数の属性をカバーするラベル付けを自動化。

12. [PR #408](https://github.com/digitaldemocracy2030/kouchou-ai/pull/408)  
   - 「static build時のフォントキャッシュを追加」  
   - 作成者: mtane0412  
   - ビルド時のフォント取得回数を減らし、安定化を実現。

13. [PR #405](https://github.com/digitaldemocracy2030/kouchou-ai/pull/405)  
   - 「濃い意見グループが選択されたときの説明文切り替え」  
   - 作成者: nasuka  
   - Issue [#24](https://github.com/digitaldemocracy2030/kouchou-ai/issues/24)解決。濃い意見用の説明文を正しく表示。

14. [PR #404](https://github.com/digitaldemocracy2030/kouchou-ai/pull/404)  
   - 「散布図にズームとパンを追加。スクショ機能も」  
   - 作成者: tokoroten  
   - プロットの操作感を大幅改善し、可視化の利便性を向上。

15. [PR #399](https://github.com/digitaldemocracy2030/kouchou-ai/pull/399)  
   - 「Devinとのコラボレーション(ドキュメント追加)」  
   - 作成者: shingo-ohki  
   - Issue [#398](https://github.com/digitaldemocracy2030/kouchou-ai/issues/398)対応。AIアシスタントとの協働ノウハウを共有。

---

## まだ進行中のタスク・議論中のIssue例（今週新たに作成されたものなど）

今週は21件の新規Issue、12件の新規PRが作成され、まだ多くが進行中です。ここでは特に議論の盛り上がりがあるものを紹介します。

- [Issue #450](https://github.com/digitaldemocracy2030/kouchou-ai/issues/450)  
  「エンベデッドモデルを選択可能にする」  
  - tokorotenさん発案。ローカルエンベディングや大規模モデルをリストボックスで切り替えたいという提案が議論中。

- [Issue #441](https://github.com/digitaldemocracy2030/kouchou-ai/issues/441)  
  「ヘッダーにプロダクト名を表示する」  
  - 作成者: UtkNggc  
  - 「広聴AI」のロゴ表示やコピーライト表記など、デザイン面での課題がディスカッションされています。

- [Issue #447](https://github.com/digitaldemocracy2030/kouchou-ai/issues/447)  
  「[design] #400 #421 に関連したマスター反映」  
  - 作成者: UtkNggc  
  - 新ボタン実装や管理画面の追加に合わせ、Figma上のマスターを更新する作業が未完了。

- [Issue #443](https://github.com/digitaldemocracy2030/kouchou-ai/issues/443)  
  「[design] デザインシステムの設計」  
  - 作成者: UtkNggc  
  - Chakra UIとの組み合わせが難点。デザイン原則の策定が進んでおり、興味あるデザイナーを募集中。

- [Issue #430](https://github.com/digitaldemocracy2030/kouchou-ai/issues/430)  
  「ローカルLLMを簡単に動かすためにOllamaのDockerを追加する」  
  - tokorotenさん提案。DockerでローカルLLMを標準提供しようというアイデア。本格実装へ向けた議論が熱いです。

また、新たに作成されたPRもいくつかドラフト状態で議論中です。例えば…

- [PR #448](https://github.com/digitaldemocracy2030/kouchou-ai/pull/448) (by take365)  
  「Feat/evaluation report」  
  - クラスタリング品質をHTMLレポートで見られるようにする大規模実装。Issue [#144](https://github.com/digitaldemocracy2030/kouchou-ai/issues/144)の流れを汲むもの。

- [PR #422](https://github.com/digitaldemocracy2030/kouchou-ai/pull/422) (by shinta.nakayama+Devin)  
  「Add provider selection to LLM integration」  
  - Devin(アシスタント)を活用しつつ、LLMプロバイダーをUIから切り替える機能を追加。レビュー待ちです。

---

## 多様な貢献者（メンテナー・開発者）の存在

今週は「tokoroten」さんや「UtkNggc」さんなど、新たに積極貢献する方が増えています。  
また、「shinta.nakayama+Devin」のようにAIサポートを駆使しながらPRを出す事例も増え、人的リソースが充実してきました。OSSは多様な視点が集まるほど成長が早まります。皆さんからのイシュー投稿やPR、ドキュメント貢献も大歓迎です。

---

## 参加方法

- 開発者でない方でも:  
  - Issueへのいいね(Thumbs-up)やコメントで「その機能が欲しい！」を伝えるだけでも大きな貢献です。  
  - ドキュメント整備やユーザー視点のUI改善案など、大歓迎です。

- 開発参画したい方は:  
  - [Issue一覧](https://github.com/digitaldemocracy2030/kouchou-ai/issues)で自分が着手したいものを選び、「Assign」をクリックしてください。  
  - 分からないことがあればIssueに「質問です！」と書き込めば、誰かがサポートしてくれます。

一緒に「広聴AI」を育てていきましょう！  