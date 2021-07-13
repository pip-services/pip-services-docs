---
type: docs
title: "NatsAbstractMessageQueue"
linkTitle: "NatsAbstractMessageQueue"
gitUrl: "https://github.com/pip-services3-go/pip-services3-nats-go"
description: >
    Abstract NATS message queue with the ability to connect to NATS server.
    
---

**Implements:** [MessageQueue](../../../messaging/queues/message_queue)


### Description

The NatsAbstractMessageQueue class allows you to define abstract NATS message queues with the ability to connect to NATS servers.

### Constructors

#### InheritNatsAbstractMessageQueue
Creates a new instance of the component.

> InheritNatsAbstractMessageQueue(overrides cqueues.IMessageQueueOverrides, name string, capabilities [*MessagingCapabilities](../../../messaging/queues/messaging_capabilities)) [*NatsAbstractMessageQueue]()

- **overrides**: cqueues.IMessageQueueOverrides - TODO: add description
- **name**: string - (optional) queue name.
- **capabilities**: [*MessagingCapabilities](../../../messaging/queues/messaging_capabilities) - supported capabilities

### Fields

<span class="hide-title-link">

#### Client
NATS connection pool object
> **Client**: *nats.Conn

#### Connection
NATS connection component
> **Connection**: [*NatsConnection](../../connect/nats_connection);

#### DependencyResolver
Dependency resolver
> **DependencyResolver**: [*DependencyResolver](../../../commons/refer/dependency_resolver)

#### Logger
Logger
> **Logger**: [*CompositeLogger](../../../components/log/composite_logger)

#### QueueGroup
Queue group
> **QueueGroup**: string

#### Subject
Subject
> **Subject**: string

</span>


### Instance methods

#### Abandon
Returnes a message into the queue and makes it available for all subscribers to receive it again. 
This method is usually used to return a message which could not be processed at the moment 
to repeat the attempt. Messages that cause unrecoverable errors shall be removed 
permanently or/and send to dead letter queue.

- Important: This method is not supported by NATS.

> (c [*NatsAbstractMessageQueue]()) Abandon(message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to return.
- **returns**: (err error) - error or nil no errors occured.

#### Clear
Clears a component's state.

> (c [*NatsAbstractMessageQueue]()) Clear(correlationId string) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil no errors occured.


#### Close
Closes a component and frees the used resources.

> (c [*NatsAbstractMessageQueue]()) Close(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil no errors occured.

#### Complete
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

- Important: This method is not supported by NATS.

> (c [*NatsAbstractMessageQueue]()) Complete(message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.
- **returns**: (err error) - error or nil no errors occured.


#### Configure
Configures a component by passing its configuration parameters.

> (c [*NatsAbstractMessageQueue]()) Configure(config [*ConfigParams](../../../commons/config/config_params))

- **config:**: [*ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### FromMessage
Returns the headers and data from a message.

> (c [*NatsAbstractMessageQueue]()) FromMessage(message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (*nats.Msg, error)

- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message
- **returns**: (*nats.Msg, error) - message headers and data.


#### IsOpen
Checks if the component is open.

> (c [*NatsAbstractMessageQueue]()) IsOpen() bool

- **returns**: bool - true if the component is open and false otherwise.


#### MoveToDeadLetter
Permanently removes a message from the queue and sends it to the dead letter queue.

- Important: This method is not supported by NATS.

> (c [*NatsAbstractMessageQueue]()) MoveToDeadLetter(message *cqueues.MessageEnvelope) (err error)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.
- **returns**: (err error) - error or nil no errors occured.

#### Open
Opens the component.

> (c [*NatsAbstractMessageQueue]()) Open(correlationId string) (err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (err error) - error or nil no errors occured.


#### ReadMessageCount
Reads the current number of messages in the queue to be delivered.

> (c [*NatsAbstractMessageQueue]()) ReadMessageCount() (int64, error)

- ***returns**: (int64, error) - number of messages in the queue.

#### RenewLock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by NATS.

> (c [*NatsAbstractMessageQueue]()) RenewLock(message [*MessageEnvelope](../../../messaging/queues/message_envelope), lockTimeout time.Duration) (err error)

- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lockTimeout**: time.Duration - locking timeout in milliseconds.
- **returns**: (err error) - error or nil no errors occured.


#### Send
Sends a message into the queue.

> (c [*NatsAbstractMessageQueue]()) Send(correlationId string, envelop [*MessageEnvelope](../../../messaging/queues/message_envelope)) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.
- **returns**: error - error or nil no errors occured.

#### SetReferences
Sets references to dependent components.

> (c [*NatsAbstractMessageQueue]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.


#### ToMessage
If the message is nil, it returns nil. Otherwise, it returns the message.
> (c [*NatsAbstractMessageQueue]()) ToMessage(msg *nats.Msg) ([*MessageEnvelope](../../../messaging/queues/message_envelope), error) 

- **msg**: *nats.Msg - message
- **returns**: ([*MessageEnvelope](../../../messaging/queues/message_envelope), error)  - message 


#### UnsetReferences
Unsets (clears) previously set references to dependent components.

> (c [*NatsAbstractMessageQueue]()) UnsetReferences()



### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
