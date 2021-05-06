---
type: docs
title: "IEvent"
linkTitle: "IEvent"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    An interface for Events, which can send asynchronious notifications to multiple subscribed listeners.
---

**Implements:** [INotifiable](../../run/inotifiable)

### Description

The IEvent interface allows you to define events, which can send asynchronous notification to multiple subscribed listeners.

### Instance methods

#### get_name
Gets the event name.

> get_name(): str

- **returns**: str - the name of the event.

#### get_listeners
Gets all subscribed listeners.

> get_listeners(): List[[IEventListener](../ievent_listener)]

- **returns**: List[[IEventListener](../ievent_listener)] - a list of listeners.

#### add_listener
Adds a listener to receive notifications for this event.

> add_listener(listener: [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - the listener reference to add.


#### remove_listener
Removes a listener, so that it no longer receives notifications for this event.

> remove_listener(listener: [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - the listener reference to remove.


### See also
- #### [IEventListener](../ievent_listener)
