---
type: docs
title: "MemoryMessageQueueFactory"
linkTitle: "MemoryMessageQueueFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-memcached-go"
description: >
    Creates [MemoryMessageQueue](../../queues/memory_message_queue) components based on their descriptors.
   
---

**Implements:** [MessageQueueFactory](../message_queue_factory)

### Description

The MemoryMessageQueueFactory class allows you to create [MemoryMessageQueue](../../queues/memory_message_queue) components based on their descriptors.

Important points

-  The name of the created message queue is taken from its descriptor. 

### Constructors

#### NewMemoryMessageQueueFactory
Creates a new instance of the factory.

> NewMemoryMessageQueueFactory() [*MemoryMessageQueueFactory]()

### Methods

#### CreateQueue
Creates a message queue component and assigns its name.

> (c [*MemoryMessageQueueFactory]()) CreateQueue(ctx context.Context, name string) [queues.IMessageQueue](../../queues/imessage_queue)

- **ctx**: context.Context - operation context.
- **name**: string - name of the created message queue.
- **returns**: [queues.IMessageQueue](../../queues/imessage_queue) - message queue.



### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/memory_message_queue)

