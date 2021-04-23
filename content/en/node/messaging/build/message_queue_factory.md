---
type: docs
title: "MessageQueueFactory"
linkTitle: "MessageQueueFactory"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
    Creates [IMessageQueue](../../queues/imessage_queue) components by their descriptors.
    Name of created message queue is taken from its descriptor.
---

**Extends:** [Factory](../../../components/build/factory)

**Implements:** [IMessageQueueFactory](../imessage_queue_factory), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

See also [Factory](../../../components/build/factory), [MemoryMessageQueue](../../queues/message_queue)

### Fields

<span class="hide-title-link">

#### _config
TODO: add description property

> `protected` **_config**: [ConfigParams](../../../commons/config/config_params)

#### _references
TODO: add description property
> `protected` **_references**: [IReferences](../../../commons/refer/ireferences) 

</span>

### Methods

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) -  configuration parameters to be set.

#### createQueue
Creates a message queue component and assigns its name.

> `public` createQueue(name: string):  [IMessageQueue](../../queues/imessage_queue)

- **name**: string - a name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - TODO: add description here

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.



### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/message_queue)