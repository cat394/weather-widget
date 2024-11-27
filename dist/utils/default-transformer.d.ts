import { WeatherData } from "../components/types";
export declare class DefaultDataTransformer {
    private data;
    constructor(data: WeatherData);
    transform_date(): this;
    transform_pop(): this;
    transform_hours_time(): this;
    result(): WeatherData;
    transform(): WeatherData;
}
//# sourceMappingURL=default-transformer.d.ts.map