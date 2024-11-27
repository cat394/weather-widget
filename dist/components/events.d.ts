import type { Location } from "./types";
export type SearchMethod = "zipcode" | "area" | "location";
export type SearchEvent = CustomEvent<{
    method: "zipcode";
    zipcode: string;
} | {
    method: "area";
    area: string;
} | {
    method: "location";
    location: Location | null;
}>;
export type InputAreaEvent = CustomEvent<{
    value: string;
}>;
export declare class ScopedEventManager {
    private readonly target;
    private static readonly eventMap;
    constructor(target: EventTarget);
    add_listener<K extends keyof typeof ScopedEventManager.eventMap>(eventName: K, listener: (event: (typeof ScopedEventManager.eventMap)[K]) => void): void;
    remove_listener<K extends keyof typeof ScopedEventManager.eventMap>(eventName: K, listener: (event: (typeof ScopedEventManager.eventMap)[K]) => void): void;
    dispatch<EventType extends keyof typeof ScopedEventManager.eventMap, Method extends SearchMethod>(type: EventType, detail: ((typeof ScopedEventManager.eventMap)[EventType] & {
        method: Method;
    })["detail"]): void;
}
//# sourceMappingURL=events.d.ts.map