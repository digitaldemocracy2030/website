# Polimoney 7/16~7/23 のGitHub活動まとめ

今週は多数のIssueが完了し、バックエンド環境構築や認証・テスト周りのPull Requestが一気にマージされました。また、テストコードや依存管理など、今後の開発を安定させるための新しい取り組みが始まっています。ここでは、まず完了したIssueとマージされたPRを紹介し、その後、まだ議論が続いているIssueやPRをまとめます。

---

## 今週完了したIssue

以下の7件がクローズされました。開発者ではない方にとっては分かりづらい内容もありますが、新機能や改善点を知る絶好の機会です。

- [Issue #131](https://github.com/digitaldemocracy2030/polimoney/issues/131)  
  渉外時の承諾確認リストを作成し、営業資料に追加するフローが整いました。

- [Issue #129](https://github.com/digitaldemocracy2030/polimoney/issues/129)  
  セキュリティアラートが解消されました。今後も [Issue #158](https://github.com/digitaldemocracy2030/polimoney/issues/158) でのdependabot設定により、自動化が進みそうです。

- [Issue #104](https://github.com/digitaldemocracy2030/polimoney/issues/104)  
  OCRの出力項目にプロフィール情報を追加し、ウェブ表示に必要な情報セクションを拡充。  
  （ここで [Issue #80](https://github.com/digitaldemocracy2030/polimoney/issues/80) との関連が深かったため、議論が活かされました。）

- [Issue #102](https://github.com/digitaldemocracy2030/polimoney/issues/102)  
  「Coming Soon..」パネルをUIに追加。ユーザーが今後の機能に期待を寄せやすくなりました。

- [Issue #80](https://github.com/digitaldemocracy2030/polimoney/issues/80)  
  converter.ts 出力の可視化ページの表示対応。出力ファイルを取り込んでページを動的に生成できるようになり、OCR～UI間のフローが向上。

- [Issue #29](https://github.com/digitaldemocracy2030/polimoney/issues/29)  
  E2E動作確認が完了。OCRからHTML出力までを通して確認し、最小限の精度でも通しで動くようになりました。

- [Issue #22](https://github.com/digitaldemocracy2030/polimoney/issues/22)  
  収支報告書のスキーマ定義が完了。複雑な紙・PDF・Excelデータを整理し、今後のデータ管理に役立つ基盤ができました。

---

## 今週マージされたPull Request

この1週間で10件のPRがマージされました。PRの主な作者は「shumizu418128」さん、「adust09」さん、「kuboon」さんなどです。AIアシスタントからの自動生成文も混じっていますが、人間のレビューを経て完成した内容となっています。

1. [PR #164](https://github.com/digitaldemocracy2030/polimoney/pull/164) (by shumizu418128)  
   README.mdのGoインストール要件を修正し、Go1.23以上でもビルドできるようにしました。

2. [PR #163](https://github.com/digitaldemocracy2030/polimoney/pull/163) (by adust09)  
   バックエンドのテストを充実化してモデル・ミドルウェアで高いカバレッジを達成。  
   → [Issue #159](https://github.com/digitaldemocracy2030/polimoney/issues/159) をクローズ。

3. [PR #162](https://github.com/digitaldemocracy2030/polimoney/pull/162) (by kuboon)  
   preview用ページを追加。URLパラメータでJSONを指定し、それを元にしたプレビューを表示可能に。

4. [PR #161](https://github.com/digitaldemocracy2030/polimoney/pull/161) (by shumizu418128)  
   認証機能を実装。JWT認証により保護されたルートを導入し、権限管理を強化。

5. [PR #160](https://github.com/digitaldemocracy2030/polimoney/pull/160) (by shumizu418128)  
   GORM導入。生SQLをリファクタリングし、データベース操作をORMで統合管理。

6. [PR #157](https://github.com/digitaldemocracy2030/polimoney/pull/157) (by shumizu418128)  
   Dockerfileに日本のタイムゾーン設定を追加。サーバーのログやタイムスタンプが日本時間で扱えるように。

7. [PR #156](https://github.com/digitaldemocracy2030/polimoney/pull/156) (by shumizu418128)  
   開発環境のDocker Compose設定。PostgreSQLが自動起動し、仮データを投入して即テストできるように。

8. [PR #155](https://github.com/digitaldemocracy2030/polimoney/pull/155) (by shumizu418128)  
   GoサーバーとPostgreSQLをDockerで起動するひな形を追加。プロジェクトの基盤が整いました。

9. [PR #154](https://github.com/digitaldemocracy2030/polimoney/pull/154) (by shumizu418128)  
   環境変数PORTを取得するようにし、サーバー起動時にログを出力。利便性が向上。

10. [PR #153](https://github.com/digitaldemocracy2030/polimoney/pull/153) (by shumizu418128)  
    バックエンドのhello world実装。Goを使ったサーバーの最初の一歩を踏み出しました。

---

## 未完了のIssue・議論中のポイント

新しい機能や改善へ向けた議論が続いているIssueです。この機会にぜひコメントやご意見をお寄せください！

- [Issue #158](https://github.com/digitaldemocracy2030/polimoney/issues/158) (by adust09)  
  「dependabotを設定する」  
  セキュリティ更新を自動化するための設定がこれから進行。テストが通れば自動マージする運用を検討中。

- [Issue #118](https://github.com/digitaldemocracy2030/polimoney/issues/118) (by dotneet)  
  「サンキー図が見づらくなる問題」  
  カテゴリ数・深さが増えると視覚的に混乱しがち。 “その他”扱いなど階層制御の案が出ています。

- [Issue #32](https://github.com/digitaldemocracy2030/polimoney/issues/32) (by nanocloudx)  
  「データベース移行」  
  今までGitHub PagesにハードコードしていたデータをPostgresに移す計画が進行中。フロントエンドでのデータ参照もAPI経由に統一を検討しています。

- [Issue #159](https://github.com/digitaldemocracy2030/polimoney/issues/159)  
  すでにテストコードが追加され [PR #163](https://github.com/digitaldemocracy2030/polimoney/pull/163) によってクローズ済みですが、新たなテスト拡充の話題も続いています。

---

## 更新されたがまだオープンなPull Request

- [PR #113](https://github.com/digitaldemocracy2030/polimoney/pull/113) (by shumizu418128)  
  「報告書の基本情報をdemo-ryosukeidei.tsに合わせて設定」  
  出力形式の詳細や、既存の既定データとどう同期させるかについて議論中。OCR出力の仕様拡張と連動するため、引き続きレビューのご協力をお願いします。

---

# 今後の参加呼びかけ

- まだまだ議論中のIssue・PRがあります。ぜひ気になるトピックにコメントしたり、Pull Requestを送ってみてください。  
- サンキー図の見た目改善やdependabotによる自動化など、ユーザーにとっても今後の使い勝手に大きく関わるテーマです。UI/UX面、セキュリティ面など多方面のアイデア・フィードバックを募集中です！  
- 新しく参加してみたい方は、[開発環境構築の手順](https://github.com/digitaldemocracy2030/polimoney/pull/156)がDocker Composeで簡単になりましたので、お気軽にセットアップしてみてください。

今後ともPolimoneyの開発を盛り上げていきましょう。ご協力よろしくお願いします！