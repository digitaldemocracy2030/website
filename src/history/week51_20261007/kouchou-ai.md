# 広聴AI 9/30~10/7 のGitHub活動まとめ

今週はポート衝突の解消や依存関係の更新、脆弱性報告方法の整備など、多数の改善やドキュメントが追加されました。開発者でなくても、プロジェクトに参加したり、機能やドキュメントを使ってみてフィードバックすることが大きな貢献になります。ぜひ興味がある部分をのぞいてみてください！

---

## 今週完了したタスク

### クローズされたIssue

- [Issue #951](https://github.com/digitaldemocracy2030/kouchou-ai/issues/951)  
  作成者: katsushi2441  
  ・Ollamaがホスト上で動いている場合に11434番ポートが衝突してDocker起動が失敗する不具合を報告  
  ・[PR #952](https://github.com/digitaldemocracy2030/kouchou-ai/pull/952) で修正し、ホスト側ポートを .env で変更可能に

- [Issue #947](https://github.com/digitaldemocracy2030/kouchou-ai/issues/947)  
  作成者: noritaka1166  
  ・SECURITY.mdを追加して脆弱性の非公開報告先を明示する提案  
  ・[PR #948](https://github.com/digitaldemocracy2030/kouchou-ai/pull/948) で反映完了

- [Issue #393](https://github.com/digitaldemocracy2030/kouchou-ai/issues/393)  
  作成者: nasuka  
  ・フッターのプライバシーポリシーや利用規約リンクなどを意図せず変更し忘れないようHowToへ記載する要望  
  ・[PR #944](https://github.com/digitaldemocracy2030/kouchou-ai/pull/944) で公開前のチェックリストをガイドに追加

- [Issue #130](https://github.com/digitaldemocracy2030/kouchou-ai/issues/130)  
  作成者: nishio  
  ・コード以外の参加方法（質問、事例共有、比較評価など）をもっとわかりやすく案内する提案  
  ・[PR #941](https://github.com/digitaldemocracy2030/kouchou-ai/pull/941) で「コードを書かない人の貢献方法」をドキュメントに追加

### マージされたPull Request

- [PR #952](https://github.com/digitaldemocracy2030/kouchou-ai/pull/952) by katsushi2441  
  ・Ollamaのポート衝突問題を `.env` で柔軟に設定できるよう修正  
  ・ローカルLLM環境の安定稼働に役立つ改善

- [PR #950](https://github.com/digitaldemocracy2030/kouchou-ai/pull/950) by nishio  
  ・依存関係の大規模更新とPlotly 4系への対応  
  ・脆弱性アラートを一括解消し、グラフ描画部分の不具合が起きないよう調整

- [PR #948](https://github.com/digitaldemocracy2030/kouchou-ai/pull/948) by nishio  
  ・SECURITY.mdを新規追加し、非公開の脆弱性報告方法と範囲を解説  
  ・GitHubのプライベート脆弱性レポート機能も有効化済み

- [PR #945](https://github.com/digitaldemocracy2030/kouchou-ai/pull/945) by nishio  
  ・Azure接続の失敗時に、APIバージョンとモデルバージョン混同などを疑う案内を追加  
  ・自治体などでAzure OpenAIを利用するときにトラブルシュートしやすくなる

- [PR #944](https://github.com/digitaldemocracy2030/kouchou-ai/pull/944) by nishio  
  ・公開前に確認すべき作成者情報や利用規約URLなどのチェックリストをガイドに追加

- [PR #943](https://github.com/digitaldemocracy2030/kouchou-ai/pull/943) by nishio  
  ・API接続エラー時に設定画面に戻る動線のE2Eテストを充実化  
  ・認証失敗やクレジット不足をダミーAPI応答で再現し、復帰までの流れをテスト

- [PR #942](https://github.com/digitaldemocracy2030/kouchou-ai/pull/942) by nishio  
  ・静的サイトviewerのビルド成果物を7日間ダウンロードできるようにし、ローカルでチェック可能に  
  ・GitHub Pagesへの常設公開は今後の課題として継続

- [PR #941](https://github.com/digitaldemocracy2030/kouchou-ai/pull/941) by nishio  
  ・「コードを書かない人の貢献方法」をドキュメントに追加  
  ・感想や質問、事例の共有など誰でも簡単に始められるOSS参加の入り口を整理

---

## まだ議論中・未完了のタスク

### 新しく作られたIssue

- [Issue #949](https://github.com/digitaldemocracy2030/kouchou-ai/issues/949)  
  ・依存関係のセキュリティアップデートと互換性確認を継続追跡  
  ・すでに [PR #950](https://github.com/digitaldemocracy2030/kouchou-ai/pull/950) がマージされましたが、一部開発ツール用依存ライブラリの修正版待ち

### 更新されたOpen Issue

- [Issue #592](https://github.com/digitaldemocracy2030/kouchou-ai/issues/592)  
  ・Azure OpenAI Service利用時のエラーハンドリングを改善する要望  
  ・[PR #945](https://github.com/digitaldemocracy2030/kouchou-ai/pull/945) で接続確認画面を強化しましたが、解析パイプライン全体の例外処理は未着手

- [Issue #518](https://github.com/digitaldemocracy2030/kouchou-ai/issues/518)  
  ・最新コードのstatic exportページを自動ビルド・公開したい要望  
  ・[PR #942](https://github.com/digitaldemocracy2030/kouchou-ai/pull/942) でビルド成果物のダウンロードまでは可能に。今後のGitHub Pagesなどの常設ホスティングが検討中

- [Issue #471](https://github.com/digitaldemocracy2030/kouchou-ai/issues/471)  
  ・ローカルLLMベンチマークと推奨スペック案内に関するドキュメント拡充要望  
  ・Ollama利用やdocker起動での実測情報など、検証結果から推奨環境を整理する議論が続く見込み

- [Issue #395](https://github.com/digitaldemocracy2030/kouchou-ai/issues/395)  
  作成者: <人間>+Devin  
  ・管理画面のE2Eテストケースを拡張する提案  
  ・[PR #943](https://github.com/digitaldemocracy2030/kouchou-ai/pull/943) で主要エラーケースのE2Eが追加されたが、スプレッドシートの列選択やAI設定の最終送信内容などはまだ未実装

### 継続中のPull Request

- [PR #946](https://github.com/digitaldemocracy2030/kouchou-ai/pull/946) by nishio  
  ・レポート毎に「濃いクラスタ」の最小サンプル数・上位割合を設定できる機能を追加  
  ・管理画面での入力フォームやバリデーションが実装済み。まだローカル検証や細部のレビューが継続中

---

## 参加の呼びかけ

- コードを直接書かなくても、使ってみた感想や困った点の報告などは大歓迎です。たとえば:
  - どのIssueが解決されると助かるか「いいね(👍)」で投票
  - 新しい機能を試してみて気になった所をコメント
  - 要望や導入事例を共有
- セキュリティ報告は [Issue #947](https://github.com/digitaldemocracy2030/kouchou-ai/issues/947) で整理された通り、全体に公開せず非公開チャネルから報告できます。詳しくは [SECURITY.md](https://github.com/digitaldemocracy2030/kouchou-ai/blob/main/SECURITY.md) をご覧ください。

引き続き、さまざまな形でのご参加をお待ちしています！意見やアイデアがあれば気軽にIssueやコメントでお知らせください。  