# 広聴AI 7/2~7/9 のGitHub活動まとめ

この1週間(2025-07-02～2025-07-09)の間に、広聴AIリポジトリ(digitaldemocracy2030/kouchou-ai)で行われたIssueやPRの活動まとめです。興味のあるものがあれば、ぜひ各IssueやPRをのぞいてみてください。開発への参加やコメントをお待ちしています。

---

## 今週完了した内容

### 完了したIssue

- [Issue #635](https://github.com/digitaldemocracy2030/kouchou-ai/issues/635)  
  管理画面のレポート一覧で、コメント数や意見数・意見グループ数を表示できるようになりました。  
  - 作成者: shgtkshruch  
  - どんな機能か: 管理画面から各レポートの統計データを一目で把握できるようになります。実際の利用者の方は「このレポートにはどれだけコメントが集まったか」を簡単にチェックできるようになりました。

### マージされたPull Request

1. [PR #636](https://github.com/digitaldemocracy2030/kouchou-ai/pull/636)  
   - 作者: shgtkshruch  
   - 概要: 上記のIssue #635 をクローズするための実装です。API側でコメント数や意見数などをまとめて返すようにしており、管理画面でまとめて表示できるようになりました。
2. [PR #628](https://github.com/digitaldemocracy2030/kouchou-ai/pull/628)  
   - 作者: shgtkshruch  
   - 概要: 管理画面のデザインリニューアルを見越した背景色トークンやアイコンボタンコンポーネントを追加し、UI設計を拡張しました。
3. [PR #626](https://github.com/digitaldemocracy2030/kouchou-ai/pull/626)  
   - 作者: shgtkshruch  
   - 概要: 管理画面のレポート一覧取得を「Server Component」で行うように変更し、APIキーがフロントに露出しないように整理しました。セキュリティが向上しています。
4. [PR #625](https://github.com/digitaldemocracy2030/kouchou-ai/pull/625)  
   - 作者: shgtkshruch  
   - 概要: 「AIサービスとの接続をチェックする」ダイアログ機能を追加し、レポート作成前に正しくAPIを利用できるかどうかを確認できるようになりました。APIキーの有効性や残高不足などのチェックが行えます。

---

## 未完了のタスク・議論中のIssue

今週新たに作成されたIssueや、まだオープンなまま更新が行われたIssueを紹介します。興味のある方はぜひコメントや議論に参加してみてください。

### 新たに作成されたIssue（9件）

1. [Issue #643](https://github.com/digitaldemocracy2030/kouchou-ai/issues/643) (作者: coderabbitai[bot] → 「Coderabbit + AI」)  
   Docker build時のシークレット渡し方法を改善する提案です。将来的なセキュリティ強化に向け、BuildKitやaz acr build --secret-argを活用する案が出ています。  
2. [Issue #641](https://github.com/digitaldemocracy2030/kouchou-ai/issues/641) (作者: nishio)  
   レポートが完成したら通知が出るようにしたいという機能提案です。主にMacでのサンプルコードが提示されており、Windows対応はどうするかが議論のポイントになりそうです。  
3. [Issue #640](https://github.com/digitaldemocracy2030/kouchou-ai/issues/640) (作者: nishio)  
   入力フォームのonChangeイベントで自動修正すると、ユーザの入力が途中で修正されてしまう問題を指摘。onBlurなどのほうが自然かもしれない、という議論がありそうです。  
4. [Issue #639](https://github.com/digitaldemocracy2030/kouchou-ai/issues/639) (作者: nishio)  
   CSVをD&Dしたときに、空欄ならタイトルにファイル名を自動で入れてほしいという要望です。複数ファイルを扱う際に便利になる機能です。  
5. [Issue #638](https://github.com/digitaldemocracy2030/kouchou-ai/issues/638) (作者: nishio)  
   「濃い意見ビュー」改善案。データ点群の可視化とラベル表示が重なり見辛いという問題を解決するため、UI/UXの工夫が提案されています。  
6. [Issue #634](https://github.com/digitaldemocracy2030/kouchou-ai/issues/634) (作者: shingo-ohki)  
   Geminiという別のAIサービスのAPI Keyを使ってレポートを生成できるようにするという提案です。自治体などでGemini環境が許可されているケースを想定し、利便性を高める狙いがあります。  
7. [Issue #633](https://github.com/digitaldemocracy2030/kouchou-ai/issues/633) (作者: shingo-ohki)  
   レポート作成者が自分のOpenAI等のAPI KEYを入力・使用できるようにする提案です。デモ環境やAzureへのデプロイで「ユーザーが自分の費用でAPIを使う」シナリオをサポートするための機能になります。  
8. [Issue #631](https://github.com/digitaldemocracy2030/kouchou-ai/issues/631) (作者: shingo-ohki)  
   Azureビルド時に警告が出る不具合の報告です。ビルド自体は完了するものの、環境変数の扱いで警告が出る問題があるとのこと。  
9. [Issue #629](https://github.com/digitaldemocracy2030/kouchou-ai/issues/629) (作者: shingo-ohki)  
   「限定公開」「非公開」設定のレポートがバックアップスクリプトで取得できない問題です。Azureデプロイ時にも影響がありそうなので、議論・対応が進んでいます。

### 更新されたIssue（作成・クローズ以外）

1. [Issue #622](https://github.com/digitaldemocracy2030/kouchou-ai/issues/622) (作者: shingo-ohki)  
   Azureに動作確認環境やデモ環境を作ろうという大きな提案Issueです。ワークフローが着々と整えられており、PRとの連携で自動デプロイを目指しています。  
2. [Issue #617](https://github.com/digitaldemocracy2030/kouchou-ai/issues/617) (作者: shingo-ohki)  
   意見グループを意見数の降順で並べたいという機能要望。グループ編集時に探しやすくなるメリットがあります。  
3. [Issue #400](https://github.com/digitaldemocracy2030/kouchou-ai/issues/400) (作者: tokoroten)  
   「環境確認機能を作る」という要望で、すでに一部は実装(例えばAPI Keyの有効性チェック)されたものの、残高確認やレートリミット確認などは今後も拡充が必要という状況です。

---

## まだ議論中のPull Request

今週作成されたが、まだマージされていないPRや、検討中のPRです。レビューやコメント大歓迎です。

1. [PR #642](https://github.com/digitaldemocracy2030/kouchou-ai/pull/642) (作者: shingo-ohki)  
   メインブランチの更新をAzureへ自動デプロイするGitHub Actionsの追加。動作確認環境の整備が進められています。  
2. [PR #637](https://github.com/digitaldemocracy2030/kouchou-ai/pull/637) (作者: shgtkshruch)  
   管理画面のレポート一覧テーブルのデザインをより見やすく変更。Figma準拠のデザイン反映などが盛り込まれています。  
3. [PR #632](https://github.com/digitaldemocracy2030/kouchou-ai/pull/632) (作者: shingo-ohki)  
   [Issue #631](https://github.com/digitaldemocracy2030/kouchou-ai/issues/631) の解決を目指す修正。make azure-build時に出る警告を解消し、よりスムーズにビルドできるようにするものです。  
4. [PR #630](https://github.com/digitaldemocracy2030/kouchou-ai/pull/630) (作者: shingo-ohki)  
   Azureの更新時に行われるレポートバックアップスクリプトをdocker上で実行するように変え、ローカル環境を整えなくてもスクリプトが走るようにする改善です。

---

## 参加の呼びかけ

広聴AIは、今後より多くのユーザ・エンジニアに使っていただきたいオープンソースプロジェクトです。  
- バグ報告や機能提案、ドキュメント修正など、どんな小さなコントリビュートでも歓迎しています。  
- 興味のあるIssueがあれば、ぜひコメントして議論に参加してください。  
- Pull Requestのレビューにもご協力いただけると非常に助かります。  
- デザイナー・エンジニア・企画・運営など、多様な分野の方の参加を心待ちにしています。

今週も様々な修正や提案が進行中です。ぜひGitHub上で一緒に盛り上げていきましょう。ご参加お待ちしています！