---
type: docs
title: "KafkaMessageQueueFactory"
linkTitle: "KafkaMessageQueueFactory"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-kafka-nodex"
description: > 
    Creates [KafkaMessageQueue](../../../queues/kafka_message_queue) components by their descriptors. 
    Name of created message queue is taken from its descriptor.
---

**Extends:** [MessageQueueFactory](../../../messaging/build/message_queue_factory)

### Description

TODO: add description


### Constructors
Create a new instance of the factory.
> `public` constructor()

### Instance methods

#### createQueue
Creates a message queue component and assigns its name.

> `public` createQueue(name: string): [IMessageQueue](../../../messaging/queues/imessage_queue)

- **name**: string - a name of the created message queue.
- **returns**: [IMessageQueue](../../../messaging/queues/imessage_queue) - created queue component.

### See also
- #### [Factory](../../../components/build/factory)
- #### [KafkaMessageQueue](../../../queues/kafka_message_queue)