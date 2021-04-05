---
type: docs
title: "IEvent"
linkTitle: "IEvent" 
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
---

### Type

```go
type IEvent interface {
	run.INotifiable
}
```

An interface for Events, which are part of the Command design pattern.
Events allows to send asynchronious notifications to multiple subscribed listeners.

see [IEventListener](../ieventlistener)

### Funcs

#### Name
> Name() [string](https://pkg.go.dev/builtin#string)

Gets the event name.
- Returns [string](https://pkg.go.dev/builtin#string) the name of the event.

#### Listeners
> Listeners() [][IEventListener](../ieventlistener)

Gets all subscribed listeners.

- Returns [][IEventListener](../ieventlistener) a list of listeners.

#### AddListener
> AddListener(listener [IEventListener](../ieventlistener))

Adds a listener to receive notifications for this event.

- listener: [IEventListener](../ieventlistener) the listener reference to add.

#### RemoveListener
> RemoveListener(listener [IEventListener](../ieventlistener))

Removes a listener, so that it no longer receives notifications for this event.

- listener: [IEventListener](../ieventlistener) the listener reference to remove.