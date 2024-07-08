
```ts
import { Parameters, Context } from "pip-services4-components-node";
import { CommandSet, IEventListener, IEvent } from "pip-services4-rpc-node";

export class MyListener implements IEventListener {
    onEvent(ctx: Context, event: IEvent, args: Parameters): void {
        console.log("Fired event name " + event.getName());
    }
} 

export class MyEventSet extends CommandSet {
    public constructor() {
        super();
        
        this.addEvents([this.event2(), this.event3()]);
        this.addListener(this.listener1());
    }

    private event2(): IEvent {
        return new Event("event2");
    }

    private event3(): IEvent {
        return new Event("event3");
    }

    private listener1(): IEventListener {
        return new MyListener();
    }
}
```
