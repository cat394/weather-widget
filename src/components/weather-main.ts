import './weather-icon';
import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {WeatherData} from './types';
import {base_style} from './common-styles';
import {DEFAULT_SETTINGS} from './const';
import {styleMap} from 'lit/directives/style-map.js';

@customElement('weather-main')
export class WeatherMain extends LitElement {
  @property() temp_unit: string = DEFAULT_SETTINGS.TEMPRATURE_UNIT;

  @property({type: Object})
  data?: WeatherData;

  protected override render(): unknown {
    return html`
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

  static override styles = [
    base_style,
    css`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'weather-main': WeatherMain;
  }
}
