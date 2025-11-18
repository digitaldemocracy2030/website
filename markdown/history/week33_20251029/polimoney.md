# Polimoney 10/22~10/29 のGitHub活動まとめ

今週(2025-10-22～2025-10-29)のPolimoneyリポジトリのGitHub活動を振り返ります。  
OSS開発に興味のある方は、ぜひ気になるIssueやPRの議論に参加してみてください！

---

## 完了したタスク (マージされたPR)

今週は計9件のPull Requestがマージされました。新機能の追加やドキュメント整備、依存パッケージの更新など、多岐にわたる改善が行われています。

1. [PR #217](https://github.com/digitaldemocracy2030/polimoney/pull/217) (依存性注入)  
   - メイン作者: shumizu418128  
   - 開発者向けの依存性注入を導入。コードの保守性と拡張性を高める試みが行われました。

2. [PR #216](https://github.com/digitaldemocracy2030/polimoney/pull/216) (とりあえずこれで起動できる)  
   - メイン作者: shumizu418128  
   - Pythonバージョンの要件引き上げやセットアップ手順の更新などが盛り込まれ、開発環境の立ち上げがよりスムーズになりました。

3. [PR #215](https://github.com/digitaldemocracy2030/polimoney/pull/215) (chore(deps): bump black from 23.11.0 to 24.3.0)  
   - メイン作者: dependabot[bot]  
   - コード整形ツールBlackを最新バージョンに更新。セキュリティとフォーマット品質を向上させる目的です。

4. [PR #214](https://github.com/digitaldemocracy2030/polimoney/pull/214) (chore(deps): bump requests from 2.32.3 to 2.32.4)  
   - メイン作者: dependabot[bot]  
   - HTTP通信ライブラリRequestsをアップデート。セキュリティ上の修正が含まれています。

5. [PR #213](https://github.com/digitaldemocracy2030/polimoney/pull/213) (chore(deps): bump python-multipart from 0.0.6 to 0.0.18)  
   - メイン作者: dependabot[bot]  
   - Pythonでマルチパートフォームデータを扱うためのライブラリを更新し、パフォーマンスと安全性を向上。

6. [PR #212](https://github.com/digitaldemocracy2030/polimoney/pull/212) (auth0対応)  
   - メイン作者: shumizu418128  
   - Auth0による認証システムを導入。ユーザーログイン機能が追加され、今後の拡張にも期待できます。

7. [PR #211](https://github.com/digitaldemocracy2030/polimoney/pull/211) (docs)  
   - メイン作者: shumizu418128  
   - 開発ドキュメントが大幅に充実。セットアップやAPI仕様、セキュリティ強化手順などが明示されました。

8. [PR #210](https://github.com/digitaldemocracy2030/polimoney/pull/210) (fastapiリプレイス)  
   - メイン作者: shumizu418128  
   - バックエンドをFastAPIに移行。大規模なファイル変更によりAPI設計やパフォーマンスが向上しています。

9. [PR #209](https://github.com/digitaldemocracy2030/polimoney/pull/209) (chore(deps): bump langchain-text-splitters from 0.3.8 to 0.3.9)  
   - メイン作者: dependabot[bot]  
   - 自然言語処理系の依存パッケージ更新。より安定したテキスト解析が期待できます。

---

## 未完了のタスク

今週新たに作成されたIssueや、まだクローズされていないPRがあります。追加の議論や実装アイデアを募集中です。ぜひ参加してみてください！

### 新規Issue

- [Issue #219](https://github.com/digitaldemocracy2030/polimoney/issues/219) (動的サイトへの変更)  
  - 作成者: grassfieldk  
  - Next.jsの静的エクスポート設定から動的サイトへの切り替えを検討。GitHub Pages以外へのデプロイ戦略を議論中です。

- [Issue #218](https://github.com/digitaldemocracy2030/polimoney/issues/218) (ディレクト構成の整理)  
  - 作成者: grassfieldk  
  - Next.jsプロジェクトのディレクトリ構成を整理する提案。frontend/ディレクトリを新設し、コード管理をわかりやすくする方法を模索しています。

### 新規PR

- [PR #220](https://github.com/digitaldemocracy2030/polimoney/pull/220) (設定の更新)  
  - 作成者: grassfieldk  
  - Biome設定の固定化やCopilot向けの指示書作成など、開発環境を整備するPR。フォーマッタやAI支援ツールを使った効率化についてディスカッションが進行中です。

- [PR #208](https://github.com/digitaldemocracy2030/polimoney/pull/208) (#197 サンキー図・一覧表のデータを統一)  
  - 作成者: grassfieldk  
  - サンキー図用データをTransactionから自動生成し、データの一貫性を図る試み。Auth0認証との連携も含め、フロントエンドからの改善点含め多个所で議論中です。

### 更新されたPR

- [PR #196](https://github.com/digitaldemocracy2030/polimoney/pull/196) (東京都　運動費用収支報告書)  
  - 作成者: shumizu418128  
  - 東京向け選挙資金データ解析の追加に関するPR。Excel→JSON生成スクリプトとREADME策定が行われ、他の地域への対応も見据えて話し合いが続いています。

---

## おわりに

今週は主にバックエンドの刷新(FastAPI化)と認証機能(Auth0)の導入が完了し、大幅に機能が充実しました。一方で、Next.js関連のディレクトリ再編や動的サイト化など、フロントエンド周りの課題も新たに提起されています。多様なイシューやPRで積極的に意見や実装を募集していますので、ご興味のある方はお気軽にご参加ください！  

Polimoneyは政治資金や選挙資金の透明化・可視化を通じて民主主義の強化を目指すOSSプロジェクトです。バグ報告やドキュメント提供のような小さな貢献も、大歓迎です。みんなでプロジェクトを盛り上げていきましょう！  