import { LitElement, html, css } from "lit";
import { customElement, query } from "lit/decorators.js";
import { base_style, dialog_button_style } from "./common-styles";
import { ScopedEventManager } from "./events";

@customElement("weather-zipcode-input-field")
export class WeatherZipcodeInputField extends LitElement {
	#event_manager = new ScopedEventManager(this);

	@query("form") form!: HTMLFormElement;
	@query("#close-btn") close_btn!: HTMLButtonElement;
	@query("#zipcode-first") zipcode_first!: HTMLInputElement;
	@query("#zipcode-last") zipcode_last!: HTMLInputElement;

	#on_submit_zipcode(event: Event) {
		event.preventDefault();

		const form = event.currentTarget as HTMLFormElement;

		const form_data = new FormData(form);

		const zipcode_first = form_data.get("zipcode-first") as string;

		const zipcode_last = form_data.get("zipcode-last") as string;

		if (!/^\d{3}$/.test(zipcode_first)) {
			this.zipcode_first.setCustomValidity("3桁の数値を入力してください");
			this.zipcode_first.reportValidity();
			return;
		} else {
			this.zipcode_first.setCustomValidity("");
		}

		if (!/^\d{4}$/.test(zipcode_last)) {
			this.zipcode_last.setCustomValidity("4桁の数値を入力してください");
			this.zipcode_last.reportValidity();
			return;
		} else {
			this.zipcode_last.setCustomValidity("");
		}

		const zipcode = zipcode_first + zipcode_last;

		form.reset();

		this.#event_manager.dispatch("search", { method: "zipcode", zipcode });
	}

	#clear_validation_message() {
		this.zipcode_first.setCustomValidity("");
		this.zipcode_last.setCustomValidity("");
	}

	reset() {
		this.form.reset();
	}

	protected override render(): unknown {
		return html`
			<form @submit=${this.#on_submit_zipcode} novalidate>
				<label>
					<span class="sr-only">郵便番号を入力してください</span>
					<input
						part="input"
						class="dialog-input"
						id="zipcode-first"
						type="number"
						required
						name="zipcode-first"
						@input=${this.#clear_validation_message}
					/>
					<span class="hyphen">━</span>
					<input
						part="input"
						class="dialog-input"
						id="zipcode-last"
						type="number"
						required
						name="zipcode-last"
						@input=${this.#clear_validation_message}
					/>
				</label>
				<button part="search" class="dialog-btn">検索する</button>
			</form>
		`;
	}

	static override styles = [
		base_style,
		dialog_button_style,
		css`
			form {
				--_responsive-reduce-size: 0em;

				display: grid;
				gap: 1rem;

				label {
					width: 100%;
					display: flex;
					gap: 0.2rem;
				}

				input {
					-moz-appearance: textfield;
				}

				input:first-of-type {
					width: calc(5em - var(--_responsive-reduce-size));
				}

				input:last-of-type {
					width: calc(6em - var(--_responsive-reduce-size));
				}
			}

			@container widget (width < 326px) {
				--_responsive-reduce-size: 1em;
			}

			.hyphen {
				display: grid;
				align-items: center;
			}
		`,
	];
}
