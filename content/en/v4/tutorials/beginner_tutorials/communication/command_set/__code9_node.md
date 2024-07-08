
```ts
export class MyEventSet extends CommandSet {
    public constructor() {
        super();
        this.addEvent(this.event1());
    }

    private event1(): Event {
        return new Event("event1");
    }
}
```
