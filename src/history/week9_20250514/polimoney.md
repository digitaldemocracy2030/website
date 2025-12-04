# Polimoney 5/7~5/14 のGitHub活動まとめ

この1週間（2025-05-07 〜 2025-05-14）におけるPolimoneyリポジトリの主な動きをまとめました。OSS開発への参加に興味のある方は、ぜひご覧いただき、新たなディスカッションやコントリビューションのきっかけにしていただければと思います。

---

## 今週完了したIssue

下記5件のIssueがクローズされ、開発が一歩前進しました。

- [Issue #56](https://github.com/digitaldemocracy2030/polimoney/issues/56) 「test」  
  → moai-redcapさんが作成し、簡易的なテストIssueでした。

- [Issue #53](https://github.com/digitaldemocracy2030/polimoney/issues/53) 「Issue→projectsテスト」  
  → moai-redcapさんが、IssueをProject管理に登録するテストを実施。

- [Issue #18](https://github.com/digitaldemocracy2030/polimoney/issues/18) 「issue templateを用意する」  
  → adust09さんがIssue Templateを追加し、新規参加者がIssueを立てやすくなりました。

- [Issue #17](https://github.com/digitaldemocracy2030/polimoney/issues/17) 「データ引用元のURLを貼る」  
  → ユーザーがデータ出典を確認できるように、リンクを貼る機能が整備されました。作成はadust09さん。

- [Issue #12](https://github.com/digitaldemocracy2030/polimoney/issues/12) 「LICENSE / CLAを書く」  
  → takahiroannoさんが提案していたライセンスおよびCLAに関するドキュメントが整備されました。

上記のように、初めての参加者でも作業しやすい仕組みが徐々に整い始めています。

---

## 今週マージされたPR

以下8件のPull Requestがマージされ、新機能・改善が反映されました。PRの作者に「devin-ai-integration[bot]」が含まれている場合は、人間の開発者がDevin (AI) を活用しているとお考えください。

1. [PR #58](https://github.com/digitaldemocracy2030/polimoney/pull/58) 「update readme」  
   - 作成者: dotneet  
   - npm install関連の記述を修正し、READMEをわかりやすく改善。

2. [PR #52](https://github.com/digitaldemocracy2030/polimoney/pull/52) 「reactのレンダリング時の警告修正」  
   - 作成者: dotneet  
   - 重複しているHTML要素のidを修正し、Reactコンポーネントの警告を解消。

3. [PR #49](https://github.com/digitaldemocracy2030/polimoney/pull/49) 「cla追加, プルリク & issueのテンプレート追加, 自己アサイン機能追加」  
   - 作成者: moai-redcap  
   - [Issue #12](https://github.com/digitaldemocracy2030/polimoney/issues/12) や [Issue #18](https://github.com/digitaldemocracy2030/polimoney/issues/18) の関連作業として、CLAファイル・PRテンプレート・Issueテンプレートを追加し、/assignコマンドによる自己アサインを可能に。

4. [PR #44](https://github.com/digitaldemocracy2030/polimoney/pull/44) 「gemini 2.5 pro preview 05-26 導入」  
   - 作成者: shumizu418128  
   - Geminiの新バージョンによるOCR機能のアップデートをリポジトリに反映。

5. [PR #43](https://github.com/digitaldemocracy2030/polimoney/pull/43) 「docs: Add Japanese translation of project documentation」  
   - 作成者: obama00300+Devin  
   - プロジェクトのドキュメントを日本語化した大規模変更。日本語ドキュメントの追加により、より多くの日本語話者が参加しやすくなりました。

6. [PR #42](https://github.com/digitaldemocracy2030/polimoney/pull/42) 「Devin wikiコンテンツのドキュメント追加」  
   - 作成者: obama00300+Devin  
   - Devinと協働する際の手順説明を書いたドキュメントを追加。今後のAI支援開発を見据えた整備。

7. [PR #39](https://github.com/digitaldemocracy2030/polimoney/pull/39) 「収支報告書の表現に合わせて修正」  
   - 作成者: shumizu418128  
   - 収支報告書とGemini出力の文言を揃え、「翌年への繰越額」など表現を一致させることで混乱を防止。

8. [PR #24](https://github.com/digitaldemocracy2030/polimoney/pull/24) 「update readme」  
   - 作成者: adust09  
   - READMEにAIが生成した参考コマンドを追記。今後の開発者に向け導入手順を明確化。

---

## 今週新しく作成されたIssue

- [Issue #54](https://github.com/digitaldemocracy2030/polimoney/issues/54) 「TypeScriptのフォーマッターの導入」  
  - dotneetさん提案のフォーマッター導入。現在 [PR #57](https://github.com/digitaldemocracy2030/polimoney/pull/57) の形で進行中。

- [Issue #51](https://github.com/digitaldemocracy2030/polimoney/issues/51) 「CONTRIBUTING.mdを作成する」  
  - adust09さんがコントリビューションガイドの整備を提案。誰でも貢献方法を把握できるようになる見込み。

- [Issue #46](https://github.com/digitaldemocracy2030/polimoney/issues/46) 「検索結果のサムネイルを差し替える」  
  - adust09さんが検索結果で表示されるサムネイル画像の差し替えを提案。より公共性を高める狙い。

---

## 現在進行中のIssueで議論中のもの

- [Issue #41](https://github.com/digitaldemocracy2030/polimoney/issues/41) 「対内外向け[資料露出]」  
  - プロジェクトの認知度向上を図るためPRTIMESなどで資料を発信する計画。ユーザー／ビューアー向けアプローチについて議論中。

- [Issue #40](https://github.com/digitaldemocracy2030/polimoney/issues/40) 「対内外向け[資料作成]」  
  - ロゴやポンチ絵、営業資料作成のタスクが走行中。FigmaやGoogleスライドでコラボ予定。

- [Issue #34](https://github.com/digitaldemocracy2030/polimoney/issues/34) 「Pythonのlinter、formatterを導入する」  
  - こちらも [PR #59](https://github.com/digitaldemocracy2030/polimoney/pull/59) とあわせて作業が進行。ruffやpyrightなどの導入でコード品質向上が期待されています。

- [Issue #31](https://github.com/digitaldemocracy2030/polimoney/issues/31) 「議論：収支報告書に不記載(裏金)の情報について」  
  - 収支報告書にない情報（いわゆる裏金）をどう扱うか議論中。政治資金の透明性を高めるにはどうするか、多様な意見を交わしています。

- [Issue #29](https://github.com/digitaldemocracy2030/polimoney/issues/29) 「E2E動作確認（つなぎこみ）」  
  - OCR誤認識を許容してでも、ひとまずGemini出力からHTMLまで通すE2Eをテスト中。複数のPRで細かな修正が行われています。

- [Issue #25](https://github.com/digitaldemocracy2030/polimoney/issues/25) 「devcontainerを設定する」  
  - adust09さんが提案するVS Code向けDevContainer構築がほぼ完了。複数のExtensionやDockerfile整備による開発者のオンボーディング向上を狙っています。

- [Issue #20](https://github.com/digitaldemocracy2030/polimoney/issues/20) 「収支報告書のフォーマット調査」  
  - shumizu418128さん主導で、政治資金収支報告書の多様なフォーマット（都道府県ごとの違い等）を調査し、今後のOCR精度向上に活かす予定。

- [Issue #19](https://github.com/digitaldemocracy2030/polimoney/issues/19) 「OCR（画像認識）の精度強化」  
  - shumizu418128さんがGemini等を使ったOCR精度向上を検討中。ログの扱い、手書きへの対応など技術的なハードルも高いです。

- [Issue #5](https://github.com/digitaldemocracy2030/polimoney/issues/5) 「議員からの掲載許可に基づくデータ表示制御（オプトイン・アウト）機能」  
  - Olemi-llm-apprenticeさんの提案。政治家本人の意向をどうデータ公開に反映させるか、技術実装を含めた議論が必要。

- [Issue #4](https://github.com/digitaldemocracy2030/polimoney/issues/4) 「総務省ウェブサイトからの政治資金収支報告書PDF自動取得機能」  
  - ウェブスクレイピングでPDFを自動取得する試み。requests/BeautifulSoupによる自動化を検討中。

- [Issue #3](https://github.com/digitaldemocracy2030/polimoney/issues/3) 「Gemini API呼び出しの並列化とエラーハンドリング強化（レートリミット対応）」  
  - dotneetさんが [PR #55](https://github.com/digitaldemocracy2030/polimoney/pull/55) でエラーハンドリングを先行実装。今後も並列処理などのパフォーマンス対策が続く見込み。

---

## 進行中のPull Request

- [PR #59](https://github.com/digitaldemocracy2030/polimoney/pull/59) 「pythonにruff, pyrightを導入」 (作成者: dotneet)  
  - [Issue #34](https://github.com/digitaldemocracy2030/polimoney/issues/34) 対応。Pythonコードの品質向上へ。

- [PR #57](https://github.com/digitaldemocracy2030/polimoney/pull/57) 「Biome + lefthookの導入」 (作成者: dotneet)  
  - [Issue #54](https://github.com/digitaldemocracy2030/polimoney/issues/54) を踏まえたTypeScriptフォーマッター整備。

- [PR #55](https://github.com/digitaldemocracy2030/polimoney/pull/55) 「analyze_image_gemini.py のエラーハンドリング改善」 (作成者: dotneet)  
  - [Issue #3](https://github.com/digitaldemocracy2030/polimoney/issues/3) 部分対応。Gemini APIのリトライとログ強化が目的。

- [PR #50](https://github.com/digitaldemocracy2030/polimoney/pull/50) 「pinact runでバージョンをコミットハッシュにする」 (作成者: hatsu38)  
  - Gitのタグ改ざん対策として、依存バージョンをコミットハッシュで固定。

- [PR #48](https://github.com/digitaldemocracy2030/polimoney/pull/48) 「E2E - merge_jsons.py変更」 (作成者: shumizu418128)  
  - E2Eで合成するJSONフォーマットをアップデート。Gemini出力変更([PR #47](https://github.com/digitaldemocracy2030/polimoney/pull/47))に合わせる形。

- [PR #47](https://github.com/digitaldemocracy2030/polimoney/pull/47) 「E2E - Geminiプロンプト変更」 (作成者: shumizu418128)  
  - converter.ts で想定している形式をGeminiに出力させる努力。E2Eにつなげる大事なアップデート。

- [PR #45](https://github.com/digitaldemocracy2030/polimoney/pull/45) 「DevContainer configuration with Dockerfile, README, and VS Code settings」 (作成者: adust09)  
  - [Issue #25](https://github.com/digitaldemocracy2030/polimoney/issues/25) の実装詳細版。VS Code DevContainerで開発環境が構築しやすくなります。

- [PR #38](https://github.com/digitaldemocracy2030/polimoney/pull/38) 「all.jsonをsample_input.json形式に変換するスクリプト」 (作成者: hagi5)  
  - [Issue #29](https://github.com/digitaldemocracy2030/polimoney/issues/29) との関連で、OCR後の中間ファイルをさらにconverter.ts用に加工するPythonスクリプト。実務的な必要性が高く、追加のレビューを募集中。

---

## 参加の呼びかけ

- 新機能の実装やドキュメント拡充など、多岐にわたるタスクがあります。  
- Issueを見てコメントから始めてもOKですし、Pull Requestで直接提案していただくことも歓迎します。  
- 新しく見つけた問題は [Issue作成](https://github.com/digitaldemocracy2030/polimoney/issues) を。  
- また、[#41](https://github.com/digitaldemocracy2030/polimoney/issues/41) や [#40](https://github.com/digitaldemocracy2030/polimoney/issues/40) のように広報や資料作成方面でのご協力もお待ちしています。

「政治資金の透明化」という社会的意義のあるテーマで、多方面のコントリビューターが活躍中です。興味を持っていただけましたら、ぜひご参加ください！  