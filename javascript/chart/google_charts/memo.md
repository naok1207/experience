# google charts memo
[折れ線グラフ【Google Charts入門】- 配当金推移をチャート化する方法](https://uxbear.me/googlecharts-line/)

```
// Visualization APIと、corechartパッケージをロードする
// Google Chartのpackages(['corechart'])を指定
google.charts.load('current', {'packages':['corechart']});

// ロード時のコールバックを"drawChart"に指定
google.charts.setOnLoadCallback(drawChart);
```

```
// コールバック関数
// データテーブル、チャートのオプション設定、チャート描画
function drawChart() {

  ：
}
```

### テーブル作成
データをjson形式で指定
```
// データテーブルを作る
// 年ごとの配当りまわり
var data = google.visualization.arrayToDataTable([
  ['年', '配当利回り(%)'],
  ['2011',  3.15],
  ['2012',  3.51],
  ['2013',  3.54],
  ['2014',  3.06],
  ['2015',  3.13],
  ['2016',  3.30],
  ['2017',  3.17],
  ['2018',  3.09],
  ['2019',  3.64],
]);
```
- `.DataTable()` 2次元の変更可能な値のテーブルを表す
- `.addColumns()` テーブルの形式
- `.addRows()` データの追加

### チャートオプション設定
```
// チャートのオプション設定
  var options = {
  title: 'VYMの配当利回り推移',
  legend: { position: 'bottom' }
  'width':600,　　　// 描画領域の横幅
  'height':480};　 // 描画領域の縦幅
};
var options = {'title':'オールシーズンズ戦略 - 黄金のポートフォリオ', // タイトル

```
- `title` タイトル
- `legend` チャートの概要的なやつの位置
- `width` 表示の横幅
- `height` 表示の縦幅
