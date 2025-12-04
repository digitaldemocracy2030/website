# 広聴AI 安定版 v3.0.0 リリースのお知らせ

## 広聴AIとは

広聴AI（こうちょうAI）は、多くの市民からの意見を効率的に分析し、可視化するためのツールです。自治体や政治家が市民の声を理解し、より良い政策決定を行うための支援システムとして開発されました。

デジタル民主主義2030プロジェクトの一環として開発された広聴AIは、「Talk to the City」の取り組みにインスパイアされ、大量の市民の声を整理して理解しやすくすることを目指しています。

## 安定版v3.0.0の主な特長

このたび、LocalLLM対応とコスト削減機能を搭載した広聴AI安定版v3.0.0をリリースしました。一般の方々にとって特に重要な変更点をご紹介します。

### LocalLLM対応

- **API費用なしで利用可能**: ローカル環境で動作するLLMを使用することで、OpenAI APIなどの外部サービス利用料金が不要になりました
- **Ollamaサーバー連携**: ローカルで動作するOllamaサーバーと連携し、APIキーなしで利用できます
- **日本語対応モデル自動ダウンロード**: デフォルトで`hf.co/elyza/Llama-3-ELYZA-JP-8B-GGUF`モデルが自動的にダウンロードされます
- **GPU活用**: GPUメモリ8GB以上の環境があれば、高速な処理が可能です（`.env`ファイルで`WITH_GPU=true`と設定）
- **管理画面からの設定**: 管理画面からLocalLLMプロバイダーを選択し、アドレスやモデルを設定できます

### ソースリンク機能

- **散布図からオリジナルデータへのリンク**: 散布図上の各ポイントから、元の意見データに直接アクセスできるようになりました
- **トレーサビリティの向上**: 分析結果から元データへの追跡が容易になり、根拠の確認がスムーズになりました
- **管理画面での有効化**: 管理画面からソースリンク機能のオン/オフを切り替えられます

### コスト表示機能

- **トークン使用量の可視化**: 処理に使用されたトークン数とその推定コストが表示されるようになりました
- **複数プロバイダー対応**: OpenAI、Azure、OpenRouter、LocalLLMなど、様々なプロバイダーのコスト計算に対応
- **レポートカードの強化**: レポート一覧画面に推定コスト、使用プロバイダー、モデル情報が表示されるようになりました

### その他の改善

- **レポートカードUIの改善**: より見やすく、情報量の多いレポートカードになりました
- **エラー処理の強化**: 問題発生時のエラーメッセージがより詳細になり、トラブルシューティングが容易になりました
- **埋め込み処理のローカル化**: 埋め込み処理もローカルで実行できるようになり、さらなるコスト削減が可能になりました
- **検索機能の強化**: 文字列検索によるフィルタリング機能が追加され、大量の意見からの検索が容易になりました

## ご利用方法

広聴AIは、CSVファイルやGoogleスプレッドシートに記録された市民からの意見データをアップロードするだけで、AIが自動的に意見を抽出し、類似した意見をグループ化して可視化します。

v3.0.0からは、LocalLLM対応により予算確保の心配なく試すことができるようになりました。詳細な利用方法については、[プロジェクトのウェブサイト](https://github.com/digitaldemocracy2030/kouchou-ai/)をご覧ください。

## 今後の展望

広聴AIプロジェクトは、市民の声をより効果的に政策に反映させるための取り組みを続けています。LocalLLM対応により、より多くの自治体や組織が予算の制約なく広聴AIを活用できるようになりました。今後も機能の拡充や使いやすさの向上を目指して開発を進めてまいります。

ぜひ広聴AIをご活用いただき、市民と行政・政治家の対話を促進する新しい民主主義の形を一緒に築いていきましょう。

## コントリビューター

広聴AI v3.0.0の開発に貢献した方々（アルファベット順）：

- [101ta28](https://github.com/101ta28)
- [Devin AI](https://github.com/devin-ai-integration)
- [Kitaro Yamaoka](https://github.com/yamaokakitaro)
- [Masato Sasano](https://github.com/masatosasano2)
- [Masayuki Tanenobu](https://github.com/mtane0412)
- [nanocloudx](https://github.com/nanocloudx)
- [nasuka](https://github.com/nasuka)
- [NISHIO Hirokazu](https://github.com/nishio)
- [sasano](https://github.com/sasano)
- [shgtkshruch](https://github.com/shgtkshruch)
- [Shingo OHKI](https://github.com/shingo-ohki)
- [takahiroanno](https://github.com/takahiroanno)
- [takumi19910112](https://github.com/takumi19910112)
- [tokoroten](https://github.com/tokoroten)
- [YamasakaTakumi](https://github.com/YamasakaTakumi)
