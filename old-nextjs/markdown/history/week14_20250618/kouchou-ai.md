# 広聴AI 6/11~6/18 のGitHub活動まとめ

今週はデザインシステムの導入や不具合修正など、フロントエンド周りを中心に多くの成果が上がりました。OSS開発に興味を持ってもらえそうな新機能や議論が進行中のものをまとめましたので、ぜひご覧ください。

---

## 今週完了したタスク

### 完了したIssue

1. [Issue #599](https://github.com/digitaldemocracy2030/kouchou-ai/issues/599)  
   - デザインシステムに基づく「Button」実装をフロントエンドへ反映。  
   - 作成者: shgtkshruch  
   - デザインの統一感が向上。Hover時のアニメーションや背景色が統一され、使いやすいボタンに。

2. [Issue #598](https://github.com/digitaldemocracy2030/kouchou-ai/issues/598)  
   - デザインシステムに基づく「Typography」実装をフロントエンドへ反映。  
   - 作成者: shgtkshruch  
   - 特定の画面要素（レポーター情報やFooterなど）でフォントやテキストスタイルが整備され、見やすさが向上。

3. [Issue #596](https://github.com/digitaldemocracy2030/kouchou-ai/issues/596)  
   - 管理画面でレポートを作成する際、CSV ダウンロードを一律で可能にする仕様（初期実装版）。  
   - 作成者: shgtkshruch  
   - 従来は CSV 出力を有効化するチェックが必要だったが、一律でダウンロードできるようになり、運用がシンプルに。

4. [Issue #494](https://github.com/digitaldemocracy2030/kouchou-ai/issues/494)  
   - OpenAI API以外のLLMを使っている場合でも画面表示に「OpenAI APIを用いた～」と表示されてしまうバグの修正。  
   - 作成者: tokoroten  
   - 実際に利用しているLLMのプロバイダー名とモデル名が動的に表示されるように改善され、誤解が減る見た目に。

### マージされたPull Request

1. [PR #602](https://github.com/digitaldemocracy2030/kouchou-ai/pull/602) (作者: shgtkshruch)  
   - デザインシステムのButtonコンポーネントのフロントエンド適用。  
   - 既存ボタンを新コンポーネントに置き換え、ビジュアルを統一。

2. [PR #600](https://github.com/digitaldemocracy2030/kouchou-ai/pull/600) (作者: shgtkshruch)  
   - デザインシステムのTypographyをフロントエンド適用。  
   - 統一感あるフォントや文字サイズが導入され、可読性がアップ。

3. [PR #601](https://github.com/digitaldemocracy2030/kouchou-ai/pull/601) (作者: takumi19910112)  
   - [Issue #494](https://github.com/digitaldemocracy2030/kouchou-ai/issues/494) のバグ修正。  
   - 実際のLLMプロバイダー名・モデルをレポートに反映し、「OpenAI」固定文言を削除。

4. [PR #603](https://github.com/digitaldemocracy2030/kouchou-ai/pull/603) (作者: takumi19910112)  
   - [Issue #596](https://github.com/digitaldemocracy2030/kouchou-ai/issues/596) に基づき、CSVダウンロードを一律に許可する機能を追加。  
   - 後に [PR #606](https://github.com/digitaldemocracy2030/kouchou-ai/pull/606) によりいったんRevert（ロールバック）も実施。

5. [PR #606](https://github.com/digitaldemocracy2030/kouchou-ai/pull/606) (作者: takumi19910112)  
   - [PR #603](https://github.com/digitaldemocracy2030/kouchou-ai/pull/603) をRevertする修正。  
   - CSVダウンロードの制御を見直す必要があり、一時的に元に戻された。

6. [PR #595](https://github.com/digitaldemocracy2030/kouchou-ai/pull/595) (作者: shgtkshruch)  
   - Docker環境で起きていたレポーター画像取得エラーを修正。  
   - サーバーサイドレンダリング時のURL判定まわりを調整。

---

## 未完了または議論中のタスク

### 新規のIssueや更新されたIssue

- [Issue #604](https://github.com/digitaldemocracy2030/kouchou-ai/issues/604)  
  - 管理画面のレポート一覧画面をコンポーネント分割するリファクタ提案。  
  - 作者: shgtkshruch  
  - 「一括編集機能」などのUI変更が見込まれるため、早めのコンポーネント分割を検討中。

- [Issue #493](https://github.com/digitaldemocracy2030/kouchou-ai/issues/493)  
  - レポートページのグラフ拡大縮小がユーザーの意図しない操作につながる問題。  
  - これに対応する [PR #597](https://github.com/digitaldemocracy2030/kouchou-ai/pull/597) ではオーバーレイを使った回避策が議論されている。

- [Issue #590](https://github.com/digitaldemocracy2030/kouchou-ai/issues/590)  
  - レポーター情報のデフォルト値を空にしたいというリファクタ要望。  
  - 実際のmetadata.jsonとの整合性確認を進行中。

- [Issue #111](https://github.com/digitaldemocracy2030/kouchou-ai/issues/111)  
  - 用語解説ページを作成する提案が継続中。  
  - 「プロンプト」「埋め込み」「クラスタ」などをわかりやすく説明する方法を模索。

- [Issue #19](https://github.com/digitaldemocracy2030/kouchou-ai/issues/19)  
  - レポートの複製・再利用機能。  
  - LLM APIコスト削減や高速化のため、レポート途中からの実行を可能にするアイデアが検討されている。

### 新規/更新されたPull Request

- [PR #605](https://github.com/digitaldemocracy2030/kouchou-ai/pull/605)  
  - [PR #603](https://github.com/digitaldemocracy2030/kouchou-ai/pull/603) のRevertに関する再修正。  
  - CSVダウンロード機能の有効/無効を切り替える仕組みをどう扱うか議論中。

- [PR #597](https://github.com/digitaldemocracy2030/kouchou-ai/pull/597)  
  - 上記 [Issue #493](https://github.com/digitaldemocracy2030/kouchou-ai/issues/493) 対応のため、ScatterChart上へのオーバーレイ実装を検討。  
  - 意図しない操作を防ぐアイデアやUI/UX改善が話題に。

- [PR #591](https://github.com/digitaldemocracy2030/kouchou-ai/pull/591)  
  - Ollamaコンテナの起動方法を修正しようとするもの。  
  - [Issue #587](https://github.com/digitaldemocracy2030/kouchou-ai/issues/587) を参考に、Docker環境の改善が目的。

- [PR #543](https://github.com/digitaldemocracy2030/kouchou-ai/pull/543)  
  - 管理画面のリロードを抑制する修正提案。  
  - 完了レポートやエラーレポートは頻繁にリロードしなくてもよいという要望が背景。まだ調整中。

---

## 参加の呼びかけ

今週はフロントエンドの改善やUI/UX周りの議論が活発に行われています。デザインシステムやCSVダウンロード機能など、まだまだ詰めるべきことが多いので、皆さんの知見やアイデアを大歓迎します。興味を持ったIssueやPRがあれば、ぜひコメントやレビューで開発に参加してみてください。

「広聴AI」は、対話を通じて社会をより良くしていく取り組みです。コードの修正だけでなく、デザイン・文章表現・ユーザー体験などの多様な視点が貢献につながります。みんなでプロジェクトを育てていきましょう。ご参加お待ちしています！