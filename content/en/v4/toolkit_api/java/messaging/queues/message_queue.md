---
type: docs
title: "MessageQueue"
linkTitle: "MessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-messaging-java"
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
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) componetns to lookup credential(s)


### Constructors
Creates a new instance of the message queue.

> `public` MessageQueue(String name, [MessagingCapabilities](../messaging_capabilities) capabilities)
- **name**: String - (optional) queue name
- **capabilities**: [MessagingCapabilities](../messaging_capabilities) - (optional) capabilities of this message queue


### Fields

<span class="hide-title-link">

#### _logger
Component used to pass log messages. 

> `protected` [CompositeLogger](../../../observability/log/composite_logger) **_logger** = new CompositeLogger();

#### _counters
Component to pass collected measurements.

> `protected` [CompositeCounters](../../../observability/count/composite_counters) **_counters** = new CompositeCounters();

#### _connectionResolver
Component used to resolve connections.

> `protected` [ConnectionResolver](../../../config/connect/connection_resolver) **_connectionResolver** = new ConnectionResolver();

#### _credentialResolver
Component used to resolve credentials.
> `protected` [ConnectionResolver](../../../config/connect/connection_resolver) **_credentialResolver** = new CredentialResolver();

#### _name
Name of the message queue.

> `protected` String **_name**;

#### _capabilities
Component used to store the message queue. 

> `protected` [MessagingCapabilities](../messaging_capabilities) **_capabilities** = new MessagingCapabilities(true, true, true, true, true, true, true, false, true);

</span>

### Abstract methods

#### abandon
Returns a message into the queue and makes it available for all subscribers to receive it again. This method is usually used to return a message which could not be processed at the moment to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently or/and sent to dead letter queue.

> `public abstract` void abandon([MessageEnvelope](../message_envelope) message) throws ApplicationException

- **message**: [MessageEnvelope](../message_envelope) - message to return.

#### clear
Clears a component's state.

> `public abstract` void clear([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### close
Closes a component and frees the used resources.

> `public abstract` void close([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### complete
Permanently removes a message from the queue. This method is usually used to remove the message after successful processing.

> `public abstract` void complete([MessageEnvelope](../message_envelope) message) throws ApplicationException

- **message**: [MessageEnvelope](../message_envelope) - message to remove.


#### endListen
Ends listening for incoming messages. When this method is called, [listen](#listen) unblocks the thread and execution continues.

> `public abstract` void endListen([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### isOpen
Checks if the component is opened.

> `public abstract` boolean isOpen()

- **returns**: boolean - True if the component has been opened and False otherwise.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.  
See also [IMessageReceiver](../imessage_receiver), [receive](#receive)

> `public abstract` void listen([IContext](../../../components/context/icontext) context, [IMessageReceiver](../imessage_receiver) receiver) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

> `public abstract` void moveToDeadLetter([MessageEnvelope](../message_envelope) message) throws ApplicationException

- **message**: [MessageEnvelope](../message_envelope) - message to be removed.


#### peek
Peeks a single incoming message from the queue without removing it. If there are no messages available in the queue, it returns null.

> `public abstract` [MessageEnvelope](../message_envelope) peek([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: [MessageEnvelope](../message_envelope) - peeked message or *null*.


#### peekBatch
Peeks multiple incoming messages from the queue without removing them. If there are no messages available in the queue, it returns an empty list.

> `public abstract` List<[MessageEnvelope](../message_envelope)> peekBatch([IContext](../../../components/context/icontext) context, int messageCount) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) -  (optional) a context to trace execution through a call chain.
- **messageCount**: int - maximum number of messages to peek.
- **returns**: List<[MessageEnvelope](../message_envelope)> - list of peeked messages


#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `public abstract` int readMessageCount()

- **returns**: int - number of messages in the queue.


#### receive
Receives an incoming message and removes it from the queue.

> `public abstract` [MessageEnvelope](../message_envelope) receive([IContext](../../../components/context/icontext) context, long waitTimeout) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **waitTimeout**: int - timeout in milliseconds to wait for a message to come.
- **returns**: [MessageEnvelope](../message_envelope) - received message or *null*.


#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue. This method is usually used to extend the message processing time.

> `public abstract` renewLock([MessageEnvelope](../message_envelope), long lockTimeout) throws ApplicationException

- **message**: [MessageEnvelope](../message_envelope) - message to extend its lock.
- **lockTimeout**: long - locking timeout in milliseconds.


### Instance methods

#### beginListen
Listens for incoming messages without blocking the current thread.  
See also [listen](#listen), [IMessageReceiver](../imessage_receiver)

> `public` void beginListen([IContext](../../../components/context/icontext) context, [IMessageReceiver](../imessage_receiver) receiver)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../imessage_receiver) - receiver used to receive incoming messages.


#### configure
Configures the component by passing its configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### getCapabilities
Gets the queue capabilities

> [MessagingCapabilities](../messaging_capabilities) getCapabilities()

- **returns**: [MessagingCapabilities](../messaging_capabilities) - queue's capabilities object.


#### getName
Gets the queue name

> `public` String getName()

- **returns**: String - queue name.

#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### sendAsObject
Sends an object into the queue.
Before sending the object is converted into JSON string and wrapped in a [MessageEnvelope](../message_envelope).

> `public` void sendAsObject([IContext](../../../components/context/icontext) context, String messageType, Object message) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageType**: String - a message type
- **message**: Object - an object value to be sent


#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references) throws ReferenceException

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

#### toString
Gets a string representation of the object.

> `public` String toString()

- **returns**: string - string representation of the object.


#### openWithParams
Opens the component with the given connection and credential parameters.

> `protected` void openWithParams([IContext](../../../components/context/icontext) - (optional) context, [ConnectionParams](../../../config/connect/connection_params) connection, [CredentialParams](../../../config/auth/credential_params) credential) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connections**: [ConnectionParams](../../../config/connect/connection_params) - connection parameters
- **credentials**: [CredentialParams](../../../config/auth/credential_params) - credential parameters
        

#### checkOpen
Checks if the queue has been opened.
Raise an exception if queue wasn't opened or *null* otherwise

> `protected` void checkOpen([IContext](../../../components/context/icontext) context) throws InvalidStateException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

