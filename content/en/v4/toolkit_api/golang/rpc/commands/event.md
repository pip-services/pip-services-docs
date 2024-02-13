---
type: docs
title: "Event"
linkTitle: "Event"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-rpc-go"
description: > 
    Concrete implementation of the [IEvent](../ievent) interface.
   
---

**Implements:** [IEvent](../ievent)

### Description

The Event class allows you to create events.

Important points

- It allows you to send asynchronous notifications to multiple subscribed listeners.

### Constructors

Creates a new event and assigns its name.  
Throws an Error if the name is null.

> `public` constructor(name: string)

- **name**: string - name of the event that is to be created.

### Instance methods

#### addListener
Adds a listener to receive notifications when this event is fired.

> `public` addListener(listener: [IEventListener](../ievent_listener)): void

- **listener**: [IEventListener](../ievent_listener) - listener reference to add.

#### getListeners
Gets all listeners registred in this event.

> `public` getListeners(): [IEventListener](../ievent_listener)[]

- **returns**: [IEventListener](../ievent_listener)[] - list of listeners.

#### getName
Gets the name of the event.

> `public` getName(): string 

- **returns**: string - name of this event.

#### notify
Fires this event and notifies all registred listeners.  
Throws an [InvocationError](../../../commons/errors/invocation_error) if the event fails to be raised.

> `public`notify(context: [IContext](../../../components/context/icontext), args: [Parameters](../../../components/exec/parameters)): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **args**: [Parameters](../../../components/exec/parameters) - parameters to raise this event with.

#### removeListener
Removes a listener, so that it no longer receives notifications for this event.

> `public` removeListener(listener: [IEventListener](../ievent_listener)): void

- **listener**: [IEventListener](../ievent_listener) - listener reference to remove.

**Example**

```go
event: = NewEvent("my_event");
event.AddListener(myListener);
event.Notify(cpntext.Backgroudn(),
          Parameters.fromTuples(
                 "param1", "ABC",
                  "param2", 123,
           )
);

```

### See also
- #### [IEvent](../ievent)
- #### [IEventListener](../ievent_listener)

