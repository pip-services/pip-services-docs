
```ts

import { Parameters, Context } from "pip-services4-components-node";
import { CommandSet, IEventListener, IEvent } from "pip-services4-rpc-node";

// Step 1 - Create the command set with events
export class MyEventSet extends CommandSet {
    public constructor() {
        super();
        this.addEvent(this.event1());
        this.addEvents([this.event2(), this.event3()]);
        this.addListener(this.listener1());
    }

    private event1(): IEvent {
        return new Event("event1");
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

// Step 2 - Create a listener
export class MyListener implements IEventListener {
    onEvent(ctx: Context, event: IEvent, args: Parameters): void {
        console.log("Fired event name " + event.getName());
    }
} 


// Step 3  - Create an instance of the command set
let myEvents = new MyEventSet();

// Step 4 - Obtain events
let event1 = myEvents.findEvent("event1");
let events = myEvents.getEvents();  // Returns a list with event1, event2 and event3

// Step 5 - Select event1 (first element in the list)
let event2 = events[1];  // Returns event1

// Step 6 - Notify the listener of an event occurrence
event1.notify(ctx, null);
event2.notify(ctx, null);
myEvents.notify(ctx, "event3", null);
```
