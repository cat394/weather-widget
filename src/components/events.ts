import type { Location } from "./types";

export type SearchMethod = "zipcode" | "area" | "location";

export type SearchEvent = CustomEvent<
	| { method: "zipcode"; zipcode: string }
	| { method: "area"; area: string }
	| { method: "location"; location: Location | null }
>;

export type InputAreaEvent = CustomEvent<{ value: string }>;

export class ScopedEventManager {
	private static readonly eventMap = {
		search: {} as SearchEvent,
		"input-area": {} as InputAreaEvent,
	};

	constructor(private readonly target: EventTarget) {}

	add_listener<K extends keyof typeof ScopedEventManager.eventMap>(
		eventName: K,
		listener: (event: (typeof ScopedEventManager.eventMap)[K]) => void
	) {
		this.target.addEventListener(eventName, listener as EventListener);
	}

	remove_listener<K extends keyof typeof ScopedEventManager.eventMap>(
		eventName: K,
		listener: (event: (typeof ScopedEventManager.eventMap)[K]) => void
	): void {
		this.target.removeEventListener(eventName, listener as EventListener);
	}

	dispatch<
		EventType extends keyof typeof ScopedEventManager.eventMap,
		Method extends SearchMethod
	>(
		type: EventType,
		detail: ((typeof ScopedEventManager.eventMap)[EventType] & {
			method: Method;
		})["detail"]
	): void {
		const event = new CustomEvent(type, {
			detail,
			bubbles: true,
			composed: true,
		});

		this.target.dispatchEvent(event);
	}
}
