---
type: docs
title: "MqttMessageQueueFactory"
linkTitle: "MqttMessageQueueFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-mqtt-go"
description: > 
    Creates [MqttMessageQueue](../../queues/mqtt_message_queue) components by their descriptors. 
   
---

**Implements:** [MessageQueueFactory](../../../messaging/build/message_queue_factory)

### Description

The MqttMessageQueueFactory class allows you to create [MqttMessageQueue](../../queues/mqtt_message_queue) components by their descriptors. 
    
**Important points**    

- The name of the created message queue is taken from its descriptor.


### Constructors

#### NewMqttMessageQueueFactory
Creates a new instance of the factory.
> NewMqttMessageQueueFactory() [*MqttMessageQueueFactory]()

### Methods

#### CreateQueue
Creates a message queue component and assigns its name.

> (c [*MqttMessageQueueFactory]()) CreateQueue(name string) [IMessageQueue](../../../messaging/queues/imessage_queue)

- **name**: string - name of the created message queue.
- **returns**: [IMessageQueue](../../../messaging/queues/imessage_queue) - created message queue component.


### See also
- #### [Factory](../../../components/build/factory)
- #### [MqttMessageQueue](../../queues/mqtt_message_queue)

