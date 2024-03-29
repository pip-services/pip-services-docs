---
type: docs
title: "MessageQueue"
linkTitle: "MessageQueue"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-messaging-dart"
description: >
    Abstract message queue that is used as a basis for specific message queue implementations.
---

**Implements:** [IMessageQueue](../imessage_queue), [IConfigurable](../../../components/config/iconfigurable), [IReferenceable](../../../components/refer/ireferenceable)

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
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) components to discover connection(s)
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) components to lookup credential(s)


### Constructors
Creates a new instance of the message queue.

> MessageQueue([String? name, [MessagingCapabilities?](../messaging_capabilities) capabilities])

- **name**: String - (optional) queue name
- **capabilities**: [MessagingCapabilities?](../messaging_capabilities) - (optional) a capabilities of this message queue

### Fields

<span class="hide-title-link">

#### logger
Component used to pass log messages. 

> **logger**: [CompositeLogger](../../../observability/log/composite_logger)

#### counters
Component to pass collected measurements.

> **counters**: [CompositeCounters](../../../observability/count/composite_counters)

#### connectionResolver
Component used to resolve connections.

> **connectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver)

#### credentialResolver
Component used to resolve credentials.
> **credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver)

#### name
Name of the message queue.

> **name**: String

#### capabilities
Component used to store the message queue. 

> **capabilities**: [MessagingCapabilities](../messaging_capabilities)

</span>

### Instance methods

#### abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and sent to dead letter queue.

`@override`
> Future abandon([MessageEnvelope](../message_envelope) message)

- **message**: [MessageEnvelope](../message_envelope) - message to return.

#### clear
Clears a component's state.

> Future clear(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### close
Closes a component and frees the used resources.

`@override`
> Future close(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

`@override`
> Future complete([MessageEnvelope](../message_envelope) message)

- **message**: [MessageEnvelope](../message_envelope) - message to remove.


#### endListen
Ends listening for incoming messages. When this method is called, [listen](#listen) unblocks the thread and execution continues.

`@override`
> void endListen(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### isOpen
Checks if the component is opened.

`@override`
> bool isOpen()

- **returns**: bool - true if the component has been opened and false otherwise.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

`@override`
> void listen(IContext? context, [IMessageReceiver](../imessage_receiver) receiver)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

`@override`
> Future moveToDeadLetter(MessageEnvelope message)

- **message**: [MessageEnvelope](../message_envelope) - message to be removed.


#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns null.

`@override`
> Future<[MessageEnvelope?](../message_envelope)> peek(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Future<[MessageEnvelope?](../message_envelope)> - peeked message or *null*.


#### peekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue, it returns an empty list.

`@override`
> Future\<List\<[MessageEnvelope?](../message_envelope)\>\> peekBatch(IContext? context, int messageCount)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageCount**: int - maximum number of messages to peek.
- **returns**: Future\<List\<[MessageEnvelope?](../message_envelope)\>\> - list of peeked messages


#### readMessageCount
Reads the current number of messages in the queue to be delivered.

`@override`
> Future\<int\> readMessageCount()

- **returns**: Future\<int\> - number of messages in the queue.


#### receive
Receives an incoming message and removes it from the queue.

`@override`
> Future<[MessageEnvelope?](../message_envelope)> receive(IContext? context, int waitTimeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **waitTimeout**: int - timeout in milliseconds to wait for a message to come.
- **returns**: Future<[MessageEnvelope?](../message_envelope)> - received message or *null*.


#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

`@override`
> Future renewLock([MessageEnvelope](../message_envelope) message, int lockTimeout)

- **message**: [MessageEnvelope](../message_envelope) - message to extend its lock.
- **lockTimeout**: int - locking timeout in milliseconds.


#### beginListen
Listens for incoming messages without blocking the current thread.  
See also [listen](#listen), [IMessageReceiver](../imessage_receiver)

`@override`
> void beginListen(IContext? context, IMessageReceiver receiver)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### configure
Configures the component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### getCapabilities
Gets the queue capabilities

`@override`
> [MessagingCapabilities](../messaging_capabilities) getCapabilities()

- **returns**: [MessagingCapabilities](../messaging_capabilities) - queue's capabilities object.


#### getName
Gets the queue's name.

`@override`
> String getName()

- **returns**: String - queue's name.

#### open
Opens the component.

`@override`
> Future open(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### sendAsObject
Sends an object into the queue.
Before sending it, the object is converted into a JSON string and wrapped in a [MessageEnvelope](../message_envelope).

`@override`
> Future sendAsObject(IContext? context, String messageType, message)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageType**: String - message type
- **message**: dynamic - object value to be sent


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component's dependencies.

#### toString
Gets a string representation of the object.

`@override`
> String toString()

- **returns**: String - string representation of the object.


#### openWithParams
Opens the component with the given connection and credential parameters.

> Future openWithParams(IContext? context, [ConnectionParams](../../../config/connect/connection_params) connection, [CredentialParams?](../../../config/auth/credential_params) credential)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connections**: [ConnectionParams](../../../config/connect/connection_params) - connection parameters
- **credentials**: [CredentialParams?](../../../config/auth/credential_params) - credential parameters

