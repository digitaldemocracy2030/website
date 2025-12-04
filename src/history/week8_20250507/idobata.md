# いどばたシステム 4/30~5/7のGitHub活動まとめ

今週（2025-04-30〜2025-05-07）は、いどばたシステム（idobata）のUI改善やチャット機能の強化など、多数のIssueとPull Requestがクローズ・マージされました。また、新たに作成されたIssueや、引き続き議論が必要なトピックも多く挙がっています。以下に、今週完了したものと、まだ未完了で議論中の点についてまとめます。

---

## 今週完了した主なIssue

完了したIssueは全部で19件あります。ここではユーザにとって嬉しい新機能・改善点が多いものを中心にご紹介します。

- [Issue #224](https://github.com/digitaldemocracy2030/idobata/issues/224) TOP以外のページにいるときもメニューのTOPがカレント表示になる問題を修正。  
  → メニュー選択の混乱が解消され、UIの分かりやすさが向上しました。

- [Issue #223](https://github.com/digitaldemocracy2030/idobata/issues/223) PC表示時、ハンバーガーメニューを廃止してメニュー固定表示化。  
  → [PR #242](https://github.com/digitaldemocracy2030/idobata/pull/242)（作者: romatica+Devin）により実装され、PCでの操作性が大きく改善されています。

- [Issue #156](https://github.com/digitaldemocracy2030/idobata/issues/156) Faviconの変更。  
  → [PR #192](https://github.com/digitaldemocracy2030/idobata/pull/192)（作者: itoz）で新しいロゴFaviconが適用され、ブラウザタブでの視認性が向上。

- [Issue #235](https://github.com/digitaldemocracy2030/idobata/issues/235) & [Issue #130](https://github.com/digitaldemocracy2030/idobata/issues/130) Buttonコンポーネントの共通化。  
  → [PR #236](https://github.com/digitaldemocracy2030/idobata/pull/236)（作者: itoz）でベタ書きボタンを集約し、デザイン・コード管理がスッキリしました。

- [Issue #160](https://github.com/digitaldemocracy2030/idobata/issues/160) 「課題点」を表すアイコン統一。  
  → [PR #249](https://github.com/digitaldemocracy2030/idobata/pull/249)（作者: romatica+Devin）などで、LucideアイコンのMessageSquareWarningに置き換え。見た目を揃えました。

- [Issue #128](https://github.com/digitaldemocracy2030/idobata/issues/128) TOP画面の見出しデザイン調整。  
  → [PR #232](https://github.com/digitaldemocracy2030/idobata/pull/232)（作者: itoz）でフォントやタイトル表示が修正され、より見やすいTOPページに。

他にも、チャット履歴の保持機能やレスポンシブ対応など、多岐にわたる修正が行われています。開発者以外の方にも、画面操作時の違和感が減ったり、サイトデザインがわかりやすくなったりといった良い影響が実感しやすい仕上がりになっています。

---

## 今週マージされた主なPull Request

今週は30件のPRがマージされています。代表的なものを抜粋します。

- [PR #242](https://github.com/digitaldemocracy2030/idobata/pull/242)「ハンバーガーメニューと固定サイドバーの実装」  
  作者: romatica+Devin  
  PC版でメニューを常時左側に固定するレイアウトとなり、より操作しやすくなりました。

- [PR #236](https://github.com/digitaldemocracy2030/idobata/pull/236)「全体的にButtonコンポネントを利用」  
  作者: itoz  
  ベタ書きの<button>要素を共通コンポーネントに置き換えて、保守性が向上。

- [PR #245](https://github.com/digitaldemocracy2030/idobata/pull/245) & [PR #247](https://github.com/digitaldemocracy2030/idobata/pull/247)「チャット履歴表示機能の実装」  
  作者: jujunjun110+Devin  
  ページをリロードしても会話が継続され、AIチャット利用がより実用的に。

- [PR #226](https://github.com/digitaldemocracy2030/idobata/pull/226)「フォントサイズを全体的に16pxに統一」  
  作者: itoz  
  スマホやPC画面問わず文字サイズが見やすくなり、UIの統一感が向上。

- [PR #239](https://github.com/digitaldemocracy2030/idobata/pull/239)「Remove Dead Code」  
  作者: Satoru Horie+Devin  
  knipツールを利用して未使用コードを大幅削除。開発者にとって読みやすいリポジトリへ。

- [PR #240](https://github.com/digitaldemocracy2030/idobata/pull/240)「AIチャットの応答を段階的に送信する機能を実装」  
  作者: Shutaro Aoyama+Devin  
  ユーザ体験として、AIが生成途中の文を順次送ってくるため対話感がアップ。

- [PR #238](https://github.com/digitaldemocracy2030/idobata/pull/238)「Add knip configuration for dead code detection」  
  作者: Satoru Horie+Devin  
  未使用コードを検知する設定を追加し、今後のコード品質の維持をサポート。

それぞれのPRで、多様な開発者（+Devin がAIアシスタント連携）によるコントリビュートが行われている点も特徴的です。

---

## まだ未完了で議論中のIssue

過去7日間で新たに23件のIssueが作成されました。特に注目のものをいくつか紹介します。いずれも開発者以外の方の声や知恵を活かせるテーマですので、ぜひご意見をお寄せください。

- [Issue #222](https://github.com/digitaldemocracy2030/idobata/issues/222)「音声で入出力したい」  
  音声入力→AI整形、音声出力の実現など、アクセシビリティやモバイル利用時の快適さ向上に関する議論が進んでいます。

- [Issue #218](https://github.com/digitaldemocracy2030/idobata/issues/218)「どんな人の貢献があったかを可視化したい」  
  コントリビューター同士が、お互いの意見や貢献度を可視化して確認できる仕組みを検討中。OSSにおける透明性確保の一環です。

- [Issue #217](https://github.com/digitaldemocracy2030/idobata/issues/217)「export手段の多様化」  
  PDF、テキスト、マークダウン出力が欲しいという要望。ワークショップ記録などに便利との声が上がっています。

- [Issue #214](https://github.com/digitaldemocracy2030/idobata/issues/214)「画面を開いた直後のチャットUIの意図がわかりにくい」  
  初見ユーザー向けに、どう使い始めれば良いかをガイドする工夫の議論が行われています。

- [Issue #205](https://github.com/digitaldemocracy2030/idobata/issues/205)「会話の終わり方に迷う」  
  AIチャットの質問が続くため、どのタイミングで入力を終わるのがベストかが気になるという指摘。UI設計を再検討中です。

- [Issue #185](https://github.com/digitaldemocracy2030/idobata/issues/185)「レポートの質を上げる (市民意見/イラストまとめ/論点まとめ)」  
  実際の議論データを活用したレポートの質向上がテーマ。5/4のリアルタイム使用で得たフィードバックを今後反映予定。

これら以外のIssueでも、「プレースホルダーテキストを改善したい」「もっと具体的・実用的な解決策をAIが提案できるようにしたい」など、多様な視点から議論が深まっています。

---

## 多様な貢献者（メンター・レビュアー）の存在

今回のリポジトリでは、romaticaさん、itozさん、Satoru Horieさん、spinuteさん、shutaro aoyamaさん、tomoki2757さんなど、多数のコントリビューターによってレビューや実装が行われています。  
さらに「+Devin」がついている場合は、人間の開発者がDevinというAIアシスタントを活用してPRを作成・編集しており、AIサポートを取り入れながら効率的に開発が進められています。

このように、さまざまな得意分野をもつ方が貢献者としてプロジェクトに関わることで、OSS開発がより活性化し、幅広い観点での改善が進められるのが大きな特徴です。

---

## まとめ

- 新UIやチャット履歴の保持、フォントサイズの統一など、多数の新機能・改善が完了し、全体的に使いやすさが向上しました。  
- 未完了Issueでは、音声入出力やコントリビューター可視化、レポートの品質向上などが議論中です。  
- 多様な開発者やメンターのもと、AIも積極的に活用しながら開発が急ピッチで進んでいます。  

もし「こんな機能がほしい」「UIをもっとこう改善したい」といったアイデアがあれば、ぜひ[Issue](https://github.com/digitaldemocracy2030/idobata/issues)として投稿してみてください。初心者の方の参加も大歓迎です！一緒にいどばたシステムを盛り上げていきましょう。