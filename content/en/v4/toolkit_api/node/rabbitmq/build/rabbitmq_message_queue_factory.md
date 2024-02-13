---
type: docs
title: "RabbitMQMessageQueueFactory"
linkTitle: "RabbitMQMessageQueueFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-rabbitmq-node"
description: > 
    Creates [RabbitMQMessageQueue](../../queues/rabbitmq_message_queue/)  components by their descriptors.
---

**Extends:** [MessageQueueFactory](../../../messaging/build/message_queue_factory)

### Description

The RabbitMQMessageQueueFactory class allows you to create [RabbitMQMessageQueue](../../queues/rabbitmq_message_queue/) components by their descriptors.
Name of created message queue is taken from its descriptor.

### Constructors

Creates a new instance of the factory.

> `public` constructor()

### Instance methods

#### createQueue
Creates a message queue component and assigns its name.

> `public` createQueue(name: string): [IMessageQueue](../../../messaging/queues/imessage_queue)

- **name**: string - a name of the created message queue.
- **returns**: [IMessageQueue](../../../messaging/queues/imessage_queue) - created queue.

### See also
- #### [Factory](../../../components/build/factory)
- #### [RabbitMQMessageQueue](../../queues/rabbitmq_message_queue)

