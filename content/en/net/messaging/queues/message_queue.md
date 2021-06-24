---
type: docs
title: "MessageQueue"
linkTitle: "MessageQueue"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-messaging-dotnet"
description: >
    Abstract message queue that is used as a basis for specific message queue implementations.
---

**Inherits:** [IMessageQueue](../imessage_queue), [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

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

> `public` MessageQueue(string name = null, [MessagingCapabilities](../messaging_capabilities) capabilities = null)

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

</span>

#### Properties
Name of the message queue.

> `public` string Name [ get, protected set ]

#### Capabilities

> `public` [MessagingCapabilities](../messaging_capabilities) Capabilities [ get, protected set ]

### Abstract methods

#### AbandonAsync
Returns a message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and sent to dead letter queue.

> `public abstract` Task AbandonAsync([MessageEnvelope](../message_envelope) message);

- **message**: [MessageEnvelope](../message_envelope) - message to return.

#### ClearAsync
Clears a component's state.

> `public abstract` Task ClearAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### CloseAsync
Closes a component and frees the used resources.

> `public abstract` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### Complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> `public abstract` Task CompleteAsync([MessageEnvelope](../message_envelope) message)

- **message**: [MessageEnvelope](../message_envelope) - message to remove.


#### EndListen
Ends listening for incoming messages. When this method is called, [listen](#listen) unblocks the thread and execution continues.

> `public abstract` void EndListen(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### IsOpen
Checks if the component is opened.

> `public abstract` bool IsOpen()

- **returns**: bool - True if the component has been opened and False otherwise.


#### ListenAsync
Listens for incoming messages and blocks the current thread until the queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [ReceiveAsync](#receiveasync)

> `public abstract` Task ListenAsync(string correlationId, [IMessageReceiver](../imessage_receiver) receiver)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### MoveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

> `public abstract` Task MoveToDeadLetterAsync([MessageEnvelope](../message_envelope) message)

- **message**: [MessageEnvelope](../message_envelope) - message to be removed.


#### PeekAsync
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns null.

> `public abstract` Task<\[MessageEnvelope](../message_envelope)\> PeekAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Task<\[MessageEnvelope](../message_envelope)\> - peeked message or *null*.


#### PeekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue, it returns an empty list.

> `public abstract` Task\<List\<[MessageEnvelope](../message_envelope)\>\> PeekBatchAsync(string correlationId, int messageCount)

- **correlationId**: string -  (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int - maximum number of messages to peek.
- **returns**: Task\<List\<[MessageEnvelope](../message_envelope)\>\> - list of peeked messages


#### ReadMessageCountAsync
Reads the current number of messages in the queue to be delivered.

> `public abstract` Task\<long\> ReadMessageCountAsync()

- **returns**: Task\<long\> - number of messages in the queue.


#### Receive
Receives an incoming message and removes it from the queue.

> `public abstract` Task\<[MessageEnvelope](../message_envelope)\> ReceiveAsync(string correlationId, long waitTimeout)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: long - timeout in milliseconds to wait for a message to come.
- **returns**: Task\<[MessageEnvelope](../message_envelope)\> - received message or *null*.


#### RenewLockAsync
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> `public abstract` Task RenewLockAsync(MessageEnvelope message, long lockTimeout)

- **message**: [MessageEnvelope](../message_envelope) - message to extend its lock.
- **lockTimeout**: long - locking timeout in milliseconds.


### Instance methods

#### BeginListen
Listens for incoming messages without blocking the current thread.  
See also [ListenAsync](#listenasync), [IMessageReceiver](../imessage_receiver)

> `public` void BeginListen(string correlationId, [IMessageReceiver](../imessage_receiver) receiver)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### Configure
Configures the component by passing its configuration parameters.

> `public virtual` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### OpenAsync
Opens the component with the given connection and credential parameters.

> `public virtual` Task OpenAsync(string correlationId, List<[ConnectionParams](../../../components/connect/connection_params)> connections, [CredentialParams](../../../components/auth/credential_params) credential)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **connections**: [ConnectionParams](../../../components/connect/connection_params)[] - connection parameters
- **credentials**: [CredentialParams](../../../components/auth/credential_params) - credential parameters

#### SendAsObjectAsync
Sends an object into the queue.
Before sending the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_mnvelope).

> `public` Task SendAsObjectAsync(string correlationId, string messageType, object message)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageType**: string - a message type
- **message**: object - an object value to be sent


#### SetReferences
Sets references to dependent components.

> `public virtual` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.

#### ToString
Gets a string representation of the object.

> `public override` string ToString()

- **returns**: string - string representation of the object.
        

#### CheckOpen
Checks if the queue has been opened.
Raise an exception if queue wasn't opened or *null* otherwise

> `protected` void CheckOpen(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

