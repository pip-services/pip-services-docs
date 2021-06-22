---
type: docs
title: "MessageQueue"
linkTitle: "MessageQueue"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
    Abstract message queue that is used as a basis for specific message queue implementations.
---

**Implements:** [IMessageQueue](../imessage_queue), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The MessageQueue class allows you to create a message queue that is used as a basis for specific message queue implementions.

#### Configuration parameters
- **name**: name of the message queue

**connection(s)**: 
- **discovery_key**: key to retrieve parameters from discovery service
- **protocol**: connection protocol like http, https, tcp, udp
- **host**: host name or IP address
- **port**: port number
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**: 
- **store_key**: key to retrieve parameters from credential store
- **username**: username
- **password**: user's password
- **access_id**: application access id
- **access_key**: application secret key

#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/ilogger) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) components to discover connection(s)
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) componetns to lookup credential(s)


### Constructors
Creates a new instance of the message queue.

> `public` constructor(name?: string, capabilities?: [MessagingCapabilities](../messaging_capabilities))

- **name**: string - (optional) queue name
- **capabilities**: [MessagingCapabilities](../messaging_capabilities) - (optional) capabilities of this message queue


### Fields

<span class="hide-title-link">

#### _logger
Component used to pass log messages. 

> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _counters
Component to pass collected measurements.

> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters)

#### _connectionResolver
Component used to resolve connections.

> `protected` **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### _credentialResolver
Component used to resolve credentials.
> `protected` **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver)

#### _name
Name of the message queue.

> `protected` **_name**: string

#### _capabilities
Component used to store the message queue. 

> `protected` **_capabilities**: [MessagingCapabilities](../messaging_capabilities)

</span>

### Abstract methods

#### abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and sent to dead letter queue.

> `public abstract` abandon(message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - message to return.

#### clear
Clears a component's state.

> `public abstract` clear(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### close
Closes a component and frees the used resources.

> `public abstract` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> `public abstract` complete(message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - message to remove.


#### endListen
Ends listening for incoming messages. When this method is called, [listen](#listen) unblocks the thread and execution continues.

> `public abstract` endListen(correlationId: string): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### isOpen
Checks if the component is opened.

> `public abstract` isOpen(): boolean 

- **returns**: boolean - True if the component has been opened and False otherwise.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

> `public abstract` listen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

> `public abstract` moveToDeadLetter(message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - message to be removed.


#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns null.

> `public abstract` peek(correlationId: string): Promise<[MessageEnvelope](../message_envelope)>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Promise<[MessageEnvelope](../message_envelope)> - peeked message or *null*.


#### peekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue, it returns an empty list.

> `public abstract` peekBatch(correlationId: string, messageCount: number): Promise<[MessageEnvelope](../message_envelope)[]>

- **correlationId**: string -  (optional) transaction id used to trace execution through the call chain.
- **messageCount**: number - maximum number of messages to peek.
- **returns**: Promise<[MessageEnvelope](../message_envelope)[]> - list of peeked messages


#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `public abstract` readMessageCount(): Promise\<number\>

- **returns**: Promise\<number\> - number of messages in the queue.


#### receive
Receives an incoming message and removes it from the queue.

> `public abstract` receive(correlationId: string, waitTimeout: number): Promise<[MessageEnvelope](../message_envelope)>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: number - timeout in milliseconds to wait for a message to come.
- **returns**: Promise<[MessageEnvelope](../message_envelope)> - received message or *null*.


#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> `public abstract` renew_lock(message: [MessageEnvelope](../message_envelope), lockTimeout: number): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - message to extend its lock.
- **lockTimeout**: number - locking timeout in milliseconds.


### Instance methods

#### beginListen
Listens for incoming messages without blocking the current thread.  
See also [listen](#listen), [IMessageReceiver](../imessage_receiver)

> `public` beginListen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### getCapabilities
Gets the queue capabilities

> getCapabilities(): [MessagingCapabilities](../messaging_capabilities)

- **returns**: [MessagingCapabilities](../messaging_capabilities) - queue's capabilities object.


#### getName
Gets the queue name

> `public` getName(): string

- **returns**: string - queue name.

#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### sendAsObject
Sends an object into the queue.
Before sending the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_mnvelope).

> `public` sendAsObject(correlationId: string, message_type: string, message: any): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageType**: string - a message type
- **message**: any - an object value to be sent


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### toString
Gets a string representation of the object.

> `public` toString(): string

- **returns**: string - string representation of the object.


#### openWithParams
Opens the component with the given connection and credential parameters.

> `protected` openWithParams(correlationId: string, connections: [ConnectionParams](../../../components/connect/connection_params)[], credentials: [CredentialParams](../../../components/auth/credential_params)): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **connections**: [ConnectionParams](../../../components/connect/connection_params)[] - connection parameters
- **credentials**: [CredentialParams](../../../components/auth/credential_params) - credential parameters
        

#### checkOpen
Checks if the queue has been opened.
Raise an exception if queue wasn't opened or *null* otherwise

> `protected` checkOpen(correlationId: string): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

