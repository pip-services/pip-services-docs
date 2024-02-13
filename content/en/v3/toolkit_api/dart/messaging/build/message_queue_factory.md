---
type: docs
title: "MessageQueueFactory"
linkTitle: "MessageQueueFactory"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-messaging-dart"
description: >
    Creates [IMessageQueue](../../queues/imessage_queue) components based on their descriptors.
   
---

**Extends:** [Factory](../../../components/build/factory)  

**Implements:** [IMessageQueueFactory](../imessage_queue_factory), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The MessageQueueFactory class allows you to create [IMessageQueue](../../queues/imessage_queue) components based on their descriptors.

### Fields

<span class="hide-title-link">

#### _config
Configuration paramters
> **_config**: [ConfigParams?](../../../commons/config/config_params)

#### _references
References used to locate the component dependencies
> **_references**: [IReferences?](../../../commons/refer/ireferences) 

</span>

### Abstract methods

#### createQueue
Creates a message queue component and assigns its name.

`@override`
> [IMessageQueue](../../queues/imessage_queue) createQueue(String name)

- **name**: String - name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - message queue

### Instance methods

#### configure
Configures the component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) -  configuration parameters to be set.

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/message_queue)
