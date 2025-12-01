# Polimoney 4/30〜5/07 のGitHub活動まとめ

この一週間（2025-04-30T16:23:22.865006+09:00 ～ 2025-05-07T16:23:22.865006+09:00）におけるPoliMoneyリポジトリの活動報告です。興味を持っていただいた方は、ぜひIssueやPull Requestをのぞいてみてください。OSSの開発はまだまだこれから。どんな意見でも大歓迎です！

---

## 今週完了したもの（マージされたPR）
機能の追加や改善が反映されたPRをまとめました。開発者でない方にとっても「このあたりが新しくなったんだ！」と参考になるはずです。

### [PR #37](https://github.com/digitaldemocracy2030/polimoney/pull/37) フロントエンド：スキーマ変更２
- 作者: nanocloudx
- スキーマ変更の後半戦。データベース側を見据えて、TypeScriptの型をReport型に統合しました。  
- 政治家情報(Profiles)や収支報告書(Reports)などを最終的に3つのテーブル構成にする計画が進行中です。

### [PR #36](https://github.com/digitaldemocracy2030/polimoney/pull/36) フロントエンド：スキーマ変更
- 作者: nanocloudx
- [Issue #22](https://github.com/digitaldemocracy2030/polimoney/issues/22) 対応の一環。既存のコンポーネントをリネームしつつ、データベースに移行していくための下準備を行いました。  
- フロントで使われていたコンポーネントを整理することで、これからAPI・DB連携がしやすくなります。

### [PR #28](https://github.com/digitaldemocracy2030/polimoney/pull/28) linterをPR作成時に走らせる設定の追加
- 作者: tdaira
- Pull Requestを作った際に自動でlintが走るように、GitHub Actionsのセットアップを追加。  
- コードチェックの抜け漏れを防止し、品質維持に役立ちます。

---

## 未完了のタスク・議論状況
今週は0件のIssueがクローズされましたが、新しいIssueの作成や既存Issueでの議論が活発化しています。また新しいPRも多数立ち上がっています。ぜひコメントやレビューをお寄せください。

### 新しく作成されたIssue
今週は全部で8件のIssueがオープンされました。プロジェクトの広報だけでなく、技術的なものも含まれています。

- [Issue #41](https://github.com/digitaldemocracy2030/polimoney/issues/41) 対内外向け[資料露出]  
  - 作者: cKinu  
  - プロジェクトの認知拡大を目的とした広報手段の整理。PRTIMESや公式YouTubeなどの利用を検討中です。

- [Issue #40](https://github.com/digitaldemocracy2030/polimoney/issues/40) 対内外向け[資料作成]  
  - 作者: cKinu  
  - プロジェクト向けの資料、営業資料、ビューアー向けのプレゼン資料など、用途別に作成するタスクです。

- [Issue #34](https://github.com/digitaldemocracy2030/polimoney/issues/34) Pythonのlinter、formatterを導入する  
  - 作者: tdaira  
  - 型チェック等を少しずつ導入して開発品質を向上させる予定。先ほどの[PR #28](https://github.com/digitaldemocracy2030/polimoney/pull/28)とあわせて、コード整備が進む見込みです。

- [Issue #33](https://github.com/digitaldemocracy2030/polimoney/issues/33) ドキュメントを整理する  
  - 作者: adust09  
  - 新規開発者向けにDevinWikiなどを活用してドキュメント自動生成を行いたいという提案。

- [Issue #32](https://github.com/digitaldemocracy2030/polimoney/issues/32) データベース移行  
  - 作者: nanocloudx  
  - これまでGitHub Pagesで最低限のデータを掲載していましたが、今後の拡張を見据えてPostgresへの移行を検討中。

- [Issue #31](https://github.com/digitaldemocracy2030/polimoney/issues/31) 議論：収支報告書に不記載(裏金)の情報について  
  - 作者: nanocloudx  
  - 公的に提出される収支報告書に載っていない資金（裏金）をどう扱うか？という問題提起。実際には把握が難しく、ディスカッションが続いています。

- [Issue #30](https://github.com/digitaldemocracy2030/polimoney/issues/30) 議論：個人献金の個人情報を隠す必要性について  
  - 作者: nanocloudx  
  - 収支報告書には個人名や住所がそのまま載るケースがあるため、プライバシー保護について議論が行われています。

- [Issue #29](https://github.com/digitaldemocracy2030/polimoney/issues/29) E2E動作確認（つなぎこみ）  
  - 作者: nanocloudx  
  - OCRからHTML出力まで実際に動かしてみて検証するタスク。多少の精度低下は許容して、とにかく流れを確立する方針です。

### 議論中のIssue（更新あり）
クローズはされていませんが、コメントやステータス更新があったIssueです。  
- [Issue #21](https://github.com/digitaldemocracy2030/polimoney/issues/21) 支出のどれが税金で賄われているか明示  
- [Issue #20](https://github.com/digitaldemocracy2030/polimoney/issues/20) 収支報告書のフォーマット調査  
- [Issue #19](https://github.com/digitaldemocracy2030/polimoney/issues/19) OCR（画像認識）の精度強化  

### 新しく作成されたPR
ここではマージ前の新規PRを紹介。コードレビュー・議論を歓迎しています。

- [PR #44](https://github.com/digitaldemocracy2030/polimoney/pull/44) gemini 2.5 pro preview 05-26 導入  
  - 作者: shumizu418128  
  - OCRモデルGeminiのアップデート導入提案。

- [PR #43](https://github.com/digitaldemocracy2030/polimoney/pull/43) docs: Add Japanese translation of project documentation  
  - 作者: obama00300+Devin  
  - プロジェクトドキュメントの日本語翻訳を追加。Devin AIアシスタントが補助。obama00300さんが主導的に進めています。

- [PR #42](https://github.com/digitaldemocracy2030/polimoney/pull/42) Devin wikiコンテンツのドキュメント追加  
  - 作者: obama00300+Devin  
  - GitHub Wikiが有効になった時に利用できる、Devinとの協働に関するドキュメント。

- [PR #39](https://github.com/digitaldemocracy2030/polimoney/pull/39) 収支報告書の表現に合わせて修正  
  - 作者: shumizu418128  
  - 「翌年度への繰越」を「翌年への繰越額」に統一するなど、表示上の文言を細かく修正するPR。

- [PR #38](https://github.com/digitaldemocracy2030/polimoney/pull/38) all.jsonをsample_input.json形式に変換するスクリプト  
  - 作者: hagi5  
  - データ整形スクリプト追加。OCRや解析結果を後工程で使いやすい形にするための提案です。

- [PR #35](https://github.com/digitaldemocracy2030/polimoney/pull/35) E2Eテストで発生したエラーの修正  
  - 作者: shumizu418128  
  - [Issue #29](https://github.com/digitaldemocracy2030/polimoney/issues/29)の動作確認で発生したエラー修正。poppler周りの対応なども含まれています。

### 更新されたPR
- [PR #24](https://github.com/digitaldemocracy2030/polimoney/pull/24) update readme  
  - 作者: adust09  
  - AIで生成したREADMEをベースに、一部コマンドなどを検証中。最終調整が進められています。

---

## 貢献者と呼びかけ
- 今回の開発・議論には、nanocloudxさん、tdairaさん、shumizu418128さん、cKinuさん、adust09さん、hagi5さん、obama00300+Devinなど、多様なメンバーが参加しています。  
- 新機能提案やドキュメント作成、広報施策など、非エンジニアの方でも関わりやすい活動が増えています。  
- ぜひ「自分にもできそう」と感じたタスクにコメントしたり、ドキュメントをレビューしてみてください。OSS開発は誰でも参加が可能です。

---
 
今後も引き続きPolimoneyリポジトリの成長にご注目ください。あなたの意見や提案がプロジェクトを前進させます。新しい参加者、大歓迎です！