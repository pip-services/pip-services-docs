---
type: docs
title: "MqttMessageQueueFactory"
linkTitle: "MqttMessageQueueFactory"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mqtt-python"
description: > 
    Creates [MqttMessageQueue](../../queues/mqtt_message_queue) components by their descriptors. 
   
---

**Implements:** [MessageQueueFactory](../../../messaging/build/message_queue_factory)

### Description

The MqttMessageQueueFactory class allows you to create [MqttMessageQueue](../../queues/mqtt_message_queue) components by their descriptors. 
    
**Important points**    

- The name of the created message queue is taken from its descriptor.


### Constructors
Creates a new instance of the factory.
> MqttMessageQueueFactory()

### Instance methods

#### create_queue
Creates a message queue component and assigns its name.

> create_queue(name: str): [IMessageQueue](../../../messaging/queues/imessage_queue)

- **name**: str - name of the created message queue.
- **returns**: [IMessageQueue](../../../messaging/queues/imessage_queue) - created queue component.


### See also
- #### [Factory](../../../components/build/factory)
- #### [MqttMessageQueue](../../queues/mqtt_message_queue)
