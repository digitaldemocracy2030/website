# 広聴AI 7/23~7/30 のGitHub活動まとめ

今週(2025-07-23～2025-07-30)は、既存機能の改良やUI/UX向上に関するIssue/PRがいくつか完了しました。また、新たに提案・議論中のIssueやPRも増えています。以下に完了内容と議論中のトピックをご紹介します。

---

## 今週完了した主な内容

### 完了したIssue
- [Issue #673](https://github.com/digitaldemocracy2030/kouchou-ai/issues/673) (作成者: shingo-ohki)  
  → 使われていないカテゴリー分類処理が確認され、今後不要との結論に至ったため削除しました。  
- [Issue #617](https://github.com/digitaldemocracy2030/kouchou-ai/issues/617) (作成者: shingo-ohki)  
  → 意見グループを意見数の降順で表示する機能が追加され、編集・閲覧のしやすさが向上しました。  
- [Issue #475](https://github.com/digitaldemocracy2030/kouchou-ai/issues/475) (作成者: tokoroten)  
  → env変数USE_AZUREのフラグを外し、LLMプロバイダ切り替えの仕様をシンプル化しました。  
- [Issue #267](https://github.com/digitaldemocracy2030/kouchou-ai/issues/267) (作成者: shgtkshruch)  
  → 全画面表示のフォーカストラップ問題を解消し、モーダルダイアログとしてより適切に実装されました。

### マージ済みPull Request
- [PR #680](https://github.com/digitaldemocracy2030/kouchou-ai/pull/680) (作者: dependabot[bot])  
  → 依存ライブラリ(form-data)のバージョンアップ。セキュリティや安定性向上に貢献。  
- [PR #678](https://github.com/digitaldemocracy2030/kouchou-ai/pull/678) (作者: shingo-ohki)  
  → 不要となったカテゴリー分類処理を削除。Issue #673対応の実装です。  
- [PR #674](https://github.com/digitaldemocracy2030/kouchou-ai/pull/674) (作者: shgtkshruch)  
  → 意見グループの並び替えを意見数の降順に変更。Issue #617対応の実装です。  
- [PR #672](https://github.com/digitaldemocracy2030/kouchou-ai/pull/672) (作者: mochizuki-pg)  
  → 全画面表示をChakra UIのDialogで実装し直し、フォーカストラップの問題を解決。Issue #267対応です。  
- [PR #671](https://github.com/digitaldemocracy2030/kouchou-ai/pull/671) (作者: mochizuki-pg)  
  → USE_AZUREフラグを剥がしてコードを整理。Issue #475対応です。  
- [PR #670](https://github.com/digitaldemocracy2030/kouchou-ai/pull/670) (作者: dependabot[bot])  
  → client-admin側のform-dataをバージョンアップし、脆弱性対応。  
- [PR #668](https://github.com/digitaldemocracy2030/kouchou-ai/pull/668) (作者: shgtkshruch)  
  → 管理画面の意見グループ編集時にServer Functionsを導入し、APIキー非公開化を強化。  
- [PR #642](https://github.com/digitaldemocracy2030/kouchou-ai/pull/642) (作者: shingo-ohki)  
  → mainブランチにマージ時、Azure環境へ自動デプロイするGitHub Actionsを追加。Issue [#622](https://github.com/digitaldemocracy2030/kouchou-ai/issues/622)にも関連。

---

## 未完了のタスク・議論中の内容

### 新規作成・オープンなIssues
- [Issue #682](https://github.com/digitaldemocracy2030/kouchou-ai/issues/682) (作者: shingo-ohki)  
  → mainブランチにマージ時のAzureデプロイが失敗する不具合報告。デプロイ先サブスクリプションの設定問題か調査中。  
- [Issue #681](https://github.com/digitaldemocracy2030/kouchou-ai/issues/681) (作者: shingo-ohki)  
  → “API接続チェック機能”をユーザー入力APIキーに対しても行えるように改善要望。  
- [Issue #679](https://github.com/digitaldemocracy2030/kouchou-ai/issues/679) (作者: shingo-ohki)  
  → 「任意のカテゴリーで分類できる機能があったら便利」という要望。旧Talk to the City由来機能の再実装議論中。

### 更新があった既存Issues
- [Issue #640](https://github.com/digitaldemocracy2030/kouchou-ai/issues/640) (作者: nishio)  
  → onChangeの自動修正が入力の妨げになる問題が議論され、onBlurへ切り替える改善（PR #677）が提案されました。  
- [Issue #638](https://github.com/digitaldemocracy2030/kouchou-ai/issues/638) (作者: nishio)  
  → “濃い意見ビューワ”のラベル表示被り問題。適切な配置や視認性向上策を引き続き模索中。  
- [Issue #622](https://github.com/digitaldemocracy2030/kouchou-ai/issues/622) (作者: shingo-ohki)  
  → Azure上に動作確認・デモ環境を作る提案。既に[PR #642](https://github.com/digitaldemocracy2030/kouchou-ai/pull/642)で進捗あるも、デモ向け機能強化が検討中。  
- [Issue #594](https://github.com/digitaldemocracy2030/kouchou-ai/issues/594) (作者: shingo-ohki)  
  → .env更新時にDocker buildを忘れやすい問題。「Makefileで自動検知」が[PR #675](https://github.com/digitaldemocracy2030/kouchou-ai/pull/675)で提案。

### 未マージのPull Requestや継続的な議論
- [PR #677](https://github.com/digitaldemocracy2030/kouchou-ai/pull/677) (作者: mochizuki-pg)  
  → [Issue #640](https://github.com/digitaldemocracy2030/kouchou-ai/issues/640)対応。クラスタ数入力のバリデーション発火タイミングをonBlurに変更する提案。  
- [PR #676](https://github.com/digitaldemocracy2030/kouchou-ai/pull/676) (作者: shgtkshruch)  
  → レポート作成リクエストをServer Functions化。APIキーがブラウザに露出しないよう改善を検討中。  
- [PR #675](https://github.com/digitaldemocracy2030/kouchou-ai/pull/675) (作者: 101ta28)  
  → .env差分を自動検知してビルドを促すMakefile改善。Issue [#594](https://github.com/digitaldemocracy2030/kouchou-ai/issues/594)対応案。  
- [PR #667](https://github.com/digitaldemocracy2030/kouchou-ai/pull/667) (作者: NISHIO+Devin)  
  → Windows環境下でのDockerビルド失敗を修正する実験的PR。PyTorchインストール時のオプション周りがテーマ。  
- [PR #660](https://github.com/digitaldemocracy2030/kouchou-ai/pull/660) (作者: Shingo Ohki+Devin)  
  → OpenAIやOpenRouter向けのAPIキーをフォームから入力・管理できるようにする大規模改修案。  
- [PR #481](https://github.com/digitaldemocracy2030/kouchou-ai/pull/481) (作者: tokoroten, WIP)  
  → 軸情報をLLMで推定し可視化する実験的機能。設計が未確定のため保留中。

---

## 参加の呼びかけ
今週は不要機能の整理やUI改善を中心に多くのPRがマージされました。一方、APIキー管理の方法やデプロイ失敗の調査といった話題も活発に議論されています。興味がある方はぜひIssueやPRでディスカッションに参加し、新しい機能提案やコード貢献をお待ちしています。

以上が今週の広聴AI GitHub活動まとめです。皆さまのコントリビュートをお待ちしています！