---
type: docs
title: "TestMessageReceiver"
linkTitle: "TestMessageReceiver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
    TODO add description
---

**Implements:** [IMessageReceiver](../../queues/imessage_receiver), [ICleanable](../../../commons/run/icleanable)

### Description

TODO add description

### Constructors

TODO add description

> TestMessageReceiver()


### Properties


#### messages
Gets the list of received messages.

> messages(): List[[MessageEnvelope](../message_envelope)]

- **returns**: List[[MessageEnvelope](../message_envelope)] - TODO add description


#### message_count
Gets the received message count.

> message_count(): int

- **returns**: int - TODO add description


### Instance methods

#### clear
Clears all received messagers.

> clear(correlation_id: Optional[str])

- **correlationId**: Optional[str] - (optional) transaction id to trace execution through call chain.


### receive_message
Receives incoming message from the queue.

See also [MessageEnvelope](../../queues/message_envelope), [IMessageQueue](../../queues/imessage_queue)

> receive_message(envelope: [MessageEnvelope](../../queues/message_envelope), queue: [IMessageQueue](../../queues/imessage_queue))

- **envelope**: [MessageEnvelope](../../queues/message_envelope) - an incoming message
- **queue**: [IMessageQueue](../../queues/imessage_queue) - a queue where the message comes from