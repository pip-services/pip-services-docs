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

- `protected` _config
- `protected` _references

### Methods

#### configure
> configure(config: [ConfigParams](../../../commons/config/config_params)): void

Configures component by passing configuration parameters.

- config: [ConfigParams](../../../commons/config/config_params) configuration parameters to be set.

#### createQueue
> createQueue(name: string):  [IMessageQueue](../../queues/imessage_queue)

Creates a message queue component and assigns its name.

- name: string a name of the created message queue.
- Returns  [IMessageQueue](../../queues/imessage_queue)

#### setReferences
> setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

Sets references to dependent components.

- references: [IReferences](../../../commons/refer/ireferences) references to locate the component dependencies.

