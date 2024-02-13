---
type: docs
title: "TestMessageReceiver"
linkTitle: "TestMessageReceiver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-messaging-go"
description: >
    Class used to receive a message, obtain a list of received messages and the number of received messages, and to clear the message list. 
---

**Implements:** [IMessageReceiver](../../queues/imessage_receiver), [ICleanable](../../../components/run/icleanable)

### Description

The TestMessageReceiver allows you to receive a message, obtain a list of received messages and the number of received messages, and to clear the message list. 

### Constructors

Creates a TestMessageReceiver component.

> NewTestMessageReceiver() *TestMessageReceiver


### Properties


#### GetMessages
Gets the list of received messages.

> (c *TestMessageReceiver) GetMessages() []queues.MessageEnvelope

- **returns**: [MessageEnvelope](../../queues/message_envelope)[] - list of received messages


#### GetMessageCount
Gets the received message count.

> (c *TestMessageReceiver) GetMessageCount() int

- **returns**: int - number of messages


### Instance methods

#### Clear
Clears all received messagers.

> (c *TestMessageReceiver) Clear(ctx context.Context) error

- **context**: [IContext](../../../components/context/icontext) - a context to trace execution through a call chain.


### ReceiveMessage
Receives incoming message from the queue.

See also [MessageEnvelope](../../queues/message_envelope), [IMessageQueue](../../queues/imessage_queue)

> (c *TestMessageReceiver) ReceiveMessage(ctx context.Context, envelope *queues.MessageEnvelope, queue queues.IMessageQueue) (err error)

- **envelope**: [MessageEnvelope](../../queues/message_envelope) - an incoming message
- **queue**: [IMessageQueue](../../queues/imessage_queue) - a queue where the message comes from

