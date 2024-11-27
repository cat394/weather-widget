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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _WeatherAreaInputField_instances, _WeatherAreaInputField_event_manager, _WeatherAreaInputField_last_input_time, _WeatherAreaInputField_on_submit_area, _WeatherAreaInputField_on_input_area;
import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { base_style, dialog_button_style } from "./common-styles";
import { ScopedEventManager } from "./events";
import { DEFAULT_SETTINGS } from "./const";
let WeatherAreaInputField = class WeatherAreaInputField extends LitElement {
    constructor() {
        super(...arguments);
        _WeatherAreaInputField_instances.add(this);
        _WeatherAreaInputField_event_manager.set(this, new ScopedEventManager(this));
        _WeatherAreaInputField_last_input_time.set(this, 0);
        this.area_suggestions = [];
        this.input_area_debounce = DEFAULT_SETTINGS.INPUT_AREA_DEBOUNCE;
    }
    reset() {
        this.form.reset();
    }
    render() {
        return html `
			<form @submit=${__classPrivateFieldGet(this, _WeatherAreaInputField_instances, "m", _WeatherAreaInputField_on_submit_area)}>
				<label>
					<span class="sr-only">地域名を入力する</span>
					<input
						part="input"
						class="dialog-input"
						name="area"
						list="areas"
						type="text"
						required
						@input=${__classPrivateFieldGet(this, _WeatherAreaInputField_instances, "m", _WeatherAreaInputField_on_input_area)}
					/>
					<datalist id="areas">
						${this.area_suggestions.map((area) => html `<option value=${area}>${area}</option>`)}
					</datalist>
				</label>
				<button part="search" class="dialog-btn">検索する</button>
			</form>
		`;
    }
};
_WeatherAreaInputField_event_manager = new WeakMap();
_WeatherAreaInputField_last_input_time = new WeakMap();
_WeatherAreaInputField_instances = new WeakSet();
_WeatherAreaInputField_on_submit_area = function _WeatherAreaInputField_on_submit_area(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const form_data = new FormData(form);
    const area = form_data.get("area");
    __classPrivateFieldGet(this, _WeatherAreaInputField_event_manager, "f").dispatch("search", {
        method: "area",
        area,
    });
};
_WeatherAreaInputField_on_input_area = function _WeatherAreaInputField_on_input_area(event) {
    event.stopPropagation();
    const current_time = Date.now();
    if (current_time - __classPrivateFieldGet(this, _WeatherAreaInputField_last_input_time, "f") < this.input_area_debounce) {
        return;
    }
    __classPrivateFieldSet(this, _WeatherAreaInputField_last_input_time, current_time, "f");
    const input = event.target;
    __classPrivateFieldGet(this, _WeatherAreaInputField_event_manager, "f").dispatch("input-area", { value: input.value });
};
WeatherAreaInputField.styles = [
    base_style,
    dialog_button_style,
    css `
			input {
				width: 100%;
			}
		`,
];
__decorate([
    property({ type: Array })
], WeatherAreaInputField.prototype, "area_suggestions", void 0);
__decorate([
    property({ type: Number })
], WeatherAreaInputField.prototype, "input_area_debounce", void 0);
__decorate([
    query("form")
], WeatherAreaInputField.prototype, "form", void 0);
WeatherAreaInputField = __decorate([
    customElement("weather-area-input-field")
], WeatherAreaInputField);
export { WeatherAreaInputField };
//# sourceMappingURL=weather-area-input-field.js.map