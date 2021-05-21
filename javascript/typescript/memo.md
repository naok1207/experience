# typescript 挑戦

npmプロジェクト作成
```
npm init
```

Typescript関連のインストールと設定ファイル作成
```
# npm install --save-dev typescript
yarn add --dev typescript
```

typescriptのコンパイラオプションファイルを作成
```
./node_modules/.bin/tsc --init
```
`tsconfig.json`ファイルが作成される

```json
{
  "complierOptinos": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "string": true,
    "esModuleInterop": true
  },
  "include": [
    "./ts/**/*.ts"
  ]
}
```

webpackインストール
```
yarn add --dev webpack webpack-cli ts-loader
```

`webpack.config.js`webpackの設定ファイル
```
const path = require('path');

module.exports = {
// モード値を production に設定すると最適化された状態で、
// development に設定するとソースマップ有効でJSファイルが出力される
mode: 'development', // "production" | "development" | "none"

// メインとなるJavaScriptファイル（エントリーポイント）
entry: './ts/index.ts',

output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
},

module: {
    rules: [{
    // 拡張子 .ts の場合
    test: /\.ts$/,
    // TypeScript をコンパイルする
    use: 'ts-loader'
    }]
},
// import 文で .ts ファイルを解決するため
resolve: {
    modules: [
    "node_modules", // node_modules 内も対象とする
    ],
    extensions: [
    '.ts',
    '.js' // node_modulesのライブラリ読み込みに必要
    ]
}
};
```

コンパルコマンドを追加する
`package.json`
```json
{
    "name": "tstutorial",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "tsc": "tsc",
        "build": "webpack"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "ts-loader": "^4.4.1",
        "typescript": "^2.9.2",
        "webpack": "^4.12.0",
        "webpack-cli": "^3.0.8"
    }
}
```

HTML,TypeScriptをかく
`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="contents">
    </div>
    <script src="./dist/index.js"></script>
</body>
</html>
```

tsフォルダを作成して、`index.ts`を作成する
```
class User {
  public age: number;
  public familyName: string;
  public givenName: string;
  constructore (familyName: string, givenName: string, age: number) {
    this.age = age;
    this.familyName = familyName;
    this.givenName = givenName;
  }
}

const user = new User('海老原', '賢次', 44);

const contentsElem = document.getElementById('contents');
if (!!contentsElem) {
  contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}
```

```
yarn run tsc
or
yarn run build
```

### 参考
[Typescriptチュートリアル](https://qiita.com/EBIHARA_kenji/items/31b7c1c62426bdabd263)
