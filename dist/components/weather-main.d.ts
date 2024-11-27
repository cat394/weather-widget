import './weather-icon';
import { LitElement } from 'lit';
import { WeatherData } from './types';
export declare class WeatherMain extends LitElement {
    temp_unit: string;
    data?: WeatherData;
    protected render(): unknown;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'weather-main': WeatherMain;
    }
}
//# sourceMappingURL=weather-main.d.ts.map