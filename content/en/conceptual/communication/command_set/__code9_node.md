
```ts
export class MyEventSet extends CommandSet {
    public constructor() {
        super();
        this.addEvent(this.event1());
    }

    private event1(): IEvent {
        return new Event("event1");
    }
}

```
