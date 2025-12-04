# 広聴AI 週次レポート（2025-04-11～2025-04-18）

広聴AIの開発コミュニティのみなさま、お疲れさまです！ 今週(2025-04-11～2025-04-18)のGitHub上での主な活動をまとめました。新機能やバグ修正がどのように進んでいるかを知り、ぜひ今後の議論や実装に参加いただければ幸いです。

---

## 今週「完了」したタスク

以下のIssueがクローズされ、関連するPull Requestがマージされました。新機能やバグ修正が多数含まれています。開発者でない方にも利用イメージが伝わるように概要を紹介します。

### 1. 意見グループの上限数アップ (Issue [#330](https://github.com/digitaldemocracy2030/kouchou-ai/issues/330))  
- “第一階層の意見グループ数上限を20→40に増やしたい”という要望がクローズされました。  
- 対応PR: [PR #332](https://github.com/digitaldemocracy2030/kouchou-ai/pull/332)（作成者: devin-ai-integration[bot]）  
  - 意見グループの色パターンも40種に増やし、大きめのデータでも多様なグループが見やすくなりました。

### 2. Azure Storage連携時のCSVダウンロード不具合修正 (Issue [#325](https://github.com/digitaldemocracy2030/kouchou-ai/issues/325))  
- 連携時に出力CSVファイルが削除されてしまい、DLできなくなるバグが修正されました。  
- 対応PR: [PR #326](https://github.com/digitaldemocracy2030/kouchou-ai/pull/326)（作成者: nasuka）  
  - Azure環境のストレージ容量節約フローにおいて必要なCSVを除外リストに加えています。

### 3. 作成日時をUTC表記から日本時間へ (Issue [#317](https://github.com/digitaldemocracy2030/kouchou-ai/issues/317))  
- レポート作成日時がUTCで表示され混乱を招いていたので、JSTで保存・表示するようにしました。  
- 対応PR: [PR #320](https://github.com/digitaldemocracy2030/kouchou-ai/pull/320)（作成者: nasuka）  
  - フロント画面の一覧も含め、より実際の運用感に合った時刻表示になります。

### 4. CSVダウンロード時の文字化け対策 (Issue [#297](https://github.com/digitaldemocracy2030/kouchou-ai/issues/297))  
- WindowsのExcelで開く際の文字化けを防ぐため、BOM付きCSVをダウンロードできるオプションを追加。  
- 対応PR: [PR #321](https://github.com/digitaldemocracy2030/kouchou-ai/pull/321)（作成者: mtane0412）  
  - 「CSV for Excel (Windows)」という表記で、非エンジニアにも分かりやすくなっています。

### 5. 階層図の全画面ボタンに隠れる要約文を修正 (Issue [#278](https://github.com/digitaldemocracy2030/kouchou-ai/issues/278))  
- 全画面表示時、右上のノード要約が「全画面終了」ボタンに重なる問題を修正。  
- 対応PR: [PR #282](https://github.com/digitaldemocracy2030/kouchou-ai/pull/282)（作成者: masatosasano2）  
  - 要約文の表示位置を動的にずらすことで重ならないように調整。

### 6. エラー時も管理画面の進捗表示を更新 (Issue [#277](https://github.com/digitaldemocracy2030/kouchou-ai/issues/277))  
- レポート生成中にエラーが起きても画面が止まらないようにし、エラーが明示的に分かるように改善。  
- 対応PR: [PR #279](https://github.com/digitaldemocracy2030/kouchou-ai/pull/279)（作成者: 101ta28）  
  - エラー原因を把握しやすくなり、再実行の判断がしやすいUIです。

### 7. Windows向けセットアップの簡略化 (Issue [#300](https://github.com/digitaldemocracy2030/kouchou-ai/issues/300))  
- Windowsユーザー向けにsetup_win.batを用意し、Docker DesktopとOpenAIキーさえあれば簡単に広聴AIを起動できるように。  
- 対応PR一例: [PR #301](https://github.com/digitaldemocracy2030/kouchou-ai/pull/301)（作成者: nishio）、[PR #313](https://github.com/digitaldemocracy2030/kouchou-ai/pull/313)（作成者: take365）  
  - バッチファイルで初期セットアップから起動までを自動化し、非エンジニアでも導入しやすくなりました。

ほかにも多くのバグ修正や改善PRがマージされています。クローズされたIssue・マージ済みPR一覧はGitHubをご確認ください。

---

## 今週「未完了」のタスクと議論

今週は新たに作成されたIssueやオープン中のPRも多く、さらなる議論や実装のきっかけになりそうです。主なものを紹介します。

### 1. OpenAI APIのRate Limit対策 (Issue [#295](https://github.com/digitaldemocracy2030/kouchou-ai/issues/295))  
- 場合によっては大量の429エラーが発生し、不完全なレポートが生成される議論。  
- 対策として、指数バックオフ付きリトライを導入するPR ([PR #331](https://github.com/digitaldemocracy2030/kouchou-ai/pull/331), 作成者: devin-ai-integration[bot]) が出ていますが、まだマージ前。  
  - Rate Limitエラーを検知した場合の再試行挙動や、上限を超えた場合のレポート停止など設計を相談中。

### 2. グラフ上のクラスタラベル表示/非表示の切り替え機能 (Issue [#327](https://github.com/digitaldemocracy2030/kouchou-ai/issues/327))  
- クラスタ数が多い場合、ラベルが重なり見づらい問題を解消する議論。  
- すでに [PR #329](https://github.com/digitaldemocracy2030/kouchou-ai/pull/329)（作成者: nasuka）がオープンされ、モーダルからタイトル表示をON/OFFにできる提案が進行中。

### 3. 静的ファイルエクスポート機能の改良 (Issue [#220](https://github.com/digitaldemocracy2030/kouchou-ai/issues/220))  
- 広聴AIのレポートをHTMLファイルとして出力し、独立した形で公開したいニーズがありますが、一部リンクを相対パス化しなければならないなど課題が残っています。  
- [PR #309](https://github.com/digitaldemocracy2030/kouchou-ai/pull/309) and [PR #273](https://github.com/digitaldemocracy2030/kouchou-ai/pull/273)（両方とも devin-ai-integration[bot]）で対応中。GitHub Pagesや独自ホスティングで手軽に配信できるよう期待が高まっています。

### 4. 階層クラスタの抽象度を下げるアルゴリズム検証 (Issue [#269](https://github.com/digitaldemocracy2030/kouchou-ai/issues/269))  
- 「意見グループの名前が抽象的すぎる」という声を受け、クラスタリング手法＆プロンプトの改善提案が進行中。  
- 既にプロンプトを変える [PR #319](https://github.com/digitaldemocracy2030/kouchou-ai/pull/319) はマージ済みですが、さらにSpectral Clusteringなどアルゴリズム面の議論も続きそうです。

### 5. ファクトチェック機能の検証 (Issue [#170](https://github.com/digitaldemocracy2030/kouchou-ai/issues/170))  
- コメント中の虚偽情報を除外・警告できないか、という大きなテーマが未解決。  
- まずは実験的実装を行い、精度や処理コストを見極める段階。今週も引き続き有志がアイデアを議論しています。

---

## 参加者の多様性

今週は下記のように多様なメンバーが貢献し、OSSならではの協力体制が感じられました。

- 開発メンバー:  
  - nasuka, nishio, mtane0412, masatosasano2, take365, 101ta28 など  
- AIアシスタントとの共同作業:  
  - devin-ai-integration[bot]が自動PRを作成し、人間の最終レビューで仕上げる形が定着しつつあります。

コードの修正だけでなく、Issueでの提案や議論、ドキュメント整備などでも多くの方が貢献しています。 このプロジェクトは幅広いスキルセットを歓迎しています。プログラミング以外でも翻訳・ドキュメンテーション・検証など多様な形で参加できますので、ぜひご興味ある方はIssueへのコメントやPull Requestをお待ちしています！

---

## 今後の展望

- Rate Limit問題の根本解決  
- グラフ描画のさらなるUI改善  
- 静的エクスポート機能の完成度向上  
- ファクトチェックなど新機能の検証  

数多くのトピックが進展中です。OSS開発に興味がある方はIssueへのコメントやPull Requestを通じて、ぜひ意見や改善案をお寄せください！

---

今週のまとめは以上です。ご不明な点やご意見などあれば、気軽にIssueやSlackで声をかけてください。引き続き、より使いやすい「広聴AI」を目指していきましょう。ご協力ありがとうございます！