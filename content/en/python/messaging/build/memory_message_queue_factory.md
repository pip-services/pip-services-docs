---
type: docs
title: "MemoryMessageQueueFactory"
linkTitle: "MemoryMessageQueueFactory"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
    Creates [MemoryMessageQueue](../../queues/memory_message_queue) components by their descriptors.
   
---

**Implements:** [MessageQueueFactory](../message_queue_factory)

### Description

The MemoryMessageQueueFactory class allows you to create [MemoryMessageQueue](../../queues/memory_message_queue) components based on their descriptors.

Important points

-  The name of created message queue is taken from its descriptor. 

### Constructors
Create a new instance of the factory.

> MemoryMessageQueueFactory()

### Instance methods

#### create_queue
Creates a message queue component and assigns its name.

> create_queue(name: str): [IMessageQueue](../../queues/imessage_queue)

- **name**: str - name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - a message queue.



### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/memory_message_queue)
