import './weather-icon';
import './weather-main';
import './weather-search';
import './weather-chart';
import { LitElement } from 'lit';
import type { AreaSuggestions, Content, TransformWeatherData, WeatherData } from './types';
import type { WeatherMain } from './weather-main';
import type { WeatherSearch } from './weather-search';
import type { WeatherChart } from './weather-chart';
export declare class WeatherWidget extends LitElement {
    #private;
    transform: TransformWeatherData;
    is_search_dialog_open: boolean;
    weather_main: WeatherMain;
    weather_search: WeatherSearch;
    weather_chart: WeatherChart;
    get data(): undefined | WeatherData;
    set data(new_data: WeatherData);
    temp_unit: string;
    search_methods: string;
    area_suggestions: AreaSuggestions;
    input_area_debounce: number;
    notransform: boolean;
    connectedCallback(): void;
    protected render(): unknown;
    close_search_dialog(): void;
    move(content: Content): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'weather-widget': WeatherWidget;
    }
}
//# sourceMappingURL=weather-widget.d.ts.map