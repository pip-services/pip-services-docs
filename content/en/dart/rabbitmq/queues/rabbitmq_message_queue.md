---
type: docs
title: "RabbitMQMessageQueue"
linkTitle: "RabbitMQMessageQueue"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rabbitmq-dart"
description: >
    Message queue that sends and receives messages via RabbitMQ message broker.
    
---

**Extends:** [MessageQueue](../../../messaging/queues/message_queue)

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IUnreferenceable](../../../commons/refer/iunreferenceable), [IConfigurable](../../../commons/config/iconfigurable), [IOpenable](../../../commons/run/iopenable), [ICleanable](../../../commons/run/icleanable)

### Description
The RabbitMQMessageQueue class allows you to create message queues that send and receive messages via an RabbitMQ message broker.


#### Configuration parameters

**connection(s)**:
    - **discovery_key**:               (optional) a key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**:                        host name or IP address
    - **port**:                        port number
    - **uri**:                         resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**:                   (optional) a key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
    - **username**:                    user name
    - **password**:                    user password


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../components/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../components/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) to resolve credentials


### Constructors
Creates a new instance of the message queue.

> MessageQueue([String name])

- **name**: String - (optional) queue's name.


### Fields

<span class="hide-title-link">

#### capabilities
Supported capabilities
> **capabilities**: [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)


#### connectionResolver
Connection resolver.
> **connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver)


#### counters
Performance counters.
> **counters**: [CompositeCounters](../../../components/count/composite_counters)


#### credentialResolver
Credential resolver.
> **credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver)

#### logger
Logger.
> **logger**: [CompositeLogger](../../../components/log/composite_logger)

#### name
Queue's name.
> **name**: String

</span>


### Instance methods

#### abandon
Returnes message into the queue and makes it available for all subscribers to receive it again.
This method is usually used to return a message which could not be processed at the moment
to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently
or/and send to dead letter queue.

`@override`
> Future abandon([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to return.

#### clear
Clears a component's state.

`@override`
> Future clear(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.


#### close
Closes a component and frees used resources.

`@override`
> Future close(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### complete
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

- Important: This method is not supported by RabbitMQ.

`@override`
> Future complete([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.

#### configure
Configures the component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### endListen
Ends listening for incoming messages.
When this method is call, [listen](#listen) unblocks the thread and execution continues.

`@override`
> void endListen(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

`@override`
> void listen(String correlationId, [IMessageReceiver](../../../messaging/queues/imessage_receiver) receiver)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.

#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

- Important: This method is not supported by RabbitMQ.

`@override`
> Future moveToDeadLetter([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.


#### openWithParams
Opens the component with given connection and credential parameters.

`@override`
> Future openWithParams(String correlationId, [ConnectionParams](../../../components/connect/connection_params) connection, [CredentialParams](../../../components/auth/credential_params) credential)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **connection**: [ConnectionParams](../../../components/connect/connection_params) - connection parameters
- **credential**: [CredentialParams](../../../components/auth/credential_params) - credential parameters
- **returns**: Future - that receives null no errors occured.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

- Important: This method are not supported in this release!

`@override`
> Future<[MessageEnvelope](../../../messaging/queues/message_envelope)> peek(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **returns**: Future<[MessageEnvelope](../../../messaging/queues/message_envelope)> - peeked message.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method are not supported in this release!

`@override`
> Future\<List\<[MessageEnvelope](../../../messaging/queues/message_envelope)\>\> peekBatch(String correlationId, int messageCount)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int - maximum number of messages to peek.
- **returns**: Future\<List\<[MessageEnvelope](../../../messaging/queues/message_envelope)\>\> - list with peeked messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

`@override`
> Future\<int\> readMessageCount()

- ***returns**: Future\<int\> - number of messages in the queue.

#### receive
Receives an incoming message and removes it from the queue.

`@override`
> Future<[MessageEnvelope](../../../messaging/queues/message_envelope)> receive(String correlationId, int waitTimeout)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: int - timeout in milliseconds to wait for a message to come.
- **returns**: Future<[MessageEnvelope](../../../messaging/queues/message_envelope)> - received message or null if nothing was received.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by RabbitMQ.

`@override`
> Future renewLock([MessageEnvelope](../../../messaging/queues/message_envelope message, int lockTimeout)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lockTimeout**: int - locking timeout in milliseconds.

#### send
Send method are sends a message into the **_queue**.

`@override`
> Future send(String correlationId, [MessageEnvelope](../../../messaging/queues/message_envelope) envelop)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.


#### subscribe
Subscribes to a topic.
> void subscribe()


### Examples

```dart
var queue = RabbitMQMessageQueue('my_queue');
queue.configure(ConfigParams.fromTuples([
    'topic', 'mytopic',
    'connection.protocol', 'amqp'
    'connection.host', 'localhost'
    'connection.port', 5672 ]));

await queue.open('123');
await queue.send('123', MessageEnvelop('123', 'mymessage', 'ABC'));
await queue.receive('123', 0);
await queue.complete('123', message);
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
