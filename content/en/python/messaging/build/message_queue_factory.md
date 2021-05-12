---
type: docs
title: "MessageQueueFactory"
linkTitle: "MessageQueueFactory"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
    Creates [IMessageQueue](../../queues/imessage_queue) components by their descriptors.
    Name of created message queue is taken from its descriptor.
---

**Implements:** [Factory](../../../components/build/factory), [IMessageQueueFactory](../imessage_queue_factory), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

See also [Factory](../../../components/build/factory), [MemoryMessageQueue](../../queues/message_queue)

### Fields

<span class="hide-title-link">

#### _config
TODO: add description property

> **_config**: [ConfigParams](../../../commons/config/config_params)

#### _references
TODO: add description property
> **_references**: [IReferences](../../../commons/refer/ireferences) 

</span>

### Methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params))

- **config**: [ConfigParams](../../../commons/config/config_params) -  configuration parameters to be set.

#### create_queue
Creates a message queue component and assigns its name.

> `abstractmethod` create_queue(name: str):  [IMessageQueue](../../queues/imessage_queue)

- **name**: str - a name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - TODO: add description here

#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.



### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/message_queue)