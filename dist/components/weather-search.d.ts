import "./weather-icon";
import "./weather-zipcode-input-field";
import "./weather-area-input-field";
import { LitElement } from "lit";
import { WeatherZipcodeInputField } from "./weather-zipcode-input-field";
import { WeatherAreaInputField } from "./weather-area-input-field";
import { AreaSuggestions } from "./types";
export declare class WeatherSearch extends LitElement {
    #private;
    open: boolean;
    area_suggestions: AreaSuggestions;
    input_area_debounce: number;
    search_methods: string;
    zipcode_input_field: WeatherZipcodeInputField;
    area_input_field: WeatherAreaInputField;
    current_location_btn: HTMLButtonElement;
    protected render(): unknown;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "weather-search": WeatherSearch;
    }
}
//# sourceMappingURL=weather-search.d.ts.map