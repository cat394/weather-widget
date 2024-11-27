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
var _WeatherChart_instances, _WeatherChart_chart, _WeatherChart_get_chart_colors;
import "./weather-table";
import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import Chart from "chart.js/auto";
import { base_style } from "./common-styles";
import { DEFAULT_SETTINGS } from "./const";
let WeatherChart = class WeatherChart extends LitElement {
    constructor() {
        super(...arguments);
        _WeatherChart_instances.add(this);
        _WeatherChart_chart.set(this, void 0);
        this.temp_unit = DEFAULT_SETTINGS.TEMPRATURE_UNIT;
    }
    firstUpdated() {
        this.init_chart();
    }
    updated(_changedProperties) {
        if (_changedProperties.has("data")) {
            if (!this.data || !__classPrivateFieldGet(this, _WeatherChart_chart, "f")) {
                return;
            }
            __classPrivateFieldGet(this, _WeatherChart_chart, "f").data.labels = this.data.hours.map((hour) => hour.time);
            __classPrivateFieldGet(this, _WeatherChart_chart, "f").data.datasets[0].data = this.data.hours.map((weather) => weather.temp);
            __classPrivateFieldGet(this, _WeatherChart_chart, "f").update();
        }
    }
    init_chart() {
        const { border_color, label_color, grid_color } = __classPrivateFieldGet(this, _WeatherChart_instances, "m", _WeatherChart_get_chart_colors).call(this);
        __classPrivateFieldSet(this, _WeatherChart_chart, new Chart(this.canvas, {
            type: "line",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "",
                        data: [],
                        borderColor: border_color,
                        tension: 0.4,
                    },
                ],
            },
            options: {
                responsive: false,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: label_color,
                        },
                        grid: {
                            color: grid_color,
                        },
                    },
                    y: {
                        ticks: {
                            color: label_color,
                        },
                        grid: {
                            color: grid_color,
                        },
                    },
                },
            },
        }), "f");
    }
    render() {
        return html `
			<section>
				<h2>１日の気温の推移</h2>
				<div class="container">
					<canvas></canvas>
				</div>
			</section>
			<section>
				<h2>１時間ごとの予報</h2>
				<weather-table
					.data=${this.data}
					.temp_unit=${this.temp_unit}
				></weather-table>
			</section>
		`;
    }
};
_WeatherChart_chart = new WeakMap();
_WeatherChart_instances = new WeakSet();
_WeatherChart_get_chart_colors = function _WeatherChart_get_chart_colors() {
    const style = getComputedStyle(this);
    const border_color = style
        .getPropertyValue("--_weather-widget-theme")
        .trim();
    const label_color = style
        .getPropertyValue("--_weather-widget-chart-label")
        .trim();
    const grid_color = style
        .getPropertyValue("--_weather-widget-chart-grid")
        .trim();
    return { border_color, label_color, grid_color };
};
WeatherChart.styles = [
    base_style,
    css `
			:host {
				display: block;
				width: 100%;
				max-height: 500px;
				overflow-y: auto;
			}

			h2 {
				font-size: calc(var(--_base-font-size) * 1.2);
				margin-block-end: 1rem;
			}

			section:has(canvas) {
				width: 100%;
				aspect-ratio: 16 / 9;
				margin-block-end: 3rem;
			}

			.container:has(canvas) {
				width: 100%;
				height: auto;
				overflow-x: auto;
			}

			canvas {
				min-width: 330px;
				height: auto;
				aspect-ratio: 16 / 9;
			}
		`,
];
__decorate([
    property({ type: Object })
], WeatherChart.prototype, "data", void 0);
__decorate([
    property()
], WeatherChart.prototype, "temp_unit", void 0);
__decorate([
    query("canvas")
], WeatherChart.prototype, "canvas", void 0);
WeatherChart = __decorate([
    customElement("weather-chart")
], WeatherChart);
export { WeatherChart };
//# sourceMappingURL=weather-chart.js.map