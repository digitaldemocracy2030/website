# 広聴AI 7/30~8/6 のGitHub活動まとめ

「デジタル民主主義2030」が進める「広聴AI」での開発・議論の動きをまとめました。今週は意見グループ数表記の修正をはじめ、ユーザーフォームの改良や自動ビルド機能追加など、さまざまな改善が加わっています。ぜひ開発に興味を持って参加していただけると嬉しいです。

---

## 今週完了した内容

### 今週クローズされたIssue

- [Issue #687](https://github.com/digitaldemocracy2030/kouchou-ai/issues/687) (作成: shgtkshruch)  
  - レポート管理画面の意見グループ数表記を、実際の最終値に合わせる形で修正。  
  - 新機能としては地味に見えますが、開発者視点では誤集計を防ぐ大切な修正です。

- [Issue #640](https://github.com/digitaldemocracy2030/kouchou-ai/issues/640) (作成: nishio)  
  - 設定フォームのバリデーションが早すぎて入力しづらかった問題を解消。  
  - [PR #677](https://github.com/digitaldemocracy2030/kouchou-ai/pull/677) でonBlurに切り替わり、ユーザー体験が向上しました。

- [Issue #594](https://github.com/digitaldemocracy2030/kouchou-ai/issues/594) (作成: shingo-ohki)  
  - .envファイルを変更した際にDocker buildを忘れがちになる問題。  
  - [PR #675](https://github.com/digitaldemocracy2030/kouchou-ai/pull/675) により自動検知システムが追加され、再ビルド漏れを防止。  

### 今週マージされたPull Request

- [PR #691](https://github.com/digitaldemocracy2030/kouchou-ai/pull/691) (作者: noritaka1166)  
  - 不要なアサーション削除や未使用importの整理を行う小規模リファクタリング。  
  - コードベースのメンテナンスに重要な貢献です。

- [PR #689](https://github.com/digitaldemocracy2030/kouchou-ai/pull/689) (作者: shgtkshruch)  
  - [Issue #687](https://github.com/digitaldemocracy2030/kouchou-ai/issues/687) に対応し、意見グループ数表記の不整合を修正。  

- [PR #686](https://github.com/digitaldemocracy2030/kouchou-ai/pull/686) (作者: noritaka1166)  
  - UUIDライブラリを撤廃し、ネイティブのcrypto.randomUUIDへ一本化。  
  - 不要な外部依存を減らし、保守性を向上させました。

- [PR #684](https://github.com/digitaldemocracy2030/kouchou-ai/pull/684) (作者: ttizze)  
  - 静的エクスポートを行う際に、公開状態のレポートが必要な旨をドキュメントへ追記。  
  - 新規ユーザーでも効率よくデプロイできるように情報を整備。

- [PR #677](https://github.com/digitaldemocracy2030/kouchou-ai/pull/677) (作者: mochizuki-pg)  
  - [Issue #640](https://github.com/digitaldemocracy2030/kouchou-ai/issues/640) の解決策で、onChangeバリデーションをonBlurに変更。  
  - ユーザーが入力しやすくなりました。

- [PR #676](https://github.com/digitaldemocracy2030/kouchou-ai/pull/676) (作者: shgtkshruch)  
  - レポート作成のAPIキーがブラウザに露出していた問題をServer Functions対応で解決。  
  - セキュリティの向上に直結する実装です。

- [PR #675](https://github.com/digitaldemocracy2030/kouchou-ai/pull/675) (作者: 101ta28)  
  - [Issue #594](https://github.com/digitaldemocracy2030/kouchou-ai/issues/594) 改善で、.env変更を検知して再ビルドを促す仕組みをMakefileに追加。  
  - 開発環境をより安全かつ便利に整備。

---

## 未完了タスク・継続中の議論

新機能やバグ修正を提案した兼ね合いで、まだ結論が出ていないイシューやプルリクがあります。気になるトピックがあれば、ぜひコメントや追加実装で参加してみてください。

### 継続中のIssue

- [Issue #690](https://github.com/digitaldemocracy2030/kouchou-ai/issues/690)  
  - ts-node-devの作者がメンテ不要と案内しているためパッケージを切り替えるかの議論。  
  - nodemonやtsxへの置き換えが話題に挙がっています。

- [Issue #685](https://github.com/digitaldemocracy2030/kouchou-ai/issues/685)  
  - HTTPアクセス時にJavaScriptエラーやCSP違反が起きるバグ。  
  - crypto.randomUUIDが使えないセキュリティ問題など、まだ議論が必要です。

- [Issue #683](https://github.com/digitaldemocracy2030/kouchou-ai/issues/683)  
  - 公開レポートがない状態で静的ファイル出力するとエラーになる問題。  
  - 「適切なエラーを表示するか」「公開状態でなくてもエクスポートするか」など仕様検討中。

- [Issue #682](https://github.com/digitaldemocracy2030/kouchou-ai/issues/682)  
  - mainブランチへのマージ時、Azure環境へのデプロイが失敗する。  
  - ワークフローの設定やAzureサブスクリプションの扱いが焦点。

- [Issue #441](https://github.com/digitaldemocracy2030/kouchou-ai/issues/441)  
  - ヘッダーにプロダクト名「広聴AI」を表示する検討。  
  - 「part of project デジタル民主主義2030」といった表記をどうするか議論中。

- [Issue #111](https://github.com/digitaldemocracy2030/kouchou-ai/issues/111)  
  - 「プロンプト」「埋め込み」など用語解説ページを作成の提案。  
  - 初心者フレンドリーなドキュメント整備として需要がありそう。

### 継続中のPull Request

- [PR #688](https://github.com/digitaldemocracy2030/kouchou-ai/pull/688) (作者: shingo-ohki)  
  - Azure Deploy 時の環境変数不足を修正するワークフロー追加。  
  - [Issue #682](https://github.com/digitaldemocracy2030/kouchou-ai/issues/682) が背景。現在動作テスト中。

- [PR #660](https://github.com/digitaldemocracy2030/kouchou-ai/pull/660) (作者: Shingo Ohki+Devin)  
  - OpenAI / OpenRouter のAPIキーをフォーム入力で扱えるようにする大規模変更。  
  - Token使用量トラッキングの修正や関数シグネチャ更新も含み、レビュー中。

- [PR #653](https://github.com/digitaldemocracy2030/kouchou-ai/pull/653) (作者: noritaka1166)  
  - jestをv29からv30へアップデートするPR。  
  - 一部パッケージのバージョン相性に課題があるらしく、対応検討中。

---

## コミュニティへの呼びかけ
- まだコードを書いたことがない方も、Issueにコメントするだけでも立派なコントリビューションです。
- 「デジタル民主主義2030」全体の円滑な運用・改善のために、みなさんの多様な視点を歓迎します！
- 興味があるIssueやPull Requestがあればぜひ参加してください。分からないことは遠慮なく質問しましょう。  

今後も定期的に更新していきます。気軽にコメント・PRで参加してくださいね。  