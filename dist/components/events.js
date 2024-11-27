export class ScopedEventManager {
    constructor(target) {
        this.target = target;
    }
    add_listener(eventName, listener) {
        this.target.addEventListener(eventName, listener);
    }
    remove_listener(eventName, listener) {
        this.target.removeEventListener(eventName, listener);
    }
    dispatch(type, detail) {
        const event = new CustomEvent(type, {
            detail,
            bubbles: true,
            composed: true,
        });
        this.target.dispatchEvent(event);
    }
}
ScopedEventManager.eventMap = {
    search: {},
    "input-area": {},
};
//# sourceMappingURL=events.js.map