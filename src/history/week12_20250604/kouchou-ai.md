# 広聴AI 5/28 ~ 6/4 のGitHub活動まとめ

この一週間(2025-05-28～2025-06-04)に行われた、広聴AI(kouchou-ai)リポジトリの開発・議論状況をまとめました。新しくOSS開発に興味を持った方も、プロジェクトの進捗を知りたい方もぜひご覧ください。

---

## 今週完了したもの

### クローズされたIssue（5件）
今週クローズされたIssueは以下の5点です。ユーザーには分かりづらい内容でも、改善された機能を知る機会になります。

- [Issue #585](https://github.com/digitaldemocracy2030/kouchou-ai/issues/585)  
  ┗ 作成者: shgtkshruch  
  clientのヘッダー画像表示の不安定さに関するバグ修正。ヘッダーの画像が安定して表示されるようになりました。
- [Issue #506](https://github.com/digitaldemocracy2030/kouchou-ai/issues/506)  
  ┗ 作成者: UtkNggc  
  デザインシステム整備の一環として、spacingやradiusなど「数値環境」を設定し、UI実装の迷いを減らす取り組みです。
- [Issue #505](https://github.com/digitaldemocracy2030/kouchou-ai/issues/505)  
  ┗ 作成者: UtkNggc  
  ブランドコンパスに沿ったTypography設定を整備。今後の開発でスタイル統一が容易になります。
- [Issue #504](https://github.com/digitaldemocracy2030/kouchou-ai/issues/504)  
  ┗ 作成者: UtkNggc  
  カラーパレットの規格化により、開発者が色指定で迷わず、将来の拡張も柔軟にできるように。
- [Issue #61](https://github.com/digitaldemocracy2030/kouchou-ai/issues/61)  
  ┗ 作成者: nanocloudx  
  ISR（Incremental Static Regeneration）方式による数分の表示ラグを、ユーザーに分かりやすく案内する役割が追加されました。

### マージされたPull Request（4件）
以下のPRがマージされ、機能追加や修正が反映されました。PRの作者や変更内容をご紹介します。

- [PR #588](https://github.com/digitaldemocracy2030/kouchou-ai/pull/588) (作成者: shgtkshruch)  
  ヘッダーの画像を「デジタル民主主義2030」のロゴに置き換え、不安定表示のバグ修正も同時に行われました。
- [PR #582](https://github.com/digitaldemocracy2030/kouchou-ai/pull/582) (作成者: nasuka)  
  Forkリポジトリ(team-mirai)で追加した機能をまとめて反映。ローカル環境の改善やURLリンク表示機能などが含まれています。
- [PR #581](https://github.com/digitaldemocracy2030/kouchou-ai/pull/581) (作成者: shgtkshruch)  
  レポーター情報（表示・画像・リンクなど）を管理する新コンポーネント「Reporter」を作成。UIがより分かりやすく整理されました。
- [PR #574](https://github.com/digitaldemocracy2030/kouchou-ai/pull/574) (作成者: shingo-ohki)  
  限定公開のレポートで検索インデックスされないようにする修正。プライバシー性の高いレポートを外部に公開しない設定が可能です。

---

## 未完了のタスク＆議論中の内容

### 新たに作成されたIssue（4件）
以下のIssueはまだオープンです。改善や新機能に向けた議論が期待されています。

- [Issue #587](https://github.com/digitaldemocracy2030/kouchou-ai/issues/587) (作成者: dentaro)  
  Docker Composeコマンドのドキュメント誤りを修正する提案。特にローカルLLM利用時のコマンド周りの混乱への対応が検討されています。  
- [Issue #586](https://github.com/digitaldemocracy2030/kouchou-ai/issues/586) (作成者: shgtkshruch)  
  フロントエンドで共通に使用するデザインシステムの開発基盤構築。npm workspaces導入の議論が行われています。
- [Issue #584](https://github.com/digitaldemocracy2030/kouchou-ai/issues/584) (作成者: shingo-ohki)  
  レポート編集後にトークン使用量が0になる不具合。データ更新の仕組み周りで議論されています。
- [Issue #583](https://github.com/digitaldemocracy2030/kouchou-ai/issues/583) (作成者: shingo-ohki)  
  分析対象の空文字列がエラーを引き起こす問題。属性フィルタや空行処理の改善が検討中です。

### 更新されたIssue（ディスカッションが継続中の4件）
- [Issue #566](https://github.com/digitaldemocracy2030/kouchou-ai/issues/566) (作成者: shgtkshruch)  
  データ有無でUIがどう変わるかのパターンをStorybookなどで簡単に確認したい、という要望。導入コストとメリットを天秤にかけて検討中。
- [Issue #564](https://github.com/digitaldemocracy2030/kouchou-ai/issues/564) (作成者: shingo-ohki)  
  広聴AIの活用事例を公式に集めて公開したいという提案。ユーザーエンゲージメントを高めるアイデアが歓迎されています。
- [Issue #460](https://github.com/digitaldemocracy2030/kouchou-ai/issues/460) (作成者: UtkNggc)  
  管理画面UIの改善。直感的操作を目指し、アイコンやトグル導入などが検討されています。
- [Issue #292](https://github.com/digitaldemocracy2030/kouchou-ai/issues/292) (作成者: nishio)  
  「OpenAI APIキー＝ChatGPT Plus契約だと思い込んでしまう」誤解を解消するためのドキュメント整備。非エンジニアへの説明が課題です。

### 新しく作成されたPR（2件, 未マージ）
- [PR #589](https://github.com/digitaldemocracy2030/kouchou-ai/pull/589) (作成者: shgtkshruch)  
  Footerデザインの刷新。広聴AIやデジタル民主主義2030プロジェクトの概要を掲載し、レイアウトや情報量を整理します。  
- [PR #580](https://github.com/digitaldemocracy2030/kouchou-ai/pull/580) (作成者: nasuka)  
  claude.md関連のドキュメントアップデート。開発環境や運用ガイドがより詳しくなる見込みです。

### 更新されたPR（2件, 未マージ）
- [PR #579](https://github.com/digitaldemocracy2030/kouchou-ai/pull/579) (作成者: nasuka)  
  以前マージされた[PR #567](https://github.com/digitaldemocracy2030/kouchou-ai/pull/567)をRevertする提案。デバッグログ過多やエラー対応のための議論が続いています。
- [PR #567](https://github.com/digitaldemocracy2030/kouchou-ai/pull/567) (作成者: take365)  
  「LLMスキップ」「自動クラスタ数決定」「タイトル省略」機能をまとめた大型の変更。現時点で一度マージされたものの、問題点が報告されRevert案([PR #579](https://github.com/digitaldemocracy2030/kouchou-ai/pull/579))が検討中です。

---

## 参加への呼びかけ

- デザインシステムの構築やドキュメンテーション整備など、多様な課題がまだオープンです。  
- 新規Issueの提案や既存Issueへのコメント、未マージPRのレビュー参加など大歓迎です。
- デザイナー、エンジニア、ドキュメント執筆者など、あらゆるバックグラウンドの方の貢献がこのプロジェクトを前進させます。

「デジタル民主主義2030」プロジェクトでは、共同での開発とパブリックに開かれた議論を通じて誰もが参加できる社会作りを目指しています。ぜひお気軽にコントリビュートやコメントをお寄せください！  