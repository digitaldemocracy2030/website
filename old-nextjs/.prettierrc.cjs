// package.jsonに"type": "module"と設定されている場合、
// 今回のようにjsで記述するなら.cjs拡張子を付ける必要がある

/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'all', // 配列やオブジェクトの末尾にカンマ
  tabWidth: 2, // インデント幅は2スペース
  useTabs: false, // スペースを使用
  semi: false, // ステートメント末尾にセミコロン
  singleQuote: true, // 文字列はシングルクォート
  jsxSingleQuote: false, // JSXはダブルクォート
  arrowParens: 'always', // アロー関数の引数は常に括弧で囲む
  printWidth: 100, // 1行の最大文字数
  bracketSpacing: true, // オブジェクトリテラルの括弧内にスペース
  overrides: [
    // ファイル種別ごとの設定
    {
      files: '*.html',
      options: {
        printWidth: 360, // HTMLは長めの行を許容
      },
    },
  ],
}

module.exports = config
