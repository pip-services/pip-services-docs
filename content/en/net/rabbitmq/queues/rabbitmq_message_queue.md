---
type: docs
title: "RabbitMQMessageQueue"
linkTitle: "RabbitMQMessageQueue"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rabbitmq-dotnet"
description: >
    Message queue that sends and receives messages via RabbitMQ message broker.
    
---

**Inherits:** [MessageQueue](../../../messaging/queues/message_queue)

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

> `public` RabbitMQMessageQueue(string name = null)

- **name**: string - (optional) queue's name.

TODO: add description
> `public` RabbitMQMessageQueue(string name, [ConfigParams](../../../commons/config/config_params) config)

- **name**: string - (optional) queue's name.
- **config**: [ConfigParams](../../../commons/config/config_params) - TODO: add description

TODO: add description
> `public` RabbitMQMessageQueue(string name, IModel model, string queue)

- **name**: string - (optional) queue's name.
- **model**: IModel - TODO: add description
- **queue**: string - TODO: add description


### Properties

#### Interval
TODO: add description
> `public` long Interval { get; set; }


### Instance methods

#### AbandonAsync
Returnes message into the queue and makes it available for all subscribers to receive it again.
This method is usually used to return a message which could not be processed at the moment
to repeat the attempt. Messages that cause unrecoverable errors shall be removed permanently
or/and send to dead letter queue.


> `public override` Task AbandonAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to return.

#### ClearAsync
Clears a component's state.

> `public override` async Task ClearAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.


#### CloseAsync
Closes a component and frees used resources.

> `public override` Task CloseAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### CompleteAsync
Permanently removes a message from the queue.
This method is usually used to remove the message after successful processing.

- Important: This method is not supported by RabbitMQ.

> `public override` Task CompleteAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to remove.

#### Configure
Configures the component by passing its configuration parameters.

> `public override` void Configure([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.

#### EndListen
Ends listening for incoming messages.
When this method is call, [listen](#listen) unblocks the thread and execution continues.

> `public override` void EndListen(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### IsOpen
Checks if the component is open.

> `public override` bool IsOpen()

- **returns**: bool - true if the component is open and false otherwise.


#### ListenAsync
Listens for incoming messages and blocks the current thread until the queue is closed.

See [IMessageReceiver](../../../messaging/queues/imessage_receiver)

> `public override` Task ListenAsync(string correlationId, [IMessageReceiver](../../../messaging/queues/imessage_receiver))

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - receiver used to receive incoming messages.

#### MoveToDeadLetterAsync
Permanently removes a message from the queue and sends it to dead letter queue.

- Important: This method is not supported by RabbitMQ.

> `public override` Task MoveToDeadLetterAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to be removed.


#### openWithParams
Opens the component with given connection and credential parameters.

> `public override` Task OpenAsync(string correlationId, List<[ConnectionParams](../../../components/connect/connection_params)> connections, [CredentialParams](../../../components/auth/credential_params) credential)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **connection**: List<[ConnectionParams](../../../components/connect/connection_params)> - connection parameters
- **credential**: [CredentialParams](../../../components/auth/credential_params) - credential parameters


#### peek
Peeks a single incoming message from the queue without removing it.
If there are no messages available in the queue, it returns null.

- Important: This method are not supported in this release!

> `public override` Task<[MessageEnvelope](../../../messaging/queues/message_envelope)> PeekAsync(string correlationId)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Task<[MessageEnvelope](../../../messaging/queues/message_envelope)> - peeked message.

#### PeekBatchAsync
Peeks multiple incoming messages from the queue without removing them.
If there are no messages available in the queue, it returns an empty list.

- Important: This method are not supported in this release!

> `public override` Task\<List\<[MessageEnvelope](../../../messaging/queues/message_envelope)\>\> PeekBatchAsync(string correlationId, int messageCount)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **messageCount**: int - maximum number of messages to peek.
- **returns**: Task\<List\<[MessageEnvelope](../../../messaging/queues/message_envelope)\>\> - list with peeked messages.

#### ReadMessageCountAsync
Reads the current number of messages in the queue to be delivered.

> `public override` Task\<long\> ReadMessageCountAsync()

- ***returns**: Task\<long\> - number of messages in the queue.

#### ReceiveAsync
Receives an incoming message and removes it from the queue.

> `public override` Task<[MessageEnvelope](../../../messaging/queues/message_envelope)> ReceiveAsync(string correlationId, long waitTimeout)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **waitTimeout**: long - timeout in milliseconds to wait for a message to come.
- **returns**: Task<[MessageEnvelope](../../../messaging/queues/message_envelope)> - received message or null if nothing was received.

#### RenewLockAsync
Renews a lock on a message that makes it invisible from other receivers in the queue.
This method is usually used to extend the message processing time.

- Important: This method is not supported by RabbitMQ.

> `public override` Task RenewLockAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message, long lockTimeout)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message to extend its lock.
- **lockTimeout**: long - locking timeout in milliseconds.

#### SendAsync
Sends a message into the queue.

> `public override` Task SendAsync(string correlationId, [MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message envelop to be sent.


### Examples

```cs
var queue = new RabbitMQMessageQueue("myqueue");
queue.configure(ConfigParams.FromTuples(
    "topic", "mytopic",
    "connection.protocol", "mqtt"
    "connection.host", "localhost"
    "connection.port", 1883 ));
queue.Open("123");

queue.Send("123", new MessageEnvelop(null, "mymessage", "ABC"));
queue.Receive("123", 0);
queue.Complete("123", message);
```


### See also
- #### [MessageQueue](../../../messaging/queues/message_queue)
- #### [MessagingCapabilities](../../../messaging/queues/messaging_capabilities)
