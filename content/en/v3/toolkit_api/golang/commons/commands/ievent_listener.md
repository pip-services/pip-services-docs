---
type: docs
title: "IEventListener"
linkTitle: "IEventListener"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: > 
    An interface for listener objects that receive notifications on fired events.
---

### Description

The IEventListener interface allows you to define actions to be taken by listener objects after receiving a notification on a fired event.

### Methods

#### OnEvent
A method called when events this listener is subscrubed to are fired.

> OnEvent(ctx context.Context, correlationId string, e [IEvent](../ievent), value [*run.Parameters](../../run/parameters))

- **ctx** context.Context - operation context.
- **correlationId**: string - a fired evemt
- **e**: [IEvent](../ievent) - (optional) transaction id to used trace execution through the call chain.
- **value**: [*run.Parameters](../../run/parameters) - event arguments.

### Examples

```go
type MyListener struct {
	msg string
}

func (l *MyListener) OnEvent(ctx context.Context, correlationId string, event IEvent, args Parameters) {
	fmt.Println("Fired event " + event.Name())
}

var event = NewEvent("myevent")
_listener := MyListener{}
event.AddListener(_listener)
event.Notify(context.Background(), "123", Parameters.FromTuples("param1", "ABC"))

// Console output: Fired event myevent

```

### See also
- #### [IEvent](../ievent)
- #### [Event](../event)
