---
type: docs
title: "MemoryMessageQueueFactory"
linkTitle: "MemoryMessageQueueFactory"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
    Creates [MemoryMessageQueue](../../queues/memory_message_queue) components by their descriptors.
    Name of created message queue is taken from its descriptor. 
---

**Extends:** [MessageQueueFactory](../message_queue_factory)

See also [Factory](../../../components/build/factory), [MemoryMessageQueue](../../queues/memory_message_queue)

### Constructors
Create a new instance of the factory.

> `public` constructor(): string

### Methods

#### createQueue
Creates a message queue component and assigns its name.

> `public` createQueue(name: string): [IMessageQueue](../../queues/imessage_queue)

- **name**: string - a name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - TODO: add description here



### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/memory_message_queue)
