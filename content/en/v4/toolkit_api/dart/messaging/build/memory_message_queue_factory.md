---
type: docs
title: "MemoryMessageQueueFactory"
linkTitle: "MemoryMessageQueueFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-messaging-dart"
description: >
    Creates [MemoryMessageQueue](../../queues/memory_message_queue) components based on their descriptors.
   
---

**Extends:** [MessageQueueFactory](../message_queue_factory)

### Description

The MemoryMessageQueueFactory class allows you to create [MemoryMessageQueue](../../queues/memory_message_queue) components based on their descriptors.

Important points

-  The name of the created message queue is taken from its descriptor. 

### Constructors
Creates a new instance of the factory.

> MemoryMessageQueueFactory()

### Instance methods

#### createQueue
Creates a message queue component and assigns its name.

> [IMessageQueue](../../queues/imessage_queue) createQueue(String name)

- **name**: String - name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - message queue.



### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/memory_message_queue)
