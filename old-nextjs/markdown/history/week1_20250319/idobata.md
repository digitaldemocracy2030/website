# いどばたシステム 第1週（3/13~3/19）のGitHub活動まとめ

以下は、3月13日から19日まで（第1週）に行われた主な完了タスクと、まだ完了していなかったタスクの議論内容です。

---

## 今週完了した主なタスク

1. **日付を日本形式で表示する機能の追加（PR [#25](https://github.com/digitaldemocracy2030/idobata-analyst/pull/25))**  
   - **作成者：** [javasparrows](https://github.com/javasparrows)  
   - コメント一覧の表示を「yyyy年mm月dd日 hh:mm」のように日本向けに変更しました。エンドユーザにとって読みやすくなっています。

2. **README.mdアップデートとコントリビューション設定の追加（PR [#29](https://github.com/digitaldemocracy2030/idobata-analyst/pull/29), [#28](https://github.com/digitaldemocracy2030/idobata-analyst/pull/28))**  
   - **作成者：** [jujunjun110](https://github.com/jujunjun110)  
   - リポジトリ利用者がプロジェクトの概要や貢献ルールを把握しやすくなるよう、READMEとコントリビューション関連のドキュメントを改善しました。

3. **モバイル端末でタブ表示が崩れる問題の修正（PR [#36](https://github.com/digitaldemocracy2030/idobata-analyst/pull/36), [#43](https://github.com/digitaldemocracy2030/idobata-analyst/pull/43))**  
   - **作成者：** [101ta28](https://github.com/101ta28)  
   - モバイル表示時にタブが画面幅からはみ出す不具合を修正し、横スクロールで見られるように改善しました。

4. **Issueテンプレートの追加（PR [#38](https://github.com/digitaldemocracy2030/idobata-analyst/pull/38))**  
   - **作成者：** [spinute](https://github.com/spinute)  
   - バグ報告や改善提案を統一的に受け付けられるよう、Issueテンプレートを整備しました。開発以外の方でも書き込みやすくなっています。

5. **全体レポートのタイトル周りに付く`[]`の除去（PR [#35](https://github.com/digitaldemocracy2030/idobata-analyst/pull/35))**  
   - **作成者：** [DarthReidar-jp](https://github.com/DarthReidar-jp)  
   - AIが生成するレポートタイトルに不要な角括弧がついてしまう問題を、プロンプトの修正で解決しました。

6. **CLA（コントリビューターライセンス契約）ドキュメントの更新（PR [#41](https://github.com/digitaldemocracy2030/idobata-analyst/pull/41))**  
   - **作成者：** [takahiroanno](https://github.com/takahiroanno)  
   - 外部コントリビューターが安心して参加できるよう、CLAの表記をより分かりやすく整備しました。

---

## まだ完了していなかったタスクと議論のポイント

1. **チャット機能のコメントタイプを「チャット」として扱う（Issue [#14](https://github.com/digitaldemocracy2030/idobata-analyst/issues/14))**  
   - **状況:** 3月20日にPRがマージされ完了しましたが、13～19日の時点では未完了でした。  
   - **議論:** フロントエンド・バックエンド・チャットボットの3つが絡むため、ソース種類をどこで追加し、表示ラベルをどうするかがポイントでした。

2. **Google Analyticsの導入（Issue [#11](https://github.com/digitaldemocracy2030/idobata-analyst/issues/11))**  
   - **状況:** 3月26日に対応完了。第1週の段階では工数やプライバシー面の検討が続いていました。  
   - **議論:** どの程度のトラッキングを行うか、利用者への説明はどうするかなど、プロジェクト全体の透明性をどう確保するかがテーマでした。

3. **全体レポートに情報源の分布を追加（Issue [#19](https://github.com/digitaldemocracy2030/idobata-analyst/issues/19))**  
   - **状況:** 4月2日にPRがマージされ完了。第1週時点ではレポートのUI/UX設計や可視化方法がまだ検討段階でした。  
   - **議論:** 円グラフや割合表示でどの程度わかりやすくユーザに示せるか、分析・集計のロジックをどのように実装するかが話題になりました。

4. **開発時のホットリロード対応（Issue [#40](https://github.com/digitaldemocracy2030/idobata-analyst/issues/40)）**  
   - **状況:** 3月21日に完了。第1週ではまだ調整中でした。  
   - **議論:** Docker ComposeやDockerfileの設定をどう整理するか、バックエンド・フロントエンドともにリアルタイム反映させるためにどのツールを使うかなどが話し合われました。

---

以上が第1週（3/13～19）における成果と、まだ作業中だったタスクの概要です。  
開発者以外の方にもわかりやすい機能改善（モバイル表示や日付表示など）がいくつか完了しており、OSSのコントリビュートに初めて参加する方でも成果が見えやすくなっています。一方で、チャット機能やGoogle Analytics導入など、プロジェクトに関わる議論や検討はまだまだ続いています。今後も改善提案や実装へのコントリビュートを歓迎していますので、ぜひ参加を検討してみてください。