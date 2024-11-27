import { LitElement } from "lit";
import { AreaSuggestions } from "./types";
export declare class WeatherAreaInputField extends LitElement {
    #private;
    area_suggestions: AreaSuggestions;
    input_area_debounce: number;
    form: HTMLFormElement;
    reset(): void;
    protected render(): unknown;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "weather-area-input-field": WeatherAreaInputField;
    }
}
//# sourceMappingURL=weather-area-input-field.d.ts.map