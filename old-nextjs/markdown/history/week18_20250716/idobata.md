# いどばたシステム 7/9~7/16のGitHub活動まとめ

いどばたシステム（digitaldemocracy2030/idobata）の2025-07-09から2025-07-16にかけてのGitHub上での活動をまとめました。  
OSS開発に興味を持っていただけるよう、新しく完了したIssueやPRと、まだ進行中のタスク・議論について紹介します。  
ぜひ気になったトピックがあれば、積極的にご参加ください！

---

## 完了したIssue

- [Issue #412](https://github.com/digitaldemocracy2030/idobata-analyst/issues/412)  
  作成者: nishidashib  
  → API側のCORSエラー判定を緩和し、環境変数にスペースが入っても正しくURLが認識されるように修正されました。CORS関連のトラブルに悩んでいた方には嬉しいアップデートです。

---

## 過去7日間にマージされたPR

以下の6件は無事マージされ、機能改善やバグ修正が反映されています。誰が何を実装してくれたかをぜひチェックしてみてください。

1. [PR #426](https://github.com/digitaldemocracy2030/idobata-analyst/pull/426) (作成者: Shutaro+Devin)  
   - モバイル表示のチャットボタンに明示的なテキスト「質問してみよう」を追加し、見つけやすさを改善。  
   - UIテストでのモバイル環境検証が示されており、細かな画面幅にも対応しています。

2. [PR #423](https://github.com/digitaldemocracy2030/idobata-analyst/pull/423) (作成者: Shutaro+Devin)  
   - 「話題を変える」ボタンを押したときのメッセージを、より具体的に「このテーマに関して別の話題を話しましょう」と変更。  
   - ユーザーが今扱っているテーマを意識したチャット切り替えができるよう配慮されています。

3. [PR #422](https://github.com/digitaldemocracy2030/idobata-analyst/pull/422) (作成者: Shutaro+Devin)  
   - 「会話を終了」ボタンを新設。話題をリセットしたいときの明確な手段ができました。  
   - モバイル向けの配置にも工夫が施され、使いやすさを向上。

4. [PR #419](https://github.com/digitaldemocracy2030/idobata-analyst/pull/419) (作成者: Shutaro+Devin)  
   - 新規ユーザーの表示名生成をバックエンドに一本化。  
   - 例: 「ウグイス03464」といったユニークな表示名が自動付与されます。

5. [PR #417](https://github.com/digitaldemocracy2030/idobata-analyst/pull/417) (作成者: Shutaro+Devin)  
   - 質問ページ（論点ページ）専用のチャットに、関連する問題や解決策を取得して文脈を付与。  
   - テーマページとの動作差を明確化し、情報量の多い質問チャットを強化。

6. [PR #413](https://github.com/digitaldemocracy2030/idobata-analyst/pull/413) (作成者: nishidashib)  
   - [Issue #412](https://github.com/digitaldemocracy2030/idobata-analyst/issues/412) を解決する修正。  
   - 環境変数のスペース混在でもCORSエラーが起こらないよう、trim処理を導入しました。

---

## まだ進行中のPRや議論

下記のPRは新たに作成されたか、あるいは最近更新されています。大きな機能追加や改修も含まれているので、興味のある方はぜひコメントやレビューをお願い致します。

- [PR #427](https://github.com/digitaldemocracy2030/idobata-analyst/pull/427) (作成者: chaspy)  
  - READMEページからリポジトリ全体を検索できる新機能の提案。GitHub Search APIを活用し、レート制限回避やスニペット表示を実現。

- [PR #425](https://github.com/digitaldemocracy2030/idobata-analyst/pull/425) (作成者: Shutaro+Devin)  
  - 新ユーザーにランダムなプロフィール画像を割り当てる機能。すでにディスプレイネームのランダム生成が導入されており、今後はアイコンも自動生成予定。

- [PR #424](https://github.com/digitaldemocracy2030/idobata-analyst/pull/424) (作成者: Shutaro+Devin)  
  - 会話開始を示すパラメータ（isConversationStart）を追加し、空メッセージではなく「こんにちは！」による自動あいさつを実装。

- [PR #421](https://github.com/digitaldemocracy2030/idobata-analyst/pull/421) (作成者: Shutaro+Devin)  
  - 「話題を変える」ボタンのメッセージをページコンテキスト（テーマ or 論点）に応じて動的に変更する提案。

- [PR #420](https://github.com/digitaldemocracy2030/idobata-analyst/pull/420) (作成者: Shutaro+Devin)  
  - 新規チャットスレッド作成時に、AIによる自動挨拶を行う仕組みを提案。  
  - MongoDBとの接続で一部テストが必要。

- [PR #418](https://github.com/digitaldemocracy2030/idobata-analyst/pull/418) (作成者: Shutaro+Devin)  
  - AI挨拶ロジックのリファクタリング。コード重複を削減し、保守性を向上。

- [PR #416](https://github.com/digitaldemocracy2030/idobata-analyst/pull/416) (作成者: Shutaro+Devin)  
  - 重複していたチャット通知メッセージを一度しか出さないよう修正。UI周りの体験向上に寄与。

- [PR #415](https://github.com/digitaldemocracy2030/idobata-analyst/pull/415) (作成者: Shutaro+Devin)  
  - policy-editフロントエンドでのエラーメッセージを統一し、ユーザーにわかりやすい日本語表示へ一本化。

- [PR #414](https://github.com/digitaldemocracy2030/idobata-analyst/pull/414) (作成者: Shutaro+Devin)  
  - サーバーサイドのSSE（Server-Sent Events）によるリアルタイムチャットストリーミング機能を検討中。大規模な更新になる予定で、引き続きレビュー募集中。

---

## 参加の呼びかけ

- 新機能追加やUI改善など、多岐にわたるPRが存続中です。気になるものを見つけたら、ぜひコメントやレビュー参加をお願いします。
- コードを書く以外にも、仕様検討や要望提案など、あらゆる形での貢献がOSSプロジェクトを盛り上げます。
- 初心者の方も大歓迎です。疑問点があれば「質問してみよう」ボタンから気軽に質問してください。  

これからも「いどばたシステム」へのご協力をよろしくお願いします。  