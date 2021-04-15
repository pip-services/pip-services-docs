---
type: docs
title: "MessageQueueFactory"
linkTitle: "MessageQueueFactory"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
---

Creates [IMessageQueue](../../queues/imessage_queue) components by their descriptors.
Name of created message queue is taken from its descriptor.
 
See [Factory](../../../components/build/factory), [MemoryMessageQueue](../../queues/message_queue)

### Properties

> `protected` **_config** TODO  
> `protected` **_references** TODO

### Methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) configuration parameters to be set.

#### createQueue
Creates a message queue component and assigns its name.

> createQueue(name: string):  [IMessageQueue](../../queues/imessage_queue)

- **name**: string a name of the created message queue.
- **Returns**  [IMessageQueue](../../queues/imessage_queue)

#### setReferences
Sets references to dependent components.

> setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) references to locate the component dependencies.

