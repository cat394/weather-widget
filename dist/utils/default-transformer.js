export class DefaultDataTransformer {
    constructor(data) {
        this.data = data;
    }
    transform_date() {
        const date = new Date(this.data.date);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        this.data.date = `${month} / ${day}`;
        return this;
    }
    transform_pop() {
        const decitmal_to_percentage = (pop) => Math.round(pop * 100);
        this.data.main.pop = decitmal_to_percentage(this.data.main.pop);
        if (this.data.hours) {
            this.data.hours = this.data?.hours.map((hour) => ({
                ...hour,
                pop: decitmal_to_percentage(hour.pop),
            }));
        }
        return this;
    }
    transform_hours_time() {
        const transform_time = (time) => {
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
//# sourceMappingURL=default-transformer.js.map