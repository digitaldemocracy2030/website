# 広聴AI 7/9~7/16 のGitHub活動まとめ

この1週間(2025-07-09～2025-07-16)でのGitHub上の動きをまとめました。まずは新機能の追加やバグ修正など「完了したIssue」について、その後「未完了のタスクや議論中のIssue」について紹介します。開発者でない方も、どんな機能改善が行われたかを知る機会になりますし、今後のディスカッションに参加していただくきっかけにもなれば嬉しいです。

---

## 今週完了したIssue

以下の8件がクローズされ、実装が完了または解決しました。

- [Issue #647](https://github.com/digitaldemocracy2030/kouchou-ai/issues/647) 管理画面のレポート削除時に確認ダイアログを表示する機能  
- [Issue #646](https://github.com/digitaldemocracy2030/kouchou-ai/issues/646) 管理画面レポート一覧のレポートが0件だった場合のデザイン(Empty State)を適用  
- [Issue #645](https://github.com/digitaldemocracy2030/kouchou-ai/issues/645) コメント数や意見数が100万を超えた時に「1M」などの略称表示対応  
- [Issue #644](https://github.com/digitaldemocracy2030/kouchou-ai/issues/644) 管理画面レポート一覧のヘッダー部分を新デザインへ変更し公開/限定公開/非公開の総数を表示  
- [Issue #635](https://github.com/digitaldemocracy2030/kouchou-ai/issues/635) レポート一覧APIでコメント数・意見数・意見グループ数を含む情報を返却  
- [Issue #621](https://github.com/digitaldemocracy2030/kouchou-ai/issues/621) 管理画面アクション関数のエラーハンドリングを改善（UIへ通知する仕組み導入）  
- [Issue #620](https://github.com/digitaldemocracy2030/kouchou-ai/issues/620) CSVダウンロード機能のエラーハンドリングを改善  
- [Issue #460](https://github.com/digitaldemocracy2030/kouchou-ai/issues/460) 管理画面(レポート管理画面)の大幅リデザイン  

これらに関連して、多数のPull Requestがマージされています。特に管理画面のUIが大幅に改善され、公開状態の変更やレポート削除、CSVダウンロード時のエラーメッセージ表示など、使いやすさ向上に貢献しています。

---

## 今週マージされた主なPull Request

今週は合計15件のPRがマージされました。主に以下のような改善や機能追加が含まれています。いずれもshgtkshruchさんが中心に実装しつつ、他の開発者やAIアシスタントとの連携が行われています。

- [PR #663](https://github.com/digitaldemocracy2030/kouchou-ai/pull/663): 数値が100万を超えた際の「1M」略称表示を実装  
- [PR #662](https://github.com/digitaldemocracy2030/kouchou-ai/pull/662), [PR #656](https://github.com/digitaldemocracy2030/kouchou-ai/pull/656), [PR #652](https://github.com/digitaldemocracy2030/kouchou-ai/pull/652) ほか: ブラウザにAPIキーが露出しないようにServer Functions化、およびエラー時のトースト表示  
- [PR #655](https://github.com/digitaldemocracy2030/kouchou-ai/pull/655), [PR #651](https://github.com/digitaldemocracy2030/kouchou-ai/pull/651): レポートが0件のときの画面デザインやレポート削除の確認ダイアログ追加  
- [PR #657](https://github.com/digitaldemocracy2030/kouchou-ai/pull/657): レポート作成画面の文言修正でUIをFigmaに合わせた  
- [PR #650](https://github.com/digitaldemocracy2030/kouchou-ai/pull/650), [PR #649](https://github.com/digitaldemocracy2030/kouchou-ai/pull/649), [PR #654](https://github.com/digitaldemocracy2030/kouchou-ai/pull/654) など: 公開状態の合計数表示、レイアウト整理、タイプエラー修正  
- [PR #637](https://github.com/digitaldemocracy2030/kouchou-ai/pull/637): 管理画面のテーブルや進捗表示インタラクションの刷新  
- [PR #636](https://github.com/digitaldemocracy2030/kouchou-ai/pull/636): レポート一覧APIにコメント数などを返せるように変更  

以上により、UI/UX面の改善が大幅に進みました。

---

## 未完了のタスク・議論中のIssue

続いて、まだクローズされていないIssueや新しく作成されたIssueについて見てみます。これらでは追加の実装や議論が必要とされています。自由にコメントや実装提案を行っていただけると助かります。

- [Issue #666](https://github.com/digitaldemocracy2030/kouchou-ai/issues/666) Windows環境でのビルドエラー  
  - WindowsでのDockerビルド時にPyTorchのインストールが失敗する問題。[PR #667](https://github.com/digitaldemocracy2030/kouchou-ai/pull/667) (NISHIO+Devin) で対処中  
- [Issue #664](https://github.com/digitaldemocracy2030/kouchou-ai/issues/664) レポート単体でのHTML書き出し機能  
  - レポートごとに静的書き出しを行う要望。現在[PR #665](https://github.com/digitaldemocracy2030/kouchou-ai/pull/665) (shgtkshruch) がレビュー中  
- [Issue #648](https://github.com/digitaldemocracy2030/kouchou-ai/issues/648) レポート一括編集機能  
  - 複数のレポートをまとめて公開設定変更や削除などを行う要望  
- [Issue #643](https://github.com/digitaldemocracy2030/kouchou-ai/issues/643) Docker build時のシークレット渡し方法の改善  
  - セキュアなシークレット管理をDocker BuildKitで行う案が検討されている  
- [Issue #638](https://github.com/digitaldemocracy2030/kouchou-ai/issues/638) 濃い意見ビューの改善案  
  - ラベル表示が重なって見にくい問題へのUI再考  
- [Issue #633](https://github.com/digitaldemocracy2030/kouchou-ai/issues/633) フォームから受け付けたAPI KEYを使ってレポート生成できるようにする  
  - まだ一部機能で議論中  
- [Issue #622](https://github.com/digitaldemocracy2030/kouchou-ai/issues/622) Azureへのデモ環境  
  - 非エンジニアでも触りやすい運用環境の整備に向けて進行中  
- [Issue #547](https://github.com/digitaldemocracy2030/kouchou-ai/issues/547) 管理画面でAPIルートを経由する方式  
  - Next.jsのAPIルート経由でFastAPIを呼ぶ設計を模索し、APIキー漏洩を防ぐ対応  

---

## 貢献メンバー紹介

- コア開発をリードする “shgtkshruch” さんを中心に、 “shingo-ohki” さん、“nishio” さん、“noritaka1166” さんなどが開発を進めています。  
- “CoderabbitAI[bot]” や “Devin” はAIアシスタントで、提案や修正案の作成に貢献しています。(“NISHIO+Devin” は “nishio” さんがAIを活用している形です)

多種多様なメンバーが活躍しており、誰でもIssueやPRでディスカッションに参加可能です。OSS開発に興味のある方は気軽にコメントしてみてください。

---

## 参加のお願い

広聴AI（kouchou-ai）は誰もが意見を出し合えるデジタル民主主義の未来を目指すOSSプロジェクトです。  
デザインやドキュメント、テスト、アイデア出しなど、さまざまな形での参加を歓迎しています。  
興味のある方はぜひGitHubリポジトリをウォッチしたり、Issueで提案・質問などを投げて一緒に開発を盛り上げましょう。  

- GitHub: https://github.com/digitaldemocracy2030/kouchou-ai  
- Figmaデザインへのフィードバックも歓迎  

今後とも広聴AIへのご協力をよろしくお願いします。  