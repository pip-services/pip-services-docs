---
type: docs
title: "MessageQueueFactory"
linkTitle: "MessageQueueFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-messaging-dart"
description: >
    Creates [IMessageQueue](../../queues/imessage_queue) components based on their descriptors.
   
---

**Extends:** [Factory](../../../components/build/factory)  

**Implements:** [IMessageQueueFactory](../imessage_queue_factory), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

### Description

The MessageQueueFactory class allows you to create [IMessageQueue](../../queues/imessage_queue) components based on their descriptors.

### Fields

<span class="hide-title-link">

#### _config
Configuration paramters
> **_config**: [ConfigParams?](../../../components/config/config_params)

#### _references
References used to locate the component dependencies
> **_references**: [IReferences?](../../../components/refer/ireferences) 

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
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) -  configuration parameters to be set.

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.


### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/message_queue)
