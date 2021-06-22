---
type: docs
title: "TestMessageReceiver"
linkTitle: "TestMessageReceiver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
    Class used to receive a message, obtain a list of received messages and the number of received messages, and to clear the message list. 
---

**Implements:** [IMessageReceiver](../../queues/imessage_receiver), [ICleanable](../../../commons/run/icleanable)

### Description

The TestMessageReceiver allows you to receive a message, obtain a list of received messages and the number of received messages, and to clear the message list. 

### Constructors

Creates a TestMessageReceiver component.

> `public` constructor()


### Properties


#### messages
Gets the list of received messages.

> messages(): [MessageEnvelope](../message_envelope)[]

- **returns**: [MessageEnvelope](../message_envelope)[] - list of received messages


#### messageCount
Gets the received message count.

> messageCount(): number

- **returns**: number - number of messages


### Instance methods

#### clear
Clears all received messagers.

> `public` clear(correlationId: string): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.


### receiveMessage
Receives incoming message from the queue.

See also [MessageEnvelope](../../queues/message_envelope), [IMessageQueue](../../queues/imessage_queue)

> `public` receiveMessage(envelope: [MessageEnvelope](../../queues/message_envelope), queue: [IMessageQueue](../../queues/imessage_queue)): Promise\<void\>

- **envelope**: [MessageEnvelope](../../queues/message_envelope) - an incoming message
- **queue**: [IMessageQueue](../../queues/imessage_queue) - a queue where the message comes from