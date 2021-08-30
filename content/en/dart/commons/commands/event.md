---
type: docs
title: "Event"
linkTitle: "Event"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    Concrete implementation of the [IEvent](../ievent) interface.
   
---

**Implements:** [IEvent](../ievent)

### Description

The Event class allows you to create events.

**Important points**

- It allows you to send asynchronous notifications to multiple subscribed listeners.

### Constructors

Creates a new event and assigns its name.  
Throws an Error if the name is null.

> Event(String name)

- **name**: String - name of the event that is to be created.

### Instance methods

#### addListener
Adds a listener to receive notifications when this event is fired.

`@override`
> void addListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener reference to add.

#### getListeners
Gets all listeners registred in this event.

@override
> List<[IEventListener](../ievent_listener)> getListeners()

- **returns**: List<[IEventListener](../ievent_listener)> - list of listeners.

#### getName
Gets the name of the event.

`@override`
> String getName()

- **returns**: String - name of this event.

#### notify
Fires this event and notifies all registred listeners.  
Throws an [InvocationException](../../errors/invocation_exception) if the event fails to be raised.

`@override`
> void notify(String correlationId, [Parameters](../../run/parameters) args)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **args**: [Parameters](../../run/parameters) - parameters to raise this event with.

#### RemoveListener
Removes a listener, so that it no longer receives notifications for this event.

`@override`
> void removeListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener reference to remove.

**Example**:

```dart
var event =  Event('my_event');
event.addListener(myListener);

event.notify('123', Parameters.fromTuples(
  ['param1', 'ABC',
  'param2', 123]
));

```

### See also
- #### [IEvent](../ievent)
- #### [IEventListener](../ievent_listener)
