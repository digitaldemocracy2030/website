# 広聴AI 第2週（3/20~3/26）のGitHub活動まとめ

以下は3月20日～26日の第2週に完了した主な取り組みと、議論が続いているタスクの概要です。

---

## 今週完了した主な内容

### 1. Googleスプレッドシート対応（PR [#182](https://github.com/digitaldemocracy2030/kouchou-ai/pull/182) / 作者: shingo-ohki）
公開設定されたGoogleスプレッドシートをアップロード不要で直接読み込めるようになりました。自治体のフォーム回答などを扱う際、CSV化の手間が減りそうです。

### 2. CSVアップロード時の文字コード変換（PR [#183](https://github.com/digitaldemocracy2030/kouchou-ai/pull/183) / 作者: yuneko1127）
Excelから出力されがちなShift JISのCSVを、自動でUTF-8に変換して取り込めるようになりました。利用者側での文字コード変換作業を省略できます。

### 3. 「データをクリアして再入力」ボタンの改善（PR [#187](https://github.com/digitaldemocracy2030/kouchou-ai/pull/187) / 作者: shingo-ohki）
管理画面で意見データをいったん読み込んだ後にIDを変える等の操作をした場合でも、不要なデータが残らずに再入力ができるようになりました。

### 4. クラスタ数の表示を「/」から「→」へ変更（PR [#188](https://github.com/digitaldemocracy2030/kouchou-ai/pull/188) / 作者: takahiroanno）
「5/50」が分数に見えてしまう問題を解消し、「5→50」のように可読性を少し改善しました。

### 5. サンプルコメントデータ増量（PR [#189](https://github.com/digitaldemocracy2030/kouchou-ai/pull/189) / 作者: nasuka）
サンプルCSVの件数を50件から400件に増やし、クラスタの大分類・小分類をより分かりやすく体験できるようにしました。

### 6. リモートのレポート結果をローカルへ取得（PR [#180](https://github.com/digitaldemocracy2030/kouchou-ai/pull/180) / 作者: nishio）
遠隔のサーバで生成した分析結果を簡単にローカル環境へダウンロードし、自分のPCにバックアップしたり再利用したりできるスクリプトが追加されました。

### 7. レポートが存在しない場合の404返却（PR [#178](https://github.com/digitaldemocracy2030/kouchou-ai/pull/178) / 作者: shgtkshruch）
存在しないレポートSlugへアクセスした場合に404エラーを返すよう修正され、ユーザが原因を把握しやすくなりました。

### 8. Azure環境への注意事項追記（PR [#181](https://github.com/digitaldemocracy2030/kouchou-ai/pull/181) / 作者: nasuka）
Azureでコンテナを再起動すると、標準構成ではレポートが消えてしまう点などの注意事項がドキュメントに明示されました。

### 9. 依存パッケージ更新の自動化(Dependabot関連)
- Dependabot導入（PR [#152](https://github.com/digitaldemocracy2030/kouchou-ai/pull/152) / 作者: nasuka）
- その後、不要な定期更新設定の削除（PR [#171](https://github.com/digitaldemocracy2030/kouchou-ai/pull/171) / 作者: nasuka）  
など、パッケージ更新の自動化・安全性向上に関する対応が複数行われました。

---

## まだ未完了で議論中のタスク紹介

### [#186 CSVをJSONに変換せずに送信したい](https://github.com/digitaldemocracy2030/kouchou-ai/issues/186)
大容量のデータを扱う際の通信効率やメモリ節約のため、CSVファイルをそのままAPIに送る仕組みについて検討中です。

### [#176 LLMベースの分類機能の実装](https://github.com/digitaldemocracy2030/kouchou-ai/issues/176)
クラスタリングとは別に、大規模言語モデルを用いてデータを分類するアイデア。実験方法や実装案を詰めようとしています。

### [#175 Azureで長期運用するためのドキュメント追加](https://github.com/digitaldemocracy2030/kouchou-ai/issues/175)
コンテナ再構築時のレポート消失や、環境変数更新・ソース更新など「実際の運用に必要な情報」を整備しようとする議論です。

### [#174 生成レポートの永続化](https://github.com/digitaldemocracy2030/kouchou-ai/issues/174)
レポート出力物を外部ストレージへ保存しておく仕組み（例: Azure Storage等）を検討中。

### [#173, #172 クラスタ説明文への“根拠”表示（グラウンディング）](https://github.com/digitaldemocracy2030/kouchou-ai/issues/173)
クラスタ説明文の妥当性を高めるため、実際の意見例と結びつけて表示するアイデア。どのように根拠テキストを抽出・掲載するかが議論されています。

---

これらの議論中タスクは、さらなるアイデアや技術的検証が必要です。ぜひIssueをチェックしていただき、実装やディスカッションへの参加をお待ちしています。  
OSS開発への貢献やフィードバック大歓迎ですので、気になるトピックがあればお気軽にご参加ください。  

