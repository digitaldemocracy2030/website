# 広聴AI 6/4~6/11 のGitHub活動まとめ

今週（2025-06-04～2025-06-11）の広聴AIリポジトリ (https://github.com/digitaldemocracy2030/kouchou-ai) の活動をまとめました。新機能や改善を把握することで、開発に参加したいエンジニアやデザイナーの方々に役立てていただければと思います。

---
## 今週完了したもの

### クローズされたIssue
- [Issue #461](https://github.com/digitaldemocracy2030/kouchou-ai/issues/461)  
  作成者: shingo-ohki  
  内容: 複数のレポートに対する一括操作を可能にする提案。  
  → [PR #589](https://github.com/digitaldemocracy2030/kouchou-ai/pull/589) のマージで対応され、実装完了しました。

- [Issue #438](https://github.com/digitaldemocracy2030/kouchou-ai/issues/438)  
  作成者: UtkNggc  
  内容: コンテンツ下部のAbout情報をFooterにまとめるデザイン改善提案。  
  → こちらも [PR #589](https://github.com/digitaldemocracy2030/kouchou-ai/pull/589) のマージで解決し、フッターに情報が整理されました。

### マージされたPull Request
- [PR #589](https://github.com/digitaldemocracy2030/kouchou-ai/pull/589) (by shgtkshruch)  
  フッターのデザインを大幅に刷新し、プロジェクト情報・謝辞・免責表示をダイアログ形式でまとめました。未設定の場合でも問題なく表示される仕組みが整っています。

- [PR #593](https://github.com/digitaldemocracy2030/kouchou-ai/pull/593) (by shgtkshruch)  
  ダイアログを開いた際の初期フォーカスを改善し、アクセシビリティを向上させました。誤った要素にフォーカスが当たらなくなったことでユーザビリティが上がっています。

これらの完了タスクでは、デザイナーの提案やユーザービリティの向上が実現しています。非エンジニアの方にも、フッター周りが見やすく整理されたり、ダイアログ上の操作がわかりやすくなったりと恩恵が感じられる変更になっています。

---
## 未完了のタスクと現在の議論

今週は6件の新しいIssueと3件の新しいPull Requestが作成され、さらに多くのIssue/PRが更新されました。コミュニティの皆さんからの追加の議論・レビューをお待ちしています。

### 新しく作成されたIssue
1. [Issue #599](https://github.com/digitaldemocracy2030/kouchou-ai/issues/599) (by shgtkshruch)  
   デザインシステム Button のフロントエンド取り込み提案

2. [Issue #598](https://github.com/digitaldemocracy2030/kouchou-ai/issues/598) (by shgtkshruch)  
   Typography定義をフロントエンドにも反映する提案

3. [Issue #596](https://github.com/digitaldemocracy2030/kouchou-ai/issues/596) (by shgtkshruch)  
   Admin 画面でのCSVダウンロードを一律可能にする提案

4. [Issue #594](https://github.com/digitaldemocracy2030/kouchou-ai/issues/594) (by shingo-ohki)  
   「.env書き換え後のDockerビルドを忘れがち」問題の改善アイデア

5. [Issue #592](https://github.com/digitaldemocracy2030/kouchou-ai/issues/592) (by shingo-ohki)  
   Azure OpenAI Service 利用時のエラーをもう少しわかりやすくしてほしい提案

6. [Issue #590](https://github.com/digitaldemocracy2030/kouchou-ai/issues/590) (by UtkNggc)  
   レポーター情報の初期値を空にしたいというリファクタ提案

これらはUI/UX改善、エラーハンドリング、開発体験の向上など多岐にわたる課題を含んでいます。自由に意見や修正案を出し合えるので、ぜひコメントやPRをお寄せください。

### 新しく作成されたPull Request
1. [PR #597](https://github.com/digitaldemocracy2030/kouchou-ai/pull/597) (by dentaro)  
   レポートの拡大縮小挙動を制御し、スクロールしやすくする提案。グラフ上にオーバーレイをかけるユニークなアイデアが議論されています。

2. [PR #595](https://github.com/digitaldemocracy2030/kouchou-ai/pull/595) (by shgtkshruch)  
   Docker Compose起動時に画像が正しく取得できない不具合の修正。画像あり・なしをサーバー側で判定する仕組みなど技術的な工夫が見られます。

3. [PR #591](https://github.com/digitaldemocracy2030/kouchou-ai/pull/591) (by shingo-ohki)  
   ローカルLLMとして利用している Ollamaコンテナの起動方法を改善する修正。Windows環境などでもスムーズに動作させる案が検討されています。

### 更新があったIssue / PR
- [Issue #587](https://github.com/digitaldemocracy2030/kouchou-ai/issues/587)、[Issue #586](https://github.com/digitaldemocracy2030/kouchou-ai/issues/586)、[Issue #493](https://github.com/digitaldemocracy2030/kouchou-ai/issues/493)、[Issue #460](https://github.com/digitaldemocracy2030/kouchou-ai/issues/460) など、ドキュメント整備やレポート管理画面のUI改善、グラフ操作性の検討が続いています。  
- また、多数のPR([PR #565](https://github.com/digitaldemocracy2030/kouchou-ai/pull/565), [PR #563](https://github.com/digitaldemocracy2030/kouchou-ai/pull/563), [PR #499](https://github.com/digitaldemocracy2030/kouchou-ai/pull/499) など)で細かな修正や大規模リファクタが進行中です。

未完了のタスクは、さらに意見交換や実装を続けることでプロダクトの品質が上がっていくと期待できます。ぜひコメントやレビュー参加をお待ちしています。

---
## 参加の呼びかけ

今週はフッター周りやダイアログ操作の完成度が上がり、さらにデザインシステムや管理画面、環境設定まわりの提案が活発に進んでいます。広聴AIのOSS開発に興味を持った方は、IssueやPRのコメント欄から気軽に参加してみてください。皆さんの貢献が、デジタル民主主義を前進させる大きな力になります！  