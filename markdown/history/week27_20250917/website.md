# デジタル民主主義WEB 9/10~9/17 のGitHub活動まとめ

この1週間(2025-09-10〜2025-09-17)での「デジタル民主主義WEB」リポジトリのGitHub活動をまとめました。新しく入った機能や、現在進行中の議論のポイントを紹介します。OSS開発に興味がある方は、ぜひ一度リポジトリを覗いてみてください！

---

## 今週完了したタスク

### [PR #169](https://github.com/digitaldemocracy2030/website/pull/169)「Week26 Summary Update」
- 作成者: GitHub Actions(自動生成)  
- 変更内容: Webサイトの「週次サマリー(Week26)」を自動で更新する機能です。  
  - 大きな改修ではありませんが、自動化ワークフローが正常に動いていることを確認する上でも重要なPRでした。  
  - 「bot」による作成ですが、プロジェクトで用意した仕組みがうまく動いている証拠です。

---

## 現在進行中のタスク・議論

### [Issue #170](https://github.com/digitaldemocracy2030/website/issues/170)「毎週のプロジェクトの活動状況の更新処理を移管する」
- 作成者: shingo-ohki  
- 概要: 現在、「毎週の活動まとめ」を生成する仕組みが外部リポジトリ(oss_weekly_reporter)とSlackアプリに依存しています。  
  - 今後は「個人の契約しているLLM APIやSlackアプリ」に頼らず、プロジェクトのリポジトリ上で安全かつ継続的に動かせるようにしたいという提案です。  
  - SlackのFreeプラン制限やAPIキーの管理方法、ページのデザイン(/historyと/activityの使い分けの整理)など、複数の観点で協議中です。
- 現状の議論ポイント:  
  - SlackのAPIキーをどう発行・管理するか(個人依存の解消が最大の狙い)。  
  - 既存のスクリプト([PR #166](https://github.com/digitaldemocracy2030/website/pull/166))をどのようにアップデートして、プロジェクト側に移管するか。  
  - もともと計画していた「毎週の活動紹介」ページ([Issue #9](https://github.com/digitaldemocracy2030/website/issues/9))との位置付けやページURL(/history と /activity)の統合方針。

#### 参加メンバー
- shingo-ohki  
- kuboon  
- NISHIO Hirokazu  
- 他、コミッター・コミュニティメンバー数名  

各々の視点を出し合いながら、最適な移管方法を模索しています。どこから手をつければよいか迷う方は、[Issue #170](https://github.com/digitaldemocracy2030/website/issues/170)を覗いてみてください。

---

## 参加の呼びかけ

- ちょっとした文言修正や、ワークフローの改善など、小さなPRでも大歓迎です。  
- SlackのAPIやLLMとの連携に興味がある方は、[Issue #170](https://github.com/digitaldemocracy2030/website/issues/170)の議論にぜひ参加してください。  

今後も自動更新の仕組みを強化しつつ、プロジェクト参加者にもわかりやすい情報提供を目指していきます。皆さまのご協力とご意見をお待ちしています。  