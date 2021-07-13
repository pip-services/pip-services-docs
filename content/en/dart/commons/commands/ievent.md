---
type: docs
title: "IEvent"
linkTitle: "IEvent"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: > 
    An interface for Events that can send asynchronious notifications to multiple subscribed listeners.
---

**Extends:** [INotifiable](../../run/inotifiable)

### Description

The IEvent interface allows you to define events that can send asynchronous notifications to multiple subscribed listeners.

### Instance methods

#### getName
Gets the event name.

> String getName()

- **returns**: String - name of the event.

#### getListeners
Gets all subscribed listeners.

> List<[IEventListener](../ievent_listener)> getListeners()

- **returns**: List<[IEventListener](../ievent_listener)> - list of listeners.

#### addListener
Adds a listener to receive notifications for this event.

> avoid addListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener reference to add.


#### removeListener
Removes a listener, so that it no longer receives notifications for this event.

> void removeListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener reference to remove.


### See also
- #### [IEventListener](../ievent_listener)
