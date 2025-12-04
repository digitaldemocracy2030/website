# PoliMoney 4/23~4/30 のGitHub活動まとめ

今週もたくさんのIssueやPRが立ち上がり、いくつかは無事マージされました。OSS開発を進めるための新機能実装や検討が着々と進んでいます。ここでは、今週「完了したこと」と「未完了タスクで進んでいる議論」をまとめて紹介します。ぜひ内容をご覧いただき、興味を持った方はお気軽に参加してください！

---

## 今週完了した主な内容

### [Issue #13](https://github.com/digitaldemocracy2030/polimoney/issues/13) OGPタグを書く → 完了
- 作成者: takahiroanno  
- SNSでシェアした際に、OGPカードを正しく表示できるようにするというIssueでした。  
- 対応PR: [PR #26](https://github.com/digitaldemocracy2030/polimoney/pull/26) (作成者: yuki-snow1823)  
  - サンプルデータ用のOGP画像生成機能をPuppeteerで実装。diagramsなどをスクリーンショットとしてOGPカードに使えるようにしたとのことです。  
  - 新しいOGP式のSNSシェアができるようになり、プロジェクトの認知度向上に期待が高まります。

### Linter関連設定
- [PR #28](https://github.com/digitaldemocracy2030/polimoney/pull/28) (作成者: tdaira)  
  - GitHub ActionsでPR作成時にLinterを自動実行する仕組みが追加されました。コードのチェック忘れを未然に防げるため、コントリビュータ全員にとってメリットがあります。  
- 併せて、新規PRとして[PR #27](https://github.com/digitaldemocracy2030/polimoney/pull/27) (同じくtdaira)が作成されましたが、こちらはまだマージ待ちです。興味のある方はレビューをお願いします。

### 開発者向けのコード改善
- [PR #23](https://github.com/digitaldemocracy2030/polimoney/pull/23) (作成者: shumizu418128)  
  - 手書き文字かどうかを判定する機能を追加することで、OCR精度の向上や管理画面でのエラー検知が容易になりました。訂正印を含んだ文字列の読み取りも強化を目指しているそうです。  
- [PR #16](https://github.com/digitaldemocracy2030/polimoney/pull/16) (作成者: shumizu418128)  
  - docstring（コードの説明コメント）を整備し、コード読解をサポート。OSS初参加者にとって理解しやすい形に近づきました。  
- [PR #11](https://github.com/digitaldemocracy2030/polimoney/pull/11) (作成者: shumizu418128)  
  - JSONスキーマを活用してGemini APIの出力をより安定化させる仕組みを導入。今後のOCR自動化やデータパイプライン整備に役立ちそうです。

---

## 未完了 / 議論進行中のタスク

今週は新たに7件のIssueが立ち上がりました。開発を円滑に進めるための基盤整備やデータ取得の方法論など、多岐にわたっています。特に以下のIssueは大きなテーマを含み、皆さんの議論参画を歓迎します！

1. [Issue #25](https://github.com/digitaldemocracy2030/polimoney/issues/25) devcontainerを設定する  
   - 作成者: adust09  
   - 開発環境統一のために、`.devcontainer`を使ったDocker + VSCodeのセットアップを検討中。  
   - 新規開発者のオンボーディングを容易にし、CI/CDとも一貫性を持たせる狙いがあります。

2. [Issue #22](https://github.com/digitaldemocracy2030/polimoney/issues/22) 収支報告書のスキーマ定義  
   - 作成者: nanocloudx  
   - 紙やPDFの収支報告書をCSV/JSONへ転記する時の汎用スキーマを議論中。  
   - 重複や欄外の扱い、日付形式など、実務を踏まえた示唆が盛り込まれています。ぜひ意見をお寄せください。

3. [Issue #21](https://github.com/digitaldemocracy2030/polimoney/issues/21) 支出のどれが税金で賄われているか明示  
   - 作成者: shumizu418128  
   - 国会議員の支出のうち、税金が原資になっている部分をより分けて見せる仕組みを検討中。  
   - 公的資金をどのように使っているか透明化するアイデアです。

4. [Issue #20](https://github.com/digitaldemocracy2030/polimoney/issues/20) 収支報告書のフォーマット調査  
   - 作成者: shumizu418128  
   - 都道府県や各団体ごとに異なるフォーマットの実例・パターンを洗い出し中。  
   - 多様な書式に対応するために、まずは現状把握が急務です。

5. [Issue #19](https://github.com/digitaldemocracy2030/polimoney/issues/19) OCR（画像認識）の精度強化  
   - 作成者: shumizu418128  
   - 読み取りログの記録方法や手書き/訂正印の扱いについて検討中。  
   - 今後の高精度化に向けた重要な基礎議論が続いています。

6. [Issue #18](https://github.com/digitaldemocracy2030/polimoney/issues/18) issue templateを用意する  
   - 作成者: adust09  
   - 新規参加者向けのテンプレ整備で、課題の書き方を標準化する試みです。

7. [Issue #17](https://github.com/digitaldemocracy2030/polimoney/issues/17) データ引用元のURLを貼る  
   - 作成者: adust09  
   - どのデータを参照しているかリンクを付けて可視化し、プロジェクト全体の透明性を高めようという提案です。

### 新規PRでの検討
- [PR #27](https://github.com/digitaldemocracy2030/polimoney/pull/27) (作成者: tdaira)  
  - GitHub Actions上でLinterを走らせる仕組みを追加。先のPR #28の関連で、まだマージには至っていません。  
- [PR #24](https://github.com/digitaldemocracy2030/polimoney/pull/24) (作成者: adust09)  
  - README更新の提案。AIを活用して書いた内容とのことで、正確性の検証や追記などが求められています。

---

## 今後の参加方法

- まだまだ開発の初期フェーズで、上記Issuesには大きな伸びしろがあります。  
- 興味のある分野のIssueにコメントを残したり、PRを試してみたり、議論を盛り上げていただけると嬉しいです。  
- コード面だけでなく、アイデアや要件定義の段階からの参加もウェルカムです。

「こんな機能はどう？」「ここ、もっとこうしたほうが作業しやすいよ」など、小さな提案でも大歓迎です。ぜひ一緒にPoliMoneyを育てていきましょう！  