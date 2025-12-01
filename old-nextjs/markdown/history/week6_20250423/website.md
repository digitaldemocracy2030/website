# デジタル民主主義WEB (2025/4/16〜4/23) のGitHub活動まとめ

デジタル民主主義WEB(“website”リポジトリ)の1週間の開発状況をお知らせします。今週は多くのPRがマージされ、新機能や修正が盛りだくさんでした。一方で、まだ議論中・実装途中のタスクもいくつかあります。興味を持った方は、ぜひ議論や開発に参加してください！

---

## 今週完了したタスク（マージ済みPR）

今週は合計6件のPRがマージされました。以下、どんな変更が行われたのか簡単に振り返ります。

1. [PR #26](https://github.com/digitaldemocracy2030/website/pull/26)  
   - 作者: Shutaro A +Devin  
   - 日本語表示はUDGothic、英語表示にはInterフォントを適用しました。国際化に向けたビジュアル面での改善です。  
   - 新しく英語フォントが適用されることで、海外の方にも見やすいサイトを提供できるようになります。

2. [PR #25](https://github.com/digitaldemocracy2030/website/pull/25)  
   - 作者: nishio  
   - “fix name bug”というコミットですが、2ファイルで+144/-144と大きな修正になっています。  
   - 表記ゆれ等のバグの吸収とみられ、内部的な不具合が解消されました。

3. [PR #24](https://github.com/digitaldemocracy2030/website/pull/24)  
   - 作者: nishio  
   - “week 5 activity”ページの追加（+438行）です。  
   - 開発で進捗した内容をまとめており、サイトを訪れるユーザが「何が起きているのか」を把握しやすくなっています。

4. [PR #22](https://github.com/digitaldemocracy2030/website/pull/22)  
   - 作者: moai-redcap  
   - OGP（SNSでURL共有したときに出る画像など）修正を1ファイル+1/-1で実施。  
   - OGPまわりの不具合が解決し、SNSでのサイトシェアがスムーズになります。

5. [PR #21](https://github.com/digitaldemocracy2030/website/pull/21)  
   - 作者: moai-redcap  
   - activityページからChakraUIを除去し、ESLintエラーを修正しました。  
   - 使用ライブラリの見直しにより、プロジェクトの依存関係が軽くなり、保守性が向上しています。

6. [PR #20](https://github.com/digitaldemocracy2030/website/pull/20)  
   - 作者: moai-redcap  
   - “webサイト全体のコーディング終了”という大規模コミット（42ファイル変更、+5792/-2824）。  
   - サイトの土台が完成し、今後デザインやイラストを追加してブラッシュアップを進める予定です。

---

## 今週新たに作成された & 議論中のIssue

今週は1件の新規Issueが作成され、1件の既存Issueが更新されました。どちらもユーザ体験やプロジェクトの方向性に関わる重要な議題です。

- [Issue #23](https://github.com/digitaldemocracy2030/website/issues/23)「英語ページを作成」（作者: ei-blue）  
  - 世界発信力を高めるための英語ページの提案がありました。  
  - フォント変更（[PR #26](https://github.com/digitaldemocracy2030/website/pull/26)）もあって国際化の話題が出始めているので「どう作るか？」の議論が期待されます！

- [Issue #8](https://github.com/digitaldemocracy2030/website/issues/8)「ロゴの改善」（作者: nishio）  
  - 「雑ロゴがなし崩しに採用されるのは望ましくない」という声があり、好ましいロゴに変える議論が続いています。  
  - コメント内で「たぶん これ ([Issue #1](https://github.com/digitaldemocracy2030/website/issues/1)) “good first issue”だけど…」という意見があり、ロゴ制作を一度きちんと扱いたい様子。ロゴの案出しやデザイン提案をぜひお待ちしています。

---

## 今週新たに作成されたPR

- [PR #27](https://github.com/digitaldemocracy2030/website/pull/27)  
  - 作者: masatosasano2  
  - “Update slack5w.md : add Polimoney meeting info”という軽微な変更（+2/-1）。  
  - まだマージはされていませんが、Polimoneyに関する会合情報を追加するようです。コミュニティでの議論を見守りましょう。

---

## 今週更新されたが未マージのPR

- [PR #15](https://github.com/digitaldemocracy2030/website/pull/15)「add week-4 pages」（作者: nishio）  
  - 4つのファイルに+290行の追加というコンテンツ拡充。  
  - まだマージはされておらず、レビュー待ち・デザイン調整などの可能性があります。週次活動のアーカイブを充実させるため、活発な議論が期待されます。

---

## 参加の呼びかけ

- 国際化(英語対応)やロゴ作成など、ユーザー体験に直結する議論がこれから盛り上がりそうです。デザインや翻訳に興味がある方、ぜひIssueで意見をお寄せください。  
- 大型実装を包含するPRも続々とマージされており、あらたに生じる不具合やデザイン改善などの課題が出てくることが予想されます。コントリビュート大歓迎です！  
- 開発者・非開発者ともに、レビュー・提案・翻訳・アイデア出しなどさまざまな形で参加いただけます。コミュニティのみなさんのコラボレーションで、より良いデジタル民主主義WEBを目指しましょう。

ご興味のある方は、各Issue・PRへのコメントや、Discord/Slackなどのコミュニティチャンネルでお気軽に声をかけてください。みなさまの参加を心よりお待ちしています！