# 広聴AI 第3週（3/27~4/2）のGitHub活動まとめ

以下は、3月27日～4月2日の間に行われた活動のまとめです。  
新しくOSS開発に参加する方が「どんな機能ができたか」「どんな議論が進行中か」を把握するきっかけにしていただければ幸いです。

---

## 今週完了したタスク

1. **CIでpytestを実行（Issue [#205](https://github.com/digitaldemocracy2030/kouchou-ai/issues/205))**  
   - **PR [#206](https://github.com/digitaldemocracy2030/kouchou-ai/pull/206) by nasuka**  
   - GitHub Actionsでpytestを導入し、プルリク作成時にテストが自動実行されるようになりました。

2. **コード貢献プロセスの整備（Issue [#201](https://github.com/digitaldemocracy2030/kouchou-ai/issues/201))**  
   - **PR [#202](https://github.com/digitaldemocracy2030/kouchou-ai/pull/202) by nasuka**  
   - CONTRIBUTING.md が更新され、PR作成時のルールや「👍 の件数が優先度に反映される」点などが明文化されました。

3. **server開発時のコンテナ起動手順をREADMEに明記（Issue [#199](https://github.com/digitaldemocracy2030/kouchou-ai/issues/199))**  
   - **PR [#203](https://github.com/digitaldemocracy2030/kouchou-ai/pull/203) by ei-blue**  
   - serverディレクトリのREADMEが最新化され、正しい手順でコンテナを起動できるように修正されました。

4. **静的ビルド時の画像404を修正（Issue [#196](https://github.com/digitaldemocracy2030/kouchou-ai/issues/196))**  
   - **PR [#197](https://github.com/digitaldemocracy2030/kouchou-ai/pull/197) by shgtkshruch**  
   - 静的HTML出力（static build）した際に画像が表示されない不具合を解消。あわせてビルド成果物の取り扱いが改善されています。

5. **環境変数変更時はdocker compose up --buildが必要（Issue [#191](https://github.com/digitaldemocracy2030/kouchou-ai/issues/191))**  
   - **PR [#192](https://github.com/digitaldemocracy2030/kouchou-ai/pull/192) by nasuka**  
   - 環境変数を書き換えた際の再ビルド手順が明記され、フロントとサーバーのAPIキー不一致などのトラブルを回避できます。

6. **OGPカードを魅力的に（Issue [#140](https://github.com/digitaldemocracy2030/kouchou-ai/issues/140))**  
   - **PR [#209](https://github.com/digitaldemocracy2030/kouchou-ai/pull/209) by shgtkshruch**  
   - SNSシェア時に表示されるOGP画像を自動生成し、見た目や情報量が向上しました。

7. **パブコメ形式のレポート出力に対応（Issue [#105](https://github.com/digitaldemocracy2030/kouchou-ai/issues/105))**  
   - **PR [#194](https://github.com/digitaldemocracy2030/kouchou-ai/pull/194) by ei-blue**  
   - CSV形式で元コメントを含む出力が可能になり、行政機関などが行うパブコメ集計に近い形式でレポートを利用できます。  
   - さらにREADMEにもパブコメモードに関する説明が追加されました（PR [#204](https://github.com/digitaldemocracy2030/kouchou-ai/pull/204) by ei-blue）。

8. **静的ビルド（static build）のドキュメント整備（Issue [#53] ほか）**  
   - **PR [#195](https://github.com/digitaldemocracy2030/kouchou-ai/pull/195), [#197](https://github.com/digitaldemocracy2030/kouchou-ai/pull/197), [#198](https://github.com/digitaldemocracy2030/kouchou-ai/pull/198) by shgtkshruch**  
   - クライアントを静的ファイル（outディレクトリ）として出力できるようになり、合わせて手順のドキュメントも追加されました。

これらはエンジニア以外の方にも新機能としてご利用いただけるものが多いので、ぜひ試してみてください。PR作成に貢献いただいたnasukaさん、shgtkshruchさん、ei-blueさん、takahiroannoさんなどのご協力に感謝します。

---

## 進行中・未完了のタスクと議論

- **新規レポートがクライアント側一覧に表示されない（Issue [#212](https://github.com/digitaldemocracy2030/kouchou-ai/issues/212)）**  
  - 未完了のバグ報告。ISRによる数分の遅延ではなく、5分経っても一覧に表示されないことがあり調査中です。

- **OOM発生時の事後処理（Issue [#211](https://github.com/digitaldemocracy2030/kouchou-ai/issues/211)）**  
  - 大量データを処理中にメモリ不足でプロセスが落ちる場合に、ステータスが「処理中」のままにならないよう対策を検討中。

- **Azureデプロイ更新手順を簡略化（Issue [#214](https://github.com/digitaldemocracy2030/kouchou-ai/issues/214)）**  
  - PR [#215](https://github.com/digitaldemocracy2030/kouchou-ai/pull/215)（Draft）が提出され、Makefileのターゲットをまとめてデプロイをしやすくする案が議論されています。

- **フロントから静的HTMLを直接エクスポートする機能（Issue [#220](https://github.com/digitaldemocracy2030/kouchou-ai/issues/220)）**  
  - Static Build とは別に、ボタン一つで現在のレポート画面をHTMLダウンロードする方法が検討中です。

- **クラスタ数を直接入力可能に（Issue [#222](https://github.com/digitaldemocracy2030/kouchou-ai/issues/222)）**  
  - 大量データ時にスライダー操作が煩雑になる問題を解決するため、手打ち入力案が出ています。

- **Permissionエラー（Issue [#225](https://github.com/digitaldemocracy2030/kouchou-ai/issues/225)）**  
  - 2回目以降のstatic buildでディレクトリ削除時にパーミッションエラーが発生する報告があり、再現検証や回避策の検討が行われています。

- **設定画面のUI改善（Issue [#227](https://github.com/digitaldemocracy2030/kouchou-ai/issues/227)）**  
  - 「最小クラスタサイズの上限はもっと段階的に」「設定画面のレイアウト変更」などの提案があり、UIデザインの修正を検討中です。

- **ほか各種機能提案・バグ報告**  
  - CSVアップロード方法の効率化（Issue [#186](https://github.com/digitaldemocracy2030/kouchou-ai/issues/186)）、LLMベースの新しい分類手法（Issue [#176](https://github.com/digitaldemocracy2030/kouchou-ai/issues/176)）など、多数のアイデアが出ています。

これらの未完了タスクでは、アイデアの追加・検証協力など大歓迎です。「こうしたらいいのでは？」と思ったことがあれば、ぜひIssueにコメントをお願いします。皆さんのディスカッションやプルリクでプロジェクトがさらに発展していきますので、ぜひご参加ください！