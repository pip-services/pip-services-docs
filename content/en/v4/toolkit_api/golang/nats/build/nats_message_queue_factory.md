---
type: docs
title: "NatsMessageQueueFactory"
linkTitle: "NatsMessageQueueFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-nats-go"
description: > 
    Creates [NatsMessageQueue](../../queues/nats_message_queue) components by their descriptors. 
    
---

**Extends:** [MessageQueueFactory](../../../messaging/build/message_queue_factory)

### Description

The NatsMessageQueueFactory class allows you to create [NatsMessageQueue](../../queues/nats_message_queue) components by their descriptors.

**Important points**
- The name of the created message queue is taken from its descriptor.

### Constructors

#### NewNatsMessageQueueFactory
Creates a new instance of the factory.
> NewNatsMessageQueueFactory() [*NatsMessageQueueFactory]()

### Methods

#### CreateQueue
Creates a message queue component and assigns its name.

> (c [*NatsMessageQueueFactory]()) CreateQueue(name string) [IMessageQueue](../../../messaging/queues/imessage_queue)

- **name**: string - name of the created message queue.
- **returns**: [IMessageQueue](../../../messaging/queues/imessage_queue) - created queue component.

#### CreateBareQueue
Creates a bare message queue component and assigns its name.

> (c [*NatsMessageQueueFactory]()) CreateBareQueue(name string) [IMessageQueue](../../../messaging/queues/imessage_queue)

- **name**: string - name of the created message queue.
- **returns**: [IMessageQueue](../../../messaging/queues/imessage_queue) - created queue component.


### See also
- #### [Factory](../../../components/build/factory)
- #### [NatsMessageQueue](../../queues/nats_message_queue)
