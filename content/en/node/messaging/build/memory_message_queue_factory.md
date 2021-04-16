---
type: docs
title: "MemoryMessageQueueFactory"
linkTitle: "MemoryMessageQueueFactory"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
description: >
    Creates [MemoryMessageQueue](../queue/memory_message_queue) components by their descriptors.
    Name of created message queue is taken from its descriptor. 
    <br><br>
    See [Factory](../../../components/build/factory), [MemoryMessageQueue](../queue/memory_message_queue)
---


### Constructors
Create a new instance of the factory.

> constructor(): string


### Methods

#### createQueue
Creates a message queue component and assigns its name.

> createQueue(name: string): [IMessageQueue](../../queues/imessage_queue)

- **name**: string - a name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - TODO: add description here

#### configure
Configures component by passing configuration parameters.

> configure(config: ConfigParams): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### setReferences
Sets references to dependent components.

> setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


<span class="hide-title-link">

### See 
#### [Factory](../../../components/build/factory)
#### [MemoryMessageQueue](../queue/memory_message_queue)

</span>
