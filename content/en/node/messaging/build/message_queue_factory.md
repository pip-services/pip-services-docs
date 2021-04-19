---
type: docs
title: "MessageQueueFactory"
linkTitle: "MessageQueueFactory"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
description: >
    Creates [IMessageQueue](../../queues/imessage_queue) components by their descriptors.
    Name of created message queue is taken from its descriptor.
---
See also [Factory](../../../components/build/factory), [MemoryMessageQueue](../../queues/message_queue)

### Properties

<span class="hide-title-link">

#### _config
> `protected` **_config**: [ConfigParams](../../../commons/config/config_params) - TODO: add description property

#### _references
> `protected` **_references**: [IReferences](../../../commons/refer/ireferences) - TODO: add description property  

</span>

### Methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) -  configuration parameters to be set.

#### createQueue
Creates a message queue component and assigns its name.

> createQueue(name: string):  [IMessageQueue](../../queues/imessage_queue)

- **name**: string - a name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - TODO: add description here

#### setReferences
Sets references to dependent components.

> setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.



### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/message_queue)