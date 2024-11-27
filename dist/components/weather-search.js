var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WeatherSearch_event_manager, _WeatherSearch_on_click_current_location, _WeatherSearch_on_close_dialog;
import "./weather-icon";
import "./weather-zipcode-input-field";
import "./weather-area-input-field";
import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { animation_style, base_style, dialog_button_style, } from "./common-styles";
import { ScopedEventManager } from "./events";
import { DEFAULT_SETTINGS } from "./const";
let WeatherSearch = class WeatherSearch extends LitElement {
    constructor() {
        super(...arguments);
        _WeatherSearch_event_manager.set(this, new ScopedEventManager(this));
        this.open = false;
        this.area_suggestions = [];
        this.input_area_debounce = DEFAULT_SETTINGS.INPUT_AREA_DEBOUNCE;
        this.search_methods = "all";
        _WeatherSearch_on_click_current_location.set(this, () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                __classPrivateFieldGet(this, _WeatherSearch_event_manager, "f").dispatch("search", {
                    method: "location",
                    location: { latitude, longitude },
                });
            }, () => {
                __classPrivateFieldGet(this, _WeatherSearch_event_manager, "f").dispatch("search", {
                    method: "location",
                    location: null,
                });
            });
        });
        _WeatherSearch_on_close_dialog.set(this, () => {
            this.open = false;
            this.zipcode_input_field?.reset();
            this.area_input_field?.reset();
        });
    }
    render() {
        const methods = this.search_methods
            .split(",")
            .map((method) => method.trim());
        return html `
			<dialog ?open=${this.open}>
				<header>
					<h1><span>地域を検索する</span></h1>
					<button @click=${__classPrivateFieldGet(this, _WeatherSearch_on_close_dialog, "f")}>
						<span class="sr-only">ダイアログを閉じる</span>
						<weather-icon name="close" width="30px" height="30px"></weather-icon>
					</button>
				</header>
				<div class="search-methods">
					${methods.includes("current-location") || methods.includes("all")
            ? html `
								<button
									part="search"
									class="dialog-btn"
									id="current-location-btn"
									type="button"
									@click=${__classPrivateFieldGet(this, _WeatherSearch_on_click_current_location, "f")}
								>
									現在地から取得する
								</button>
						  `
            : ""}
					${methods.includes("zipcode") || methods.includes("all")
            ? html `
								<details open>
									<summary>郵便番号から取得する</summary>
									<weather-zipcode-input-field
										exportparts="search, input"
									></weather-zipcode-input-field>
								</details>
						  `
            : ""}
					${methods.includes("area") || methods.includes("all")
            ? html `
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
};
_WeatherSearch_event_manager = new WeakMap();
_WeatherSearch_on_click_current_location = new WeakMap();
_WeatherSearch_on_close_dialog = new WeakMap();
WeatherSearch.styles = [
    base_style,
    dialog_button_style,
    animation_style,
    css `
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
__decorate([
    property({ type: Boolean })
], WeatherSearch.prototype, "open", void 0);
__decorate([
    property({ type: Array })
], WeatherSearch.prototype, "area_suggestions", void 0);
__decorate([
    property({ type: Number })
], WeatherSearch.prototype, "input_area_debounce", void 0);
__decorate([
    property()
], WeatherSearch.prototype, "search_methods", void 0);
__decorate([
    query("weather-zipcode-input-field")
], WeatherSearch.prototype, "zipcode_input_field", void 0);
__decorate([
    query("weather-area-input-field")
], WeatherSearch.prototype, "area_input_field", void 0);
__decorate([
    query("#current-location-btn")
], WeatherSearch.prototype, "current_location_btn", void 0);
WeatherSearch = __decorate([
    customElement("weather-search")
], WeatherSearch);
export { WeatherSearch };
//# sourceMappingURL=weather-search.js.map