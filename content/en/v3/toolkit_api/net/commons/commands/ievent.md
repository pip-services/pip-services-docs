---
type: docs
title: "IEvent"
linkTitle: "IEvent"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: > 
    An interface for Events that can send asynchronious notifications to multiple subscribed listeners.
---

**Inherits**: [INotifiable](../../run/inotifiable)

### Description

The IEvent interface allows you to define events that can send asynchronous notifications to multiple subscribed listeners.


### Properties

#### Name
Gets the name of the event.
> `public` string Name { get; }


#### Listeners
Gets all listeners registered in this event.
> `public` List<[IEventListener](../ievent_listener)> Listeners { get; }


### Instance methods

#### AddListener
Adds a listener to receive notifications for this event.

> void AddListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener reference to add.


#### removeListener
Removes a listener, so that it no longer receives notifications for this event.

> void RemoveListener([IEventListener](../ievent_listener) listener)

- **listener**: [IEventListener](../ievent_listener) - listener reference to remove.


### See also
- #### [IEventListener](../ievent_listener)
