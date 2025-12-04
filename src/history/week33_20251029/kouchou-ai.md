# 広聴AI 2025-10-22 ~ 2025-10-29 のGitHub活動まとめ

「デジタル民主主義2030」プロジェクトのOSS活動にご興味をお持ちいただきありがとうございます。今週はバグ修正や新機能のドキュメント化など、さまざまなアップデートがありました。開発者はもちろん、これからプロジェクトに参加される方にも情報をキャッチアップしていただけるように、以下にまとめます。

---

## 完了したIssueとPR

### Issue

- [Issue #724](https://github.com/digitaldemocracy2030/kouchou-ai/issues/724)  
  - タイトル: [BUG] 静的ファイル出力でEXDEV: cross-device link not permittedが出る  
  - 作成者: nishio  
  - 概要: Docker環境などでファイルが別ファイルシステム間にまたがっているときにリネームできず、ビルドがエラーになる問題。  

### マージされたPR

1. [PR #725](https://github.com/digitaldemocracy2030/kouchou-ai/pull/725)  
   - タイトル: Fix EXDEV error in static build by adding copy+delete fallback for cross-device rename operations  
   - 作者: NISHIO+Devin (botは補助的に使われています)  
   - 主な修正内容:  
     - リネーム時にEXDEVエラーが出た場合、コピー→元ファイル削除にフォールバックすることで静的ビルドが止まらないよう改善。  
     - Dockerボリュームやホスト環境とのファイルシステム差分が原因のエラーを解消。  
   - ユーザーへの影響:  
     - コンテナを利用している場合でも静的ビルドがエラーで止まることなく進められるようになりました。  

2. [PR #723](https://github.com/digitaldemocracy2030/kouchou-ai/pull/723)  
   - タイトル: Bump playwright and @playwright/test in /test/e2e  
   - 作者: dependabot[bot]  
   - 主な修正内容:  
     - E2Eテストで使用しているPlaywright関連パッケージをアップデート。  
   - ユーザーへの影響:  
     - テストの安定性や最新機能の利用が期待できます。ユーザーの操作画面に大きな変化はありません。  

---

## 未完了のIssue

今週新たに作成されたり、まだクローズされていないIssueは以下のとおりです。開発者以外の方にも関連する内容が含まれますので、興味があればぜひディスカッションにご参加ください。

- [Issue #726](https://github.com/digitaldemocracy2030/kouchou-ai/issues/726)  
  - タイトル: [BUG]公開状態にしたレポートがない状態で静的HTML出力をしたときのエラーメッセージがわかりにくい  
  - 作成者: nishio  
  - 現状: エラーの原因（「公開レポートが存在しない」）が分かりづらく、利用者が戸惑うという問題が報告されています。  

- [Issue #721](https://github.com/digitaldemocracy2030/kouchou-ai/issues/721)  
  - タイトル: ファイルシステムベース実行方式の明確化と検証テスト追加  
  - 作成者: devin-ai-integration[bot] → 実質的には「Devin」が主導  
  - 現状: ファイルシステムのみでパイプラインを実行する場合の仕様が整理不足。これをドキュメント化＆テスト実装するプランが提案されています。  

---

## 進行中のPull Request

以下のPRはまだマージされていませんが、議論や実装が進んでいます。テストレビューやフィードバックをお待ちしています。

1. [PR #727](https://github.com/digitaldemocracy2030/kouchou-ai/pull/727)  
   - タイトル: 静的ビルド実行前に公開状態のレポートが存在するかを検証  
   - 作者: NISHIO+Devin  
   - 関連Issue: [Issue #726](https://github.com/digitaldemocracy2030/kouchou-ai/issues/726)（上記のバグを解決する見込み）  
   - 概要:  
     - 静的ビルド前に「公開レポートが1件以上あるか」をチェックし、無い場合は適切な日本語メッセージを出す仕組みを追加。  
   - 目的:  
     - エラー原因の分かりづらさを解決し、静的ビルド失敗時のユーザー体験を向上させる。  

2. [PR #722](https://github.com/digitaldemocracy2030/kouchou-ai/pull/722)  
   - タイトル: Add filesystem-based usage documentation and validation tests  
   - 作者: NISHIO+Devin  
   - 関連Issue: [Issue #721](https://github.com/digitaldemocracy2030/kouchou-ai/issues/721)（「Resolves #721」と記載）  
   - 概要:  
     - ファイルシステムベースでのパイプライン実行における詳細ドキュメント、検証用スキーマ（Pydantic）および多岐にわたるテストを追加。  
   - 目的:  
     - サーバーを起動せずにパイプラインを実行したいユーザー・開発者にとって、仕様が明確かつ安全に利用できるようにする。  

---

## 参加のお願い

- バグ報告やドキュメントへの提案など、どんな小さな意見でも歓迎です。  
- 「こんな機能が欲しい」「この部分を手伝いたい」というアイデアがあれば、ぜひ[Issue](https://github.com/digitaldemocracy2030/kouchou-ai/issues)や[PR](https://github.com/digitaldemocracy2030/kouchou-ai/pulls)でコメントしてください。  
- コード以外にもドキュメント作成や翻訳、デザインなど幅広い貢献が可能です。  

今後とも広聴AIへのご協力をよろしくお願いします！  