import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { AreaSuggestions } from "./types";
import { base_style, dialog_button_style } from "./common-styles";
import { ScopedEventManager } from "./events";
import { DEFAULT_SETTINGS } from "./const";

@customElement("weather-area-input-field")
export class WeatherAreaInputField extends LitElement {
	#event_manager = new ScopedEventManager(this);
	#last_input_time = 0;

	@property({ type: Array }) area_suggestions: AreaSuggestions = [];
	@property({ type: Number }) input_area_debounce: number =
		DEFAULT_SETTINGS.INPUT_AREA_DEBOUNCE;

	@query("form") form!: HTMLFormElement;

	#on_submit_area(event: SubmitEvent) {
		event.preventDefault();

		const form = event.currentTarget as HTMLFormElement;

		const form_data = new FormData(form);

		const area = form_data.get("area") as string;

		this.#event_manager.dispatch("search", {
			method: "area",
			area,
		});
	}

	#on_input_area(event: InputEvent) {
		event.stopPropagation();

		const current_time = Date.now();

		if (current_time - this.#last_input_time < this.input_area_debounce) {
			return;
		}

		this.#last_input_time = current_time;

		const input = event.target as HTMLInputElement;

		this.#event_manager.dispatch("input-area", { value: input.value });
	}

	reset() {
		this.form.reset();
	}

	protected override render(): unknown {
		return html`
			<form @submit=${this.#on_submit_area}>
				<label>
					<span class="sr-only">地域名を入力する</span>
					<input
						part="input"
						class="dialog-input"
						name="area"
						list="areas"
						type="text"
						required
						@input=${this.#on_input_area}
					/>
					<datalist id="areas">
						${this.area_suggestions.map(
							(area) => html`<option value=${area}>${area}</option>`
						)}
					</datalist>
				</label>
				<button part="search" class="dialog-btn">検索する</button>
			</form>
		`;
	}

	static override styles = [
		base_style,
		dialog_button_style,
		css`
			input {
				width: 100%;
			}
		`,
	];
}

declare global {
	interface HTMLElementTagNameMap {
		"weather-area-input-field": WeatherAreaInputField;
	}
}
