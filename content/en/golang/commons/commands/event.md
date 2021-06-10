---
type: docs
title: "Event"
linkTitle: "Event"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    Concrete implementation of the [IEvent](../ievent) interface.
   
---

### Description

The Event class allows you to create events.

Important points

- It allows you to send asynchronous notifications to multiple subscribed listeners.

### Constructors

#### NewEvent
Creates a new event and assigns its name.  
Throws an Error if the name is nil.

> NewEvent(name string) [*Event]()

- **name**: string - the name of the event that is to be created.

### Methods

#### AddListener
Adds a listener to receive notifications when this event is fired.

> (c *Event) AddListener(listener [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - the listener reference to add.

#### Listeners
Gets all listeners registred in this event.

> (c [*Event]()) Listeners() [][IEventListener](../ievent_listener)

- **returns**: [][IEventListener](../ievent_listener) - a list of listeners.

#### Name
Gets the name of the event.

> (c *Event) Name() string

- **returns**: string - the name of this event.

#### Notify
Fires this event and notifies all registred listeners.  
Throws an [InvocationException](../errors/invocation_exception) if the event fails to be raised.

> (c [*Event]()) Notify(correlationId string, args [*run.Parameters](../../run/parameters))

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **args**: [*run.Parameters](../../run/parameters) - the parameters to raise this event with.

#### RemoveListener
Removes a listener, so that it no longer receives notifications for this event.

> (c [*Event]()) RemoveListener(listener [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - the listener reference to remove.

**Example**:

```go
event: = NewEvent("my_event");

event.AddListener(myListener);

event.Notify("123", Parameters.fromTuples(
  "param1", "ABC",
  "param2", 123
));

```

### See also
- #### [IEvent](../ievent)
- #### [IEventListener](../ievent_listener)
