---
type: docs
title: "IEvent"
linkTitle: "IEvent"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    An interface for Events, which are part of the Command design pattern.
    Events allows to send asynchronious notifications to multiple subscribed listeners.
---

**Implements:** [INotifiable](../../run/inotifiable)

See also [IEventListener](../ievent_listener)

### Methods

#### get_name
Gets the event name.

> getName(): str

- **returns**: str - the name of the event.

#### getListeners
Gets all subscribed listeners.

> get_listeners(): List[[IEventListener](../ievent_listener)]

- **returns**: List[[IEventListener](../ievent_listener)] - a list of listeners.

#### add_listener
Adds a listener to receive notifications for this event.

> addListener(listener: [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - the listener reference to add.


#### remove_listener
Removes a listener, so that it no longer receives notifications for this event.

> removeListener(listener: [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - the listener reference to remove.


### See also
- #### [IEventListener](../ievent_listener)