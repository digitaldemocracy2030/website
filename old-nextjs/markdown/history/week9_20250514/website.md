# デジタル民主主義WEB 5/7~5/14 のGitHub活動まとめ

デジタル民主主義2030のコミュニティマネージャです。今週一週間(2025/05/07〜2025/05/14)のGitHub活動についてまとめました。  
開発に参加するきっかけや、議論に加わるための参考にしていただければ嬉しいです。

---

## 1. 完了したタスク

今週は下記の2件のIssueがクローズされ、機能面やコンテンツ面の改善が行われました。  
参加いただいたみなさん、ありがとうございます！

### [Issue #69](https://github.com/digitaldemocracy2030/website/issues/69) [BUG] [2025/05/07] どのページに遷移しても空白ページになる
- 作成者: masatosasano2  
- Incognito Windowでは発生しないが、通常ブラウザでページが空白になる問題。キャッシュ関連でエラーが出ていた模様です。  
- いくつかの[PR](https://github.com/digitaldemocracy2030/website/pulls?q=is%3Apr+is%3Amerged+closed%3A%3C2025-05-14+sort%3Aupdated-desc)により修正が行われました。主にmoai-redcapさんによるビルドエラー修正や不要ファイル削除 ([PR #68](https://github.com/digitaldemocracy2030/website/pull/68), [PR #70](https://github.com/digitaldemocracy2030/website/pull/70)) などが効果を発揮しています。  

### [Issue #6](https://github.com/digitaldemocracy2030/website/issues/6) ボードメンバーが誰か紹介  
- 作成者: nishio  
- 「誰がプロジェクトを進めているか見えるようにしたい」という要望に対応。  
- [PR #67](https://github.com/digitaldemocracy2030/website/pull/67) (作者: kojino さん) によりボードメンバー紹介のコンテンツが追加されました。名前やSNSへのリンクが増え、オープンな雰囲気が高まっています。

---

## 2. 今週マージされたPull Request

今週は合計11件のPRがマージされました。小さい修正から機能追加まで多岐にわたり、次のようなアップデートが行われています。

- [PR #79](https://github.com/digitaldemocracy2030/website/pull/79) (作者: moai-redcap さん)  
  - フッターにnoteへのURLを追加。情報発信チャネルが増えました。

- [PR #78](https://github.com/digitaldemocracy2030/website/pull/78) (作者: moai-redcap さん)  
  - フッター内Slackリンクを無期限の招待URLに修正。参加ハードルを下げる改善です。

- [PR #77](https://github.com/digitaldemocracy2030/website/pull/77) (作者: moai-redcap さん)  
  - history詳細ページに「未来を共に創る」セクションを追加。サイト上のストーリーや今後の展望がわかりやすく。

- [PR #76](https://github.com/digitaldemocracy2030/website/pull/76) (作者: moai-redcap さん)  
  - Slackリンクを無期限化する修正(重複修正ですが大事な対応です)。

- [PR #75](https://github.com/digitaldemocracy2030/website/pull/75) (作者: halsk さん)  
  - contribution.mdのtypo修正。ドキュメントをより読みやすくしてくれています。

- [PR #73](https://github.com/digitaldemocracy2030/website/pull/73) (作者: nishio さん)  
  - week8のドキュメント更新。多くのファイルが追加され、活動ログやコンテンツが拡充されました。

- [PR #72](https://github.com/digitaldemocracy2030/website/pull/72) (作者: moai-redcap さん)  
  - lintエラーの修正。それほど大きな変更ではありませんが、継続的な品質向上に貢献しています。

- [PR #71](https://github.com/digitaldemocracy2030/website/pull/71) (作者: kojino さん)  
  - 貢献者向けガイドラインを追加。新たに参加する人の手助けになるドキュメントです。

- [PR #70](https://github.com/digitaldemocracy2030/website/pull/70) (作者: moai-redcap さん)  
  - 重複して存在したnext.configファイルを削除。構成が整理され、ビルドエラーの一因も除去。

- [PR #68](https://github.com/digitaldemocracy2030/website/pull/68) (作者: moai-redcap さん)  
  - Markdown.tsxを修正しビルドエラーを解消。空白ページ問題やビルド失敗の根本原因への対処にもなった模様。

- [PR #67](https://github.com/digitaldemocracy2030/website/pull/67) (作者: kojino さん)  
  - ボードメンバー情報を更新。上記Issue #6クローズのきっかけです。

---

## 3. 未完了のタスクと主な議論

今週も複数のIssueで検討・議論が進んでいます。ぜひあなたの知見やアイディアを共有してください！

### 3.1 新しく作成されたIssue
- [Issue #80](https://github.com/digitaldemocracy2030/website/issues/80) SNSへのシェアボタンを設置する  
  - Webサイト全ページにシェアボタンをつけたいという提案。対応SNSやアイコン素材、初期文言などをどうするか議論中です。UIデザインが得意な方やSNSシェアの知見を持つ方のご意見を募集中です。  

- [Issue #74](https://github.com/digitaldemocracy2030/website/issues/74) [BUG]PRでのpreview deployが404 Error  
  - プルリク作成時に出るプレビューリンクが404になるバグ。CI/CDまわりの設定を修正する必要があるとの見方で、nishioさんを中心に調査中。GitHub ActionsやVercelに詳しい方のアドバイスを歓迎しています。

### 3.2 更新されたIssue
- [Issue #66](https://github.com/digitaldemocracy2030/website/issues/66) [FEATURE]デモサイトへのリンクがほしい  
  - デモ環境へのリンクを表に出すか、画面キャプチャを用意するかの議論中。「実際に触れるものがあるかどうか」で参加意欲が変わるので、早めに整理したいところです。

- [Issue #43](https://github.com/digitaldemocracy2030/website/issues/43) ボードメンバーをaboutページに追加する  
  - ボードメンバー紹介の強化案。すでに[PR #67](https://github.com/digitaldemocracy2030/website/pull/67)で一部が対応されていますが、アイコン表示や追加情報をどう盛り込むか継続検討中。

- [Issue #8](https://github.com/digitaldemocracy2030/website/issues/8) ロゴの改善  
  - ロゴを「仮置き」から正式にするかどうかの議論。 
  - 「どういうロゴが好ましいか」という大きなテーマなので、デザイン案の共有と合わせて進められています。  
  - 参考にしている [Issue #1](https://github.com/digitaldemocracy2030/website/issues/1) の追加情報を踏まえ、引き続き意見交換中です。

---

## 4. ぜひあなたも参加してください

- バグ報告や機能提案だけでなく、ドキュメント修正やUIデザインのアイディア出しも大歓迎です。  
- コードを書くのが得意な方はもちろん、デザイン・翻訳・企画などの貢献もOSSならではの重要な力になります。  
- 気になるIssueやPRにはぜひコメントをお寄せください。Slackのリンクも無期限で開放中なので、カジュアルに質問や提案ができます！

---

以上、5/7〜5/14の活動内容でした。  
「デジタル民主主義2030」プロジェクトを一緒に盛り上げていきましょう！  