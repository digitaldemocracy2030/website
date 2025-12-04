# 広聴AI 第4週（4/2~4/9）のGitHub活動まとめ

今週も「広聴AI(kouchou-ai)」の開発が多方面で進み、大量のIssueやPull Requestがクローズ・作成されています。  
新機能が増えただけでなく、開発効率向上の取り組みやバグ修正の成果も多数。  
まずは何が完了したのか、そして現在どんな議論が行われているのかをまとめています。  
OSS開発に初めて参加される方にも、どんな機能が追加され、どんな課題が残っているかを知る良いきっかけとなるでしょう。

---

## 今週完了した主な項目（Merged PR / クローズされたIssue）

1. **クラスタ分析関連の機能強化**  
   - [PR #265](https://github.com/digitaldemocracy2030/idobata-analyst/pull/265) (作者: nasuka)  
     第一階層クラスタ数上限を10→20に緩和。第二階層クラスタ数の調整ロジックや色数の追加も実装。  
   - [PR #234](https://github.com/digitaldemocracy2030/idobata-analyst/pull/234) (作者: shingo-ohki)  
     クラスタ数や並列実行数を直接数値入力できるように変更。ボタンの多重クリック不要で大幅変更が可能に。

2. **フロントエンドの表示/操作性の向上**  
   - [PR #239](https://github.com/digitaldemocracy2030/idobata-analyst/pull/239) (作者: nasuka)  
     「意見が含まれるコメント数」を実際の処理に合わせ「コメント数」に見直し。  
   - [PR #224](https://github.com/digitaldemocracy2030/idobata-analyst/pull/224) (作者: shgtkshruch)  
     クラスタ見出しをアンカーリンク化し、直接リンクで議論共有や画面誘導が容易に。  
   - [PR #256](https://github.com/digitaldemocracy2030/idobata-analyst/pull/256) (作者: ei-blue)  
     「パブコメモード」を「CSV出力モード」に名称変更し、機能の汎用性を明確化。

3. **レポート管理機能の拡充**  
   - [PR #233](https://github.com/digitaldemocracy2030/idobata-analyst/pull/233) (作者: devin-ai-integration[bot])  
     レポートの公開/非公開切替機能を実装。実験中レポートは非公開、本番用のみ表示可能に。  
   - [PR #232](https://github.com/digitaldemocracy2030/idobata-analyst/pull/232) (作者: devin-ai-integration[bot])  
     レポート削除機能を追加。不要なレポートの整理が容易に。  
   - [PR #245](https://github.com/digitaldemocracy2030/idobata-analyst/pull/245) (作者: devin-ai-integration[bot])  
     レポート一覧に「作成日時」表示を追加。新旧識別がしやすく運用性向上。

4. **Azure Blob Storage 連携とビルド周りの改善**  
   - [PR #228](https://github.com/digitaldemocracy2030/idobata-analyst/pull/228) (作者: nasuka)  
     Azure Blob Storage連携により、Container Appsでもレポートが永続化。  
   - [PR #261](https://github.com/digitaldemocracy2030/idobata-analyst/pull/261) (作者: nishio)  
     ローカルのレポートをまとめてBlob Storageにアップロードするスクリプトを追加。  
   - [PR #258](https://github.com/digitaldemocracy2030/idobata-analyst/pull/258) (作者: nishio)  
     静的ビルド時のパーミッションエラーを修正。ローカル向けビルド・デプロイがスムーズに。

5. **テスト・Lintツール導入と開発効率の向上**  
   - [PR #247](https://github.com/digitaldemocracy2030/idobata-analyst/pull/247) (作者: devin-ai-integration[bot])  
     client / client-admin向け自動テスト（Jest）をGitHub Actionsで実行。品質保証と負担軽減に。  
   - [PR #249](https://github.com/digitaldemocracy2030/idobata-analyst/pull/249), [PR #262](https://github.com/digitaldemocracy2030/idobata-analyst/pull/262), [PR #263](https://github.com/digitaldemocracy2030/idobata-analyst/pull/263) (作者: shgtkshruch他)  
     Biomeによるコードフォーマット整備。ESLintからの切替でコード品質が維持しやすく。

---

## 議論中・未完了タスク

1. **クラスタ可視化の改善 ([Issue #266](https://github.com/digitaldemocracy2030/idobata-analyst/issues/266) ほか)**  
   クラスタ数増加時、散布図上でラベルが重なり見づらくなる問題を改善するため、アイコン表示やフォント縮小、動的ラベル調整、重要度に基づく表示制限などの案を検討中。  
   可視化に自信のある方、ぜひ参加を！

2. **Windows対応 ([Issue #254](https://github.com/digitaldemocracy2030/idobata-analyst/issues/254), [Issue #243](https://github.com/digitaldemocracy2030/idobata-analyst/issues/243))**  
   Windows環境構築時のエラーや、BOM付きファイルによるentrypoint.shの不具合が報告。  
   対策をドキュメント化する案が出ており、実際に環境検証できる方の協力が期待されます。

3. **静的HTMLのローカル動作 ([Issue #253](https://github.com/digitaldemocracy2030/idobata-analyst/issues/253))**  
   ローカル環境でファイルを開いた際、ブラウザのセキュリティ制限等により読み込みエラーが発生。  
   エラー状態を分かりやすく表示、解決策ガイドへのリンク追加の提案が進行中です。

4. **「回答案」などパブコメ支援機能の強化 ([Issue #236](https://github.com/digitaldemocracy2030/idobata-analyst/issues/236))**  
   CSV出力モードで意見の回答を下書きする仕組みを検討。  
   定型的な回答案の自動生成により、自治体担当者の手間削減が期待され、AIのRAG活用も視野に。

5. **試行錯誤の負担を減らす ([Issue #221](https://github.com/digitaldemocracy2030/idobata-analyst/issues/221))**  
   クラスタ数やプロンプト変更の迷いを解消するため、ガイドや自動推奨機能の充実を議論中。  
   アイデア段階のため、ノウハウ共有やUI改善提案が求められています。

6. **その他**  
   - [Issue #250](https://github.com/digitaldemocracy2030/idobata-analyst/issues/250) 「階層図で一番下層まで来たら原文も見せるか」  
   - [Issue #227](https://github.com/digitaldemocracy2030/idobata-analyst/issues/227) 「設定画面UIをどう配置するか」  
   - [Issue #220](https://github.com/digitaldemocracy2030/idobata-analyst/issues/220) 「レポートの静的HTMLをダウンロード用に生成する案」  
     
UI/UX周りや利用シーン別の調整アイデアが複数進行中。興味のある方はぜひ意見をお寄せください！


## 参加の呼びかけ

これまでの開発で着実に新機能や改善が進展していますが、  
「Windows環境での検証」「大規模データの可視化ノウハウ」「UI改善提案」「自動テストカバレッジ拡張」など、実現したいことはまだ山積みです。  
興味をお持ちの方は、IssueへのコメントやPull Requestでの提案をお待ちしています。

初心者の方も大歓迎！  「触ってみたい」「もっと便利にできそう」と感じたら、ぜひご参加ください！

---