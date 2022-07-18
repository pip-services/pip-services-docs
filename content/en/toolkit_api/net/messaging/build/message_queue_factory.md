---
type: docs
title: "MessageQueueFactory"
linkTitle: "MessageQueueFactory"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-messaging-dotnet"
description: >
    Creates [IMessageQueue](../../queues/imessage_queue) components based on their descriptors.
   
---

**Inherits:** [Factory](../../../components/build/factory), [IMessageQueueFactory](../imessage_queue_factory), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The MessageQueueFactory class allows you to create [IMessageQueue](../../queues/imessage_queue) components based on their descriptors.

### Fields

<span class="hide-title-link">

#### _config
Configuration paramters

> `protected` **_config**: [ConfigParams](../../../commons/config/config_params)

#### _references
References used to locate the component dependencies
> `protected` **_references**: [IReferences](../../../commons/refer/ireferences) 

</span>

### Abstract methods

#### CreateQueue
Creates a message queue component and assigns its name.

> `public abstract` [IMessageQueue](../../queues/imessage_queue) CreateQueue(string name)

- **name**: string - name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - message queue

### Instance methods

#### Configure
Configures the component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) -  configuration parameters to be set.

#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/message_queue)
