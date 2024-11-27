export type Location = {
    latitude: number;
    longitude: number;
};
export type Weather = "晴れ" | "曇り" | "雨" | "雪";
interface WeatherInfo {
    weather: Weather;
    temp: number;
    pop: number;
}
export interface WeatherData {
    date: string;
    location: string;
    main: WeatherInfo;
    hours: (WeatherInfo & {
        time: string;
    })[];
}
export type TransformWeatherData = (data: unknown) => WeatherData;
export type AreaSuggestions = string[];
export type Content = "main" | "chart";
export type Icon = "sunny-large" | "cloudy-large" | "rainy-large" | "snowy-large" | "search" | "home" | "chart" | "close";
export {};
//# sourceMappingURL=types.d.ts.map