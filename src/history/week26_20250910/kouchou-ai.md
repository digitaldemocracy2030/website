# 広聴AI 9/3〜9/10 のGitHub活動まとめ

今週の広聴AIリポジトリ（https://github.com/digitaldemocracy2030/kouchou-ai）での活動をまとめました。コミュニティの皆さんにとって新機能や今後のタスクがわかりやすくなるよう、完了したものからご紹介していきます。

---

## 今週完了したタスク

### 1. [Issue #702](https://github.com/digitaldemocracy2030/kouchou-ai/issues/702) ([REFACTOR] client-admin: lint error が出ている)
- 作成者: shingo-ohki
- 内容: client-adminで発生していたLintエラーの修正が必要というIssueでした。  
- クローズ理由: 後述の[PR #703](https://github.com/digitaldemocracy2030/kouchou-ai/pull/703)がマージされ、解決済みとなりました。

### 2. [PR #703](https://github.com/digitaldemocracy2030/kouchou-ai/pull/703) (fix: client-admin lint error)
- 作成者: shingo-ohki  
- 関連Issue: [Issue #702](https://github.com/digitaldemocracy2030/kouchou-ai/issues/702)  
- 変更点: 
  - client-adminでのlintエラーを修正し、`validation.test.ts`系のテストが問題なく動作するよう対応。
  - 開発者にとってはlintやテストがクリーンになることでローカル開発がより快適に行えます。  
- この修正を行ったshingo-ohkiさんの貢献により、client-admin側のコードが整理され、ほかの開発作業もしやすくなりました。

---

## まだ進行中のタスク・議論

ここからは、今後の開発や議論を盛り上げるために、現在オープンなIssueやPRをご紹介します。気になるものがあれば、ぜひ議論やレビューに参加してください！

### 1. Lintエラー・設定周りのタスク
- [Issue #701](https://github.com/digitaldemocracy2030/kouchou-ai/issues/701) ([REFACTOR] client: lint error が出ている)  
  - client側でも同様にLintエラーが多発しています。どういったLintルールが最適か、議論してテストもしながら進めたいタスクです。

- [Issue #700](https://github.com/digitaldemocracy2030/kouchou-ai/issues/700) ([BUG]将来の開発で必要な変更 - TODO)  
  - Biome Linterの設定をどうするか、package.jsonの更新や環境変数の扱いなど、今後まとめて対応したい内容です。  
  - こちらはプロジェクトルートでBiomeを使うOption Aと、client・client-adminごとに導入するOption Bのどちらが良いかなど、意見を交わす場になっています。

- [PR #704](https://github.com/digitaldemocracy2030/kouchou-ai/pull/704) (Fix remaining lint and test issues after PR #703)  
  - 作成者: NISHIO+Devin  
  - 既存のLintやテストエラーをさらに修正するPRです。  
  - Biome TypeScript lintの細かい修正や、client-adminにおけるJest依存関係の整理が行われています。  
  - 興味のある方はレビューやテスト環境での動作確認をお願いします。

### 2. 新機能・UI周り

- [Issue #111](https://github.com/digitaldemocracy2030/kouchou-ai/issues/111) ([FEATURE]用語解説ページをつける)  
  - 「埋め込み」「クラスタ」など専門用語が多いため、用語解説ページをつけてわかりやすくしようという提案です。
  - このIssueがきっかけで、次のPR #699が立ち上がっています。

- [PR #699](https://github.com/digitaldemocracy2030/kouchou-ai/pull/699) ([client] 用語解説ページとグローバルナビゲーションを追加)  
  - 作成者: shgtkshruch  
  - 用語解説ページを新設し、ヘッダーにグローバルナビゲーションを導入しています。  
  - UIが大きく変わるPRなので、興味を持っていただいた方は表示を実際に試してみてフィードバックしてください。

### 3. AI機能拡張

- [PR #698](https://github.com/digitaldemocracy2030/kouchou-ai/pull/698) ([FEATURE] Gemini を利用してレポート生成できるようにする)  
  - 作成者: AkioPonkotu  
  - Google Gemini APIを使ったレポート生成をサポートするPRです。AIプロバイダにGeminiを追加し、トークン使用量・料金も計算できるようにしています。
  - [Issue #634](https://github.com/digitaldemocracy2030/kouchou-ai/issues/634) がベースになっており、環境変数やセットアップドキュメントを更新するため、導入に興味のある方の協力が求められています。

---

## 参加の呼びかけ

- コードを触らなくても、IssueやPRのコメントでのフィードバックや提案は大歓迎です。  
- ドキュメントの修正や、UIデザインの意見、翻訳協力など、多様な貢献の形があります。  
- 興味を持ったタスクがあればぜひIssueで質問や議論を始めてみてください！

「こんな機能が欲しい」「ここがわかりづらい」など、ユーザー目線の声も大変助かります。OSSに参加したことのない方も気軽にご参加ください。一緒に広聴AIをより使いやすいものに育てていきましょう。