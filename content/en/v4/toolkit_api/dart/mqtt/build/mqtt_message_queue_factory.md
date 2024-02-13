---
type: docs
title: "MqttMessageQueueFactory"
linkTitle: "MqttMessageQueueFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-prometheus-dart"
description: > 
    Creates [MqttMessageQueue](../../queues/mqtt_message_queue) components by their descriptors. 
   
---

**Extends:** [MessageQueueFactory](../../../messaging/build/message_queue_factory)

### Description

The MqttMessageQueueFactory class allows you to create [MqttMessageQueue](../../queues/mqtt_message_queue) components by their descriptors. 
    
**Important points**    

- The name of the created message queue is taken from its descriptor.


### Constructors
Creates a new instance of the factory.
> MqttMessageQueueFactory()

### Instance methods

#### createQueue
Creates a message queue component and assigns its name.

`@override`
> [IMessageQueue](../../../messaging/queues/imessage_queue) createQueue(String name)

- **name**: String - name of the created message queue.
- **returns**: [IMessageQueue](../../../messaging/queues/imessage_queue) - created queue component.


### See also
- #### [Factory](../../../components/build/factory)
- #### [MqttMessageQueue](../../queues/mqtt_message_queue)
