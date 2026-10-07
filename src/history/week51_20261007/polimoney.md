# Polimoney 9/30~10/7 のGitHub活動まとめ

今週もPolimoneyの開発に携わっていただき、ありがとうございます。  
以下に、今週取り組んだ内容をまとめました。

---

## 今週完了したタスク

今週はマージされたプルリクエストがなかったため、完了したタスクはありませんでした。

---

## 未完了のタスクと議論

### [PR #258](https://github.com/digitaldemocracy2030/polimoney/pull/258) 「chore(ci): update GitHub Actions and pin to commit SHAs」

- 作成者: noritaka1166
- 変更内容: +4 / -4 (2ファイル)
- 概要:  
  - GitHub Actionsを最新の安定版に更新し、タグではなくコミットSHAに固定することで、実行されるコードの変化を防ぎ、より安定したCI環境を確保するための変更です。  
  - 具体的には、以下のアクションの参照バージョンがアップデートされました。  
    - actions/checkout: v4.2.2 → v7.0.1  
    - actions/setup-node: v4.4.0 → v7.0.0  
    - actions/cache: v4.2.3 → v6.1.0  
    - actions/github-script: v6 → v9.0.0  
  - 今後、GitHub上のCI実行の検証が必要となる見込みです。

議論ポイント:
- コミットSHAでの固定によりセキュリティや安定性は高まるものの、アクションの更新頻度が増えた際の運用コストについてどうするか。  
- 実際のCI実行テストをGitHub上でどのタイミングで行うか、新しいワークフロー名や並列実行の設定は変更するかなどの相談が続きそうです。

---

## 参加の呼びかけ

- CI/CDの整備やGitHub Actionsの活用に興味がある方は、ぜひ[PR #258](https://github.com/digitaldemocracy2030/polimoney/pull/258)のレビューやテストにご参加ください。  
- Polimoneyでは、多様なエンジニア・デザイナー・リサーチャーが共同で開発を進めています。初めての貢献でも大歓迎ですので、気になるIssueやPRがありましたらお気軽にコメントをお寄せください。

---

引き続き、Polimoneyの開発にご協力をお願いいたします。  
皆さんのご意見・フィードバックをお待ちしています!  