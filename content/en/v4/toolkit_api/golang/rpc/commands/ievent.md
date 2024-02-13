---
type: docs
title: "IEvent"
linkTitle: "IEvent"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-rpc-go"
description: > 
    An interface for Events that can send asynchronious notifications to multiple subscribed listeners.
---

**Extends:** [INotifiable](../../../components/exec/inotifiable)

### Description

The IEvent interface allows you to define events that can send asynchronous notifications to multiple subscribed listeners.

### Instance methods

#### getName
Gets the event name.

> getName(): string

- **returns**: string - name of the event.

#### getListeners
Gets all subscribed listeners.

> getListeners(): [IEventListener](../ievent_listener)[]

- **returns**: [IEventListener](../ievent_listener)[] - list of listeners.

#### addListener
Adds a listener to receive notifications for this event.

> addListener(listener: [IEventListener](../ievent_listener)): void

- **listener**: [IEventListener](../ievent_listener) - listener reference to add.


#### removeListener
Removes a listener, so that it no longer receives notifications for this event.

> removeListener(listener: [IEventListener](../ievent_listener)): void

- **listener**: [IEventListener](../ievent_listener) - listener reference to remove.


### See also
- #### [IEventListener](../ievent_listener)
