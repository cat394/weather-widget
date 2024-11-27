# Weather widgets

これは日本語で天気情報を表示するウィジェットを作るためのウェブコンポーネントです。

現在は、特定の１日のみの天気予報の表示のみをサポートしています。

## インストール

```bash
npm i @kokomin/weather-widget
```

## 天気データを表示する

1. データを用意する

   以下の型を持つデータを用意します。

   ```ts
   interface WeatherInfo {
   	weather: Weather;
   	temp: number;
   	pop: number;
   }

   export interface WeatherData {
   	date: string;
   	location: string;
   	main: WeatherInfo;
   	hours: (WeatherInfo & { time: string })[];
   }
   ```

2. HTML を記述する

   Web コンポーネントをマークアップに含めます。

   ```html
   <header>
   	<script type="module" src="/weather-widget/dist/index.js"></script>
   </header>
   <body>
   	<weather-widget></weather-widget>
   </body>
   ```

3. データをセットする

   要素への参照を取得したら、`data`プロパティに値をセットします。

   ```ts
   const weather_widgets = document.querySelector("weather-widget");

   if (weather_widgets) {
   	fetch("API_ENDPOINT")
   		.then((res) => res.json())
   		.then((data) => (weather_widgets.data = data));
   }
   ```

4. UI が表示されます。

   ![ウィジェットのトップ]("./images/weather-widget-home.png")
   ![ウィジェットのチャート]("./images/weather-widget-chart.png")
   ![ウィジェットの検索ダイアログ]("./images/weather-widget-search.png")

   これで一通りの UI は完成しましたね。

## イベントから検索内容を受け取り、UI を更新する。

デフォルトでは、現在地と郵便番号と地域名から検索できるようになっています。

それらの情報は、`weather-widget`要素で発生する`search`イベントで受け取れます。

`event.detail.method`の値で分けると、各検索方法に適した処理を行うことができます。

郵便番号は検証済みであるため、改めて行う必要はありません。

Geolocation API を使用してユーザーの緯度と経度を取得しようとした際、ユーザーがこれを拒否する可能性があります。

その場合、`event.detail.location`の値は`null`になっています。

```ts
weather_widgets.addEventListener("search", (event) => {
	const detail = event.detail;

	switch (detail.method) {
		case "zipcode":
			console.log("郵便番号", detail.zipcode);
			break;
		case "area":
			console.log("ユーザーが入力した地域名", detail.area);
			break;
		case "location":
			const location = detail.location;

			if (!location) {
				console.error("ユーザーが現在地の取得を拒否しました。");
				return;
			}

			console.log("ユーザーがいる場所の緯度", location.latitude);
			console.log("ユーザーがいる場所の経度", location.longitude);
			break;
	}
});
```

このイベントの中で、先ほど取得した`weather-widget`要素の`data`プロパティに新しい天気データを再割り当てすれば、自動的に UI は更新されます。

また、天気が取得したのちに検索ダイアログを閉じる場合は、`weather-widget`要素の`hide_search_dialog()`メソッドをを利用します。

以下に、一般的に利用されるであろうパターンを示しておきます。

```ts
weather_widgets.addEventListener("search", (event) => {
	const detail = event.detail;

	switch (detail.method) {
		case "zipcode":
			fetch(`/weather?zipcode=${detail.zipcode}`)
				.then((res) => res.json())
				.then((data) => {
					weather_widgets.data = data;
					weather_widgets.hide_search_dialog();
				});
			break;

		default:
			return;
	}
});
```

## 地域名の検索候補を出す

ユーザーが地域名を検索する際に、検索候補を出すことで UX が改善されたり、天気情報の効率的な検索に役立ちます。

検索候補は`area_suggestions`属性またはプロパティより設定可能です。

```html
<weather-widget area-suggestions="['北海道', '青森', '岩手']"></weather-widget>
```

```ts
fetch("/area/search?prefectures")
	.then((res) => res.json())
	.then((data) => (weather_widgets.area_suggestions = data));
```

またはユーザーの入力文字に合わせて動的に候補を表示したいことがあります。

そのために、`input-area`イベントが用意されています。

このイベントはデフォルトで 500 ミリ秒のデバウンスが設定されていますが、`input-area-debounce`属性から簡単に変更可能です。

例えば、デバウンスを 1 秒ごとに設定したいならば、以下のようにします。

```html
<weather-widget input-area-debounce="1000"></weather-widget>
```

あとは、イベントから候補を動的に表示させます。

```ts
weather-widget.addEventListener("input-area", (event) => {
	console.log("このイベントハンドラはユーザーが前に入力してから少なくとも1秒は経過した後に呼び出されます。");

	const area = event.detail.value;

	fetch(`/area/search?name=${area}`)
		.then(res => res.json())
		.then(data => weather-widget.area_suggestions = data)
});
```

## UI のカスタマイズ

検索の仕方を制限したかったり、そもそも検索させる必要がない場合、これらの表示 / 非表示を`search-methods`属性から簡単に変更できます。

例えば、すべての検索 UI を表示する場合は以下のように記述できます。

```html
<weather-widget
	search-methods="current-location, zipcode, area"
></weather-widget>

<!-- または all 値(デフォルト値) -->

<weather-widget search-methods="all"></weather-widget>
```

『なんでシンプルに`location`ではなく、`current-location`なの？』と疑問に思うかもしれません。これは将来的に、現在地からデータを取得するボタンと、単に緯度と経度を入力して`search`イベントの location メソッドから検索する入力フィールド の表示を独立して切り替えられたら UI の柔軟性が高まるという考えのもと、このような仕様になっています。

カンマの後に空白があるのは読みやすさを配慮してのことであり、なくても問題ありません。

それぞれの検索 UI はカンマ区切りで制御できます。例えば、現在地を取得するボタンは必要ないときは以下のように記述します。

```html
<weather-widget search-methods="zipcode, area"></weather-widget>
```

そもそも検索異能自体が不要な場合は空の文字列に設定してください。

```html
<weather-widget search-methods=""></weather-widget>
```

チャートに関しては、現在のところ UI の制御ができません。これは、将来的に行う、週のデータや月のデータを表示する計画がどうなるか定かではないからです。

そのため、現在としては、`<weather-widget>`の`data`プロパティに割り当てられた値が`hours`フィールドの有無でチャートの表示 / 非表示を制御しています。

## テーマを含むスタイルの変更

豊富な CSS 変数による色の変更は許可していますが、最も簡単で推奨される方法は`--weather-widget-hue`の値を変更することです。

```css
:root {
	/* change red theme */
	--weather-widget-hue: 30;
}
```

これにより、今後開発される予定の UI までその色が適用されることになるため、バージョンアップがしやすいというメリットがあります。

レスポンシブに対応するよう既にスタイルが設定されているため、ホスト要素の`max-width`の値は変更しないでください。

コンポーネントの幅は 220px から 400px までを想定しています。

## 独自のデータ変換プロセスの利用

`weather-widget`は以下ののようなデータを受け取ることを想定しています。

```json
{
	"date": "2024-11-20T00:00:00.000Z",
	"location": "東京都",
	"main": {
		"weather": "晴れ",
		"temp": 22.5,
		"pop": 0.1
	},
	"hours": [
		{
			"time": "2024-11-20T00:00:00.000Z",
			"weather": "曇り",
			"temp": 18.2,
			"pop": 0.2
		},
		{
			"time": "2024-11-20T03:00:00.000Z",
			"weather": "曇り",
			"temp": 17.8,
			"pop": 0.3
		},
		{
			"time": "2024-11-20T06:00:00.000Z",
			"weather": "雨",
			"temp": 16.5,
			"pop": 0.7
		},
		{
			"time": "2024-11-20T09:00:00.000Z",
			"weather": "雨",
			"temp": 20.0,
			"pop": 0.1
		},
		{
			"time": "2024-11-20T12:00:00.000Z",
			"weather": "晴れ",
			"temp": 22.5,
			"pop": 0.05
		},
		{
			"time": "2024-11-20T15:00:00.000Z",
			"weather": "晴れ",
			"temp": 23.0,
			"pop": 0
		},
		{
			"time": "2024-11-20T18:00:00.000Z",
			"weather": "曇り",
			"temp": 21.2,
			"pop": 0.1
		},
		{
			"time": "2024-11-20T21:00:00.000Z",
			"weather": "雪",
			"temp": 19.0,
			"pop": 0.2
		},
		{
			"time": "2024-11-21T00:00:00.000Z",
			"weather": "曇り",
			"temp": 19.0,
			"pop": 0.2
		}
	]
}
```

デフォルトでコンポーネントはこの形式のデータを受け取ると、ISO 文字列を日付や 2 桁の表記に変換したり、`pop`の値を割合からパーセンテージに変換します。

しかしときには、このような変換が不要であったり、独自の変換プロセスを利用したい場面があると思います。

もし変換が不要であれば、`notransform`属性を追加してください。

```html
<weather-widget notransform></weather-widget>
```

独自の変換関数をセットする場合は、`weather_widgets.transform`から値を再割り当てしてください。

```ts
weather_wigets.transform = (input_weather_data) => {
	// 受け取った天気情報を上記のフォーマットに合わせる...
	// 最後に、変換したデータを返す
	return transformed;
};
```

## その他 API

- 気温の単位は`unit`属性(またはプロパティ)から変換する。

- `weather-widget.close_search_dialog()`により、検索ダイアログを閉じる。

### スタイリング

- 以下は外部からアクセス可能な CSS パーツの一覧です。

  | パーツ名 | 説明                                                     |
  | -------- | -------------------------------------------------------- |
  | `search` | 検索ダイアログの『現在地を取得する』『検索する』のボタン |
  | `input`  | ユーザーの検索入力フィールド                             |

  スタイリングの例：

  ```css
  weather-widget::part(search) {
  	background: red;
  }

  weather-widget::part(input) {
  	background: blue;
  }
  ```

- 以下の CSS 変数から UI の色も変えられます。

  | 変数名                            | 説明                       |
  | --------------------------------- | -------------------------- |
  | weather-widget-bg-primary         | メインの背景色             |
  | weather-widget-text-primary       | メインのテキスト色         |
  | weather-widget-search-dialog-bg   | 検索ダイアログの背景色     |
  | weather-widget-search-dialog-text | 検索ダイアログのテキスト色 |
  | weather-widget-chart-label        | チャートのラベルの色       |
  | weather-widget-chart-grid         | チャートのグリッドの色     |
