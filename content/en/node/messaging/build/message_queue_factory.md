---
type: docs
title: "MessageQueueFactory"
linkTitle: "MessageQueueFactory"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
    Creates [IMessageQueue](../../queues/imessage_queue) components based on their descriptors.
   
---

**Extends:** [Factory](../../../components/build/factory)

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

#### createQueue
Creates a message queue component and assigns its name.

> `abstract` createQueue(name: string):  [IMessageQueue](../../queues/imessage_queue)

- **name**: string - name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - message queue

### Instance methods

#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) -  configuration parameters to be set.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/message_queue)
