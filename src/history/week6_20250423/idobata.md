# いどばたシステム 第6週（4/16~4/23）のGitHub活動まとめ

いどばたシステム（digitaldemocracy2030/idobata）の開発状況を簡単にまとめました。開発に興味を持った方は、ぜひIssueやPRでディスカッションに参加してください！

---

## 1. 今週完了したタスク（マージされたPR）

今週は、合計3件のPRがマージされました。いずれもUI改善やリポジトリ構造の再編に関する内容で、非エンジニアを含む幅広いユーザーが参加しやすくなる工夫が進んでいます。

### [PR #12](https://github.com/digitaldemocracy2030/idobata/pull/12) 非エンジニア向けに技術的な用語を削除
- 作者: Shutaro Aoyama+Devin  
- 技術用語を一般的な表現に言い換えることで、初めてのユーザーがつまずきにくくなるように修正。  
- フロントエンド部分のみの変更ですが、今後のUI設計にもつながる重要な第一歩です。

### [PR #11](https://github.com/digitaldemocracy2030/idobata/pull/11) Remove original folders from root directory
- 作者: Shutaro Aoyama+Devin  
- ルートディレクトリに残っていた不要なフォルダを整理し、リポジトリ全体をスッキリとさせる対応。  
- 大量のファイル削除（-16841）により、今後のメンテナンスがしやすくなりました。

### [PR #10](https://github.com/digitaldemocracy2030/idobata/pull/10) Move repositories to new structure
- 作者: Shutaro Aoyama+Devin  
- ブランチおよびディレクトリ構成を整理し、「policy-edit」と「idea-discussion」の2つの領域に分けて管理。  
- 継続的な拡張や保守を見据えたリポジトリ再編で、将来的な開発効率が期待されます。

---

## 2. 未完了のタスク（新規Issue・継続中の議論）

今週は7件のIssueが新たに作成されました。以下のように、UI/UX改善からリビューワー負担の軽減策まで、幅広い議論が展開されています。

### [Issue #9](https://github.com/digitaldemocracy2030/idobata/issues/9) 【現状】PRが簡単に作成できすぎる →【改善】レビュアー負担軽減とコンフリクト管理の仕組み導入
- 作成者: devin-ai-integration[bot]（AIアシスタント: Devin）  
- PRが増えるにつれてレビュアーが抱える負担やコンフリクトへの懸念が浮上。  
- レビューキューやコンフリクト検出の仕組みなど、具体的な改善策のアイデアが提示されています。

### [Issue #8](https://github.com/digitaldemocracy2030/idobata/issues/8) 【現状】表示領域が固定で情報が限られる →【改善】リサイズ可能なパネルとタブ切替による情報表示の拡張
- 作成者: devin-ai-integration[bot]（AIアシスタント: Devin）  
- 画面の表示領域をマウスで調整したい、右側をタブ切り替えにして多様な情報を表示したい、などUI改善の要望。  
- 完成形だけでなく海外事例やユーザーのリアルタイム更新提案も切り替え表示できるようにする案が出ています。

### [Issue #7](https://github.com/digitaldemocracy2030/idobata/issues/7) 【現状】文書修正提案のみに対応 →【改善】様々なフィードバックタイプに対応する回答テンプレート
- 作成者: devin-ai-integration[bot]（AIアシスタント: Devin）  
- 「文面修正」だけでなく、一般的なコメントや意見表明にも対応できる仕組みへの要望。  
- 複数の回答テンプレートを用意しておくアイデアが話し合われています。

### [Issue #6](https://github.com/digitaldemocracy2030/idobata/issues/6) 【現状】Git知識が必要で非技術者が混乱 →【改善】専門用語の日本語化と直感的なワークフロー設計
- 作成者: devin-ai-integration[bot]（AIアシスタント: Devin）  
- Gitの基本フローを知らない人が混乱しがちな点を解消するため、用語の日本語化・UIの再設計を検討。  
- より分かりやすい言葉づかいや画面表示が議題となっています。

### [Issue #5](https://github.com/digitaldemocracy2030/idobata/issues/5) 【現状】AIチャットで文書編集後の手動調整が困難 →【改善】PR提出前に文書を手動編集できる機能の追加
- 作成者: devin-ai-integration[bot]（AIアシスタント: Devin）  
- AIの提案結果をPRにする前の細かな調整が必要との要望。  
- PR作成前に編集を行うテキストエディタの導入案が検討されています。

### [Issue #4](https://github.com/digitaldemocracy2030/idobata/issues/4) 【現状】文書更新時の変更が分かりにくい →【改善】変更箇所の視覚的フィードバックとdiff表示の強化
- 作成者: devin-ai-integration[bot]（AIアシスタント: Devin）  
- 会話から文書変更された部分がどこか分かりづらい、という課題。  
- diffビューや変更部分の強調表示など、視覚的なわかりやすさ向上がテーマです。

### [Issue #3](https://github.com/digitaldemocracy2030/idobata/issues/3) 【現状】初回ユーザーが何をすべきか分かりにくい →【改善】初回アクセス時のガイダンスと指示を明確化
- 作成者: devin-ai-integration[bot]（AIアシスタント: Devin）  
- 初回アクセス時、どのように操作すべきか分からないという声が上がり、チュートリアルやオンボーディングの充実が提案されています。

---

## 3. 新たに作成されたPR（未マージ）

今週は下記2件のPRが新たに作成されています。これらはまだマージされておらず、レビューや議論が続いています。

### [PR #2](https://github.com/digitaldemocracy2030/idobata/pull/2) monorepo構造への再編成
- 作者: Shutaro A+Devin  
- いどばたシステムを「monorepo」構造で管理するための再編案。  
- それぞれのサブディレクトリ間で依存を共有できるため、大規模開発への対応が容易になる見込みです。

### [PR #1](https://github.com/digitaldemocracy2030/idobata/pull/1) readmeの作成と.env.exampleの作成
- 作者: itoma-aikon  
- セットアップがしやすいようにREADMEと.env.exampleを追加。  
- 新規参加者がプロジェクトの動かし方をすばやく理解できるようになる点が期待できます。

---

## 4. 今後の参加呼びかけ

- まだクローズされていない上記のIssueには、機能追加や改善策に関する議論の余地が十分に残っています。新しいアイデアやフィードバックを歓迎していますので、ぜひコメントやリアクションでご参加ください。  
- [PR #2](https://github.com/digitaldemocracy2030/idobata/pull/2) や [PR #1](https://github.com/digitaldemocracy2030/idobata/pull/1) もレビューをお待ちしています。自由に意見をいただけると、より良いシステムへとブラッシュアップできます。

OSS開発は多様な視点と貢献者が集まることで、より豊かな成果が得られます。デザイナー、エンジニア、非技術者など、どなたも大歓迎です。皆さまのご参加をお待ちしています！