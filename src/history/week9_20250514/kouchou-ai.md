# 広聴AI 2025/05/07～2025/05/14 のGitHub活動まとめ

## 今週完了したタスク

今週は開発者の皆さんから多くのPRがマージされ、バグ修正から新機能の追加まで幅広いアップデートが行われました。主な変更点と貢献者をいくつかご紹介します。

### 新機能・改善点

- [PR #422](https://github.com/digitaldemocracy2030/kouchou-ai/pull/422)  
  **貢献:** shinta.nakayama+Devin  
  **概要:** さまざまなLLMプロバイダ（OpenAI/Azure/ローカルLLMなど）を選択して利用できる仕組みを導入。より自由度の高い分析が可能になりました。

- [PR #500](https://github.com/digitaldemocracy2030/kouchou-ai/pull/500)  
  **貢献:** nasuka  
  **概要:** レポートに「限定公開」ステータスが追加され、一覧には表示しないがURLを知っていれば閲覧できる機能を実装。作成直後は限定公開になり、不要な早期公開を防げます。

- [PR #468](https://github.com/digitaldemocracy2030/kouchou-ai/pull/468)  
  **貢献:** shingo-ohki  
  **概要:** ローカルLLMをDockerコンテナ（ollama）で簡単に起動できるオプションを追加。LLMをローカルで動かしたい方に便利です。  
  関連Issue: [Issue #430](https://github.com/digitaldemocracy2030/kouchou-ai/issues/430)

- [PR #490](https://github.com/digitaldemocracy2030/kouchou-ai/pull/490)  
  **貢献:** masatosasano2  
  **概要:** ScatterChartでグリッドラインを非表示に。縦軸・横軸に意味がないことが直感的にわかりやすくなりました。  
  関連Issue: [Issue #488](https://github.com/digitaldemocracy2030/kouchou-ai/issues/488)

- [PR #497](https://github.com/digitaldemocracy2030/kouchou-ai/pull/497)  
  **貢献:** masatosasano2  
  **概要:** チャートの外枠線を追加し、表示領域が明確に。特に全画面でないときのScatterChart領域がわかりやすくなりました。  
  関連Issue: [Issue #491](https://github.com/digitaldemocracy2030/kouchou-ai/issues/491)

- [PR #495](https://github.com/digitaldemocracy2030/kouchou-ai/pull/495)  
  **貢献:** masatosasano2  
  **概要:** プロットを全画面表示した際に、コマンドパレットと「全画面終了」ボタンが重ならないようUIを調整。  
  関連Issue: [Issue #479](https://github.com/digitaldemocracy2030/kouchou-ai/issues/479)

- [PR #476](https://github.com/digitaldemocracy2030/kouchou-ai/pull/476)  
  **貢献:** tokoroten  
  **概要:** ScatterChartのラベル（クラスタ名）を自動で改行する機能を追加。長いタイトルでも視認性が向上しました。

- [PR #511](https://github.com/digitaldemocracy2030/kouchou-ai/pull/511)  
  **貢献:** shingo-ohki  
  **概要:** lintエラーを機械的に修正し、開発環境のクリーンアップを実施。開発者の方が作業しやすくなりました。  
  関連Issue: [Issue #502](https://github.com/digitaldemocracy2030/kouchou-ai/issues/502)

なお、今週は22件のIssueがクローズされ、23件のPRがマージされています。すべてのクローズされたIssueやマージPRの詳細はGitHubリポジトリでご確認ください。

## 現在進行中のタスク・議論

引き続き未完了のIssueも多数あり、活発な議論が進められています。特に以下のIssueは多くの場面で役立ちそうですので、興味のある方はぜひ参加してみてください。

- [Issue #515](https://github.com/digitaldemocracy2030/kouchou-ai/issues/515)  
  別のレポートで実行したUMAPの結果を使い回す構想。時系列比較や一貫した見え方を実現できるか議論中です。

- [Issue #513](https://github.com/digitaldemocracy2030/kouchou-ai/issues/513), [Issue #514](https://github.com/digitaldemocracy2030/kouchou-ai/issues/514)  
  抽出処理の結果が毎回変わる問題への取り組み。乱数シードの固定や並列実行結果の順序管理で、分析結果の再現性を高める方針が話し合われています。

- [Issue #509](https://github.com/digitaldemocracy2030/kouchou-ai/issues/509)  
  Windows環境でDockerを使わずに動かせるようにする手順を整備。社内PCでDocker Desktopが使えない環境向けに検討が進んでいます。

- [Issue #503](https://github.com/digitaldemocracy2030/kouchou-ai/issues/503)  
  AIに故意の個人情報を生成・埋め込みさせた上で、除去率を測定する実験についてのアイデア。個人情報保護の観点で注目されています。

その他にも新機能や改善案が多く提案されています。多方面の知見やユースケースが必要とされる内容が多いため、ぜひ皆さんのご意見をお寄せください。

## コミュニティへの参加をお待ちしています

広聴AIプロジェクトは、UI/UX改善や機能追加、ドキュメント整備など多様なコントリビューションを歓迎しています。技術的な実装だけでなく、要望や不具合報告、デザイン面のフィードバック、自治体での実践レポートなど、あらゆる形での参加がプロジェクトの発展につながります。

- 新機能の提案や議論に参加する場合は [Issues](https://github.com/digitaldemocracy2030/kouchou-ai/issues) をご覧ください。  
- 功能改善やバグ修正のPR歓迎！使ってみて「ちょっと直したい」と思ったら遠慮なくトライしてください。  
- Slackなどのコミュニケーションチャンネルでも情報交換を積極的に行っています。ぜひOSS開発に参加してみましょう。

今後とも、より多くの方々のご協力をお待ちしています。次回のアップデートもどうぞお楽しみに！