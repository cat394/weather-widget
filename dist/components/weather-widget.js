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
var _WeatherWidget_data;
import './weather-icon';
import './weather-main';
import './weather-search';
import './weather-chart';
import { LitElement, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { base_style } from './common-styles';
import { DefaultDataTransformer } from '../utils';
import { DEFAULT_SETTINGS } from './const';
let WeatherWidget = class WeatherWidget extends LitElement {
    constructor() {
        super(...arguments);
        _WeatherWidget_data.set(this, void 0);
        this.transform = (data) => new DefaultDataTransformer(data).transform();
        this.is_search_dialog_open = false;
        this.temp_unit = DEFAULT_SETTINGS.TEMPRATURE_UNIT;
        this.search_methods = DEFAULT_SETTINGS.SEARCH_METHODS;
        this.area_suggestions = [];
        this.input_area_debounce = DEFAULT_SETTINGS.INPUT_AREA_DEBOUNCE;
        this.notransform = false;
    }
    get data() {
        return __classPrivateFieldGet(this, _WeatherWidget_data, "f");
    }
    set data(new_data) {
        const old_value = __classPrivateFieldGet(this, _WeatherWidget_data, "f");
        __classPrivateFieldSet(this, _WeatherWidget_data, this.notransform ? new_data : this.transform(new_data), "f");
        this.requestUpdate('data', old_value);
    }
    connectedCallback() {
        super.connectedCallback();
    }
    render() {
        const not_search_exists = this.search_methods === '';
        const dynamic_class_style = {
            'not-search-exists': not_search_exists,
        };
        return html `
      <div class="container">
        <div class="contents">
          <weather-main .data=${this.data}></weather-main>
          <weather-chart
            .data=${this.data}
            .temp_unit=${this.temp_unit}
          ></weather-chart>
        </div>

        <nav part="nav">
          <ul class=${classMap(dynamic_class_style)}>
            ${!not_search_exists
            ? html ` <li>
                  <button
                    type="button"
                    @click=${() => (this.is_search_dialog_open = true)}
                  >
                    <span class="sr-only">対象地域を検索する</span>
                    <weather-icon
                      name="search"
                      width="var(--_nav-icon-size)"
                      height="var(--_nav-icon-size)"
                    ></weather-icon>
                  </button>
                </li>`
            : ''}
            <li>
              <button type="button" @click=${() => this.move('main')}>
                <span class="sr-only">天気の概要を見る</span>
                <weather-icon
                  name="home"
                  width="var(--_nav-icon-size)"
                  height="var(--_nav-icon-size)"
                ></weather-icon>
              </button>
            </li>
            <li>
              <button type="button" @click=${() => this.move('chart')}>
                <span class="sr-only">詳しい天気情報を見る</span>
                <weather-icon
                  name="chart"
                  width="var(--_nav-icon-size)"
                  height="var(--_nav-icon-size)"
                ></weather-icon>
              </button>
            </li>
          </ul>
        </nav>
        <weather-search
          exportparts="search, input"
          .area_suggestions=${this.area_suggestions}
          .input_area_debounce=${this.input_area_debounce}
          .open=${this.is_search_dialog_open}
          .search_methods=${this.search_methods}
        ></weather-search>
      </div>
    `;
    }
    close_search_dialog() {
        this.is_search_dialog_open = false;
    }
    move(content) {
        switch (content) {
            case 'main':
                this.weather_main.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                break;
            case 'chart':
                this.weather_chart.scrollIntoView({
                    behavior: 'smooth',
                });
        }
    }
};
_WeatherWidget_data = new WeakMap();
WeatherWidget.styles = [
    base_style,
    css `
      :host {
        --_weather-widget-theme-hue: var(--weather-widget-theme-hue, 242.73);
        --_weather-widget-theme: var(
          --weather-widget-theme,
          oklch(0.66 0.2 var(--_weather-widget-theme-hue))
        );
        --_weather-widget-theme-contrast: var(
          --weather-widget-theme-contrast,
          white
        );
        --_weather-widget-bg-primary: var(--weather-widget-bg-primary, white);
        --_weather-widget-text-primary: var(
          --_weather-widget-text-primary,
          black
        );
        --_weather-widget-table-header-bg: oklch(
          from var(--_weather-widget-theme) calc(l - 0.1) c h
        );
        --_weather-widget-table-header-text: var(
          --weather-widget-table-header-text,
          white
        );
        --_weather-widget-table-odd-bg: oklch(
          from var(--_weather-widget-theme) calc(l + 0.1) c h / 0.1
        );
        --_weather-widget-table-odd-text: var(
          --_weather-widget-text-primary black
        );
        --_weather-widget-table-even-bg: oklch(
          from var(--_weather-widget-theme) 1 0 h
        );
        --_weather-widget-table-even-text: var(--_weather-widget-text-primary);
        --_weather-widget-chart-label: var(
          --weather-widget-chart-label,
          oklch(from black 0.7 c h)
        );
        --_weather-widget-chart-grid: var(
          --weather-widget-chart-grid,
          oklch(from black 0.8 c h / 0.3)
        );
        --_weather-widget-search-dialog-bg: var(
          --weather-widget-search-dialog-bg,
          color(from black srgb r g b / 0.83)
        );
        --_weather-widget-search-dialog-text: var(
          --weather-widget-search-dialog-text,
          white
        );
        --_main-icon-size: 250px;
        --_main-location-name-font-size: 1.7rem;
        --_base-font-size: 1rem;
        --_nav-icon-size: 30px;

        font-family: Calibri, Candara, Segoe, 'Segoe UI', Optima, Arial,
          sans-serif, system-ui;
        font-size: var(--_base-font-size);
        display: inline-block;
        width: 100%;
        max-width: 400px;
        margin: 32px;
        box-shadow: 0 0px 10px -1px var(--_weather-widget-theme);
        border-radius: 10px;
        visibility: hidden;
        container: widget / inline-size;
      }

      :host(:defined) {
        visibility: visible;
      }

      p:has(time) {
        float: right;
      }

      .container {
        --_huge: 1e5px;
        color: var(--_weather-widget-text);
        background: var(--_weather-widget-bg-primary);
        padding: 2rem;
        padding-bottom: 1.2rem;
        position: relative;
      }

      nav {
        width: 100%;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 20px;
        display: flex;
        justify-content: center;

        ul {
          max-width: 300px;
          width: 90%;
          display: flex;
          justify-content: space-between;
          background: oklch(from var(--_weather-widget-theme) l c h / 0.9);
          border-radius: var(--_huge);

          > li {
            flex-basis: 78px;

            button {
              display: flex;
              padding-block: 0.3rem;
              padding-inline: 1.5rem;
            }
          }
        }

        ul.not-search-exists {
          max-width: 200px;
        }
      }

      @container widget (width < 314px) {
        :host {
          --_main-icon-size: 200px;
        }

        .container {
          padding: 1rem;
        }

        nav ul {
          border-radius: 10px;

          > * {
            display: flex;
            justify-content: center;
          }

          button {
            padding-inline: 0.5rem;
          }
        }
      }

      .contents {
        max-height: 600px;
        overflow-x: scroll;
        overflow-y: auto;
        scrollbar-width: thin;
        display: grid;
        grid-template-columns: 100% 100%;
        gap: 3.5rem;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;

        > * {
          scroll-snap-align: start;
        }
      }
    `,
];
__decorate([
    state()
], WeatherWidget.prototype, "is_search_dialog_open", void 0);
__decorate([
    query('weather-main')
], WeatherWidget.prototype, "weather_main", void 0);
__decorate([
    query('weather-search')
], WeatherWidget.prototype, "weather_search", void 0);
__decorate([
    query('weather-chart')
], WeatherWidget.prototype, "weather_chart", void 0);
__decorate([
    property({ type: Object })
], WeatherWidget.prototype, "data", null);
__decorate([
    property({ attribute: 'temp-unit' })
], WeatherWidget.prototype, "temp_unit", void 0);
__decorate([
    property({ attribute: 'search-methods' })
], WeatherWidget.prototype, "search_methods", void 0);
__decorate([
    property({ type: Array, attribute: 'area-suggestions' })
], WeatherWidget.prototype, "area_suggestions", void 0);
__decorate([
    property({ type: Number, attribute: 'input-area-debounce' })
], WeatherWidget.prototype, "input_area_debounce", void 0);
__decorate([
    property({ type: Boolean })
], WeatherWidget.prototype, "notransform", void 0);
WeatherWidget = __decorate([
    customElement('weather-widget')
], WeatherWidget);
export { WeatherWidget };
//# sourceMappingURL=weather-widget.js.map