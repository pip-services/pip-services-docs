---
type: docs
title: "SqsMessageQueue"
linkTitle: "SqsMessageQueue"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-aws-dotnet"
description: >
    TODO: add description
---

**Inherits:** [MessageQueue](../../../messaging/queues/message_queue)

### Description
TODO: add description


### Constructors
TODO: add description

> `public` SqsMessageQueue(string name = null)

- **name**: string - TODO: add description

TODO: add description

> `public` SqsMessageQueue(string name, [ConfigParams](../../../commons/config/config_params) config)

- **name**: string - TODO: add description
- **config**: [ConfigParams](../../../commons/config/config_params) - TODO: add description


TODO: add description

> `public` SqsMessageQueue(string name, AmazonSQSClient client, string queue)

- **name**: string - TODO: add description
- **client**: AmazonSQSClient - TODO: add description
- **queue**: string - TODO: add description


### Properties

#### Interval
TODO: add description

> `public` long Interval { get; set; }


### Instance methods

#### AbandonAsync
TODO: add description

> `public override` Task AbandonAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - TODO: add description

#### ClearAsync
TODO: add description

> `public override` ClearAsync(string correlationId)

- **correlationId**: string - TODO: add description


#### CloseAsync
TODO: add description

> `public override` Task CloseAsync(string correlationId)

- **correlationId**: string - TODO: add description

#### Configure
TODO: add description

> `public override` void Configure ([ConfigParams](../../../commons/config/config_params) config)

- **config**: [ConfigParams](../../../commons/config/config_params) - TODO: add description

#### EndListen
TODO: add description

> `public override` void EndListen(string correlationId)

- **correlationId**: string - TODO: add description

#### IsOpen
TODO: add description

> `public override` bool IsOpen()

- **returns**: bool - TODO: add description

#### ListenAsync
TODO: add description

> `public override` Task ListenAsync(string correlationId, [IMessageReceiver](../../../messaging/queues/imessage_receiver) receiver)

- **correlationId**: string - TODO: add description
- **receiver**: [IMessageReceiver](../../../messaging/queues/imessage_receiver) - TODO: add description


#### MoveToDeadLetterAsync
TODO: add description

> `public override` Task MoveToDeadLetterAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - TODO: add description

#### OpenAsync
TODO: add description

> `public override` Task OpenAsync(string correlationId, List<[ConnectionParams](../../../components/connect/connection_params)> connections, [CredentialResolver](../../../components/auth/credential_resolver) credential)

- **correlationId**: string - TODO: add description
- **connections**: List<[ConnectionParams](../../../components/connect/connection_params)> - TODO: add description
- **credential**: [CredentialResolver](../../../components/auth/credential_resolver) - TODO: add description


#### PeekAsync
TODO: add description

> `public override` Task<[MessageEnvelope](../../../messaging/queues/message_envelope)> PeekAsync(string correlationId)

- **correlationId**: string - TODO: add description
- **returns**: Task<[MessageEnvelope](../../../messaging/queues/message_envelope)> - TODO: add description


#### PeekAsync
TODO: add description

> `public override` Task\<List\<[MessageEnvelope](../../../messaging/queues/message_envelope)\>\> PeekBatchAsync(string correlationId, int messageCount)

- **correlationId**: string - TODO: add description
- **messageCount**: int - TODO: add description
- **returns**: Task\<List\<[MessageEnvelope](../../../messaging/queues/message_envelope)\>\>  - TODO: add description


#### ReceiveAsync
TODO: add description

> `public override` Task<[MessageEnvelope](../../../messaging/queues/message_envelope)> ReceiveAsync(string correlationId, long waitTimeout)

- **correlationId**: string - TODO: add description
- **waitTimeout**: long - TODO: add description
- **returns**: Task<[MessageEnvelope](../../../messaging/queues/message_envelope)> - TODO: add description


#### RenewLockAsync
TODO: add description

> `public override` Task RenewLockAsync([MessageEnvelope](../../../messaging/queues/message_envelope) message, long lockTimeout)

- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - TODO: add description
- **lockTimeout**: long - TODO: add description

#### ReadMessageCountAsync
TODO: add description

> `public override` Task\<long\> ReadMessageCountAsync()

- **returns**: Task\<long\> - TODO: add description


#### SendAsync
TODO: add description

> `public override` Task SendAsync(string correlationId, [MessageEnvelope](../../../messaging/queues/message_envelope) message)

- **correlationId**: string - TODO: add description
- **message**: [MessageEnvelope](../../../messaging/queues/message_envelope) - TODO: add description

