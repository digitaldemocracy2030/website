# デジタル民主主義WEB 5/14~5/21 のGitHub活動まとめ

この一週間(2025-05-14〜2025-05-21)のGitHub活動をまとめました。  
OSS開発に興味を持ってくださる方が増えるよう、完了した内容と、現在進行中のタスク・議論を紹介します。

---

## 今週完了したIssue

1. [Issue #80](https://github.com/digitaldemocracy2030/website/issues/80) (作者: akai-OolongBreaker)  
   - **SNSシェアボタンを設置する**という要望を受け、シェア用ボタン導入が完了しました。  
   - Webページ上から直接X（旧Twitter）やFacebookなどで共有できるようになり、広報や周知に役立つ機能です。  
   - 実装は[PR #84](https://github.com/digitaldemocracy2030/website/pull/84)にて対応されました。

2. [Issue #43](https://github.com/digitaldemocracy2030/website/issues/43) (作者: moai-redcap)  
   - **aboutページにボードメンバーを追加**するタスクがクローズされました。  
   - この対応により、プロジェクトの運営メンバーをサイト訪問者に伝えやすくなりました。  

---

## 今週マージされたPR (計12件)

リポジトリへのコード改善や新機能追加が多数行われました。主要なものを抜粋してご紹介します。

- [PR #98](https://github.com/digitaldemocracy2030/website/pull/98) (作者: masatosasano2)  
  - /history系のページで発生していた404エラーを修正。複数階層のURLに対応させる実装を行いました。
- [PR #94](https://github.com/digitaldemocracy2030/website/pull/94) (作者: nishio)  
  - 週ごとのダイジェスト表示機能を追加。サイト訪問者が過去の活動概要を一目で把握できるようになりました。
- [PR #92](https://github.com/digitaldemocracy2030/website/pull/92) (作者: nishio)  
  - マークダウンファイルの構造を再整理。今後の履歴表示やドキュメント管理が簡潔になりました。
- [PR #84](https://github.com/digitaldemocracy2030/website/pull/84) (作者: akai-OolongBreaker)  
  - [Issue #80](https://github.com/digitaldemocracy2030/website/issues/80)対応のSNSシェアボタンを導入。  
- [PR #88](https://github.com/digitaldemocracy2030/website/pull/88) (作者: moai-redcap)  
  - ロゴコンペページの第一弾を作成。さらにロゴの改善を進める余地があります。
- その他、小規模な修正も含めて多数のPRがマージされ、細部の使い勝手が向上しました。

---

## 未完了のタスクと議論

ここからは現在もオープンのIssueや議論中のPRをご紹介します。参加歓迎ですので、興味を持っていただけたらぜひコメントやPRをお願いします！

### 新規に作成されたIssue (3件)

1. [Issue #91](https://github.com/digitaldemocracy2030/website/issues/91) (作者: moai-redcap)  
   - DevContainerとBiome.jsの導入による開発環境改善が提案されています。  
   - PR作成時に不要なlintエラーが発生しやすいため、環境構築を整備したいという内容です。  

2. [Issue #90](https://github.com/digitaldemocracy2030/website/issues/90) (作者: moai-redcap)  
   - googleフォームのリンクの入れ替え依頼。  
   - 「共創募集」ページのフォームURLを最新のものへ更新するタスクです。  

3. [Issue #87](https://github.com/digitaldemocracy2030/website/issues/87) (作者: akai-OolongBreaker)  
   - シェアボタンの初期テキストを各画面の内容に対応させたいという要望です。  
   - 今はどの画面からシェアしても同じ文言が表示されるため、ページ名やURLが含まれると便利になりそうです。  

### 更新されたIssue (2件)

1. [Issue #40](https://github.com/digitaldemocracy2030/website/issues/40) (作者: moai-redcap)  
   - **活用事例ページをMarkdownで管理**する要望で、[PR #89](https://github.com/digitaldemocracy2030/website/pull/89)にて実装が進行中です。  
   - コンテンツをより柔軟に管理したい方向けなので、ぜひフィードバックをお寄せください。

2. [Issue #8](https://github.com/digitaldemocracy2030/website/issues/8) (作者: nishio)  
   - **ロゴ改善**の議論が続いています。重いテーマではありますが、デザイン提案やご意見を募集中です。

### レビュー待ち・議論中のPR (3件)

1. [PR #97](https://github.com/digitaldemocracy2030/website/pull/97) (作者: nishio)  
   - 「history」のURLが重複して404エラーを引き起こす問題を修正する提案。  
   - リンクやルーティング設定について追加検証中です。

2. [PR #95](https://github.com/digitaldemocracy2030/website/pull/95) (作者: nishio)  
   - トップページとhistoryページのPRプレビュー環境でCSSや画像が正しくロードされない問題を修正する内容。  
   - プレビュービルドの安定化に向けた取り組みです。

3. [PR #89](https://github.com/digitaldemocracy2030/website/pull/89) (作者: yusasa16)  
   - [Issue #40](https://github.com/digitaldemocracy2030/website/issues/40)の実装中。活用事例ページをMarkdown管理できるようにする試み。  
   - リンクボタンのデザイン・CSSファイルの分け方などで相談が行われています。  

---

## 今後の参加募集

- SNSシェアボタンの機能改善やリンク切れの修正など、どなたでも取り組みやすいタスクが豊富です。  
- 開発者の方はもちろん、デザイン提案や文言修正などの小さな貢献も歓迎しています。  
- 新しいIssueにコメントを付けたり、既存のIssue/PRにレビューや意見をいただけるだけでも大助かりです。

**ぜひ、みなさんの知見・スキルを活かして一緒にデジタル民主主義を進めていきましょう！**  