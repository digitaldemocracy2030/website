# 広聴AI 9/24~10/1 のGitHub活動まとめ

今週は不具合修正や新機能追加など、幅広く活発な開発が行われました。完了項目と、現在議論中の未完了タスクをまとめています。OSS開発に興味をお持ちの方は、ぜひご覧ください。

---

## 今週完了した主な項目

1. [PR #713](https://github.com/digitaldemocracy2030/kouchou-ai/pull/713) (作者: rolzy)  
   - [Issue #712](https://github.com/digitaldemocracy2030/kouchou-ai/issues/712) を解決。フロントエンド/client の開発環境が正しく動かない不具合を修正しました。  
   - インストール手順どおりに実行してもエラーが出る問題を解決し、ダミーデータの不足分を補完。これでフロントエンド用の開発環境がスムーズに立ち上がります。  

2. [PR #711](https://github.com/digitaldemocracy2030/kouchou-ai/pull/711) (作者: nishio)  
   - Azure Blob Storage への接続動作確認用のテストツールを追加。資格情報やオブジェクトのアップロードが正しく行われるかを簡単に検証できます。

3. [PR #709](https://github.com/digitaldemocracy2030/kouchou-ai/pull/709) (作者: NISHIO+Devin)  
   - GitHub Pages のサブパス環境で正しく画像が表示されるように修正。フッターに配置した画像のパスがハードコーディングされていた問題を解決し、ベースパスに対応しました。

4. [PR #708](https://github.com/digitaldemocracy2030/kouchou-ai/pull/708) (作者: NISHIO+Devin)  
   - Azure OpenAI を使う際のエラー処理がよりわかりやすく改善。設定に不備があるときに、なぜ失敗しているのか把握しやすくなりました。 

5. [PR #706](https://github.com/digitaldemocracy2030/kouchou-ai/pull/706) (作者: mochizuki-pg)  
   - [Issue #701](https://github.com/digitaldemocracy2030/kouchou-ai/issues/701) を解決。client 側の lint エラーを修正しました。lint 実行で発生する警告の解消により、コードの品質管理がしやすくなっています。

6. [PR #699](https://github.com/digitaldemocracy2030/kouchou-ai/pull/699) (作者: shgtkshruch)  
   - [Issue #111](https://github.com/digitaldemocracy2030/kouchou-ai/issues/111) を解決。新たに「用語解説ページ」を追加し、グローバルナビゲーションを整備。初めて広聴AIを使う方にもわかりやすいドキュメントページが増えました。

7. [PR #698](https://github.com/digitaldemocracy2030/kouchou-ai/pull/698) (作者: AkioPonkotu)  
   - [Issue #634](https://github.com/digitaldemocracy2030/kouchou-ai/issues/634) を解決。新たに Google Gemini API を利用したレポート生成が可能になり、トークン使用量や推定料金を可視化できます。自治体など、Gemini API Key を保有している環境で活用が広がりそうです。

8. [PR #688](https://github.com/digitaldemocracy2030/kouchou-ai/pull/688) (作者: shingo-ohki)  
   - [Issue #682](https://github.com/digitaldemocracy2030/kouchou-ai/issues/682) を解決。Azure へのデプロイ時に、client コンテナの環境変数が設定されずに失敗する問題を修正し、安定してデプロイ可能になりました。

9. [PR #632](https://github.com/digitaldemocracy2030/kouchou-ai/pull/632) (作者: shingo-ohki)  
   - [Issue #631](https://github.com/digitaldemocracy2030/kouchou-ai/issues/631) を解決。Azure ビルド時の警告が出ないように整備され、Docker build の過程をよりスムーズに行えます。

10. [PR #630](https://github.com/digitaldemocracy2030/kouchou-ai/pull/630) (作者: shingo-ohki)  
   - レポートのバックアップスクリプトを Docker 環境で実行できるように改修。Azure 環境への更新作業の際も手元での環境整備が不要となり、開発効率が上がりました。

---

## まだ未完了のタスクと議論中の内容

- [Issue #710](https://github.com/digitaldemocracy2030/kouchou-ai/issues/710)  
  散布図に埋め込まれた URL をクリックしてもリンクしない不具合が報告されています。原因として plotly の displayModeBar との相性が疑われており、他メンバーの動作環境での再現性が議論されています。

- [Issue #643](https://github.com/digitaldemocracy2030/kouchou-ai/issues/643)  
  Docker build 時のシークレット渡し方法の改善。セキュリティ強化のために BuildKit の `--secret` 機能などを利用する提案が出ています。利用手順や実現方法を模索中です。

- [Issue #622](https://github.com/digitaldemocracy2030/kouchou-ai/issues/622)  
  Azure に動作確認環境・デモ環境を作成する取り組みの一部が進行中です。UI/UX テストのため、エンジニア以外でもアクセスしやすい環境を整えようと、公開手順やドメインの設定について協議が続いています。

- [Issue #564](https://github.com/digitaldemocracy2030/kouchou-ai/issues/564)  
  活用事例を集めて公開する案。OSS をさらに広めるには導入事例が重要であり、どのような形で紹介するか検討中です。

- [PR #597](https://github.com/digitaldemocracy2030/kouchou-ai/pull/597) (作者: dentaro)  
  レポートページのスクロール時に図の拡大縮小が誤って動作しないように調整する変更がまだレビュー待ちです。「チャート上にオーバーレイを被せる」アプローチについて開発者間で議論が進んでいます。

- [PR #543](https://github.com/digitaldemocracy2030/kouchou-ai/pull/543) (作者: tokoroten)  
  アドミン画面で不要なリロードを減らす修正。完了済み・エラー済みのレポートを再リロードしないアプローチで問題ないか、追加検証が求められています。

---

## ご参加をお待ちしています

さまざまな機能や不具合、それらを解決するための議論が盛んに行われている状況です。  
ぜひお気軽にIssue へのコメントや PR のレビュー参加などご協力ください。  
みなさまの貢献が「広聴AI」のさらなる成長と、より使いやすいデジタル民主主義の実現に繋がります！