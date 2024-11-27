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
var _WeatherZipcodeInputField_instances, _WeatherZipcodeInputField_event_manager, _WeatherZipcodeInputField_on_submit_zipcode, _WeatherZipcodeInputField_clear_validation_message;
import { LitElement, html, css } from "lit";
import { customElement, query } from "lit/decorators.js";
import { base_style, dialog_button_style } from "./common-styles";
import { ScopedEventManager } from "./events";
let WeatherZipcodeInputField = class WeatherZipcodeInputField extends LitElement {
    constructor() {
        super(...arguments);
        _WeatherZipcodeInputField_instances.add(this);
        _WeatherZipcodeInputField_event_manager.set(this, new ScopedEventManager(this));
    }
    reset() {
        this.form.reset();
    }
    render() {
        return html `
			<form @submit=${__classPrivateFieldGet(this, _WeatherZipcodeInputField_instances, "m", _WeatherZipcodeInputField_on_submit_zipcode)} novalidate>
				<label>
					<span class="sr-only">郵便番号を入力してください</span>
					<input
						part="input"
						class="dialog-input"
						id="zipcode-first"
						type="number"
						required
						name="zipcode-first"
						@input=${__classPrivateFieldGet(this, _WeatherZipcodeInputField_instances, "m", _WeatherZipcodeInputField_clear_validation_message)}
					/>
					<span class="hyphen">━</span>
					<input
						part="input"
						class="dialog-input"
						id="zipcode-last"
						type="number"
						required
						name="zipcode-last"
						@input=${__classPrivateFieldGet(this, _WeatherZipcodeInputField_instances, "m", _WeatherZipcodeInputField_clear_validation_message)}
					/>
				</label>
				<button part="search" class="dialog-btn">検索する</button>
			</form>
		`;
    }
};
_WeatherZipcodeInputField_event_manager = new WeakMap();
_WeatherZipcodeInputField_instances = new WeakSet();
_WeatherZipcodeInputField_on_submit_zipcode = function _WeatherZipcodeInputField_on_submit_zipcode(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const form_data = new FormData(form);
    const zipcode_first = form_data.get("zipcode-first");
    const zipcode_last = form_data.get("zipcode-last");
    if (!/^\d{3}$/.test(zipcode_first)) {
        this.zipcode_first.setCustomValidity("3桁の数値を入力してください");
        this.zipcode_first.reportValidity();
        return;
    }
    else {
        this.zipcode_first.setCustomValidity("");
    }
    if (!/^\d{4}$/.test(zipcode_last)) {
        this.zipcode_last.setCustomValidity("4桁の数値を入力してください");
        this.zipcode_last.reportValidity();
        return;
    }
    else {
        this.zipcode_last.setCustomValidity("");
    }
    const zipcode = zipcode_first + zipcode_last;
    form.reset();
    __classPrivateFieldGet(this, _WeatherZipcodeInputField_event_manager, "f").dispatch("search", { method: "zipcode", zipcode });
};
_WeatherZipcodeInputField_clear_validation_message = function _WeatherZipcodeInputField_clear_validation_message() {
    this.zipcode_first.setCustomValidity("");
    this.zipcode_last.setCustomValidity("");
};
WeatherZipcodeInputField.styles = [
    base_style,
    dialog_button_style,
    css `
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
__decorate([
    query("form")
], WeatherZipcodeInputField.prototype, "form", void 0);
__decorate([
    query("#close-btn")
], WeatherZipcodeInputField.prototype, "close_btn", void 0);
__decorate([
    query("#zipcode-first")
], WeatherZipcodeInputField.prototype, "zipcode_first", void 0);
__decorate([
    query("#zipcode-last")
], WeatherZipcodeInputField.prototype, "zipcode_last", void 0);
WeatherZipcodeInputField = __decorate([
    customElement("weather-zipcode-input-field")
], WeatherZipcodeInputField);
export { WeatherZipcodeInputField };
//# sourceMappingURL=weather-zipcode-input-field.js.map