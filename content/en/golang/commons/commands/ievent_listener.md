---
type: docs
title: "IEventListener"
linkTitle: "IEventListener"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    An interface for listener objects that receive notifications on fired events.
---

### Description

The IEventListener interface allows you to define actions to be taken by listener objects after receiving a notification on a fired event.

### Methods

#### OnEvent
A method called when events this listener is subscrubed to are fired.

> OnEvent(correlationId string, e [IEvent](../ievent), value [*run.Parameters](../../run/parameters))

- **correlationId**: string - a fired evemt
- **e**: [IEvent](../ievent) - (optional) transaction id to used trace execution through the call chain.
- **value**: [*run.Parameters](../../run/parameters) - event arguments.

### Examples

```go
type MyListener {
   msg string;
}

func (l* MyListener) onEvent(correlationId string, event IEvent, args Parameters) {
       fmt.Println("Fired event " + event.Name());
}

let event = NewEvent("myevent");
_listener := MyListener{};

event.addListener(_listener);
event.notify("123", Parameters.FromTuples("param1", "ABC"));
// Console output: Fired event myevent

```

### See also
- #### [IEvent](../ievent)
- #### [Event](../event)
