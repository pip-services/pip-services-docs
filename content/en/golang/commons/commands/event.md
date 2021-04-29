---
type: docs
title: "Event"
linkTitle: "Event" 
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
---

### Type

```go
type Event struct {
	// contains filtered or unexported fields
}
```

Concrete implementation of [IEvent](../ievent) interface. 
It allows to send asynchronous notifications to multiple subscribed listeners. 

**Example:**

```go
event: = NewEvent("my_event");

event.AddListener(myListener);

event.Notify("123", Parameters.fromTuples(
  "param1", "ABC",
  "param2", 123
));
```

### Funcs

#### NewEvent
> func NewEvent(name [string](https://pkg.go.dev/builtin#string)) *[Event](../event)

Creates a new event and assigns its name. Throws an Error if the name is null.

- name: [string](https://pkg.go.dev/builtin#string) the name of the event that is to be created.

- Returns [Event](../event)

#### AddListener
> func (c *[Event](../event)) AddListener(listener [IEventListener](../ieventlistener))

Adds a listener to receive notifications when this event is fired.

- listener: [IEventListener](../ieventlistener) the listener reference to add.

#### Listeners
> func (c *[Event](../event)) Listeners() [][IEventListener](../ieventlistener)

Gets all listeners registred in this event.

- Returns [][IEventListener](../ieventlistener) a list of listeners.

#### Name
> func (c *Event) Name() [string](https://pkg.go.dev/builtin#string)

Gets the name of the event.

- Returns string the name of this event.

#### Notify
> func (c *Event) Notify(correlationId [string](https://pkg.go.dev/builtin#string), args *[run.Parameters](../../run/parameters))

Fires this event and notifies all registred listeners.

- correlationId: [string](https://pkg.go.dev/builtin#string) (optional) transaction id to trace execution through call chain.
- args: [Parameters](../../run/parameters) the parameters to raise this event with.

#### RemoveListener
> func (c *[Event](../event)) RemoveListener(listener [IEventListener](../ieventlistener))

Removes a listener, so that it no longer receives notifications for this event.

- listener: [IEventListener](../ieventlistener) the listener reference to remove.







