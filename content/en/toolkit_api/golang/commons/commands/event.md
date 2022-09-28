---
type: docs
title: "Event"
linkTitle: "Event"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
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

- **name**: string - name of the event that is to be created.

### Methods

#### AddListener
Adds a listener to receive notifications when this event is fired.

> (c *Event) AddListener(listener [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - listener's reference to add.

#### Listeners
Gets all listeners registred in this event.

> (c [*Event]()) Listeners() [][IEventListener](../ievent_listener)

- **returns**: [][IEventListener](../ievent_listener) - list of listeners.

#### Name
Gets the name of the event.

> (c *Event) Name() string

- **returns**: string - name of the event.

#### Notify
Fires this event and notifies all registred listeners.  
Throws an [InvocationError](../errors/invocation_error) if the event fails to be raised.

> (c [*Event]()) Notify(ctx context.Context, correlationId string, args [*run.Parameters](../../run/parameters))

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **args**: [*run.Parameters](../../run/parameters) - parameters to raise this event with.

#### RemoveListener
Removes a listener, so that it no longer receives notifications for this event.

> (c [*Event]()) RemoveListener(listener [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - listener reference to remove.

**Example**:

```go
event: = NewEvent("my_event");

event.AddListener(myListener);

event.Notify(context.Background(), "123", Parameters.NewParametersFromTuples(
  "param1", "ABC",
  "param2", 123
));

```

### See also
- #### [IEvent](../ievent)
- #### [IEventListener](../ievent_listener)
