# 広聴AI 5/21~5/28 のGitHub活動まとめ

今週(2025/05/21～2025/05/28)も多くのIssueとPRがクローズ/マージされ、新たな機能追加や活発な議論が行われました。ここでは「完了したタスク」と「議論中のタスク」を中心にご紹介します。ぜひ今後のOSS開発に参加するきっかけにしてください！

---

## 今週完了した主なタスク

今週は以下の13件のIssueがクローズされました。新機能やUI向上に関わるものも多く、既にリポジトリの最新ブランチに反映済みです。

1. [Issue #572](https://github.com/digitaldemocracy2030/kouchou-ai/issues/572)  
   admin画面でレポートが少ないときにもフッターが画面下部に固定されるようになりました。  
   → 対応PR: [PR #575](https://github.com/digitaldemocracy2030/kouchou-ai/pull/575) (貢献者: shgtkshruch)

2. [Issue #560](https://github.com/digitaldemocracy2030/kouchou-ai/issues/560)  
   文字列検索によるフィルタ機能が実装されました。属性フィルタと組み合わせて分析の精度を上げられます。  
   → 対応PR: [PR #561](https://github.com/digitaldemocracy2030/kouchou-ai/pull/561) (貢献者: nsk.smn + Devin)

3. [Issue #559](https://github.com/digitaldemocracy2030/kouchou-ai/issues/559)  
   セグメントコントロール上にカーソルを乗せた際、手のアイコンに変わるようUI改善がされました。

4. [Issue #553](https://github.com/digitaldemocracy2030/kouchou-ai/issues/553)  
   report_status.jsonが初期化される不具合を修正。テスト時のデータ書き換えが行われないように対応。  
   → 対応PR例: [PR #555](https://github.com/digitaldemocracy2030/kouchou-ai/pull/555) (貢献者: mtane0412)

5. [Issue #552](https://github.com/digitaldemocracy2030/kouchou-ai/issues/552), [Issue #551](https://github.com/digitaldemocracy2030/kouchou-ai/issues/551)  
   いずれも[PR #531](https://github.com/digitaldemocracy2030/kouchou-ai/pull/531)のレビュー用Issue。属性カラム選択とフィルタリング機能の実装内容が確認・修正され、マージされました。

6. [Issue #509](https://github.com/digitaldemocracy2030/kouchou-ai/issues/509)  
   Windows環境での直接起動手順が整備されました。pdmやバッチファイルを用いることでDockerを使わなくても動かしやすくなっています。

7. [Issue #459](https://github.com/digitaldemocracy2030/kouchou-ai/issues/459)  
   メンテナ以外でもIssueのステータスを変更できるよう、スラッシュコマンド(/readyなど)が使えるようになりました。  
   → 対応PR: [PR #570](https://github.com/digitaldemocracy2030/kouchou-ai/pull/570), [PR #571](https://github.com/digitaldemocracy2030/kouchou-ai/pull/571) (ともに貢献者: masatosasano2)

8. [Issue #428](https://github.com/digitaldemocracy2030/kouchou-ai/issues/428)  
   レポートが0件の場合のエンプティステートUIが追加され、利用者が状況を把握しやすくなりました。  
   → 対応PR: [PR #557](https://github.com/digitaldemocracy2030/kouchou-ai/pull/557) (貢献者: shgtkshruch)

9. [Issue #425](https://github.com/digitaldemocracy2030/kouchou-ai/issues/425)  
   GitHub Projectsのステータス自動更新に関するワークフローが整備されました。

10. [Issue #414](https://github.com/digitaldemocracy2030/kouchou-ai/issues/414)  
    ローカル文脈埋め込み(エンベディング)をよりアピールするUIやオプション表記改善が議論され、実装完了しました。

11. [Issue #284](https://github.com/digitaldemocracy2030/kouchou-ai/issues/284)  
    レポートごとの推定コスト表示機能が搭載されました。LLMの利用料が可視化されるため費用感を把握する一助になります。  
    → 対応PR: [PR #549](https://github.com/digitaldemocracy2030/kouchou-ai/pull/549) (貢献者: 種延真之 + Devin)

12. [Issue #113](https://github.com/digitaldemocracy2030/kouchou-ai/issues/113)  
    濃いクラスタのアイコンが刷新され、より直感的にクラスタ特性が伝わるビジュアルになりました。  

また、機能追加・不具合修正に関わるPRは16件マージされました。中でも大きな変更として下記のPRが挙げられます:

- [PR #567](https://github.com/digitaldemocracy2030/kouchou-ai/pull/567) (貢献者: take365)  
  「LLMのスキップ」「自動クラスタ数決定」「レポートタイトル自動補完」といった機能が大幅追加されました。  
- [PR #545](https://github.com/digitaldemocracy2030/kouchou-ai/pull/545) (貢献者: nasuka)  
  意見グループのタイトル・説明を手動で修正できる新機能を実装し、LLM出力を細かく調整できるようになりました。  
- [PR #531](https://github.com/digitaldemocracy2030/kouchou-ai/pull/531) (貢献者: tokoroten)  
  属性フィルタ機能をフルスタックで導入。アップロード時に属性列を選択し、レポート結果を多角的に絞り込めます。

---

## 議論中・未完了の主なタスク

以下のIssueは今週新たに作成または更新されましたが、まだクローズされていない重要な議題です。興味ある方はぜひ議論に参加してください！

- [Issue #577](https://github.com/digitaldemocracy2030/kouchou-ai/issues/577) 自動クラスタ数調整機能のベータ評価  
  → 実際の使用状況を見ながら継続判断する方針。  
- [Issue #576](https://github.com/digitaldemocracy2030/kouchou-ai/issues/576) 朝日新聞のTTTCで使われているプロンプトを取り入れる  
  → プロンプト設計のベストプラクティスを吸収可能か検討中。  
- [Issue #573](https://github.com/digitaldemocracy2030/kouchou-ai/issues/573) PLaMo-Embedding-1Bの検証  
  → 日本語特化の埋め込みモデル導入を実験するためのアルゴリズム研究。  
- [Issue #566](https://github.com/digitaldemocracy2030/kouchou-ai/issues/566) データ有無でUIを切り替える仕組みの検討  
  → Storybook導入など、UIテスト工数削減策が議論中。  
- [Issue #564](https://github.com/digitaldemocracy2030/kouchou-ai/issues/564) 活用事例の収集と公開  
  → サンプル事例の共有で新規ユーザへの活用イメージを伝えたい。  
- [Issue #558](https://github.com/digitaldemocracy2030/kouchou-ai/issues/558) serverテストの構成リファクタ  
  → 本番用jsonやフォルダを誤って書き換えない設計への変更が求められています。  
- [Issue #556](https://github.com/digitaldemocracy2030/kouchou-ai/issues/556) アクセシビリティ向上  
  → デジタル庁ガイドラインにならい、誰もが使いやすいUIへ改善を進行中。

また、今週アップデートされたがまだクローズされていないIssueとしては、以下のように大規模なリファクタやUI/UX改善を中心としたテーマがあります:
- [Issue #517](https://github.com/digitaldemocracy2030/kouchou-ai/issues/517) ウェルカムミーティングで募集すべき役割の整理  
- [Issue #504](https://github.com/digitaldemocracy2030/kouchou-ai/issues/504), [Issue #505](https://github.com/digitaldemocracy2030/kouchou-ai/issues/505), [Issue #506](https://github.com/digitaldemocracy2030/kouchou-ai/issues/506) デザインシステム構築関連  
- [Issue #474](https://github.com/digitaldemocracy2030/kouchou-ai/issues/474) bonsaiクラスタリング実験  
- [Issue #464](https://github.com/digitaldemocracy2030/kouchou-ai/issues/464) OpenAI APIキー確保問題 など

---

## 参加のお願い

広聴AIはユーザー目線で機能を改善することを大切にしています。デザイナー、エンジニア、データサイエンティストなど、多様な方々のコントリビューションを歓迎します。

- 新機能や既存機能を試し、バグ報告や改善提案をしてくれる方  
- デザインやアクセシビリティに興味がある方  
- Python/TypeScript/フロントエンドなど技術的な実装を一緒に進めたい方  

ぜひ[Issue一覧](https://github.com/digitaldemocracy2030/kouchou-ai/issues)をチェックしてみてください。  
お待ちしています！