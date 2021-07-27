---
type: docs
title: "SqsMessageQueue"
linkTitle: "SqsMessageQueue"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-aws-dotnet"
description: >
    Used to create message queues for Amazon SQS (Simple Queue Service)
---

**Inherits:** [MessageQueue](../../../messaging/queues/message_queue)

### Description
The SqsMessageQueue class allows you to create message queues for Amazon SQS (SqsMessageQueue).


### Constructors
Creates a new instance of this class.
> `public` SqsMessageQueue(string name = null)

- **name**: string - name

Creates a new instance of this class based on given configuration parameters.

> `public` SqsMessageQueue(string name, [ConfigParams](../../../commons/config/config_params) config)

- **name**: string - name
- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters


Creates a new instance of this class based on a given Amazon SQS client and queue.

> `public` SqsMessageQueue(string name, AmazonSQSClient client, string queue)

- **name**: string - name
- **client**: AmazonSQSClient - Amazon SQS client
- **queue**: string - queue


### Properties

#### Interval
Interval

> `public` long Interval { get; set; }


### Instance methods

#### AbandonAsync
Abandons a message

> `public override` Task AbandonAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message

#### ClearAsync
Clears a queue.

> `public override` ClearAsync(string correlationId)

- **correlationId**: string - transaction id used to trace execution through the call chain.


#### CloseAsync
Closes a queue.

> `public override` Task CloseAsync(string correlationId)

- **correlationId**: string - transaction id used to trace execution through the call chain.

#### Configure
Configures a queue.

> `public override` void Configure ([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters.

#### EndListen
Ends listening
> `public override` void EndListen(string correlationId)

- **correlationId**: string - transaction id used to trace execution through the call chain.

#### IsOpen
Checks if the component is open.

> `public override` bool IsOpen()

- **returns**: bool - true if the queue is not null and false otherwise.

#### ListenAsync
Starts listening messages

> `public override` Task ListenAsync(string correlationId, [IMessageReceiver](../../../messaging/queues/imessage_receiver) receiver)

- **correlationId**: transaction id used to trace execution through the call chain.
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - message receiver


#### MoveToDeadLetterAsync
Sends a message to the dead queue if it is defined.

> `public override` Task MoveToDeadLetterAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message

#### OpenAsync
Opens an existing queue or creates a new one if it doesn't exist.

> `public override` Task OpenAsync(string correlationId, List<[ConnectionParams](../../../components/connect/connection_params)> connections, [CredentialResolver](../../../components/auth/credential_resolver) credential)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **connections**: List<[ConnectionParams](../../../components/connect/connection_params)> - connection parameters
- **credential**: [CredentialResolver](../../../components/auth/credential_resolver) - credential resolver


#### PeekAsync
Peeks a message.

> `public override` Task<[MessageEnvelope](../../../messaging/queues/message_envelope)> PeekAsync(string correlationId)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **returns**: Task<[MessageEnvelope](../../../messaging/queues/message_envelope)> - message

#### PeekBatchAsync
Peeks a given number of messages.

> `public override` Task\<List\<[MessageEnvelope](../../../messaging/queues/message_envelope)\>\> PeekBatchAsync(string correlationId, int messageCount)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **messageCount**: int - message count
- **returns**: Task\<List\<[MessageEnvelope](../../../messaging/queues/message_envelope)\>\>  - message

#### ReceiveAsync
Receives a message.

> `public override` Task<[MessageEnvelope](../../../messaging/queues/message_envelope)> ReceiveAsync(string correlationId, long waitTimeout)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **waitTimeout**: long - wait timeout
- **returns**: Task<[MessageEnvelope](../../../messaging/queues/message_envelope)> - message


#### RenewLockAsync
Renews a lock for a message in the queue.

> `public override` Task RenewLockAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message, long lockTimeout)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message
- **lockTimeout**: long - lock's timeout.

#### ReadMessageCountAsync
Counts the number of messages.

> `public override` Task\<long\> ReadMessageCountAsync()

- **returns**: Task\<long\> - number of messages.


#### SendAsync
Sends a message.

> `public override` Task SendAsync(string correlationId, [MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - message

