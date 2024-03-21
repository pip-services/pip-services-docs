---
type: docs
title: "Event"
linkTitle: "Event"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-rpc-java"
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

> `public` Event(String name)

- **name**: String - name of the event that is to be created.

### Instance methods

#### addListener
Adds a listener to receive notifications when this event is fired.

> `public` void addListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener reference to add.

#### getListeners
Gets all listeners registred in this event.

> `public` List<[IEventListener](../ievent_listener)> getListeners()

- **returns**: List<[IEventListener](../ievent_listener)> - list of listeners.

#### getName
Gets the name of the event.

> `public` String getName() 

- **returns**: String - name of this event.

#### notify
Fires this event and notifies all registred listeners.  
Throws an [InvocationException](../../../commons/errors/invocation_exception) if the event fails to be raised.

> `public`void notify([IContext](../../../components/context/icontext) context, [Parameters](../../../components/exec/parameters) args) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **args**: [Parameters](../../../components/exec/parameters) - parameters to raise this event with.

#### removeListener
Removes a listener, so that it no longer receives notifications for this event.

> `public` void removeListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener reference to remove.

**Example**:

```java
{
  Event event = new Event("my_event");
  event.addListener(myListener);
  
  event.notify("123", Parameters.fromTuples(
    "param1", "ABC",
    "param2", 123
  ));
  }

```

### See also
- #### [IEvent](../ievent)
- #### [IEventListener](../ievent_listener)
