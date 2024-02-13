---
type: docs
title: "TestMessageReceiver"
linkTitle: "TestMessageReceiver"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-messaging-dart"
description: >
    Class used to receive a message, obtain a list of received messages and the number of received messages, and to clear the message list. 
---

**Implements:** [IMessageReceiver](../../queues/imessage_receiver), [ICleanable](../../../commons/run/icleanable)

### Description

The TestMessageReceiver allows you to receive a message, obtain a list of received messages and the number of received messages, and to clear the message list. 

### Constructors

Creates a TestMessageReceiver component.

> TestMessageReceiver()


### Properties


#### messages
Gets the list of received messages.

> List<[MessageEnvelope](../message_envelope)> get messages

- **returns**: List<[MessageEnvelope](../message_envelope)> - list of received messages


#### messageCount
Gets the received message count.

> int get messageCount

- **returns**: int - number of messages


### Instance methods

#### clear
Clears all received messagers.

`@override`
> Future clear(String? correlationId)

- **correlationId**: String - (optional) transaction id to trace execution through call chain.


### receiveMessage
Receives incoming message from the queue.

See also [MessageEnvelope](../../queues/message_envelope), [IMessageQueue](../../queues/imessage_queue)

> Future receiveMessage([MessageEnvelope](../../queues/message_envelope) envelope, [IMessageQueue](../../queues/imessage_queue) queue)

- **envelope**: [MessageEnvelope](../../queues/message_envelope) - an incoming message
- **queue**: [IMessageQueue](../../queues/imessage_queue) - a queue where the message comes from