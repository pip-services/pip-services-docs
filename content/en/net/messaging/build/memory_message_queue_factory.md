---
type: docs
title: "MemoryMessageQueueFactory"
linkTitle: "MemoryMessageQueueFactory"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-messaging-dotnet"
description: >
    Creates [MemoryMessageQueue](../../queues/memory_message_queue) components based on their descriptors.
   
---

**Inherits:** [MessageQueueFactory](../message_queue_factory)

### Description

The MemoryMessageQueueFactory class allows you to create [MemoryMessageQueue](../../queues/memory_message_queue) components based on their descriptors.

Important points

-  The name of the created message queue is taken from its descriptor. 

### Constructors
Creates a new instance of the factory.

> `public` MemoryMessageQueueFactory()

### Instance methods

#### CreateQueue
Creates a message queue component and assigns its name.

> `public override` [IMessageQueue](../../queues/imessage_queue) CreateQueue(string name)

- **name**: string - name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - message queue.



### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/memory_message_queue)
