# 広聴AI 2/18~2/25 のGitHub活動まとめ

今週（2026-02-18〜2026-02-25）の「広聴AI (kouchou-ai)」リポジトリでの活動内容をまとめました。OSS開発に興味をお持ちの方はぜひ内容をご覧になり、議論やコントリビュートに参加してみてください！

---

## 完了したタスク

### クローズされたIssue

- [Issue #805](https://github.com/digitaldemocracy2030/kouchou-ai/issues/805)  
  ⇒ Dockerイメージが膨大（特にapiサーバが34GB超え）になっていた問題。  
  - [PR #807](https://github.com/digitaldemocracy2030/kouchou-ai/pull/807) (by tokoroten) により解決されました。  
  - 各Dockerfileを整理して依存をまとめてインストールするなどの工夫で、apiイメージを2〜3GB程度まで圧縮しています。  

- [Issue #803](https://github.com/digitaldemocracy2030/kouchou-ai/issues/803)  
  ⇒ 2MB以上の大きなCSVを分析にかけると、分析開始ボタンがずっと「ぐるぐる」になって戻らない問題。  
  - [PR #804](https://github.com/digitaldemocracy2030/kouchou-ai/pull/804) (by Copilot) により解決しました。  
  - CSVアップロード時のBodyサイズ上限を拡大し、エラーが発生しても正しくボタンが復帰するよう処理が追加されています。  

### マージされたPull Request

- [PR #807](https://github.com/digitaldemocracy2030/kouchou-ai/pull/807) (by tokoroten)  
  - 上記Issue #805に対応し、Dockerイメージサイズを劇的に削減。CPU/GPUの切り替えが容易になるようpipインストールを1回にまとめた点も注目です。

- [PR #804](https://github.com/digitaldemocracy2030/kouchou-ai/pull/804) (by Copilot)  
  - 上記Issue #803を解決し、2MB以上のCSVを送信してもボタンが永遠に回り続けないよう修正。Next.jsのserver actionのボディサイズを大幅に上げ、送信エラーがあってもUIが戻るようになりました。

- [PR #798](https://github.com/digitaldemocracy2030/kouchou-ai/pull/798) (by tokoroten)  
  - 散布図に「詳細クラスタ」モードを追加し、より細かいクラスタ分類を可視化可能に。凸包表示でクラスターの境界線もわかりやすくなっています。分割された小さめのグループをまとめて観察したい場合に便利です。

- [PR #795](https://github.com/digitaldemocracy2030/kouchou-ai/pull/795) (by nishio)  
  - LLMリクエストのタイムアウトを30秒→300秒へ拡大。外部LLMの応答が遅い場合でも分析が失敗しにくくなりました。

---

## 未完了のタスク・議論中のトピック

### オープンなIssueの議論

- [Issue #800](https://github.com/digitaldemocracy2030/kouchou-ai/issues/800)  
  - Overviewコンポーネントで、result.configがundefinedの時にクラッシュする問題。  
  - 現在は[PR #802](https://github.com/digitaldemocracy2030/kouchou-ai/pull/802) (by Copilot) が提案中です。また、optional chaining導入で解決が見込まれています。

- [Issue #799](https://github.com/digitaldemocracy2030/kouchou-ai/issues/799)  
  - ローカル開発環境でReactのバージョンがワークスペース内で食い違ってしまい、dev overlayがクラッシュする問題。  
  - [PR #801](https://github.com/digitaldemocracy2030/kouchou-ai/pull/801) (by Copilot) で修正案が検討されています。pnpm.overridesでReactバージョンを揃える対応です。

- [Issue #583](https://github.com/digitaldemocracy2030/kouchou-ai/issues/583)  
  - 分析対象のカラムに空文字列が含まれているとエラーが出る問題。  
  - [PR #796](https://github.com/digitaldemocracy2030/kouchou-ai/pull/796) (by yasumorishima) が提案され、空文字データを自動的に除外し必要なログを出す対応が検討されています。

### オープンなPull Request

- [PR #808](https://github.com/digitaldemocracy2030/kouchou-ai/pull/808) (by shingo-ohki)  
  - minimatchのReDoS脆弱性（CVE-2026-26996）対応のため、pnpm.overridesで強制的にminimatch 10系にアップグレードする提案。依存関係のメジャーバージョンも上がるため、影響範囲のテストが注目点。  

- [PR #806](https://github.com/digitaldemocracy2030/kouchou-ai/pull/806) (by Copilot)  
  - Dockerイメージを軽量化するもう一つのアプローチ。#807との重複があるため調整が必要かもしれません。  

- [PR #802](https://github.com/digitaldemocracy2030/kouchou-ai/pull/802) (by Copilot)  
  - 上記Issue #800対応で、config未定義時のクラッシュを防ぐパッチ。  

- [PR #801](https://github.com/digitaldemocracy2030/kouchou-ai/pull/801) (by Copilot)  
  - 上記Issue #799対応で、pnpmワークスペース内のReactバージョンをまとめるためのoverrideを追加。  

- [PR #797](https://github.com/digitaldemocracy2030/kouchou-ai/pull/797) (by tokoroten)  
  - 散布図に「詳細クラスタ」タブを追加する試作プルリク。後から登場した[PR #798](https://github.com/digitaldemocracy2030/kouchou-ai/pull/798)が部分的に同様の機能を実装済みで、こちらとの兼ね合いが話題。  

- [PR #796](https://github.com/digitaldemocracy2030/kouchou-ai/pull/796) (by yasumorishima)  
  - 上記Issue #583（空文字の扱い）についての修正提案。まだ議論の余地があります。  

---

## 参加の呼びかけ

- もし気になるIssueがあれば、ぜひコメントやリアクションを付けてみてください。  
- Pull Requestにはレビューやテスト協力があると助かります。  
- ドキュメント整備や翻訳など、コード以外のコントリビュートも大歓迎です。

今週もご支援・ご参加ありがとうございます！ 次回の更新もお楽しみに。  