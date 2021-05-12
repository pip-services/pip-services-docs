---
type: docs
title: "MemoryMessageQueueFactory"
linkTitle: "MemoryMessageQueueFactory"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
    Creates [MemoryMessageQueue](../../queues/memory_message_queue) components by their descriptors.
    Name of created message queue is taken from its descriptor. 
---

**Implements:** [MessageQueueFactory](../message_queue_factory)

See also [Factory](../../../components/build/factory), [MemoryMessageQueue](../../queues/memory_message_queue)

### Constructors
Create a new instance of the factory.

> MemoryMessageQueueFactory()

### Methods

#### create_queue
Creates a message queue component and assigns its name.

> create_queue(name: str): [IMessageQueue](../../queues/imessage_queue)

- **name**: str - a name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - TODO: add description here



### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/memory_message_queue)
