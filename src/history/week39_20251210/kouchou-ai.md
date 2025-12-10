# 広聴AI 12/3~12/10 のGitHub活動まとめ

この1週間（2025-12-03〜2025-12-10）の「広聴AI」のGitHub上での活動をまとめました。  
新機能の追加や不具合修正が進められており、OSS開発に興味を持つ方や、今後参加してみようという方が状況を把握しやすくなるよう、以下に解説します。

---

## 今週完了した内容

### [PR #733](https://github.com/digitaldemocracy2030/kouchou-ai/pull/733) fix: security update for CVE-2025-55182 (React Server Components RCE)

- **実装者:** Devin AI+Devin  
- **概要:**  
  - Next.js、React、React-DOM のバージョンアップによるセキュリティ脆弱性（CVE-2025-55182）対応  
  - 依存関係の更新のみでUI変更は無し  
  - リモートコード実行を防止するための重要な修正が含まれています

このPRのマージにより、React Server Componentsに潜む脆弱性を緩和し、より安全なアプリケーション動作が見込めます。OSSプロジェクトでもセキュリティは最優先事項です。多くのユーザーが安心して利用できるよう、早期対応に感謝です。

---

## 現在議論中の未完了タスク

### [Issue #716](https://github.com/digitaldemocracy2030/kouchou-ai/issues/716) [FEATURE] レポート作成時のエラーログを web application 上から確認できない

- **作成者:** shingo-ohki  
- **提案内容:**  
  - レポート作成失敗時に docker コンテナログへアクセスしなくても、WebUIからエラーログを確認したい  
  - 「ログをダウンロード」「アプリケーション画面上で表示」など、いくつかの案が提案されている

Slackコミュニティでもエラーログの確認手段が乏しいという声が上がっており、開発者以外のユーザーにも必要な機能といえます。ログ取得方法の設計やUIの位置づけなど、技術面・運用面含めて検討が期待されます。

### [Issue #700](https://github.com/digitaldemocracy2030/kouchou-ai/issues/700) Biome 設定の調整

- **作成者:** nishio  
- **提案内容:**  
  - バージョン指定や各パッケージへのインストール方法（root単位 vs 各ディレクトリ単位）など、lint設定全般の整理  
  - セットアップに際する環境変数や依存関係の更新など、複数の手順が共有中

エラーログだけでなく、開発時のコーディング規約（lint）統一も重要ということで、今週はBiome関連の細かな設定を詰める動きがあります。特に複数パッケージでのインストール構成や、rootにまとめるか個別ディレクトリに分けるかといった議論が続いています。Biomeを導入して、コード品質をより高めたい方はぜひ議論に参加してみてください。

---

## 新しく作成されたPR（未マージ）

### [PR #735](https://github.com/digitaldemocracy2030/kouchou-ai/pull/735) Implement Content Security Policy (CSP) headers and add local model f…

- **作成者:** Devesh36  
- **概要:**  
  1. CSP ヘッダーを動的に設定し、HTTPアクセス時のエラーを削減  
  2. crypto.randomUUID 未実装環境向けのポリフィル追加  
  3. LocalLLM プロバイダー選択時、自動的にモデルをフェッチする機能を実装  
- **背景:**  
  - リモート環境や古いブラウザ上でのCSPエラー、JavaScriptエラーへの対応  
  - UX改善（ユーザー操作を減らす）や、セキュリティポリシー強化が目的  
- セキュリティと利便性を両立する重要な変更となりそうです。CSPの設定などWebアプリの基盤に関わる部分なので、開発経験のある方にはレビューへの参加を歓迎します。

### [PR #734](https://github.com/digitaldemocracy2030/kouchou-ai/pull/734) feat: integrate Biome for linting and formatting

- **作成者:** Devesh36  
- **概要:**  
  - Biomeを用いたlint/formatツールチェーンの統合  
  - Phase 1（警告のみ）、Phase 2、Phase 3と段階的に導入する計画  
  - ESLintやPrettierの代替として開発環境の統一を目指す  
- **背景:**  
  - Issue [#700](https://github.com/digitaldemocracy2030/kouchou-ai/issues/700) で議論されているBiome設定調整の具体的な実装PR  
  - コード品質向上と開発フローの効率化が狙い  

こちらも開発者視点が必要な議論です。Phaseごとにどの程度厳密にルールを適用するかなど、スムーズな移行計画が求められます。ご興味ある方はぜひコメントやレビューにご参加ください。

### [PR #732](https://github.com/digitaldemocracy2030/kouchou-ai/pull/732) Bump next from 15.2.3 to 15.5.7 in /client

- **作成者:** dependabot[bot]  
- **概要:**  
  - Next.js のバージョンアップを行う自動PR  
  - セキュリティや機能面の更新が含まれる  
- Dependabotによる依存関係の更新です。特に問題なければマージしていくことになりますが、バージョンアップに伴う影響をよく確認したい方はレビューコメントを歓迎します。

---

## 参加の呼びかけ

- **エラーログ閲覧機能（Issue [#716](https://github.com/digitaldemocracy2030/kouchou-ai/issues/716))**  
  Dockerログしか見られない現状に課題を感じた方は、UI/UXの視点でアイデアをお寄せください。

- **Biome設定の最適化（Issue [#700](https://github.com/digitaldemocracy2030/kouchou-ai/issues/700))**  
  設定ファイルやLintルールなど、コーディング規約の確立に興味がある方はぜひ。

- **新機能開発・テスト**  
  各PRのレビューや試用をしてみませんか？特にCSP対応（[PR #735](https://github.com/digitaldemocracy2030/kouchou-ai/pull/735))の検証など、セキュリティ強化に関心のある方を歓迎しています。

- **その他**  
  OpenAIや内製LLMを活用した機能追加など、新しいアイデアも募集中です。Pull Request / Issue での提案お待ちしています。

---

今週は以上です。気になるIssueやPRがあれば、ぜひコメント・レビューでご参加ください。より多くの方と協力して「広聴AI」を成長させていきたいと思っています。ご協力よろしくお願いします！