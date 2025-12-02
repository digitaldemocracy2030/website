# いどばたシステム 5/7~5/14のGitHub活動まとめ

いどばたシステムの開発に興味をお持ちいただき、ありがとうございます。今週は完了したタスクがいくつかありますので、ぜひ新機能や修正箇所をチェックしてみてください。また、まだ議論や作業が続いているタスクも多数あります。ぜひIssuesやPull Requestでご意見・ご提案をいただき、OSS開発にご参加ください！

---

## 今週完了した主なIssue

- [Issue #280](https://github.com/digitaldemocracy2030/idobata/issues/280)  
  - 個人情報生成＆除去率測定機能を追加する課題が完了しました。  
  - 作者: <人間>+Devin  
  - 生成した架空の個人情報が自然に文章へ埋め込まれ、削除率の測定が可能に。  
  - 利用者にはあまり直接目に見えない機能ですが、AIがより安全・安心に情報処理を行うための重要なアップデートです。

- [Issue #278](https://github.com/digitaldemocracy2030/idobata/issues/278)  
  - Issuesを自動的にProjectに追加するワークフローが導入されました。  
  - 作者: masatosasano2  
  - 今後、Issueが作成された際にProjectボードへの登録を自動化できるようになり、タスク管理がよりスムーズになります。

- [Issue #256](https://github.com/digitaldemocracy2030/idobata/issues/256)  
  - 「Shift+Enterで改行したい」というチャットUIの要望が実現。  
  - 作者: masatosasano2  
  - Enterでの送信と改行を切り分けられるようになり、チャット投稿が格段に使いやすくなりました。

- [Issue #131](https://github.com/digitaldemocracy2030/idobata/issues/131)  
  - 「もっと見る」ボタンのスタイルが他のボタンと統一されました。  
  - 作者: moai-redcap  
  - デザインがまとまり、全体的なUIも一貫性が高まりました。

---

## 今週マージされた主なPull Request

- [PR #281](https://github.com/digitaldemocracy2030/idobata/pull/281) (作者: ttizze)  
  - OGP(Open Graph/Twitter Card)メタ情報を追加し、いどばたへのリンクをSNSでシェアした際の表示を改善。  
  - シェア時に表示されるサムネイルや概要文がわかりやすくなるようになりました。

- [PR #255](https://github.com/digitaldemocracy2030/idobata/pull/255) (作者: Shutaro Aoyama+Devin)  
  - チャットのヘッダーに「話題を変える」ボタンを追加。  
  - ボタンひとつで新しい話題に切り替えられるため、複数の話題を続けてAIとやりとりしやすくなりました。

- [PR #251](https://github.com/digitaldemocracy2030/idobata/pull/251) (作者: tomoki2757+Devin)  
  - メタデータのタイトル（ブラウザタブ表示）を「いどばたビジョン」と「いどばた政策」に修正。  
  - 複数のタブを開いている時にも、どのページか一目でわかるようになりました。

---

## 議論・作業中の未完了タスク

今週は以下のIssuesやPRが新たに作成・更新され、活発な議論や作業が行われています。開発者はもちろん、利用者の皆さんが気になる点や提案をコメントしてくださると、よりよい仕組みに発展していきます。

### 新規作成または更新された主なIssue
- [Issue #277](https://github.com/digitaldemocracy2030/idobata/issues/277) チュートリアル実装の要望  
- [Issue #276](https://github.com/digitaldemocracy2030/idobata/issues/276) ロシア語表記が表示される不具合報告  
- [Issue #275](https://github.com/digitaldemocracy2030/idobata/issues/275) 「気になる」ボタンの活用策  
- [Issue #274](https://github.com/digitaldemocracy2030/idobata/issues/274) 新しい投稿が上に並ぶほうが良いか？というUI改善案  
- …ほか多数

### 新規作成または更新された主なPR
- [PR #282](https://github.com/digitaldemocracy2030/idobata/pull/282) モバイル向けチャットUIの改善  
- [PR #279](https://github.com/digitaldemocracy2030/idobata/pull/279) チャット入力欄のfocus挙動を改善  
- [PR #259](https://github.com/digitaldemocracy2030/idobata/pull/259) Shift+Enter改行機能を実装 (Issue #256, #202に関連)  
- …ほか多数

それぞれのIssue・PRのコメント欄で「なぜその機能が必要なのか」「具体的にどう実装すると良いか」などが話し合われています。小さなアイデアでも大歓迎ですので、ぜひ覗いてみてください！

---

## 開発に参加しませんか？

いどばたシステムは多くの方の知見や意見で支えられているOSS（オープンソースソフトウェア）です。  
- 新機能提案  
- バグ報告  
- ドキュメント修正  
- UI/UX アイデア  
- コードレビューへのコメント  

あらゆるかたちでコントリビュートをお待ちしています。初めての方も大歓迎ですので、ぜひIssueやPRでご意見をお聞かせください！  