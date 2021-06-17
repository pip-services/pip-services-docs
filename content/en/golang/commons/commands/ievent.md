---
type: docs
title: "IEvent"
linkTitle: "IEvent"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: > 
    An interface for Events that can send asynchronious notifications to multiple subscribed listeners.
---

**Implements:** [INotifiable](../../run/inotifiable)

### Description

The IEvent interface allows you to define events that can send asynchronous notifications to multiple subscribed listeners.

### Methods

#### Name
Gets the event's name.

> Name() string

- **returns**: string - name of the event.

#### getListeners
Gets all subscribed listeners.

>Listeners() [][IEventListener](../ievent_listener)

- **returns**: [][IEventListener](../ievent_listener) - list of listeners.

#### AddListener
Adds a listener to receive notifications for this event.

> AddListener(listener IEventListener)

- **listener**: [IEventListener](../ievent_listener) - listener reference to add.


#### RemoveListener
Removes a listener, so that it no longer receives notifications for this event.

> RemoveListener(listener [IEventListener](../ievent_listener))

- **listener**: [IEventListener](../ievent_listener) - listener reference to remove.


### See also
- #### [IEventListener](../ievent_listener)
