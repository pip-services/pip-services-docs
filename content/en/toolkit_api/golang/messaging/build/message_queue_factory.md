---
type: docs
title: "MessageQueueFactory"
linkTitle: "MessageQueueFactory"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-messaging-gox"
description: >
    Creates [IMessageQueue](../../queues/imessage_queue) components based on their descriptors.
   
---

**Implements:** [Factory](../../../components/build/factory)

### Description

The MessageQueueFactory class allows you to create [IMessageQueue](../../queues/imessage_queue) components based on their descriptors.

### Constructors

#### InheritMessageQueueFactory
NewMessageQueueFactory method creates a new instance of the factory.

> InheritMessageQueueFactory() [*MessageQueueFactory]()

### Fields

<span class="hide-title-link">

#### Config
Configuration paramters

> **Config**: [ConfigParams](../../../commons/config/config_params)

#### References
References used to locate the component dependencies
> **References**: [IReferences](../../../commons/refer/ireferences) 

</span>

### Methods


#### Configure
Configures the component by passing its configuration parameters.

> (c [*MessageQueueFactory]()) Configure(ctx context.Context, config [*cconf.ConfigParams](../../../commons/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../commons/config/config_params) -  configuration parameters to be set.

#### SetReferences
Sets references to dependent components.

> (c [*MessageQueueFactory]()) SetReferences(ctx context.Context, references [cref.IReferences](../../../commons/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [cref.IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


### See also
- #### [Factory](../../../components/build/factory)
- #### [MemoryMessageQueue](../../queues/message_queue)
