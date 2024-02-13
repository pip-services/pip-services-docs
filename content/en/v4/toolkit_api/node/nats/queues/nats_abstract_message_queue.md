---
type: docs
title: "NatsAbstractMessageQueue"
linkTitle: "NatsAbstractMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-nats-node"
description: >
    Abstract NATS message queue with the ability to connect to NATS server.
    
---

**Extends:** [MessageQueue](../../../messaging/queues/message_queue)

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IUnreferenceable](../../../components/refer/iunreferenceable), [IConfigurable](../../../components/config/iconfigurable), [IOpenable](../../../components/run/iopenable), [ICleanable](../../../components/run/icleanable)

### Description

The NatsAbstractMessageQueue class allows you to define abstract NATS message queues with the ability to connect to NATS servers.

### Constructors
Creates a new instance of the component.

> `public` constructor(name?: string, capabilities?: [MessagingCapabilities](../../../messaging/queues/messaging_capabilities))

- **name**: string - (optional) queue name.
- **capabilities**: [MessagingCapabilities](../../../messaging/queues/messaging_capabilities) - supported capabilities

### Fields

<span class="hide-title-link">

#### _client
NATS connection pool object
> `protected` **_client**: any

#### _connection
NATS connection component
> `protected` **_connection**: [NatsConnection](../../connect/nats_connection);

#### _dependencyResolver
Dependency resolver
> `protected` **_dependencyResolver**: [DependencyResolver](../../../components/refer/dependency_resolver)

#### _logger
Logger
> `protected` **_logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### _queueGroup
Queue group
> `protected` **_queueGroup**: string

#### _serializeEnvelop
Message serialization option
> `protected` **_serializeEnvelop**: boolean

#### _subject
Subject
> `protected` **_subject**: string

</span>


### Instance methods

#### abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. 
This method is usually used to return a message which could not be processed at the moment 
to repeat the attempt. Messages that cause unrecoverable errors shall be removed 
permanently or/and send to dead letter queue.

- Important: This method is not supported by NATS.

> `public` abandon(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to return.

#### clear
Clears a component's state.

> `public` clear(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### close
Closes a component and frees the used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### complete
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

- Important: This method is not supported by NATS.

> `public` complete(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.


#### configure
Configures a component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config:**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### fromMessage
Returns the headers and data from a message.

> `protected` fromMessage(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): any

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message
- **returns**: any - message headers and data.


#### getSubject
Gets the subject.

> `protected` getSubject(): string

- **returns**: string - subject


#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### moveToDeadLetter
Permanently removes a message from the queue and sends it to the dead letter queue.

- Important: This method is not supported by NATS.

> `public` moveToDeadLetter(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.

#### open
Opens the component.

> `public` open(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `public` readMessageCount(): Promise\<number\>

- ***returns**: Promise\<number\> - number of messages in the queue.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by NATS.

> `public` renewLock(message: [MessageEnvelope](../../../messaging/queues/message_envelope), lockTimeout: number): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lockTimeout**: number - locking timeout in milliseconds.


#### send
Sends a message into the queue.

> `public` send(context: [IContext](../../../components/context/icontext), message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../components/refer/ireferences)): void

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.


#### toMessage
If the message is null, it returns null. Otherwise, it returns the message.
> `protected` toMessage(msg: any): [MessageEnvelope](../../../messaging/queues/message_envelope) 

- **msg**: any - message
- **returns**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message 


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void



### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
