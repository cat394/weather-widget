import './weather-icon';
import './weather-main';
import './weather-search';
import './weather-chart';
import {LitElement, css, html} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import type {
  AreaSuggestions,
  Content,
  TransformWeatherData,
  WeatherData,
} from './types';
import type {WeatherMain} from './weather-main';
import type {WeatherSearch} from './weather-search';
import type {WeatherChart} from './weather-chart';
import {base_style} from './common-styles';
import {DefaultDataTransformer} from '../utils';
import {DEFAULT_SETTINGS} from './const';

@customElement('weather-widget')
export class WeatherWidget extends LitElement {
  #data?: WeatherData;
  transform: TransformWeatherData = (data) =>
    new DefaultDataTransformer(data as WeatherData).transform();

  @state() is_search_dialog_open = false;

  @query('weather-main') weather_main!: WeatherMain;
  @query('weather-search') weather_search!: WeatherSearch;
  @query('weather-chart') weather_chart!: WeatherChart;

  @property({type: Object})
  get data(): undefined | WeatherData {
    return this.#data;
  }

  set data(new_data: WeatherData) {
    const old_value = this.#data;

    this.#data = this.notransform ? new_data : this.transform(new_data);

    this.requestUpdate('data', old_value);
  }

  @property({attribute: 'temp-unit'}) temp_unit: string =
    DEFAULT_SETTINGS.TEMPRATURE_UNIT;
  @property({attribute: 'search-methods'}) search_methods: string =
    DEFAULT_SETTINGS.SEARCH_METHODS;
  @property({type: Array, attribute: 'area-suggestions'})
  area_suggestions: AreaSuggestions = [];
  @property({type: Number, attribute: 'input-area-debounce'})
  input_area_debounce: number = DEFAULT_SETTINGS.INPUT_AREA_DEBOUNCE;
  @property({type: Boolean}) notransform = false;

  override connectedCallback(): void {
    super.connectedCallback();
  }

  protected override render(): unknown {
    const not_search_exists = this.search_methods === '';

    const dynamic_class_style = {
      'not-search-exists': not_search_exists,
    };

    return html`
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
              ? html` <li>
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

  close_search_dialog(): void {
    this.is_search_dialog_open = false;
  }

  move(content: Content): void {
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

  static override styles = [
    base_style,
    css`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'weather-widget': WeatherWidget;
  }
}
