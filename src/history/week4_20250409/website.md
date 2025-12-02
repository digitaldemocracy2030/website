# デジタル民主主義WEB 第4週（4/2~4/9）のGitHub活動まとめ

今週の取り組みでは、Issueのクローズは無かったものの、Pull Requestが4件マージされ、サイトの機能拡充・改善が着実に進みました。以下に、完了した内容と議論中の未完了タスクを紹介します。

## 今週完了したこと

1. **[PR #14](https://github.com/digitaldemocracy2030/idobata-analyst/pull/14): Fix: Add generateStaticParams function for dynamic routes**  
   - **貢献者:** nishio  
   - **内容:** Next.jsのビルドエラー解消のため、“generateStaticParams()”関数を動的ルート（/activity/[slug]）に追加。Markdownファイルの冒頭が「github」や「slack」で始まるものを自動検出し、静的ページを生成。これによりビルド時のエラーが回避され、安定したビルドフローを実現しました。

2. **[PR #13](https://github.com/digitaldemocracy2030/idobata-analyst/pull/13): fix promise slug & lint**  
   - **貢献者:** nanocloudx  
   - **内容:** コードのpromise関連とLint（コード整形、フォーマット）を修正。大規模な変更量ながら、プロジェクトの可読性向上と安定した開発環境の整備に寄与しました。

3. **[PR #11](https://github.com/digitaldemocracy2030/idobata-analyst/pull/11): 毎週の活動ページを表示する仕組みを作成**  
   - **貢献者:** nishio  
   - **内容:** SlackとGitHubの活動を週ごとにまとめ、Markdownファイルとして管理する仕組みを実装。ダイナミックルーティング（/activity/[slug]）により、コミュニティ活動の閲覧性が向上。トップページへのリンク追加は今後の改善予定です。

4. **[PR #10](https://github.com/digitaldemocracy2030/idobata-analyst/pull/10): Slackへのリンクを無期限にする**  
   - **貢献者:** nishio  
   - **内容:** Slackの招待リンクの有効期限を解除し、常時利用可能に設定。これにより、新規参加者がスムーズにコミュニティに参加できるようになりました。

## まだ議論が続いていること（未完了のタスク）

- **[Issue #12](https://github.com/digitaldemocracy2030/idobata-analyst/issues/12): SEO的に必要なメタタグ等の項目の整理**  
  - **作成者:** rysh  
  - **内容:** Twitterカードやリンク先概要の不足を補い、サイトの基本的な品質向上を目指す提案。SEO、メタタグ、OGPに関する知見を持つ参加者の協力を求めています。

---

参加者・コントリビューターからのアイデアや意見を随時募集しています。皆さんの協力が「デジタル民主主義2030」をより魅力的なプロジェクトにする鍵となります。今後ともよろしくお願いいたします。
