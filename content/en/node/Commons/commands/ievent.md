---
type: docs
title: "IEvent"
linkTitle: "IEvent"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    An interface for Events, which are part of the Command design pattern.
    Events allows to send asynchronious notifications to multiple subscribed listeners.
---
See also [IEventListener](../ievent_listener)

### Methods

#### getName
Gets the event name.

> getName(): string

- **returns**: string - the name of the event.

#### getListeners
Gets all subscribed listeners.

> getListeners(): [IEventListener](../ievent_listener)[]

- **returns**: [IEventListener](../ievent_listener)[] - a list of listeners.

#### addListener
Adds a listener to receive notifications for this event.

> addListener(listener: [IEventListener](../ievent_listener)): void

- **listener**: [IEventListener](../ievent_listener) - the listener reference to add.


#### removeListener
Removes a listener, so that it no longer receives notifications for this event.

> removeListener(listener: [IEventListener](../ievent_listener)): void

- **listener**: [IEventListener](../ievent_listener) - the listener reference to remove.


### See also
- #### [IEventListener](../ievent_listener)