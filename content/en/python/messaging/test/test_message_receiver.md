---
type: docs
title: "TestMessageReceiver"
linkTitle: "TestMessageReceiver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
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

> messages(): List[[MessageEnvelope](../message_envelope)]

- **returns**: List[[MessageEnvelope](../message_envelope)] - list of received messages


#### message_count
Gets the received message count.

> message_count(): int

- **returns**: int - number of messages


### Instance methods

#### clear
Clears all received messagers.

> clear(correlation_id: Optional[str])

- **correlationId**: Optional[str] - (optional) transaction id used to trace execution through the call chain.


### receive_message
Receives incoming message from the queue.

See also [MessageEnvelope](../../queues/message_envelope), [IMessageQueue](../../queues/imessage_queue)

> receive_message(envelope: [MessageEnvelope](../../queues/message_envelope), queue: [IMessageQueue](../../queues/imessage_queue))

- **envelope**: [MessageEnvelope](../../queues/message_envelope) - incoming message
- **queue**: [IMessageQueue](../../queues/imessage_queue) - a queue where the message comes from
