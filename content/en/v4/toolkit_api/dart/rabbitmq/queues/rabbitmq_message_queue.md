---
type: docs
title: "RabbitMQMessageQueue"
linkTitle: "RabbitMQMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-rabbitmq-dart"
description: >
    Message queue that sends and receives messages via RabbitMQ message broker.
    
---

**Extends:** [MessageQueue](../../../messaging/queues/message_queue)

### Description
The RabbitMQMessageQueue class allows you to create message queues that send and receive messages via an RabbitMQ message broker.


#### Configuration parameters

**connection(s)**:
    - **discovery_key**:               (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
    - **host**:                        host name or IP address
    - **port**:                        port number
    - **uri**:                         resource URI or connection string with all parameters in it
- **credential(s)**:
    - **store_key**:                   (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
    - **username**:                    username
    - **password**:                    user's password


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials


### Constructors
Creates a new instance of the message queue.

> RabbitMQMessageQueue(String name, {[ConfigParams?](../../../components/config/config_params) config, amqp.Channel? mqChanel, String? queue})

- **name**: String - (optional) queue's name.
- **config**: [ConfigParams?](../../../components/config/config_params) - (optional)
- **mqChanel**: amqp.Channel? - (optional) RrabbitMQ chanel
- **queue**: String? - (optional)  RrabbitMQ queue name


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
> **counters**: [CompositeCounters](../../../observability/count/composite_counters)


#### credentialResolver
Credential resolver.
> **credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver)

#### logger
Logger.
> **logger**: [CompositeLogger](../../../observability/log/composite_logger)

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
> Future clear(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### close
Closes a component and frees used resources.

`@override`
> Future close(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

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
> void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### endListen
Ends listening for incoming messages.
When this method is call, [listen](#listen) unblocks the thread and execution continues.

`@override`
> void endListen(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

`@override`
> void listen(IContext? context, [IMessageReceiver](../../../messaging/queues/imessage_receiver) receiver)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
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
> Future openWithParams(IContext? context, [ConnectionParams?](../../../config/connect/connection_params) connection, [CredentialParams?](../../../config/auth/credential_params) credential)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **connection**: [ConnectionParams?](../../../config/connect/connection_params) - connection parameters
- **credential**: [CredentialParams?](../../../config/auth/credential_params) - credential parameters
- **returns**: Future - that receives null no errors occured.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

- Important: This method are not supported in this release.

`@override`
> Future<[MessageEnvelope](../../../messaging/queues/message_envelope)> peek(IContext? context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Future<[MessageEnvelope](../../../messaging/queues/message_envelope)> - peeked message.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method are not supported in this release.

`@override`
> Future\<List\<[MessageEnvelope](../../../messaging/queues/message_envelope)\>\> peekBatch(IContext? context, int messageCount)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
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
> Future<[MessageEnvelope](../../../messaging/queues/message_envelope)> receive(IContext? context, int waitTimeout)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
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
Sends a message into the **_queue**.

`@override`
> Future send(IContext? context, [MessageEnvelope](../../../messaging/queues/message_envelope) envelop)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
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

