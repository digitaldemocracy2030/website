# デジタル民主主義WEB 12/3〜12/10 のGitHub活動まとめ

今週は合計で「11件のIssueが完了」「2件のPRがマージ」されました。大きな機能改修から小さなデザイン調整まで、多くのコントリビューションがありました。ここではまず、完了したIssueやマージされたPRの内容を振り返り、その後、現在進行中の未完了タスクについてどんな議論が行われているか紹介します。

---

## 完了した主なIssue

### [Issue #121](https://github.com/digitaldemocracy2030/website/issues/121) ロゴ差し替えとheader仕様の調整
- **作成者:** UtkNggc  
- **内容:** 公式ロゴ差し替えとheaderの仕様調整。Figmaで提示されたロゴの最小サイズやクリアスペースをどう実装するかがテーマでした。  
- **ポイント:** 新ロゴをページに反映してサイトイメージを統一する重要なIssueでした。

### [Issue #112](https://github.com/digitaldemocracy2030/website/issues/112) 小見出しへ飛べるナビゲーションを追加
- **作成者:** kotaro-yamasaki  
- **内容:** 小見出しを直接選択できるようにしてアクセシビリティ向上を図る提案。  
- **ポイント:** スクロール不要で見たい情報へアクセスできるため、使いやすさ向上に寄与しています。

### [Issue #91](https://github.com/digitaldemocracy2030/website/issues/91) DevContainerとBiome.jsの導入
- **作成者:** moai-redcap  
- **内容:** lintエラーや開発環境の差異を埋めるため、開発環境整備を行うIssue。  
- **ポイント:** OSS参加を容易にするためにも欠かせない基盤整備です。

### [Issue #74](https://github.com/digitaldemocracy2030/website/issues/74) [BUG] PRでのpreview deployが404 Error
- **作成者:** nishio  
- **内容:** PRプレビューが404になる不具合を修正。  
- **ポイント:** 新規機能実装時も動作確認がスムーズに行えるよう改善されています。

### [Issue #40](https://github.com/digitaldemocracy2030/website/issues/40) 活用事例ページをmdで管理
- **作成者:** moai-redcap  
- **内容:** 活用事例のページをMarkdown化してメンテナンス性を上げる提案。  
- **ポイント:** 文書更新のハードルが下がり、非エンジニアでも修正がしやすくなりました。

### その他にも以下のIssueが完了しました
- [Issue #33](https://github.com/digitaldemocracy2030/website/issues/33) (作成者: <人間>+Devin)   
- [Issue #18](https://github.com/digitaldemocracy2030/website/issues/18) (作成者: moai-redcap)  
- [Issue #12](https://github.com/digitaldemocracy2030/website/issues/12) (作成者: rysh)  
- [Issue #9](https://github.com/digitaldemocracy2030/website/issues/9) (作成者: nishio)  
- [Issue #8](https://github.com/digitaldemocracy2030/website/issues/8) (作成者: nishio)  
- [Issue #2](https://github.com/digitaldemocracy2030/website/issues/2) (作成者: kixyz-dev)  

---

## マージされたPR

### [PR #185](https://github.com/digitaldemocracy2030/website/pull/185) deno lume でリニューアル
- **作成者:** kuboon  
- **変更ファイル数:** 509  
- **概要:** 大規模リファクタリングで、ビルドやページ生成にdeno lumeを導入。サイトのパフォーマンスと拡張性を高めました。

### [PR #184](https://github.com/digitaldemocracy2030/website/pull/184) Week38 Summary Update
- **作成者:** github-actions[bot]（自動生成）
- **概要:** 週次サマリの自動更新を行うためのPR。定期的にサイト内の活動内容をまとめる取り組みです。

---

## 進行中の主な議論（未完了タスク）

以下はまだクローズされていないIssueや未マージのPRですが、着手や意見交換が進んでいるものです。改善案や質問があれば、ぜひIssueやPRにコメントしてみてください。

### [Issue #145](https://github.com/digitaldemocracy2030/website/issues/145) CMSを導入する
- **作成者:** moai-redcap  
- **概要:** Lume CMS利用の検討とAzureへのホスティング案が話題。UIが分かりやすければ非エンジニア参加がさらに活性化する可能性があります。

### [Issue #117](https://github.com/digitaldemocracy2030/website/issues/117) プライバリーポリシーと利用規約ページの正式文章掲載
- **作成者:** akai-OolongBreaker  
- **概要:** 現在「準備中」となっている文言を正式版に置き換えるタスク。法的観点からも重要な議論が期待されます。

### [Issue #19](https://github.com/digitaldemocracy2030/website/issues/19) DarkThemeへの切り替え機能追加
- **作成者:** moai-redcap  
- **概要:** 自動切り替えに加え、Light/Darkを手動で選択するUIをどう構築するか、技術的・デザイン的な案が交わされています。

### [PR #122](https://github.com/digitaldemocracy2030/website/pull/122) [WIP] update logo 途中まで
- **作成者:** masatosasano2  
- **概要:** ロゴ差し替えに挑戦したが、favicon等の複雑な対応が必要で作業が中断。続きの実装を誰かに譲りたいとのこと。
- **ポイント:** #121([Issue #121](https://github.com/digitaldemocracy2030/website/issues/121))の実装詳細を詰めたり、複数のファビコンファイル管理が課題になっています。

### [PR #89](https://github.com/digitaldemocracy2030/website/pull/89) 活用事例ページをmdで管理できるようにする。
- **作成者:** yusasa16  
- **概要:** [Issue #40](https://github.com/digitaldemocracy2030/website/issues/40) に基づいた実装。Markdown化によるスタイル調整などが検討され、細かいUX改善が話し合われています。

---

## 今週のまとめ

- 新しいロゴやヘッダ調整など、デザイン面での改善が着実に進みました。  
- 大規模リファクタリングによりサイト構造がよりメンテナブルになっています。  
- 未完了タスクでは、CMS導入やロゴ差し替えの残作業など、さらに多くのアイデアとコントリビューションが求められています。

「デジタル民主主義WEB」の開発は、エンジニアだけでなくデザイナーや文書作成が得意な方、そして新しい機能を試してみたい方など、あらゆるバックグラウンドを歓迎しています。気になるIssueやPRを見つけたら、ぜひコメントやレビューをお寄せください。あなたの参加がプロジェクトをより良い方向へ導いてくれるでしょう！