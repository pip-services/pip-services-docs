---
type: docs
title: "MemoryMessageQueueFactory"
linkTitle: "MemoryMessageQueueFactory"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
---

Creates [MemoryMessageQueue](../queue/memory_message_queue) components by their descriptors.
Name of created message queue is taken from its descriptor.

See [Factory](../../../components/build/factory), [MemoryMessageQueue](../queue/memory_message_queue)


### Constructors

> MemoryMessageQueueFactory(): string

Create a new instance of the factory.


### Methods

#### createQueue
> createQueue(name: string): [IMessageQueue](../../queues/imessage_queue)

Creates a message queue component and assigns its name.

- name: string a name of the created message queue.
- Returns [IMessageQueue](../../queues/imessage_queue)

#### configure
> configure(config: ConfigParams): void

- config: [ConfigParams](../../../commons/config/config_params) configuration parameters to be set.

#### setReferences
> setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

Sets references to dependent components.

- references: [IReferences](../../../commons/refer/ireferences) references to locate the component dependencies.



