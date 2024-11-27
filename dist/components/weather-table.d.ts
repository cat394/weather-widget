import './weather-icon';
import type { WeatherData } from './types';
import { LitElement } from 'lit';
export declare class WeatherTable extends LitElement {
    data?: WeatherData;
    temp_unit: string;
    protected render(): unknown;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'weather-table': WeatherTable;
    }
}
//# sourceMappingURL=weather-table.d.ts.map