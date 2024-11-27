import "./weather-icon";
import "./weather-zipcode-input-field";
import "./weather-area-input-field";
import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { WeatherZipcodeInputField } from "./weather-zipcode-input-field";
import { WeatherAreaInputField } from "./weather-area-input-field";
import {
	animation_style,
	base_style,
	dialog_button_style,
} from "./common-styles";
import { AreaSuggestions } from "./types";
import { ScopedEventManager } from "./events";
import { DEFAULT_SETTINGS } from "./const";

@customElement("weather-search")
export class WeatherSearch extends LitElement {
	#event_manager = new ScopedEventManager(this);

	@property({ type: Boolean }) open = false;
	@property({ type: Array }) area_suggestions: AreaSuggestions = [];
	@property({ type: Number }) input_area_debounce: number =
		DEFAULT_SETTINGS.INPUT_AREA_DEBOUNCE;
	@property() search_methods = "all";

	@query("weather-zipcode-input-field")
	zipcode_input_field!: WeatherZipcodeInputField;
	@query("weather-area-input-field") area_input_field!: WeatherAreaInputField;
	@query("#current-location-btn") current_location_btn!: HTMLButtonElement;

	#on_click_current_location = () => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;

				this.#event_manager.dispatch("search", {
					method: "location",
					location: { latitude, longitude },
				});
			},
			() => {
				this.#event_manager.dispatch("search", {
					method: "location",
					location: null,
				});
			}
		);
	};

	#on_close_dialog = () => {
		this.open = false;
		this.zipcode_input_field?.reset();
		this.area_input_field?.reset();
	};

	protected override render(): unknown {
		const methods = this.search_methods
			.split(",")
			.map((method) => method.trim());

		return html`
			<dialog ?open=${this.open}>
				<header>
					<h1><span>地域を検索する</span></h1>
					<button @click=${this.#on_close_dialog}>
						<span class="sr-only">ダイアログを閉じる</span>
						<weather-icon name="close" width="30px" height="30px"></weather-icon>
					</button>
				</header>
				<div class="search-methods">
					${methods.includes("current-location") || methods.includes("all")
						? html`
								<button
									part="search"
									class="dialog-btn"
									id="current-location-btn"
									type="button"
									@click=${this.#on_click_current_location}
								>
									現在地から取得する
								</button>
						  `
						: ""}
					${methods.includes("zipcode") || methods.includes("all")
						? html`
								<details open>
									<summary>郵便番号から取得する</summary>
									<weather-zipcode-input-field
										exportparts="search, input"
									></weather-zipcode-input-field>
								</details>
						  `
						: ""}
					${methods.includes("area") || methods.includes("all")
						? html`
								<details open>
									<summary>地域名から取得する</summary>
									<weather-area-input-field
										exportparts="search, input"
										.area_suggestions=${this.area_suggestions}
										.input_area_debounce=${this.input_area_debounce}
									></weather-area-input-field>
								</details>
						  `
						: ""}
				</div>
			</dialog>
		`;
	}

	static override styles = [
		base_style,
		dialog_button_style,
		animation_style,
		css`
			dialog {
				padding: 2rem;
				position: absolute;
				inset: 0;
				width: 100%;
				height: 100%;
				color: var(--_weather-widget-search-dialog-text);
				background: var(--_weather-widget-search-dialog-bg);
				z-index: 1;
				border: 0;
				animation: fade-out 0.3s ease-out;
				container: dialog / inline-size;
			}

			dialog[open] {
				animation: fade-in 0.3s ease-out;
			}

			@container widget (width < 326px) {
				dialog {
					padding: 1rem;
				}
			}

			header {
				display: flex;
				align-items: center;
				margin-block-end: 2rem;

				h1 {
					flex-grow: 1;

					span {
						font-size: 1.5rem;
						display: inline-block;
					}
				}
			}

			summary {
				font-size: 1.2rem;
				cursor: pointer;
			}

			.search-methods {
				display: grid;
				gap: 2rem;

				button {
					width: fit-content;
				}
			}
		`,
	];
}

declare global {
	interface HTMLElementTagNameMap {
		"weather-search": WeatherSearch;
	}
}
