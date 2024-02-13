---
type: docs
title: "IEventListener"
linkTitle: "IEventListener"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-rpc-node"
description: > 
    An interface for listener objects that receive notifications on fired events.
---

### Description

The IEventListener interface allows you to define actions to be taken by listener objects after receiving a notification on a fired event.

### Instance methods

#### onEvent
A method called when events this listener is subscribed to are fired.

> onEvent(context: [IContext](../../../components/context/icontext), event: [IEvent](../ievent), args: [Parameters](../../../components/exec/parameters)): void

- **context**: [IContext](../../../components/context/icontext) - a context to trace execution through a call chain
- **event**: [IEvent](../ievent) - (optional) fired event.
- **args**: [Parameters](../../../components/exec/parameters) - event arguments.

### Examples

```typescript
export class MyListener implements IEventListener {
    private onEvent(context: [IContext](../../../components/context/icontext), event: IEvent, args: Parameters): void {
        console.log("Fired event " + event.getName());
    }
}
     
let event = new Event("myevent");
event.addListener(new MyListener());
event.notify("123", Parameters.fromTuples("param1", "ABC"));
   
// Console output: Fired event myevent

```

### See also
- #### [IEvent](../ievent)
- #### [Event](../event)
