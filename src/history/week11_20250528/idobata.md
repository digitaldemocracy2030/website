# いどばたシステム 5/21~5/28のGitHub活動まとめ

この1週間(2025-05-21 〜 2025-05-28)の開発状況をお知らせします。新たにOSS開発に興味を持ってくださった方にも分かるように、まずは「完了したタスク（完成したIssueやマージされたPR）」から紹介し、その後に「未完了のタスク（オープンなIssue）」での議論状況をお伝えします。ぜひ気になる議題がありましたら、IssueやPRにコメントいただけると嬉しいです。

---

## 今週完了したIssue

### [Issue #373](https://github.com/digitaldemocracy2030/idobata/issues/373) 見出しへのリンクがうまく飛べていない (作成者: chz100p)
policy.team-mir.aiで見出しへのリンクを踏んだ際、ページ先頭に飛ばされてしまう不具合が報告され、修正されました。MarkdownからHTMLへ変換する際の設定(「rehype-slug」の導入など)がポイントでした。  
→ すでにPRで対応が完了し、ページ内リンクが正しく動作するようになっています。

### [Issue #56](https://github.com/digitaldemocracy2030/idobata/issues/56) ホスティング主体者がPRの可読性を高めるためにPR作成時の不要な改行や区切りを削除する (作成者: devin-ai-integration[bot] → 実質「takker unknown+Devin」)
PRの末尾に継ぎ足される「---」などの不要な改行や区切りが入る問題を解消しました。  
→ 対応PR([PR #340](https://github.com/digitaldemocracy2030/idobata/pull/340))がマージされ、余計な改行が入らないようになりました。

### [Issue #22](https://github.com/digitaldemocracy2030/idobata/issues/22) 参加者のチャットログを保存するようにして、どのような会話がされているかを運営者が理解できるようにする (作成者: jujunjun110)
チャットログの保存で、運営者が議論の内容を把握しやすくなりました。技術的にはチャットログをデータベースに永続化し、運営用の管理画面で参照可能にする作業が行われています。  
→ こちらも無事に完了し、運営者が利用者の会話を追えるようになりました。

---

## 今週マージされたPR

今週は以下6件のPRがマージされました。新機能や改善が多岐にわたっています！

1. [PR #366](https://github.com/digitaldemocracy2030/idobata/pull/366) 「チャット無効化機能の実装」  
   - 作者: jujunjun110+Devin  
   - 特定のテーマで新規コメント(チャット)を受け付けないようにできる機能を追加。管理画面で「新規コメントを無効化」フラグをオンにするだけでそのテーマは書き込み不可になります。

2. [PR #365](https://github.com/digitaldemocracy2030/idobata/pull/365) 「Feature/disable delete option」  
   - 作者: jujunjun110  
   - テーマ削除を禁止するオプションを環境変数により設定可能に。外部公開の際に、誤ってテーマを消してしまうリスクを避けられます。

3. [PR #359](https://github.com/digitaldemocracy2030/idobata/pull/359) 「Update: MCP側にファイルセレクションを実装」  
   - 作者: jujunjun110  
   - “MCP”（チャット上での変更提案処理用サーバー側）に、提案対象ファイルを選択するロジックを追加。READMEばかりに変更を集約してしまう問題を緩和する狙いがあります。

4. [PR #357](https://github.com/digitaldemocracy2030/idobata/pull/357) 「Update: サービスクラスだけまずは作る」  
   - 作者: jujunjun110  
   - 将来的にコンテクスト情報を分析する機能を拡張しやすいよう、サービスクラスの土台を作成。いどばたのバックエンド構造が拡張しやすくなりました。

5. [PR #354](https://github.com/digitaldemocracy2030/idobata/pull/354) 「Feature/choose target file」  
   - 作者: jujunjun110  
   - Chatからの提案内容に応じて最適なファイルを自動的に選択できるロジックの設計書や仕組みを導入。課題が分割されている多ファイル構成でも混乱しにくくなっています。

6. [PR #340](https://github.com/digitaldemocracy2030/idobata/pull/340) 「Fix #56: Remove unnecessary line breaks and separators from PR content」  
   - 作者: takker unknown+Devin  
   - 上述の[Issue #56](https://github.com/digitaldemocracy2030/idobata/issues/56)を解決。PRの末尾に勝手に差し込まれていた改行や区切りが削除されるようになりました。

---

## 継続中のIssue・議論

ここからは、まだ解決していないIssue・今まさに議論が進んでいるIssueをいくつかご紹介します。ぜひコメントやアイデアをお寄せください！

- [Issue #374](https://github.com/digitaldemocracy2030/idobata/issues/374) 見出しへのリンクがうまく飛べていない (作成者: machidatomohiko)  
  同じく見出しリンク不調の報告です。#373とは微妙に状況が異なる模様で、今回報告の機能差分などを検証しています。  

- [Issue #369](https://github.com/digitaldemocracy2030/idobata/issues/369) [いどばた政策立案] 利用者の認知負荷を下げるために、PRまでのステップ情報を可視化する  
  ステップバーを設置してプロセスを分かりやすく整理しようという提案。UI設計の草案が出ており、利用者体験を大きく向上する見込みです。  

- [Issue #367](https://github.com/digitaldemocracy2030/idobata/issues/367) [いどばた政策立案] 利用者が混乱しないように、commitやPRの直接的な説明は避ける  
  「ブレスト → 文案の推敲 → 提案書の作成」という形で専門用語を排しながらGit連携するアイデアが議論されています。非エンジニアにとってのハードルを下げる重要な課題です。  

- [Issue #368](https://github.com/digitaldemocracy2030/idobata/issues/368) [いどばた政策立案] 利用者が無理なく読めるように、政策文書の引用などは見た目を変える  
  レイアウトやハイライトの方法、引用文への装飾などを検討中。画面デザインに関心のある方は要チェックです。

これらのIssueは引き続きオープンな状態で、具体的な議論がどんどん進められています。ぜひ興味のあるトピックやデザイン案があれば、コメントやプルリクエストでご参加ください。

---

## 参加方法のご案内
いどばたシステムは、デジタル民主主義の実践を目指したOSSプロジェクトです。GitHub上でのIssue・Pull Requestはもちろん、コメントだけでも大歓迎です。  
「こんな機能がほしい」「ここのUIがわかりにくい」といった声が、プロジェクトをより良い方向へ進めるエネルギーになります。ぜひお気軽にご参加ください。

---

皆さまからのフィードバックやコード貢献、お待ちしております！  