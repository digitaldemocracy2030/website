# DD2030 Website (Lume版)

このディレクトリには Deno Lume 静的サイトジェネレーターを使用した DD2030
ウェブサイトのソースが含まれています。

## セットアップ

### 前提条件

- [Deno](https://deno.land/) v2.x以上
- `curl -fsSL https://deno.land/install.sh | sh`

### 開発サーバーの起動

```bash
cd lume
deno task serve
```

### ビルド

```bash
cd lume
deno task build
```

## ディレクトリ構造

```
/
├── old-nextjs/       # 元のファイル群 (近日削除予定)
├── _config.ts        # Lume設定ファイル
├── _cms.ts           # LumeCMS設定ファイル
├── deno.json         # Deno設定ファイル
├── src/              # ソースファイル
│   ├── _data.yml     # グローバルデータ
│   ├── _includes/    # テンプレート
│   │   ├── layout.vto
│   │   ├── index.vto
│   │   ├── page.vto
│   │   └── post.vto
│   ├── _components/  # コンポーネント
│   ├── style/        # スタイル
│   │   └── main.css
│   ├── about/        # aboutページ
│   ├── news/         # お知らせページ
│   ├── kouchou-ai/   # 広聴AIページ
│   ├── idobata/      # いどばたページ
│   ├── polimoney/    # Polimoneyページ
│   ├── case/         # 活用事例ページ
│   ├── history/      # プロジェクト歴史ページ
│   └── ...           # その他のページ
└── .github/workflows/lume.yml  # GitHub Actions設定
```

## 元のNext.jsからの移行

このLumeプロジェクトは、元のNext.js
SSGベースのウェブサイトから移植されました。主な変更点：

- React/Next.jsコンポーネント → Ventoテンプレート (.vto)
- pages/app ディレクトリ → src/ディレクトリ
- CSS Modules/Tailwind → 標準CSS + Tailwind CSS
- Markdown処理 → Lumeのmarkdownプラグイン

## ライセンス

MIT License
