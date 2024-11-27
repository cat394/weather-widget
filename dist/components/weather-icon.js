var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
const image_data = {
    晴れ: html `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <defs>
      <linearGradient
        id="a"
        x1="150"
        x2="234"
        y1="119.2"
        y2="264.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#fbbf24" />
        <stop offset=".5" stop-color="#fbbf24" />
        <stop offset="1" stop-color="#f59e0b" />
      </linearGradient>
      <symbol id="b" viewBox="0 0 384 384">
        <circle
          cx="192"
          cy="192"
          r="84"
          fill="url(#a)"
          stroke="#f8af18"
          stroke-miterlimit="10"
          stroke-width="6"
        />
        <path
          fill="none"
          stroke="#fbbf24"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="24"
          d="M192 61.7V12m0 360v-49.7m92.2-222.5 35-35M64.8 319.2l35.1-35.1m0-184.4-35-35m254.5 254.5-35.1-35.1M61.7 192H12m360 0h-49.7"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="0 192 192; 45 192 192"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlink:href="#b"
      width="384"
      height="384"
      transform="translate(64 64)"
    />
  </svg>`,
    曇り: html `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <defs>
      <symbol id="c" viewBox="0 0 200.3 126.1">
        <path
          fill="url(#a)"
          stroke="#848b98"
          stroke-miterlimit="10"
          d="M.5 93.2a32.4 32.4 0 0032.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 006.5-68.9 32.4 32.4 0 00-48.5-33 48.6 48.6 0 00-88.6 37.1h-1.5A32.4 32.4 0 00.5 93.1Z"
        />
      </symbol>
      <symbol id="d" viewBox="0 0 350 222">
        <path
          fill="url(#b)"
          stroke="#5b6472"
          stroke-miterlimit="10"
          stroke-width="6"
          d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"
        />
      </symbol>
      <symbol id="e" overflow="visible" viewBox="0 0 398 222">
        <use
          xlink:href="#c"
          width="200.3"
          height="126.1"
          transform="translate(198 27)"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-9 0; 9 0; -9 0"
          />
        </use>
        <use xlink:href="#d" width="350" height="222">
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-18 0; 18 0; -18 0"
          />
        </use>
      </symbol>
      <linearGradient
        id="a"
        x1="52.7"
        x2="133.4"
        y1="9.6"
        y2="149.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#9ca3af" />
        <stop offset=".5" stop-color="#9ca3af" />
        <stop offset="1" stop-color="#6b7280" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="99.5"
        x2="232.6"
        y1="30.7"
        y2="261.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#6b7280" />
        <stop offset=".5" stop-color="#6b7280" />
        <stop offset="1" stop-color="#4b5563" />
      </linearGradient>
    </defs>
    <use
      xlink:href="#e"
      width="398"
      height="222"
      transform="translate(68.84 145)"
    />
  </svg>`,
    雨: html `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <defs>
      <linearGradient
        id="b"
        x1="52.7"
        x2="133.4"
        y1="9.6"
        y2="149.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#9ca3af" />
        <stop offset=".5" stop-color="#9ca3af" />
        <stop offset="1" stop-color="#6b7280" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="99.5"
        x2="232.6"
        y1="30.7"
        y2="261.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#6b7280" />
        <stop offset=".5" stop-color="#6b7280" />
        <stop offset="1" stop-color="#4b5563" />
      </linearGradient>
      <linearGradient
        id="a"
        x1="6.5"
        x2="18.5"
        y1="2.1"
        y2="22.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#86c3db" />
        <stop offset=".5" stop-color="#86c3db" />
        <stop offset="1" stop-color="#5eafcf" />
      </linearGradient>
      <linearGradient
        xlink:href="#a"
        id="h"
        x1="62.5"
        x2="74.5"
        y1="2.1"
        y2="22.9"
      />
      <linearGradient
        xlink:href="#a"
        id="k"
        x1="118.5"
        x2="130.5"
        y1="2.1"
        y2="22.9"
      />
      <symbol id="d" viewBox="0 0 200.3 126.1">
        <path
          fill="url(#b)"
          stroke="#848b98"
          stroke-miterlimit="10"
          d="M.5 93.2a32.4 32.4 0 0032.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 006.5-68.9 32.4 32.4 0 00-48.5-33 48.6 48.6 0 00-88.6 37.1h-1.5A32.4 32.4 0 00.5 93.1Z"
        />
      </symbol>
      <symbol id="e" viewBox="0 0 350 222">
        <path
          fill="url(#c)"
          stroke="#5b6472"
          stroke-miterlimit="10"
          stroke-width="6"
          d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"
        />
      </symbol>
      <symbol id="n" overflow="visible" viewBox="0 0 398 222">
        <use
          xlink:href="#d"
          width="200.3"
          height="126.1"
          transform="translate(198 27)"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-9 0; 9 0; -9 0"
          />
        </use>
        <use xlink:href="#e" width="350" height="222">
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="translate"
            values="-18 0; 18 0; -18 0"
          />
        </use>
      </symbol>
      <symbol id="o" overflow="visible" viewBox="0 0 137 25">
        <path
          fill="url(#a)"
          stroke="#86c3db"
          stroke-miterlimit="10"
          d="M12.5.5a12 12 0 1012 12 12 12 0 00-12-12Z"
          opacity="0"
        >
          <animateTransform
            id="f"
            additive="sum"
            attributeName="transform"
            begin="0s; f.end+.42s"
            dur=".58s"
            keyTimes="0; .71; 1"
            type="translate"
            values="0 -46; 0 86; -18 74"
          />
          <animate
            id="g"
            attributeName="opacity"
            begin="0s; g.end+.42s"
            dur=".58s"
            keyTimes="0; .14; .71; 1"
            values="0; 1; 1; 0"
          />
        </path>
        <path
          fill="url(#h)"
          stroke="#86c3db"
          stroke-miterlimit="10"
          d="M68.5.5a12 12 0 1012 12 12 12 0 00-12-12Z"
          opacity="0"
        >
          <animateTransform
            id="i"
            additive="sum"
            attributeName="transform"
            begin=".67s; i.end+.42s"
            dur=".58s"
            keyTimes="0; .71; 1"
            type="translate"
            values="0 -46; 0 86; 0 74"
          />
          <animate
            id="j"
            attributeName="opacity"
            begin=".67s; j.end+.42s"
            dur=".58s"
            keyTimes="0; .14; .71; 1"
            values="0; 1; 1; 0"
          />
        </path>
        <path
          fill="url(#k)"
          stroke="#86c3db"
          stroke-miterlimit="10"
          d="M124.5.5a12 12 0 1012 12 12 12 0 00-12-12Z"
          opacity="0"
        >
          <animateTransform
            id="l"
            additive="sum"
            attributeName="transform"
            begin=".33s; l.end+.42s"
            dur=".58s"
            keyTimes="0; .71; 1"
            type="translate"
            values="0 -46; 0 86; 18 74"
          />
          <animate
            id="m"
            attributeName="opacity"
            begin=".33s; m.end+.42s"
            dur=".58s"
            keyTimes="0; .14; .71; 1"
            values="0; 1; 1; 0"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlink:href="#n"
      width="398"
      height="222"
      transform="translate(68.84 145)"
    />
    <use
      xlink:href="#o"
      width="137"
      height="25"
      transform="translate(187.5 349.5)"
    />
  </svg>`,
    雪: html `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <defs>
      <linearGradient
        id="c"
        x1="99.5"
        x2="232.6"
        y1="30.7"
        y2="261.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#f3f7fe" />
        <stop offset=".5" stop-color="#f3f7fe" />
        <stop offset="1" stop-color="#deeafb" />
      </linearGradient>
      <linearGradient
        id="a"
        x1="1399.3"
        x2="1408.7"
        y1="-1137.3"
        y2="-1112.7"
        gradientTransform="rotate(-9 8016.182 8229.021)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#0b65ed" />
        <stop offset=".5" stop-color="#0a5ad4" />
        <stop offset="1" stop-color="#0950bc" />
      </linearGradient>
      <linearGradient
        xlink:href="#a"
        id="o"
        x1="1454.6"
        x2="1464"
        y1="-1128.6"
        y2="-1104"
      />
      <linearGradient
        xlink:href="#a"
        id="p"
        x1="1509.9"
        x2="1519.3"
        y1="-1119.8"
        y2="-1095.2"
      />
      <linearGradient
        id="b"
        x1="11.4"
        x2="32.8"
        y1="5.9"
        y2="43.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#86c3db" />
        <stop offset=".5" stop-color="#86c3db" />
        <stop offset="1" stop-color="#5eafcf" />
      </linearGradient>
      <linearGradient
        xlink:href="#b"
        id="f"
        x1="67.4"
        x2="88.8"
        y1="5.9"
        y2="43.1"
      />
      <linearGradient
        xlink:href="#b"
        id="i"
        x1="123.4"
        x2="144.8"
        y1="5.9"
        y2="43.1"
      />
      <symbol id="s" viewBox="0 0 350 222">
        <path
          fill="url(#c)"
          stroke="#e6effc"
          stroke-miterlimit="10"
          stroke-width="6"
          d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"
        />
      </symbol>
      <symbol id="l" overflow="visible" viewBox="0 0 156.2 49">
        <g>
          <path
            fill="url(#b)"
            stroke="#86c3db"
            stroke-miterlimit="10"
            d="m41.7 31-5.8-3.3a13.7 13.7 0 000-6.5l5.8-3.2a4 4 0 001.5-5.5 4 4 0 00-5.6-1.5l-5.8 3.3a13.6 13.6 0 00-2.6-2 13.8 13.8 0 00-3-1.3V4.5a4 4 0 00-8.1 0v6.6a14.3 14.3 0 00-5.7 3.2L6.6 11A4 4 0 001 12.5 4 4 0 002.5 18l5.8 3.3a13.7 13.7 0 000 6.5L2.5 31A4 4 0 001 36.5a4 4 0 003.5 2 4 4 0 002-.5l5.8-3.3a13.6 13.6 0 002.6 2 13.8 13.8 0 003 1.2v6.6a4 4 0 008.2 0v-6.6a14.2 14.2 0 005.6-3.2l6 3.3a4 4 0 002 .5 4 4 0 003.4-2 4 4 0 00-1.4-5.5ZM19 29.7a6 6 0 01-2.3-8.2 6.1 6.1 0 015.3-3 6.2 6.2 0 013 .8 6 6 0 012.2 8.2 6.1 6.1 0 01-8.2 2.2Z"
            opacity="0"
          >
            <animateTransform
              additive="sum"
              attributeName="transform"
              dur="6s"
              repeatCount="indefinite"
              type="rotate"
              values="0 24 24; 360 24 24"
            />
            <animate
              id="d"
              attributeName="opacity"
              begin="0s; d.end+1s"
              dur="2s"
              keyTimes="0; .17; .83; 1"
              values="0; 1; 1; 0"
            />
          </path>
          <animateTransform
            id="e"
            additive="sum"
            attributeName="transform"
            begin="0s; e.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
        <g>
          <path
            fill="url(#f)"
            stroke="#86c3db"
            stroke-miterlimit="10"
            d="m97.7 31-5.8-3.3a13.7 13.7 0 000-6.5l5.8-3.2a4 4 0 001.5-5.5 4 4 0 00-5.6-1.5l-5.8 3.3a13.6 13.6 0 00-2.6-2 13.8 13.8 0 00-3-1.3V4.5a4 4 0 00-8.1 0v6.6a14.3 14.3 0 00-5.7 3.2L62.6 11a4 4 0 00-5.6 1.5 4 4 0 001.5 5.5l5.8 3.3a13.7 13.7 0 000 6.5L58.5 31a4 4 0 00-1.5 5.5 4 4 0 003.5 2 4 4 0 002-.5l5.8-3.3a13.6 13.6 0 002.7 2 13.8 13.8 0 003 1.2v6.6a4 4 0 008 0v-6.6a14.2 14.2 0 005.7-3.2l6 3.3a4 4 0 002 .5 4 4 0 003.4-2 4 4 0 00-1.4-5.5ZM75 29.7a6 6 0 01-2.3-8.2 6.1 6.1 0 015.3-3 6.2 6.2 0 013 .8 6 6 0 012.2 8.2 6.1 6.1 0 01-8.2 2.2Z"
            opacity="0"
          >
            <animateTransform
              additive="sum"
              attributeName="transform"
              dur="6s"
              repeatCount="indefinite"
              type="rotate"
              values="0 80 24; 360 80 24"
            />
            <animate
              id="g"
              attributeName="opacity"
              begin="-.83s; g.end+1s"
              dur="2s"
              keyTimes="0; .17; .83; 1"
              values="0; 1; 1; 0"
            />
          </path>
          <animateTransform
            id="h"
            additive="sum"
            attributeName="transform"
            begin="-.83s; h.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
        <g>
          <path
            fill="url(#i)"
            stroke="#86c3db"
            stroke-miterlimit="10"
            d="m153.7 31-5.8-3.3a13.7 13.7 0 000-6.5l5.8-3.2a4 4 0 001.5-5.5 4 4 0 00-5.6-1.5l-5.8 3.3a13.6 13.6 0 00-2.6-2 13.8 13.8 0 00-3-1.3V4.5a4 4 0 00-8.1 0v6.6a14.3 14.3 0 00-5.7 3.2l-5.8-3.3a4 4 0 00-5.6 1.5 4 4 0 001.5 5.5l5.8 3.3a13.7 13.7 0 000 6.5l-5.8 3.2a4 4 0 00-1.5 5.5 4 4 0 003.5 2 4 4 0 002-.5l5.8-3.3a13.6 13.6 0 002.7 2 13.8 13.8 0 003 1.2v6.6a4 4 0 008 0v-6.6a14.2 14.2 0 005.7-3.2l5.8 3.3a4 4 0 002 .5 4 4 0 003.5-2 4 4 0 00-1.3-5.5ZM131 29.7a6 6 0 01-2.3-8.2 6.1 6.1 0 015.3-3 6.2 6.2 0 013 .8 6 6 0 012.2 8.2 6.1 6.1 0 01-8.2 2.2Z"
            opacity="0"
          >
            <animateTransform
              additive="sum"
              attributeName="transform"
              dur="6s"
              repeatCount="indefinite"
              type="rotate"
              values="0 136 24; 360 136 24"
            />
            <animate
              id="j"
              attributeName="opacity"
              begin=".83s; j.end+1s"
              dur="2s"
              keyTimes="0; .17; .83; 1"
              values="0; 1; 1; 0"
            />
          </path>
          <animateTransform
            id="k"
            additive="sum"
            attributeName="transform"
            begin=".83s; k.end+1s"
            dur="2s"
            type="translate"
            values="0 -36; 0 92;"
          />
        </g>
      </symbol>
      <symbol id="t" overflow="visible" viewBox="0 0 156.2 49">
        <use xlink:href="#l" width="156.2" height="49" />
        <path
          fill="url(#a)"
          stroke="#0a5ad4"
          stroke-miterlimit="10"
          d="M22.1 38.5a8 8 0 01-8-8v-12a8 8 0 0116 0v12a8 8 0 01-8 8Z"
          opacity="0"
        >
          <animateTransform
            id="m"
            additive="sum"
            attributeName="transform"
            begin="0s; m.end+1s"
            dur="1s"
            keyTimes="0; .25; 1"
            type="translate"
            values="0 -32; 0 -32; 0 120;"
          />
          <animate
            id="n"
            attributeName="opacity"
            begin="0s; n.end+1s"
            dur="1s"
            keyTimes="0; .25; 1"
            values="0; 1; 0"
          />
        </path>
        <path
          fill="url(#o)"
          stroke="#0a5ad4"
          stroke-miterlimit="10"
          d="M78.1 38.5a8 8 0 01-8-8v-12a8 8 0 0116 0v12a8 8 0 01-8 8Z"
          opacity="0"
        >
          <animateTransform
            id="x2"
            additive="sum"
            attributeName="transform"
            begin="1.34s; x2.end+1s"
            dur="1s"
            keyTimes="0; .25; 1"
            type="translate"
            values="0 -32; 0 -32; 0 120;"
          />
          <animate
            id="y2"
            attributeName="opacity"
            begin="1.34s; y2.end+1s"
            dur="1s"
            keyTimes="0; .25; 1"
            values="0; 1; 0"
          />
        </path>
        <path
          fill="url(#p)"
          stroke="#0a5ad4"
          stroke-miterlimit="10"
          d="M134.1 38.5a8 8 0 01-8-8v-12a8 8 0 0116 0v12a8 8 0 01-8 8Z"
          opacity="0"
        >
          <animateTransform
            id="q"
            additive="sum"
            attributeName="transform"
            begin=".67s; q.end+1s"
            dur="1s"
            keyTimes="0; .25; 1"
            type="translate"
            values="0 -32; 0 -32; 0 120;"
          />
          <animate
            id="r"
            attributeName="opacity"
            begin=".67s; r.end+1s"
            dur="1s"
            keyTimes="0; .25; 1"
            values="0; 1; 0"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlink:href="#s"
      width="350"
      height="222"
      transform="translate(81 145)"
    />
    <use
      xlink:href="#t"
      width="156.2"
      height="49"
      transform="translate(177.9 337.5)"
    />
  </svg>`,
    home: html `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
  >
    <path
      fill="white"
      d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
    />
    <path
      fill="white"
      d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97"
    />
  </svg>`,
    search: html `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path
      fill="white"
      fill-rule="evenodd"
      d="m16.325 14.899l5.38 5.38a1.008 1.008 0 0 1-1.427 1.426l-5.38-5.38a8 8 0 1 1 1.426-1.426M10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12"
    />
  </svg>`,
    chart: html `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
  >
    <path
      fill="white"
      d="M14.79 26.746L8 35.347V40h34v2H7a1 1 0 0 1-1-1V7h2v25.12l5.33-6.751A3 3 0 1 1 19 23.946l6.633 2.21a2.995 2.995 0 0 1 3.41-.97l6.378-7.653a3 3 0 1 1 1.536 1.28l-6.378 7.654A3 3 0 1 1 25 28.054l-6.633-2.21a2.995 2.995 0 0 1-3.577.902"
    />
  </svg>`,
    close: html `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
  >
    <path
      fill="red"
      d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01m181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0c-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249c12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0c12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248"
    />
  </svg>`,
};
const image_data_map = new Map(Object.entries(image_data));
let WeatherIcon = class WeatherIcon extends LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
        this.width = '1em';
        this.height = '1em';
    }
    render() {
        const selected_icon = image_data_map.get(this.name);
        return html `
      <div style="width: ${this.width}; height: ${this.height};">
        ${selected_icon}
      </div>
    `;
    }
};
WeatherIcon.styles = css `
    svg {
      width: 100%;
      height: 100%;
    }
  `;
__decorate([
    property()
], WeatherIcon.prototype, "name", void 0);
__decorate([
    property()
], WeatherIcon.prototype, "width", void 0);
__decorate([
    property()
], WeatherIcon.prototype, "height", void 0);
WeatherIcon = __decorate([
    customElement('weather-icon')
], WeatherIcon);
export { WeatherIcon };
//# sourceMappingURL=weather-icon.js.map