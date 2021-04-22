---
type: docs
title: "Event"
linkTitle: "Event"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Concrete implementation of [IEvent](../ievent) interface.
    It allows to send asynchronous notifications to multiple subscribed listeners.
---
See also [IEvent](../ievent), [IEventListener](../ievent_listener)

**Example**:

```typescript
let event = new Event("my_event");
 
event.addListener(myListener);
 *     
event.notify("123", Parameters.fromTuples(
  "param1", "ABC",
  "param2", 123
));

```

### Constructors

Creates a new event and assigns its name.  
Throws an Error if the name is null.

> `public` constructor(name: string): [Event]()

- **name**: string - the name of the event that is to be created.

### Methods

#### addListener
Adds a listener to receive notifications when this event is fired.

> `public` addListener(listener: [IEventListener](../ievent_listener)): void

- **listener**: [IEventListener](../ievent_listener) - the listener reference to add.

#### getListeners
Gets all listeners registred in this event.

> `public` getListeners(): [IEventListener](../ievent_listener)[]

- **returns**: [IEventListener](../ievent_listener)[] - a list of listeners.

#### getName
Gets the name of the event.

> `public` getName(): string 

- **returns**: string - the name of this event.

#### getName
Fires this event and notifies all registred listeners.  
Throws an [InvocationException](../errors/invocation_exception) if the event fails to be raised.

> `public`notify(correlationId: string, args: [Parameters](../../run/parameters)): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **args**: [Parameters](../../run/parameters) - the parameters to raise this event with.

#### removeListener
Removes a listener, so that it no longer receives notifications for this event.

> `public` removeListener(listener: [IEventListener](../ievent_listener)[]): void

- **listener**: [IEventListener](../ievent_listener)[] - the listener reference to remove.


### See also
- #### [IEvent](../ievent)
- #### [IEventListener](../ievent_listener)