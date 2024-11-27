import { css } from "lit";
export const base_style = css `
	* {
		padding: 0;
		margin: 0;
		border: 0;
		box-sizing: border-box;
		letter-spacing: 0.1em;
		font-size: inherit;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: normal;
	}

	img {
		max-width: 100%;
		height: auto;
	}

	ul,
	ol {
		padding: 0;
		list-style: none;
	}

	button {
		all: unset;
		display: inline-block;
		cursor: pointer;
		text-align: center;
		font: inherit;
	}

	button:hover {
		opacity: 0.8;
	}

	input {
		font: inherit;
	}

	details > :not(summary) {
		display: block;
		padding-block-start: 0.5rem;
		margin-inline-start: 1rem;
	}

	form {
		display: grid;
		gap: 1rem;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
`;
export const dialog_button_style = css `
	.dialog-btn {
		padding: 1em;
		background: var(--_weather-widget-theme);
		color: var(--_weather-widget-theme-contrast);
		width: fit-content;
		border-radius: var(--_huge);
	}

	.dialog-btn:focus {
		outline: 1px solid red;
	}

	.dialog-input {
		font-size: 1.2rem;
		line-height: 1.4;
		padding: 0.2em;
		border: 2px solid var(--_weather-widget-theme);
	}
`;
export const animation_style = css `
	@keyframes fade-in {
		0% {
			opacity: 0;
			display: none;
		}

		100% {
			opacity: 1;
			display: block;
		}
	}

	@keyframes fade-out {
		0% {
			opacity: 1;
			display: block;
		}

		100% {
			opacity: 0;
			display: none;
		}
	}
`;
//# sourceMappingURL=common-styles.js.map