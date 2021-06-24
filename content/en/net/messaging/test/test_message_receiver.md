---
type: docs
title: "TestMessageReceiver"
linkTitle: "TestMessageReceiver"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-messaging-dotnet"
description: >
    Class used to receive a message, obtain a list of received messages and the number of received messages, and to clear the message list. 
---

**Inherits:** [IMessageReceiver](../../queues/imessage_receiver), [ICleanable](../../../commons/run/icleanable)

### Description

The TestMessageReceiver allows you to receive a message, obtain a list of received messages and the number of received messages, and to clear the message list. 

### Constructors

Creates a TestMessageReceiver component.

> `public` TestMessageReceiver()


### Properties


#### messages
Gets the list of received messages.

> public List<[MessageEnvelope](../message_envelope)> Messages [ get ]


#### MessageCount
Gets the received message count.

> public int MessageCount [ get ]


### Instance methods

#### ClearAsync
Clears all received messagers.

> `public` Task ClearAsync(string correlationId)

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


### ReceiveMessageAsync
Receives incoming message from the queue.

See also [MessageEnvelope](../../queues/message_envelope), [IMessageQueue](../../queues/imessage_queue)

> `public` Task ReceiveMessageAsync([MessageEnvelope](../../queues/message_envelope) message, [IMessageQueue](../../queues/imessage_queue) queue)

- **envelope**: [MessageEnvelope](../../queues/message_envelope) - an incoming message
- **queue**: [IMessageQueue](../../queues/imessage_queue) - a queue where the message comes from