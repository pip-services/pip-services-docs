---
type: docs
title: "DefaultMessagingFactory"
linkTitle: "DefaultMessagingFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-memcached-go"
description: > 
    Creates [MemoryMessageQueue](../../queues/memory_message_queue)  components based on their descriptors.
    
---

**Implements:** [Factory](../../../components/build/factory)

### Description

The DefaultMessagingFactory class allows you to create  [MemoryMessageQueue](../../queues/memory_message_queue)  components based on their descriptors.

Important points

- The name of created message queue is taken from its descriptor.

### Constructors

#### NewDefaultMessagingFactory
Creates a new instance of the factory.

> NewDefaultMessagingFactory() [*DefaultMessagingFactory]()


### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/message_queue)


