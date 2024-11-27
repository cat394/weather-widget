var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import './weather-icon';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { base_style } from './common-styles';
import { DEFAULT_SETTINGS } from './const';
let WeatherTable = class WeatherTable extends LitElement {
    constructor() {
        super(...arguments);
        this.temp_unit = DEFAULT_SETTINGS.TEMPRATURE_UNIT;
    }
    render() {
        return html `
      <div class="table-container">
        <table>
          <thead>
            <th>時間</th>
            <th>天気</th>
            <th>気温（${this.temp_unit}）</th>
            <th>降水確率（％）</th>
          </thead>
          <tbody>
            ${this.data?.hours
            ? this.data.hours.map((hour) => {
                return html `<tr>
                    <td>${hour.time}</td>
                    <td>
                      <weather-icon
                        name=${hour.weather}
                        width="var(--_table-icon-size)"
                        height="var(--_table-icon-size)"
                      ></weather-icon>
                    </td>
                    <td>${hour.temp}</td>
                    <td>${hour.pop}</td>
                  </tr>`;
            })
            : ''}
          </tbody>
        </table>
      </div>
    `;
    }
};
WeatherTable.styles = [
    base_style,
    css `
      :host {
        display: block;
        width: 100%;
        overflow-x: auto;
        --_table-icon-size: 48px;
      }

      table {
        min-width: 317px;
        table-layout: fixed;
        width: 100%;
        text-align: center;
        border-collapse: collapse;
        line-height: 1.5;
        position: relative;
      }

      thead {
        position: sticky;
        top: 0;
        background-color: var(--_weather-widget-table-header-bg);
        color: var(--_weather-widget-table-header-text);
        font-weight: normal;
      }

      th {
        border-inline-end: 0.3px solid
          oklch(from var(--_weather-widget-bg-primary) l c h / 0.4);
      }

      th:last-child {
        border-inline-end: none;
      }

      th,
      td {
        padding-block: 0.2rem;
      }

      td:has(weather-icon) {
        display: flex;
        justify-content: center;
      }

      tbody tr:nth-child(odd) {
        color: var(--_weather-widget-table-odd-text);
        background: var(--_weather-widget-table-odd-bg);
      }

      tbody tr:nth-child(even) {
        color: var(--_weather-widget-table-even-text);
        background: var(--_weather-widget-table-even-bg);
      }

      @container widget (width < 400px) {
        .table-container {
          max-height: 370px;
          overflow-y: auto;
        }
      }
    `,
];
__decorate([
    property({ type: Object })
], WeatherTable.prototype, "data", void 0);
__decorate([
    property()
], WeatherTable.prototype, "temp_unit", void 0);
WeatherTable = __decorate([
    customElement('weather-table')
], WeatherTable);
export { WeatherTable };
//# sourceMappingURL=weather-table.js.map