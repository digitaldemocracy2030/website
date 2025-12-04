# いどばたシステム 5/14~5/21のGitHub活動まとめ

いどばたシステム（digitaldemocracy2030/idobata）でのGitHub上の開発・議論状況をまとめました。OSS開発に参加してみたい方、最新の試作品を触ってみたい方はぜひ参考にしてみてください。

---

## 今週完了した主な項目

### クローズされたIssue（3件）
以下のIssueが解決されました。実際に使ってみると、新機能や改善された点を体験できます。

- [Issue #202](https://github.com/digitaldemocracy2030/idobata/issues/202) [UI] チャット内で改行したい  
  - 作成者: masatosasano2  
  - 対応により「Shift+Enter」で改行できるようになり、複数行の入力がしやすくなりました。
- [Issue #201](https://github.com/digitaldemocracy2030/idobata/issues/201) [UI] チャット入力欄へのfocusの改善  
  - 作成者: masatosasano2  
  - スマホで入力したあともカーソルが外れにくくなり、連続してチャットを書き込めるように改善されました。
- [Issue #84](https://github.com/digitaldemocracy2030/idobata/issues/84) ワイヤフレームに存在する画面を一通り揃え、開発者がイメージを持ちやすくしつつ、開発を行う際の雛形を作成する(管理画面)  
  - 作成者: jujunjun110  
  - 画面の雛形が整備されたことで、開発者も非開発者も全体像を把握しながら開発できるようになっています。

### マージされたPull Request（19件）

今週は多数のPRがマージされ、新機能追加やUI向上など多岐にわたる改善が行われました。ここでは主なものを紹介します。

- [PR #337](https://github.com/digitaldemocracy2030/idobata/pull/337) Update: リンクワーカーが意見を紐づけるときにテーマIDを参照するように変更  
  - 作者: jujunjun110  
  - 他のテーマの意見が誤って紐づくバグを修正。話題設定がより正確に。
- [PR #334](https://github.com/digitaldemocracy2030/idobata/pull/334) Add: factcheck function  
  - 作者: jujunjun110  
  - ファクトチェック機能のプロトタイプ。提案やコメントの裏付け確認を行う布石に。
- [PR #322](https://github.com/digitaldemocracy2030/idobata/pull/322) Feature/chat layout  
  - 作者: jujunjun110  
  - PC版のチャットレイアウトを右側固定に変更し、より画面を広く使えるように改善。
- [PR #299](https://github.com/digitaldemocracy2030/idobata/pull/299) チャットプロンプトに表示中のドキュメント名を追加  
  - 作者: Shutaro Aoyama+Devin  
  - ユーザーがどのファイルのチャットをしているか分かりやすくなり、混乱を防止。
- [PR #259](https://github.com/digitaldemocracy2030/idobata/pull/259) チャットUIでShift+Enterで改行できるように修正  
  - 作者: Satoru Horie+Devin  
  - [Issue #202](https://github.com/digitaldemocracy2030/idobata/issues/202) を解決したPR。複数行の入力需要に対応。

他にもUI/UX向上やバックエンドの改善など、多くの開発者が活発に貢献しています。

---

## まだ進行中のタスクと議論

今週は28件の新規Issueが立てられ、日々改善案の提案や議論が行われています。ここでは一部を紹介します。

- [Issue #336](https://github.com/digitaldemocracy2030/idobata/issues/336) 論点ページがどのテーマの論点なのかわからない  
  - テーマ階層がパンくずリストで分かりにくくなっており、改善策が検討されています。  
- [Issue #332](https://github.com/digitaldemocracy2030/idobata/issues/332) 強い意見がマージされなかった場合の対処と運営者匿名性について  
  - 多様な意見を取り込むための方針や進め方をどうするかが議論中。
- [Issue #330](https://github.com/digitaldemocracy2030/idobata/issues/330) 長文を貼り付けると、元データの大半が書き換えられてしまう  
  - 長文のコピペによるデータ書き換えリスクについて、ユーザー体験の安全策を検討。
- [Issue #329](https://github.com/digitaldemocracy2030/idobata/issues/329) １つのチャットで別の話題を話した場合は、別のスペースに誘導してほしい  
  - PRが肥大化しないように、話題ごとの分割やユーザー誘導の仕組みが必要という声が挙がっています。

これらのIssueはまだクローズされておらず、よりよい解決策を模索しながら開発が進行中です。興味深いテーマがあれば、ぜひIssueのコメント欄で参加してみてください！

---

## 参加の呼びかけ

- いどばたシステムは多様なコントリビューターの力で進化しています。開発経験がなくても、UIの改善提案やドキュメント整備など、さまざまな貢献が可能です。  
- これから実装・議論が必要な課題も多数あります。IssueへのコメントやPull Requestでの提案、大歓迎です。  
- 誰でも使いやすいデジタル民主主義プラットフォームを目指して、一緒にいどばたシステムを育てていきましょう！  