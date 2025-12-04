# 広聴AI 2025/06/18 ~ 2025/06/25 のGitHub活動まとめ

ここでは「広聴AI (kouchou-ai)」リポジトリでの今週（2025-06-18～2025-06-25）の活動をまとめます。新しくOSS開発に興味を持ってくださる方に向けて、「何が完了したのか」「まだ途中の作業ではどんな議論があるのか」を分かりやすく紹介します。

---

## 今週完了した主なIssue

### [Issue #590](https://github.com/digitaldemocracy2030/kouchou-ai/issues/590)  
- タイトル: [REFACTOR] レポーター情報のデフォルト値を空にしたい（なってる?）  
- 作者: UtkNggc  
- 概要: メタデータとして設定されているレポーター情報の初期値を空にし、未設定時に「名前未設定ユーザー」と表示されるようにしました。  
- ポイント: ユーザー側でも、レポートを初期状態で作成した際の表示が分かりやすくなる変更です。

---

### [Issue #520](https://github.com/digitaldemocracy2030/kouchou-ai/issues/520)  
- タイトル: [FEATURE]限定公開のページにはnoindexオプションを付ける  
- 作者: tokoroten  
- 概要: 検索エンジンが拾うと困る限定公開ページをnoindex対象にする提案。今回クローズされ、実装が完了しました。  
- ポイント: 検索エンジン経由での情報漏洩リスクを下げる重要なセキュリティ対策です。

---

### [Issue #427](https://github.com/digitaldemocracy2030/kouchou-ai/issues/427)  
- タイトル: [FEATURE]レポート一覧画面：レポートタイトルと本文に文字数制限  
- 作者: UtkNggc  
- 概要: レポート一覧ページでの文字表示を抑えて一覧性を高める提案。PRにより実装完了し、タイトル・本文ともに行数を制限する設定が入りました。  
- ポイント: 長すぎる文章を省略表示して、素早くレポートを見渡せるようアップデートされました。

---

## 今週マージされたPR

今週は5件のPRがマージされました。いずれも主にshgtkshruchさんやshingo-ohkiさんが実装を進めてくださっています。

### [PR #612](https://github.com/digitaldemocracy2030/kouchou-ai/pull/612)  
- 作者: shgtkshruch  
- 内容: 管理画面のレポート編集ダイアログをコンポーネント化。今後のリデザインにも活かせるようテストを追加。  
- ポイント: UI とロジックを切り分け、見た目の変更がしやすくなりました。

---

### [PR #611](https://github.com/digitaldemocracy2030/kouchou-ai/pull/611)  
- 作者: shgtkshruch  
- 内容: 管理画面内のトークン使用量やコスト計算ロジックをCustom Hookに切り出し。今後の新UIにも移行しやすくする設計に。  
- ポイント: テスト性・再利用性が向上し、結果として開発効率も高まっています。

---

### [PR #610](https://github.com/digitaldemocracy2030/kouchou-ai/pull/610)  
- 作者: shgtkshruch  
- 内容: 一般ユーザー向けクライアント（client）のレポート一覧表示で、タイトルと本文を行数制限して省略表示する機能を実装。  
- ポイント: [Issue #427](https://github.com/digitaldemocracy2030/kouchou-ai/issues/427) がこれで完了し、一覧画面がより見やすく。

---

### [PR #608](https://github.com/digitaldemocracy2030/kouchou-ai/pull/608)  
- 作者: shingo-ohki  
- 内容: 不要になったコメント行を削除。コードの可読性向上。  
- ポイント: 大きな機能変更ではありませんが、継続的なリファクタとして重要な貢献です。

---

### [PR #607](https://github.com/digitaldemocracy2030/kouchou-ai/pull/607)  
- 作者: shgtkshruch  
- 内容: デフォルトのmetaタグ（タイトルやレポーター情報）の扱いを整理。未設定時は「名前未設定ユーザー」と表示し、検索エンジンにも適切な情報を渡す。  
- ポイント: 新しくレポート作成するユーザーにとって情報の出どころが分かりやすくなりました。

---

## 未完了のタスク・進行中の議論

### 新しく作成されたIssue

- [Issue #613](https://github.com/digitaldemocracy2030/kouchou-ai/issues/613)  
  - タイトル: [FEATURE] フォームから入力された API Key を使ってレポートを生成できる  
  - 作者: shingo-ohki  
  - 内容: デモ環境などでコード操作不要で広聴AIを試せるようにしたいという提案。今後の導入ハードルを下げる大きな一歩となりそうです。

---

### 更新されたIssue

- [Issue #604](https://github.com/digitaldemocracy2030/kouchou-ai/issues/604)  
  - タイトル: [REFACTOR] 管理画面のレポート一覧画面をコンポーネント分割する  
  - 制作中のリデザインで画面のパーツを細かく分け、差分管理を楽にする方針。間もなく関連PRが追加される予定です。

- [Issue #460](https://github.com/digitaldemocracy2030/kouchou-ai/issues/460)  
  - タイトル: [FEATURE][design] レポート管理画面：直感的に使いやすくしたい  
  - どのようにボタン配置やエラー表示を最適化するか引き続き議論中。UX向上のためにさまざまな提案が出ています。

---

### 新しく作成されたPR

- [PR #609](https://github.com/digitaldemocracy2030/kouchou-ai/pull/609)  
  - タイトル: Replace random sampling with Farthest Point Sampling for better spatial coverage  
  - 作者: shinta.nakayama+Devin  
    - 「+Devin」はAIアシスタントを活用しながら進められたものです。実際の主たる中身はshinta.nakayamaさんが実装。  
  - 内容: クラスタリングの一部で用いるランダムサンプリングを、分布を考慮したFarthest Point Sampling(FPS)に置き換える提案。  
  - 詳細: Rust実装の高速FPSライブラリを採用し、座標がない場合は従来通りランダムにフォールバックする柔軟な設計。  
  - 現在レビュー待ち。興味のある方はぜひコメントやレビューをお願いします。

---

### 更新されたPR

- [PR #602](https://github.com/digitaldemocracy2030/kouchou-ai/pull/602)  
  - タイトル: [client] デザインシステムの Button を適用する  
  - 複数ファイルにまたがり、大幅にButtonスタイルを統合。今後のUI刷新にも関わる重要なPRです。

- [PR #595](https://github.com/digitaldemocracy2030/kouchou-ai/pull/595)  
  - タイトル: [client] レポーター画像が Docker 環境で取得できないエラーを修正  
  - Docker環境での画像取得エラーが解消される見込み。フロントとバックエンドの接続確認も重要テーマです。

- [PR #593](https://github.com/digitaldemocracy2030/kouchou-ai/pull/593)  
  - タイトル: [client] Dialog を開いた際の Initial Focus を変更する  
  - ダイアログ表示時にフォーカスを「閉じる」ボタンへ。アクセシビリティ向上を目指す方針で議論が進行中です。

---

## 参加の呼びかけ
- 「広聴AI」はユーザー体験の向上やデザイン、アクセシビリティの改善など、さまざまな観点でのコントリビューションを歓迎しています。  
- もし興味を持ったIssueやPRがあれば、気軽にコメントやレビューをしてみてください。  
- 人間の開発者の方々とAIアシスタントを組み合わせた取り組みも進んでおり、多様な技術的バックグラウンドの方が活躍できるプロジェクトです。

今後とも「広聴AI」リポジトリの活性化にご協力をよろしくお願いします！  