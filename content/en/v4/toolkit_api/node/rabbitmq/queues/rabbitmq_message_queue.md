---
type: docs
title: "RabbitMQMessageQueue"
linkTitle: "RabbitMQMessageQueue"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-rabbitmq-node"
description: >
    Message queue that sends and receives messages via RabbitMQ message broker.
    
---

**Inherits:** [MessageQueue](../../../messaging/queues/message_queue)

### Description
The RabbitMQMessageQueue class allows you to create message queues that send and receive messages via an RabbitMQ message broker.


#### Configuration parameters

- **topic**: name of RabbitMQ topic to subscribe
- **connection(s)**:
	- **discovery_key**: (optional) a key to retrieve the connection from  IDiscovery
	- **host**: host name or IP address
	- **port**: port number
	- **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
	- **store_key**: (optional) a key to retrieve the credentials from ICredentialStore
	- **username**: user name
	- **password**: user password


#### References
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../../../observability/log/ilogger) components to pass log messages
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../../../observability/count/icounters) components to pass collected measurements
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) to resolve credentials


### Constructors
Creates a new instance of the message queue.

> `public` constructor(name?: string, config?: ConfigParams)

- **name**: string - (optional) queue's name.
- **config**: [ConfigParams](../../../components/config/config_params) - (optional) configuration parameters.


### Instance methods

#### abandon
Returnes message into the queue and makes it available for all subscribers to receive it again.
This method is usually used to return a message which could not be processed at the moment
to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently
or/and send to dead letter queue.


> `public` abandon(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to return.

#### clear
Clears a component's state.

> `public` clear(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.


#### close
Closes a component and frees used resources.

> `public` close(context: [IContext](../../../components/context/icontext)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### complete
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

- Important: This method is not supported by RabbitMQ.

> `public` complete(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.

#### configure
Configures the component by passing its configuration parameters.

> `public` configure(config: [ConfigParams](../../../components/config/config_params)): void

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.

#### endListen
Ends listening for incoming messages.
When this method is call, [listen](#listen) unblocks the thread and execution continues.

> `public` endListen(context: [IContext](../../../components/context/icontext)): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### isOpen
Checks if the component is open.

> `public` isOpen(): boolean

- **returns**: boolean - true if the component is open and false otherwise.


#### listen
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

> `public` listen(context: [IContext](../../../components/context/icontext), receiver: [IMessageReceiver](../../../messaging/queues/imessage_receiver)): void

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.

#### moveToDeadLetter
Permanently removes a message from the queue and sends it to dead letter queue.

- Important: This method is not supported by RabbitMQ.

> `public` moveToDeadLetter(message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

- Important: This method are not supported in this release!

> `public` peek(context: [IContext](../../../components/context/icontext)): Promise\<[MessageEnvelope](../../../messaging/queues/message_envelope)\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Promise\<[MessageEnvelope](../../../messaging/queues/message_envelope)\> - peeked message.

#### peekBatch
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

> `public` peekBatch(context: [IContext](../../../components/context/icontext), messageCount: number): Promise<[MessageEnvelope[]](../../../messaging/queues/message_envelope)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **messageCount**: number - maximum number of messages to peek.
- **returns**: Promise<[MessageEnvelope[]](../../../messaging/queues/message_envelope)> - list with peeked messages.

#### readMessageCount
Reads the current number of messages in the queue to be delivered.

> `public` readMessageCount(): Promise\<number\>

- ***returns**: Promise\<number\> - number of messages in the queue.

#### receive
Receives an incoming message and removes it from the queue.

> `public` receive(context: [IContext](../../../components/context/icontext), waitTimeout: number): Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **waitTimeout**: number - timeout in milliseconds to wait for a message to come.
- **returns**: Promise<[MessageEnvelope](../../../messaging/queues/message_envelope)> - received message or null if nothing was received.

#### renewLock
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by RabbitMQ.

> `public` renewLock(message: MessageEnvelope, lockTimeout: number): Promise\<void\> {

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lockTimeout**: number - locking timeout in milliseconds.

#### send
Sends a message into the queue.

> `public` send(context: [IContext](../../../components/context/icontext), message: [MessageEnvelope](../../../messaging/queues/message_envelope)): Promise\<void\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.


### Examples

```typescript
queue := new RabbitMQMessageQueue("myqueue")
queue.configure(ConfigParams.fromTuples(
	"exchange", "my_exchange",
	"queue", "my_exchange",
	"options.auto_create", true,
	"connection.host", "5672",
	"connection.port", "localhost",
	"credential.username", "user",
	"credential.password", "password",
));
await queue.open("123");
await queue.send("123", new MessageEnvelope("", "mymessage", "ABC"));
message := await queue.receive("123", 10000);
if (message != null) {
	// ...
	await queue.complete(message);
}
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
