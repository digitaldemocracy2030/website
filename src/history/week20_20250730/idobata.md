# いどばたシステム 7/23~7/30のGitHub活動まとめ

みなさん、こんにちは！今週の「いどばたシステム(digitaldemocracy2030/idobata)」のGitHub活動状況をお知らせします。新機能の追加やデザイン改善が盛りだくさんです。興味がわいたらぜひリポジトリをチェックしてみてください！

---

## 今週完了したタスク（マージ済みのPR）

以下の7件のPRがマージされ、機能やデザインがアップデートされました。

1. [PR #439](https://github.com/digitaldemocracy2030/idobata/pull/439) Feature/header link  
   - 作者: jujunjun110  
   - ヘッダーの挙動を微修正し、デザイン面がより洗練されました。メニューへのアクセスがしやすくなり、全体のUIがスムーズにまとまっています。

2. [PR #438](https://github.com/digitaldemocracy2030/idobata/pull/438) Feature/footers  
   - 作者: jujunjun110  
   - ウタコデザインを適用した美しいフッターを実装。デスクトップ/モバイルの両方で統一感のあるデザインを提供します。

3. [PR #437](https://github.com/digitaldemocracy2030/idobata/pull/437) Revert "Feature/footers"  
   - 作者: jujunjun110  
   - 誤ってメインブランチへマージしてしまった変更をリバート(取り消し)したものです。間違いに気づき、素早く修正してくれました。

4. [PR #436](https://github.com/digitaldemocracy2030/idobata/pull/436) Feature/footers  
   - 作者: jujunjun110  
   - 上記PR(#437)でリバートしたフッター機能を再度正しくマージし直し。ウタコデザインを改めて実装・整備しました。

5. [PR #435](https://github.com/digitaldemocracy2030/idobata/pull/435) Feature/hamburger sheet UI  
   - 作者: jujunjun110  
   - スマホ向けハンバーガーメニューのUIをウタコデザインに刷新。より直感的に操作できるメニューへと改善されています。

6. [PR #433](https://github.com/digitaldemocracy2030/idobata/pull/433) Feature/header v1  
   - 作者: jujunjun110  
   - ヘッダーのビジュアルをウタコデザインで初期バージョンとして実装。サイト全体の統一感が高まりました。

7. [PR #430](https://github.com/digitaldemocracy2030/idobata/pull/430) Add environment variable to disable chat in policy-edit frontend  
   - 作者: Shutaro+Devin  
   - 環境変数「VITE_DISABLE_CHAT」を追加し、チャット機能を丸ごと非表示に切り替えられるようになりました。チャット不要なケースや画面を広く使いたい場合に便利です。

---

## 未完了のタスク・議論中の話題

現時点でまだマージされていないPRや、議論が続いているPRです。興味のある方はぜひコメントやレビューをお寄せください！

1. [PR #440](https://github.com/digitaldemocracy2030/idobata/pull/440) implement idobata vision top page for v1  
   - 作者: spinute  
   - いどばたビジョンのUIをv1版として洗練しつつトップページを実装中。機能が一通り動く段階まで実装されていますが、並び替えやヘルプなど細かい部分の実装がまだ残っています。

2. [PR #434](https://github.com/digitaldemocracy2030/idobata/pull/434) Feature/hamburger sheet  
   - 作者: jujunjun110  
   - スマホ用ハンバーガーメニューを追加する大きな変更（なんとファイル変更数482！）。UIのブラッシュアップやバグ修正など、まだいろいろな調整が検討されています。

3. [PR #432](https://github.com/digitaldemocracy2030/idobata/pull/432) import_comments.pyのエンドポイント修正  
   - 作者: nishidashib  
   - テストデータのアップロードに使うスクリプトのエンドポイント変数の誤りを修正した小さなPR。これによりデータインポートが正しく動作するようになります。

4. [PR #429](https://github.com/digitaldemocracy2030/idobata/pull/429) Implement direct octokit calls bypassing MCP server  
   - 作者: kuboon+Devin  
   - 従来MCPサーバ経由で行っていたGitHub API呼び出しを直接Octokitで実行するチャット連携ロジックへの大幅リファクタリング。ビルドやデプロイ面への影響が大きく慎重なテストが必要とされています。

---

## 参加方法のご案内

開発に参加してみたい！と思った方は、ぜひ以下のステップでコントリビュートしてください。

- リポジトリをフォークしてローカルで開発  
- プルリクエスト（PR）を作成しレビューを依頼  
- 新機能や改善アイデア、ドキュメント修正など何でも歓迎  

多様なメンバーの意見やコントリビュートがこのプロジェクトの原動力です。気になる箇所やわからない点があればIssuesやPRにどんどんコメントしてください。これからも一緒に「いどばたシステム」を育てていきましょう！  