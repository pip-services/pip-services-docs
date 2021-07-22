---
type: docs
title: "RabbitMQMessageQueueFactory"
linkTitle: "RabbitMQMessageQueueFactory"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rabbitmq-go"
description: >
    Creates RabbitMQ message queues.
    
---

**Implements:** [Factory](../../../components/build/factory)

### Description
The RabbitMQMessageQueueFactory class allows you to create RabbitMQ message queues.


### Constructors
Creates an instance of this class.

#### NewRabbitMQMessageQueueFactory
> NewRabbitMQMessageQueueFactory() [*RabbitMQMessageQueueFactory]()


### Instance methods

#### Configure
Configures the component by passing its configuration parameters.

> (c [*RabbitMQMessageQueueFactory]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### SetReferences
Sets references to dependent components.

> (c [*RabbitMQMessageQueueFactory]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### CreateQueue
Creates a message queue component and assigns its name.
> (c [*RabbitMQMessageQueueFactory]()) CreateQueue(name string) [IMessageQueue](../../../messaging/queues/imessage_queue)
