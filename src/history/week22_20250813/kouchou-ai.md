# 広聴AI 8/6~8/13 のGitHub活動まとめ

コミュニティの皆さん、こんにちは！ 今週（2025-08-06 ～ 2025-08-13）に行われた「広聴AI」のGitHub活動をまとめました。新機能やドキュメント修正、バグ修正など、活発に開発が進んでいます。ぜひ気になるトピックや未完了タスクに参加してみてください。

---

## 今週完了したもの

### 完了したIssue

- [Issue #633](https://github.com/digitaldemocracy2030/kouchou-ai/issues/633)  
  作成者: shingo-ohki  
  ユーザーがフォームからAPI KEYを入力してレポート生成をできる仕組みを提案し、フロントエンドとサーバー両面を実装する内容。これによって、ユーザーが自分のOpenAIやOpenRouterのAPI KEYを使いつつレポートを作成できるようになりました。

- [Issue #587](https://github.com/digitaldemocracy2030/kouchou-ai/issues/587)  
  作成者: dentaro  
  「ローカル LLM の使用時にdocker composeコマンドが通らない」というドキュメント上の問題の修正。WindowsやMacでもきちんと動作確認できるようにするための修正提案が受け入れられました。

### マージされたPR

- [PR #691](https://github.com/digitaldemocracy2030/kouchou-ai/pull/691)  
  作成者: noritaka1166  
  不要なアサーションや未使用のimportを削除するリファクタリング。コードの見通しがよくなりました。

- [PR #660](https://github.com/digitaldemocracy2030/kouchou-ai/pull/660)  
  作成者: Shingo Ohki+Devin  
  [Issue #633](https://github.com/digitaldemocracy2030/kouchou-ai/issues/633)の提案に沿い、OpenAIやOpenRouterのAPI KEYをフォーム入力で受け取り、サーバー側へ送ってレポートを生成できるようにする改修です。ユーザーが自身の費用負担でAIを利用できるようになりました。

- [PR #627](https://github.com/digitaldemocracy2030/kouchou-ai/pull/627)  
  作成者: shingo-ohki  
  GPUの有無に合わせて適切なPyTorchを導入する処理の修正。以前[Issue #442](https://github.com/digitaldemocracy2030/kouchou-ai/issues/442)で対応したのが一部足りなかったため再修正されています。

- [PR #591](https://github.com/digitaldemocracy2030/kouchou-ai/pull/591)  
  作成者: shingo-ohki  
  [Issue #587](https://github.com/digitaldemocracy2030/kouchou-ai/issues/587)の対応として、ollamaコンテナの起動方法に誤りがあったのを修正しています。ローカル環境でLLMを利用したい方にとって重要な改修です。

---

## まだ完了していないタスク・議論中のトピック

### 未完了のIssue

- [Issue #622](https://github.com/digitaldemocracy2030/kouchou-ai/issues/622)  
  作成者: shingo-ohki  
  「Azure に動作確認・デモ用の環境を用意する」タスク。すでに一部(#642, [Issue #633](https://github.com/digitaldemocracy2030/kouchou-ai/issues/633))は完了していますが、「client-adminのパスワードなしアクセス」や「dd2030.orgドメインへのデプロイ」などはまだ検討中です。

- [Issue #111](https://github.com/digitaldemocracy2030/kouchou-ai/issues/111)  
  作成者: nishio  
  「用語解説ページを作成する」という要望。プロンプト、埋め込み、クラスタなど、AI特有の用語をわかりやすく説明できるようにするための提案です。新規参加者の学びをサポートする上でも重要な機能となりそうです。

- [Issue #692](https://github.com/digitaldemocracy2030/kouchou-ai/issues/692)  
  作成者: yuneko1127  
  ハイフンで終わるIDを入力した場合のエラー表示をわかりやすくしてほしいという提案。UI/UX向上を狙ったIssueです。

- [Issue #693](https://github.com/digitaldemocracy2030/kouchou-ai/issues/693)  
  作成者: yuneko1127  
  ビルド結果をコピーする際に、.nojekyllファイルなどのドットファイルがコピーされず、GitHub Pagesで表示が崩れる問題を修正する提案。実際にPR #694としてドキュメント修正が行われています。

### オープンなPR

- [PR #694](https://github.com/digitaldemocracy2030/kouchou-ai/pull/694)  
  作成者: yuneko1127  
  [Issue #693](https://github.com/digitaldemocracy2030/kouchou-ai/issues/693)に対応したドキュメント修正。ビルド結果コピー時にドットファイル(.nojekyllなど)が含まれるようにコマンドを変更しています。

- [PR #689](https://github.com/digitaldemocracy2030/kouchou-ai/pull/689)  
  作成者: shgtkshruch  
  [Issue #687](https://github.com/digitaldemocracy2030/kouchou-ai/issues/687)への対応。管理画面の意見グループ数の表示を、正しい集計基準（分析UI左側で見える数値）へ修正する対応です。データの整合性確保のため、議論中です。

- [PR #675](https://github.com/digitaldemocracy2030/kouchou-ai/pull/675)  
  作成者: 101ta28  
  [Issue #594](https://github.com/digitaldemocracy2030/kouchou-ai/issues/594)対応として、Makefileで.envファイルの変更を自動チェックし再ビルドする仕組みの提案。ローカル開発者にとって効率を上げる可能性があり、Azure環境での確認が必要とされています。

---

## 参加の呼びかけ

- まだ解決していないIssue ([Issue #622](https://github.com/digitaldemocracy2030/kouchou-ai/issues/622), [Issue #111](https://github.com/digitaldemocracy2030/kouchou-ai/issues/111), [Issue #692](https://github.com/digitaldemocracy2030/kouchou-ai/issues/692), [Issue #693](https://github.com/digitaldemocracy2030/kouchou-ai/issues/693)) や、オープンなPR ([PR #694](https://github.com/digitaldemocracy2030/kouchou-ai/pull/694), [PR #689](https://github.com/digitaldemocracy2030/kouchou-ai/pull/689), [PR #675](https://github.com/digitaldemocracy2030/kouchou-ai/pull/675)) では引き続き議論・実装を募集中です。  
- 新規参加者も歓迎しています。Issueにコメントしてみる、コードを読んでみるなど気軽に始められます。ドキュメント修正やUI改善など、多様な関わり方が可能です。

今後も「広聴AI」の開発を盛り上げていきましょう！ 質問や提案があればお気軽にIssueやPRにコメントしてください。  
ご協力ありがとうございます。  