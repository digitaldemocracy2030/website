# 広聴AI 6/25〜7/2 のGitHub活動まとめ

みなさん、こんにちは！ 今週も「広聴AI」の開発活動のハイライトをお届けします。プロジェクトに興味を持った方はぜひリポジトリを覗いてみたり、Issueで質問・提案をお願いします！

---

## 今週完了したこと

### クローズされたIssue
- [Issue #604](https://github.com/digitaldemocracy2030/kouchou-ai/issues/604) (管理画面のレポート一覧画面をコンポーネント分割する)
- [Issue #520](https://github.com/digitaldemocracy2030/kouchou-ai/issues/520) (限定公開ページにnoindexオプションを付ける)

いずれも管理画面の使い勝手向上やセキュリティを意識した嬉しい改善です。非エンジニアの方から見ると地味に映るかもしれませんが、管理やSEOの面で大きな意味を持ちます。  
Issue #604 は [PR #623](https://github.com/digitaldemocracy2030/kouchou-ai/pull/623) など複数のPRでコンポーネントの整理が進められました。実装の中心はshgtkshruchさんで、愚直な分割とテストコード追加がとても丁寧でした。  
Issue #520 は限定公開のページが検索エンジンに拾われにくくなるように対応し、公開範囲をコントロールしたいユーザーにも安心です。

### マージされたPull Request
今週は合計8件のPRがマージされました。いずれもshgtkshruchさんがメインで実装をされています。

1. [PR #624](https://github.com/digitaldemocracy2030/kouchou-ai/pull/624)  
   管理画面のFooterを新しいデザインに変更し、免責ダイアログも追加。
2. [PR #623](https://github.com/digitaldemocracy2030/kouchou-ai/pull/623)  
   レポート一覧画面のコンポーネント分割を完了。UIとロジックを整理しやすくなりました。
3. [PR #619](https://github.com/digitaldemocracy2030/kouchou-ai/pull/619)  
   デザインシステムのトークンやコンポーネントをclient-admin側に追加。将来的に統合予定。
4. [PR #618](https://github.com/digitaldemocracy2030/kouchou-ai/pull/618)  
   CSVダウンロードやレポート削除などの更新ロジックを関数化。テストも追加され信頼性向上。
5. [PR #616](https://github.com/digitaldemocracy2030/kouchou-ai/pull/616)  
   管理画面のHeaderを新デザインに。見た目がすっきりと改善。
6. [PR #615](https://github.com/digitaldemocracy2030/kouchou-ai/pull/615)  
   意見グループ編集ダイアログを切り出し。ユーザーの操作性とテスト性を上げる一手。
7. [PR #614](https://github.com/digitaldemocracy2030/kouchou-ai/pull/614)  
   レポート生成中のポーリング処理をCustom Hookに抽出。UIもコンポーネント化。
8. [PR #612](https://github.com/digitaldemocracy2030/kouchou-ai/pull/612)  
   レポート編集ダイアログを分離し、Jestによるテストを追加。  
   
これらの変更により、これからの管理画面リデザインや機能追加がさらにスムーズに進められるようになっています。

---

## 未完了のタスク・議論中の項目

### 新たに作成された/更新されたIssue
- [Issue #622](https://github.com/digitaldemocracy2030/kouchou-ai/issues/622)  
  “Azureに動作確認・デモ環境を作る” → 非エンジニアの方やデザイナーの方も気軽に触れる環境づくりを目指しています。  
- [Issue #621](https://github.com/digitaldemocracy2030/kouchou-ai/issues/621), [Issue #620](https://github.com/digitaldemocracy2030/kouchou-ai/issues/620)  
  管理画面アクションやCSVダウンロード機能のエラーハンドリング強化 → 利用者にとってわかりやすいUIを実現するための議論が進行中です。  
- [Issue #617](https://github.com/digitaldemocracy2030/kouchou-ai/issues/617)  
  意見グループを“意見数の多い順”で表示する → 大量の意見リストでも重要なグループを見つけやすくなるはずです。どのように実装するか調整中。  
- [Issue #547](https://github.com/digitaldemocracy2030/kouchou-ai/issues/547), [Issue #460](https://github.com/digitaldemocracy2030/kouchou-ai/issues/460), [Issue #400](https://github.com/digitaldemocracy2030/kouchou-ai/issues/400) など  
  セキュリティやUI改善に関する問題提起が継続して行われています。具体的なやり方も出始めているので、参加大歓迎です。

### 新たに作成された/更新されたPull Request
- [PR #627](https://github.com/digitaldemocracy2030/kouchou-ai/pull/627) (作成者: shingo-ohki)  
  GPU周りのパッケージ分岐修正。無駄なビルド時間を減らす意欲的な修正です。テスト済みですが、レビュー募集中！
- [PR #626](https://github.com/digitaldemocracy2030/kouchou-ai/pull/626) (作成者: shgtkshruch)  
  レポート一覧のfetch処理をServer Component化し、APIキー漏洩リスクを下げる取り組み。  
- [PR #625](https://github.com/digitaldemocracy2030/kouchou-ai/pull/625) (作成者: shgtkshruch)  
  AIサービスとの接続状況チェックをDialog化し、利用者がレポート作成前に接続確認をしやすくする試み。  
- [PR #609](https://github.com/digitaldemocracy2030/kouchou-ai/pull/609) (作成者: shinta.nakayama+Devin)  
  意見空間のサンプリングをランダムから“Farthest Point Sampling”に切り替える提案。カバレッジ向上が目的です。まだ議論中ですが、より公平なサンプリングを実現できそうとの期待が高まっています。

---

## 参加してみませんか？

- コードが書けなくても、Issueにコメントして要望を伝えたり、ドキュメントを充実させるだけでも大歓迎です。  
- デザインやUI/UXに関心がある方は、実際に触ってみて気づいたことを提案していただけると助かります。  
- 実装面で入ってみたいエンジニアの方は、未解決のIssueやPRへのレビュー、あるいはドキュメント整備からぜひご参加ください！

「広聴AI」は今後も活発な開発を続けていきます。興味ある方はぜひ[リポジトリ](https://github.com/digitaldemocracy2030/kouchou-ai)をフォローして、気軽にコントリビュートしてみてください。お待ちしています！