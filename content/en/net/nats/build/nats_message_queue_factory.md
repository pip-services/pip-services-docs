---
type: docs
title: "NatsMessageQueueFactory"
linkTitle: "NatsMessageQueueFactory"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-nats-dotnet"
description: > 
    Creates [NatsMessageQueue](../../queues/nats_message_queue) components by their descriptors. 
    
---

**Inherits:** [MessageQueueFactory](../../../messaging/build/message_queue_factory)

### Description

The NatsMessageQueueFactory class allows you to create [NatsMessageQueue](../../queues/nats_message_queue) components by their descriptors.

**Important points**
- The name of the created message queue is taken from its descriptor.

### Constructors
Creates a new instance of the factory.
> `public` NatsMessageQueueFactory()

### Instance methods

#### createQueue
Creates a message queue component and assigns its name.

> `public override` [IMessageQueue](../../../messaging/queues/imessage_queue) CreateQueue(string name)

- **name**: string - name of the created message queue.
- **returns**: [IMessageQueue](../../../messaging/queues/imessage_queue) - created queue component.

#### CreateBareQueue!
Creates a bare message queue component and assigns its name.

**TODO: method is not implemented**


### See also
- #### [Factory](../../../components/build/factory)
- #### [NatsMessageQueue](../../queues/nats_message_queue)
