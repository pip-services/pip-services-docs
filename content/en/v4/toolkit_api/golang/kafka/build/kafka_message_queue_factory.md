---
type: docs
title: "KafkaMessageQueueFactory"
linkTitle: "KafkaMessageQueueFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-kafka-go"
description: > 
    Creates [KafkaMessageQueue](../../queues/kafka_message_queue) components by their descriptors. 
   
---

**Implements:** [MessageQueueFactory](../../../messaging/build/message_queue_factory)

### Description

The KafkaMessageQueueFactory class allows you to create [KafkaMessageQueue](../../queues/kafka_message_queue) components by their descriptors. 
    
**Important points**

- The name of created message queue is taken from its descriptor.


### Constructors

#### NewKafkaMessageQueueFactory

Creates a new instance of the factory.
>  NewKafkaMessageQueueFactory() [*KafkaMessageQueueFactory]()

### Methods

#### CreateQueue
Creates a message queue component and assigns its name.

> (c [*KafkaMessageQueueFactory]()) CreateQueue(name string) [IMessageQueue](../../../messaging/queues/imessage_queue)

- **name**: string - name of the created message queue.
- **returns**: [IMessageQueue](../../../messaging/queues/imessage_queue) - created queue component.

### See also
- #### [Factory](../../../components/build/factory)
- #### [KafkaMessageQueue](../../queues/kafka_message_queue)

