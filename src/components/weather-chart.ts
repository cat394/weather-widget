import "./weather-table";
import { LitElement, PropertyValues, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import Chart from "chart.js/auto";
import { WeatherData } from "./types";
import { base_style } from "./common-styles";
import { DEFAULT_SETTINGS } from "./const";

@customElement("weather-chart")
export class WeatherChart extends LitElement {
	#chart?: Chart;

	@property({ type: Object })
	data?: WeatherData;

	@property()
	temp_unit: string = DEFAULT_SETTINGS.TEMPRATURE_UNIT;

	@query("canvas") canvas!: HTMLCanvasElement;

	protected override firstUpdated(): void {
		this.init_chart();
	}

	protected override updated(_changedProperties: PropertyValues<this>): void {
		if (_changedProperties.has("data")) {
			if (!this.data || !this.#chart) {
				return;
			}

			this.#chart.data.labels = this.data.hours.map((hour) => hour.time);

			this.#chart.data.datasets[0].data = this.data.hours.map(
				(weather) => weather.temp
			);

			this.#chart.update();
		}
	}

	#get_chart_colors() {
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
	}

	init_chart(): void {
		const { border_color, label_color, grid_color } = this.#get_chart_colors();

		this.#chart = new Chart(this.canvas, {
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
		});
	}

	protected override render(): unknown {
		return html`
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

	static override styles = [
		base_style,
		css`
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
}

declare global {
	interface HTMLElementTagNameMap {
		"weather-chart": WeatherChart;
	}
}
