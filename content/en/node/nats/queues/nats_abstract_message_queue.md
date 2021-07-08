---
type: docs
title: "NatsAbstractMessageQueue"
linkTitle: "NatsAbstractMessageQueue"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-nats-nodex"
description: >
    Abstract NATS message queue with ability to connect to NATS server.
    
---

**Extends:** [MessageQueue](../../../messaging/queues/message_queue)

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description

TODO: add description


### Constructors
Creates a new instance of the persistence component.

> `public` constructor(name?: string, capabilities?: [MessagingCapabilities](../../../messaging/queues/messaging_capabilities))

- **name**: string - (optional) a queue name.
- **capabilities**: [MessagingCapabilities](../../../messaging/queues/messaging_capabilities) - TODO: add description

### Fields

<span class="hide-title-link">

#### _client
The NATS connection pool object.
> `protected` **_client**: any

#### _connection
The NATS connection component.
> `protected` **_connection**: [NatsConnection](../../connect/nats_connection);

#### _dependencyResolver
The dependency resolver.
> `protected` **_dependencyResolver**: [DependencyResolver](../../../commonns/refer/dependency_resolver)

#### _logger
TODO: add description
> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _queueGroup
TODO: add description
> `protected` **_queueGroup**: string

#### _serializeEnvelop
TODO: add description
> `protected` **_serializeEnvelop**: boolean

#### _subject
TODO: add description
> `protected` **_subject**: string

</span>


### Instance methods

#### abandon
Returnes message into the queue and makes it available for all subscribers to receive it again. 
This method is usually used to return a message which could not be processed at the moment 
to repeat the attempt. Messages that cause unrecoverable errors shall be removed 
permanently or/and send to dead letter queue.

- Important: This method is not supported by NATS.

> `public` abandon(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - a message to return.

#### clear
Clears a component's state.

> `public` clear(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### close
Closes a component and frees the used resources.

> `public` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### complete
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

- Important: This method is not supported by NATS.

> `public` complete(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - a message to remove.


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config:**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### fromMessage
TODO: add description

> `protected` fromMessage(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): any

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - TODO: add description
- **returns**: any - TODO: add description


#### getSubject
TODO: add description

> `protected` getSubject(): string

- **returns**: string - TODO: add description



#### isOpen
Checks if the component is opened.

> `public` isOpen(): boolean

- **returns**: boolean - True if the component has been opened and False otherwise.


#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

- Important: This method is not supported by NATS.

> `public` moveToDeadLetter(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - a message to be removed.

#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `public` readMessageCount(): Promise\<number\>

- ***returns**: Promise\<number\> - a number of messages in the queue.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by NATS.

> `public` renewLock(message: [MessageEnvelope](../../../messaging/queues/message_envelope), lockTimeout: number): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - a message to extend its lock.
- **lockTimeout**: number - a locking timeout in milliseconds.


#### send
Sends a message into the queue.

> `public` send(correlationId: string, message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - a message envelop to be sent.

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### toMessage
TODO: add description
> `protected` toMessage(msg: any): [MessageEnvelope](../../../messaging/queues/message_envelope) 

- **msg**: any - TODO: add description
- **returns**: [MessageEnvelope](../../../messaging/queues/message_envelope) - TODO: add description 


#### unsetReferences
Unsets (clears) previously set references to dependent components.

> `public` unsetReferences(): void



### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)