var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import './weather-icon';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { base_style } from './common-styles';
import { DEFAULT_SETTINGS } from './const';
import { styleMap } from 'lit/directives/style-map.js';
let WeatherMain = class WeatherMain extends LitElement {
    constructor() {
        super(...arguments);
        this.temp_unit = DEFAULT_SETTINGS.TEMPRATURE_UNIT;
    }
    render() {
        return html `
      <article>
        <header>
          <h1>${this.data?.location ? this.data.location : 'No location'}</h1>
          <p>
            <time>${this.data?.date ? this.data.date : 'No date'}</time>
          </p>
        </header>
        <div
          class="body"
          style=${styleMap({
            top: this.data?.hours
                ? 'calc(-1 * var(--_main-location-name-font-size))'
                : '0',
        })}
        >
          <weather-icon
            name=${ifDefined(this.data?.main.weather)}
            width="var(--_main-icon-size)"
            height="var(--_main-icon-size)"
          ></weather-icon>
          <dl>
            <div>
              <dt>天気</dt>
              <dd>
                ${this.data?.main.weather
            ? this.data.main.weather
            : 'No weather'}
              </dd>
            </div>
            <div>
              <dt>気温</dt>
              <dd>
                ${this.data?.main.temp
            ? this.data.main.temp
            : 'No temperature'}${this.temp_unit}
              </dd>
            </div>
            <div>
              <dt>降水確率</dt>
              <dd>
                ${this.data?.main.pop ? this.data.main.pop + '%' : 'No pop'}
              </dd>
            </div>
          </dl>
        </div>
      </article>
    `;
    }
};
WeatherMain.styles = [
    base_style,
    css `
      article {
        height: 530px;
        position: relative;
      }

      header {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        > h1 {
          font-size: calc(var(--_base-font-size) * 1.7);
          letter-spacing: 0.2em;
          flex-grow: 1;
        }
      }

      .body {
        position: absolute;
        inset: 0;
        display: grid;
        justify-content: center;
        align-content: center;

        dl {
          margin-block-start: 1rem;
          display: grid;
          justify-content: center;
          gap: 1.2rem;

          > * {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 200px;
            gap: 3rem;
            border-bottom: 1px solid
              var(--_weather-widget-main-list-line, #cbcaca);
          }

          dt,
          dd {
            font-size: 1.2rem;
          }
        }
      }
    `,
];
__decorate([
    property()
], WeatherMain.prototype, "temp_unit", void 0);
__decorate([
    property({ type: Object })
], WeatherMain.prototype, "data", void 0);
WeatherMain = __decorate([
    customElement('weather-main')
], WeatherMain);
export { WeatherMain };
//# sourceMappingURL=weather-main.js.map