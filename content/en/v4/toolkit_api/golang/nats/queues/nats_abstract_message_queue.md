---
type: docs
title: "NatsAbstractMessageQueue"
linkTitle: "NatsAbstractMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-nats-go"
description: >
    Abstract NATS message queue with the ability to connect to a NATS server.
    
---

**Implements:** [MessageQueue](../../../messaging/queues/message_queue)


### DescriptionConfigure

The NatsAbstractMessageQueue class allows you to define abstract NATS message queues with the ability to connect to NATS servers.

### Constructors

#### InheritNatsAbstractMessageQueue
Creates a new instance of the component.

> InheritNatsAbstractMessageQueue(overrides cqueues.IMessageQueueOverrides, name string, capabilities [*MessagingCapabilities](../../../messaging/queues/messaging_capabilities)) [*NatsAbstractMessageQueue]()

- **overrides**: cqueues.IMessageQueueOverrides - override
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
> **DependencyResolver**: [*DependencyResolver](../../../components/refer/dependency_resolver)

#### Logger
Logger
> **Logger**: [*CompositeLogger](../../../observability/log/composite_logger)

#### QueueGroup
Queue group
> **QueueGroup**: string

#### Subject
Subject
> **Subject**: string

</span>


### Methods

#### Abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. 
This method is usually used to return a message which could not be processed at the moment,  
to repeat the attempt. Messages that cause unrecoverable errors shall be removed 
permanently or/and send to the dead letter queue.

- Important: This method is not supported by NATS.

> (c [*NatsAbstractMessageQueue]()) Abandon(ctx context.Context, message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to return.
- **returns**: (err error) - error or nil if no errors occurred.

#### Clear
Clears a component's state.

> (c [*NatsAbstractMessageQueue]()) Clear(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (err error) - error or nil if no errors occurred.


#### Close
Closes a component and frees the used resources.

> (c [*NatsAbstractMessageQueue]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) (err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (err error) - error or nil if no errors occurred.

#### Complete
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

- Important: This method is not supported by NATS.

> (c [*NatsAbstractMessageQueue]()) Complete(ctx context.Context, message [*MessageEnvelope](../../../messaging/queues/message_envelope)) (err error)

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.
- **returns**: (err error) - error or nil no errors occured.


#### Configure
Configures a component by passing its configuration parameters.

> (c [*NatsAbstractMessageQueue]()) Configure(ctx context.Context, config [*ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config:**: [*ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


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

> (c [*NatsAbstractMessageQueue]()) MoveToDeadLetter(ctx context.Context, message *cqueues.MessageEnvelope) (err error)

- **ctx**: context.Context - operation context.
- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.
- **returns**: (err error) - error or nil if no errors occurred.

#### Open
Opens the component.

> (c [*NatsAbstractMessageQueue]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) (err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (err error) - error or nil if no errors occurred.

#### OpenWithParams
OpenWithParams method are opens the component with given connection and credential parameters.

> c *NatsAbstractMessageQueue) OpenWithParams(ctx context.Context, context [IContext](../../../components/context/icontext), connections [[]*ConnectionParams](../../../config/connect/connection_params), credential [*CredentialParams](../../../config/auth/credential_params))

- **ctx**: context.Context - operation context
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connections**: [[]*ConnectionParams](../../../config/connect/connection_params) - connection parameters
- **credential**: [*CredentialParams](../../../config/auth/credential_params) - credential parameters

#### ReadMessageCount
Reads the current number of messages in the queue to be delivered.

> (c [*NatsAbstractMessageQueue]()) ReadMessageCount() (int64, error)

- ***returns**: (int64, error) - number of messages in the queue.

#### RenewLock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by NATS.

> (c [*NatsAbstractMessageQueue]()) RenewLock(ctx context.Context, message [*MessageEnvelope](../../../messaging/queues/message_envelope), lockTimeout time.Duration) (err error)

- **ctx**: context.Context - operation context.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lockTimeout**: time.Duration - locking timeout in milliseconds.
- **returns**: (err error) - error or nil if no errors occurred.


#### Send
Sends a message into the queue.

> (c [*NatsAbstractMessageQueue]()) Send(ctx context.Context, context [IContext](../../../components/context/icontext), envelop [*MessageEnvelope](../../../messaging/queues/message_envelope)) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: [*MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.
- **returns**: error - error or nil if no errors occurred.

#### SetReferences
Sets references to dependent components.

> (c [*NatsAbstractMessageQueue]()) SetReferences(ctx context.Context, references [IReferences](../../../components/refer/ireferences))

- **ctx** context.Context - operation context.
- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


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

