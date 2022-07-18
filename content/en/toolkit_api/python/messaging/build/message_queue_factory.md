---
type: docs
title: "MessageQueueFactory"
linkTitle: "MessageQueueFactory"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
    Creates [IMessageQueue](../../queues/imessage_queue) components based on their descriptors.
   
---

**Implements:** [Factory](../../../components/build/factory), [IMessageQueueFactory](../imessage_queue_factory), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The MessageQueueFactory class allows you to create [IMessageQueue](../../queues/imessage_queue) components based on their descriptors.

### Fields

<span class="hide-title-link">

#### _config
Configuration paramters

> **_config**: [ConfigParams](../../../commons/config/config_params)

#### _references
References used to locate the component dependencies
> **_references**: [IReferences](../../../commons/refer/ireferences) 

</span>

### Abstract methods

#### create_queue
Creates a message queue component and assigns its name.

> `abstractmethod` create_queue(name: str):  [IMessageQueue](../../queues/imessage_queue)

- **name**: str - name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - message queue

### Instance methods

#### configure
Configures the component by passing its configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) -  configuration parameters to be set.

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/message_queue)
