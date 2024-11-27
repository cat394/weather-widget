import "./weather-table";
import { LitElement, PropertyValues } from "lit";
import { WeatherData } from "./types";
export declare class WeatherChart extends LitElement {
    #private;
    data?: WeatherData;
    temp_unit: string;
    canvas: HTMLCanvasElement;
    protected firstUpdated(): void;
    protected updated(_changedProperties: PropertyValues<this>): void;
    init_chart(): void;
    protected render(): unknown;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "weather-chart": WeatherChart;
    }
}
//# sourceMappingURL=weather-chart.d.ts.map