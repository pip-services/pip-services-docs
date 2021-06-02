---
type: docs
title: "TestMessageReceiver"
linkTitle: "TestMessageReceiver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
    TODO add description
---

**Implements:** [IMessageReceiver](../../queues/imessage_receiver), [ICleanable](../../../commons/run/icleanable)

### Description

TODO add description

### Constructors

TODO add description

> `public` constructor()


### Properties


#### messages
Gets the list of received messages.

> `public` messages(): [MessageEnvelope](../message_envelope)[]

- **returns**: [MessageEnvelope](../message_envelope)[] - TODO add description


#### messageCount
Gets the received message count.

> `public` messageCount(): number

- **returns**: number - TODO add description


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