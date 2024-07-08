
```ts
export class MyEventSet extends CommandSet {
    public constructor() {
        super();
        this.addEvents([this.event2(), this.event3()]);
    }

    private event2(): IEvent {
        return new Event("event2");
    }

    private event3(): IEvent {
        return new Event("event3");
    }
}
```
