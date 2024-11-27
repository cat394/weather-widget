import { WeatherData } from "../components/types";

export class DefaultDataTransformer {
	constructor(private data: WeatherData) {}

	transform_date(): this {
		const date = new Date(this.data.date);

		const month = date.getMonth() + 1;

		const day = date.getDate();

		this.data.date = `${month} / ${day}`;

		return this;
	}

	transform_pop(): this {
		const decitmal_to_percentage = (pop: number) => Math.round(pop * 100);

		this.data.main.pop = decitmal_to_percentage(this.data.main.pop);

		if (this.data.hours) {
			this.data.hours = this.data?.hours.map((hour) => ({
				...hour,
				pop: decitmal_to_percentage(hour.pop),
			}));
		}

		return this;
	}

	transform_hours_time(): this {
		const transform_time = (time: string) => {
			const date = new Date(time);

			const hours = date.getUTCHours();

			const minutes = date.getUTCMinutes();

			return `${hours}:${minutes.toString().padStart(2, "0")}`;
		};

		if (this.data.hours) {
			this.data.hours = this.data?.hours.map((hour) => ({
				...hour,
				time: transform_time(hour.time),
			}));
		}

		return this;
	}

	result() {
		return this.data;
	}

	transform() {
		return this.transform_date()
			.transform_pop()
			.transform_hours_time()
			.result();
	}
}
