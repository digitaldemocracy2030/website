# 広聴AI 8/13~8/20 のGitHub活動まとめ

今週はドキュメント修正や新機能のUI改善など、ユーザーにとってわかりやすいアップデートがいくつか完了しました。一方で、いくつかのバグや新機能については継続的に議論や改善が進んでいます。以下にまとめますので、興味を持った方はぜひリポジトリをチェックしてみてください。

---

## 完了したIssue
今週クローズされたIssueは3件あり、ドキュメント改善やフォームからのAPI KEY入力など、ユーザーがより使いやすくなる変更が中心でした。

- [Issue #693](https://github.com/digitaldemocracy2030/kouchou-ai/issues/693)  
  - GitHub Pagesでうまく表示できない問題を解決するため、`.nojekyll`ファイルをコピーする方法をドキュメントに反映しました。  
  - 作者: yuneko1127 さんが提案・修正。  
  - 完了にあわせて、[PR #694](https://github.com/digitaldemocracy2030/kouchou-ai/pull/694) がマージされました。

- [Issue #633](https://github.com/digitaldemocracy2030/kouchou-ai/issues/633)  
  - フォームから受け付けたAPI KEYでレポートを生成できる機能を実装しました。  
  - 作者: shingo-ohki さん。  
  - ユーザー自身のAPI KEYを使い、費用負担を自由に選べるようになったのが大きなポイントです。  
  - 実装貢献は、Shingo Ohki+Devin による [PR #660](https://github.com/digitaldemocracy2030/kouchou-ai/pull/660) で完了しました。

- [Issue #441](https://github.com/digitaldemocracy2030/kouchou-ai/issues/441)  
  - ヘッダーに「広聴AI」のプロダクト名を表示し、プロジェクト名「デジタル民主主義2030」と区別しやすくしました。  
  - 作者: UtkNggc さん。  
  - [PR #695](https://github.com/digitaldemocracy2030/kouchou-ai/pull/695) による実装で完了しています。

---

## マージされたPull Request
今週は上記のIssue解決に関連して3件のPRがマージされました。ドキュメント修正と新機能追加、UI変更の3つが中心です。

1. [PR #695](https://github.com/digitaldemocracy2030/kouchou-ai/pull/695)  
   - タイトル: [FEATURE] headerにプロダクト名を表示する  
   - 作者: mochizuki-pg さん  
   - Issue連携: [Issue #441](https://github.com/digitaldemocracy2030/kouchou-ai/issues/441)  
   - ヘッダーのロゴ表示を調整して、プロダクト名「広聴AI」を明確に表示。SP（スマホ）用のロゴ分岐にも対応。

2. [PR #694](https://github.com/digitaldemocracy2030/kouchou-ai/pull/694)  
   - タイトル: docs: ビルド結果コピー時にドットファイルも含めるよう修正  
   - 作者: yuneko1127 さん  
   - Issue連携: [Issue #693](https://github.com/digitaldemocracy2030/kouchou-ai/issues/693)  
   - `.nojekyll`ファイルも正しくコピーされるようになり、GitHub Pagesでの静的ホスティングがスムーズに。

3. [PR #660](https://github.com/digitaldemocracy2030/kouchou-ai/pull/660)  
   - タイトル: OpenAI, OpenRouter の API KEY をフォームから入力してレポートを作成できるようにする  
   - 作者: Shingo Ohki+Devin  
   - Issue連携: [Issue #633](https://github.com/digitaldemocracy2030/kouchou-ai/issues/633)  
   - フォーム入力されたAPI KEYでレポート生成ができるように機能拡張が行われました。

---

## 議論中のIssue
まだ未完了のIssueでは、バグの修正方針や機能追加の仕様について活発に議論が進んでいます。以下のIssueでは、みなさんの意見や技術的なアイデアを募集中です。

- [Issue #683](https://github.com/digitaldemocracy2030/kouchou-ai/issues/683)  
  - 静的ファイルの出力時に公開レポートがないとエラーが起きるバグについて、エラー文言の改善や仕様検討中。  

- [Issue #631](https://github.com/digitaldemocracy2030/kouchou-ai/issues/631)  
  - Azure Build時に警告が出る問題。ビルドプロセスにおける環境変数の扱いが議題になっています。  

- [Issue #622](https://github.com/digitaldemocracy2030/kouchou-ai/issues/622)  
  - Azure上に誰でもアクセスできるデモ環境を作る構想。動作確認をしやすくすることで、非エンジニアの参加を促すことが目的。  
  - すでにサブタスクとして #633 や #688 などが関連しており、今後も拡張予定。  

- [Issue #111](https://github.com/digitaldemocracy2030/kouchou-ai/issues/111)  
  - 「プロンプト」「埋め込み」「クラスタ」など、専門用語がわかりにくいという声を受けて用語解説ページを追加する提案。  

これらのIssueはどれもプロジェクトの改善につながる重要なトピックです。経験豊富な方はもちろん、「ちょっと触ってみたい」という方もぜひコメントや提案をお寄せください。

---

## 参加の呼びかけ
広聴AIプロジェクトは、多様なバックグラウンドの方々が参加しやすい環境づくりを目指しています。  
- バグ報告  
- 機能提案  
- ドキュメント修正  
- UIデザイン  
など、どんな形でも貢献歓迎です。興味を持たれた方はぜひ [リポジトリ](https://github.com/digitaldemocracy2030/kouchou-ai) を訪れて、新しいIssueやPull Requestにチャレンジしてください！