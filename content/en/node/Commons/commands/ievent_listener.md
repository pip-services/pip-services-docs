---
type: docs
title: "IEventListener"
linkTitle: "IEventListener"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    An interface for listener objects that receive notifications on fired events.
---
See also [IEvent](../ievent), [Event](../event)

**Example:**

```typescript
export class MyListener implements IEventListener {
    private onEvent(correlationId: string, event: IEvent, args: Parameters): void {
        console.log("Fired event " + event.getName());
    }
}
     
let event = new Event("myevent");
event.addListener(new MyListener());
event.notify("123", Parameters.fromTuples("param1", "ABC"));
   
// Console output: Fired event myevent

```

### Methods

#### onEvent
A method called when events this listener is subscrubed to are fired.

> onEvent(correlationId: string, event: [IEvent](../ievent), args: [Parameters](../../run/parameters)): void

- **correlationId**: string - a fired evemt
- **event**: [IEvent](../ievent) - (optional) transaction id to trace execution through call chain.
- **args**: [Parameters](../../run/parameters) - event arguments.


### See also
- #### [IEvent](../ievent)
- #### [Event](../event)