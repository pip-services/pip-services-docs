---
type: docs
title: "MessageQueue"
linkTitle: "MessageQueue"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
    Abstract message queue that is used as a basis for specific message queue implementations.
---

**Implements:** [IMessageQueue](../imessage_queue), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)


##### Configuration parameters
- **name**: name of the message queue

**connection(s)**: 
- **discovery_key**: key to retrieve parameters from discovery service
- **protocol**: connection protocol like http, https, tcp, udp
- **host**: host name or IP address
- **port**: port number
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**: 
- **store_key**: key to retrieve parameters from credential store
- **username**: user name
- **password**: user password
- **access_id**: application access id
- **access_key**: application secret key

##### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/ilogger) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) components to discover connection(s)
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) componetns to lookup credential(s)


### Constructors
Creates a new instance of the message queue.

> `public` constructor(name?: string, capabilities?: [MessagingCapabilities](../messaging_capabilities)): [MessageQueue]()

- **name**: string - (optional) a queue name
- **capabilities**: [MessagingCapabilities](../messaging_capabilities) - (optional) a capabilities of this message queue


### Fields

<span class="hide-title-link">

#### _logger
TODO: add description property 

> `protected` **_logger**: [CompositeLogger](../../../components/log/composite_logger)

#### _counters
TODO: add description property

> `protected` **_counters**: [CompositeCounters](../../../components/count/composite_counters)

#### _connectionResolver
TODO: add description property  

> `protected` **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver)

#### _credentialResolver
TODO: add description property  

> `protected` **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver)

#### _name
 TODO: add description property  

> `protected` **_name**: string

#### _capabilities
TODO: add description property  

> `protected` **_capabilities**: [MessagingCapabilities](../messaging_capabilities)

</span>

### Methods


#### abandon
Returnes message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and send to dead letter queue.

> `public abstract` abandon(message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - a message to return.

#### beginListen
Listens for incoming messages without blocking the current thread.  
See also [listen](#listen), [IMessageReceiver](../imessage_receiver)

> `public` beginListen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.


#### clear
Clears component state.

> `public abstract` clear(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### close
Closes component and frees used resources.

> `public abstract` close(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> `public abstract` complete(message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - a message to remove.


#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../../commons/config/config_params)): void

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### endListen
Ends listening for incoming messages. When this method is call [listen](#listen) unblocks the thread and execution continues.

> `public abstract` endListen(correlationId: string): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


#### getCapabilities
Gets the queue capabilities

> `public` getCapabilities(): [MessagingCapabilities](../messaging_capabilities)

- **returns**: [MessagingCapabilities](../messaging_capabilities) - the queue's capabilities object.


#### getName
Gets the queue name

> `public` getName(): string

- **returns**: string - the queue name.


#### isOpen
Checks if the component is opened.

> `public abstract` isOpen(): boolean 

- **returns**: boolean - true if the component has been opened and false otherwise.


#### listen
Listens for incoming messages and blocks the current thread until queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

> `public abstract` listen(correlationId: string, receiver: [IMessageReceiver](../imessage_receiver)): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - a receiver to receive incoming messages.


#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

> `public abstract` moveToDeadLetter(message: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - a message to be removed.

#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.

#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue it returns null.

> `public abstract` peek(correlationId: string): Promise<[MessageEnvelope](../message_envelope)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: Promise<[MessageEnvelope](../message_envelope)> - a peeked message or *null*.


#### peekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue it returns an empty list.

> `public abstract` peekBatch(correlationId: string, messageCount: number): Promise<[MessageEnvelope](../message_envelope)[]>

- **correlationId**: string -  (optional) transaction id to trace execution through call chain.
- **messageCount**: number - a maximum number of messages to peek.
- **returns**: Promise<[MessageEnvelope](../message_envelope)[]> - a list of peeked messages


#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `public abstract` readMessageCount(): Promise\<number\>

- **returns**: Promise\<number\> - a number of messages in the queue.


#### receive
Receives an incoming message and removes it from the queue.

> `public abstract` receive(correlationId: string, waitTimeout: number): Promise<[MessageEnvelope](../message_envelope)>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **waitTimeout**: number - a timeout in milliseconds to wait for a message to come.
- **returns**: Promise<[MessageEnvelope](../message_envelope)> - a received message or *null*.


#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> `public abstract` renewLock(message: [MessageEnvelope](../message_envelope), lockTimeout: number): Promise\<void\>

- **message**: [MessageEnvelope](../message_envelope) - a message to extend its lock.
- **lockTimeout**: number - a locking timeout in milliseconds.

#### send
Sends a message into the queue.

> `public abstract` send(correlationId: string, envelope: [MessageEnvelope](../message_envelope)): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **envelope**: [MessageEnvelope](../message_envelope) - a message envelop to be sent.


#### sendAsObject
Sends an object into the queue. Before sending the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_envelope).  

> `public` sendAsObject(correlationId: string, messageType: string, message: any): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **messageType**: string - a message type
- **message**: any - an object value to be sent

#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### toString
Gets a string representation of the object.

> `public` toString(): string

- **returns**: string - a string representation of the object.


#### openWithParams
Opens the component with given connection and credential parameters.

> `protected` openWithParams(correlationId: string, connections: [ConnectionParams](../../../components/connect/connection_params)[], credential: [CredentialParams](../../../components/auth/credential_params)): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **connections**: [ConnectionParams](../../../components/connect/connection_params)[] - connection parameters
- **credential**: [CredentialParams](../../../components/auth/credential_params) - credential parameters
        

#### checkOpen
Checks if the queue has been opened

> `protected` checkOpen(correlationId: string): void

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **returns**: Error - if queue wasn't opened or *null* otherwise

