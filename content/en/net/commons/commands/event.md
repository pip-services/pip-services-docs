---
type: docs
title: "Event"
linkTitle: "Event"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    Concrete implementation of the [IEvent](../ievent) interface.
   
---

**Inherits**: [IEvent](../ievent)

### Description

The Event class allows you to create events.

Important points

- It allows you to send asynchronous notifications to multiple subscribed listeners.

### Constructors

Creates a new event and assigns its name.  
Throws an Error if the name is null.

> `public` Event(string name)

- **name**: string - the name of the event that is to be created.


### Properties

#### Name
Gets the name of the event.
> `public` string Name { get; }

#### Listeners
Gets all listeners registered in this event.
> `public` List<[IEventListener](../ievent_listener)> Listeners { get; }


### Instance methods

#### AddListener
Adds a listener to receive notifications when this event is fired.

> `public` void AddListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener's reference to add.


#### NotifyAsync
Fires this event and notifies all registred listeners.  
Throws an [InvocationException](../errors/invocation_exception) if the event fails to be raised.

> `public` void NotifyAsync(string correlationId, [Parameters](../../run/parameters) args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **args**: [Parameters](../../run/parameters) - parameters to raise this event with.

#### RemoveListener
Removes a listener, so that it no longer receives notifications for this event.

> `public` void RemoveListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener's reference to remove.

**Example**:

```cs
var event = new Event("my_event");
event.addListener(myListener);

event.notify("123", Parameters.FromTuples(
"param1", "ABC",   
<br>"param2", 123 ));

```

### See also
- #### [IEvent](../ievent)
- #### [IEventListener](../ievent_listener)
