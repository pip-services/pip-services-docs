---
type: docs
title: "CallbackMessageReceiver"
linkTitle: "CallbackMessageReceiver"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-messaging-node"
description: >
    Wraps a message callback into [IMessageReceiver](../imessage_receiver)
---

**Implements:** [IMessageReceiver](../imessage_receiver)

### Description

The CallbackMessageReceiver class allows you to wrap message callbacks into [IMessageReceiver](../imessage_receiver). 

### Constructors
Creates an instance of the CallbackMessageReceiver.

> `public` constructor(callback: (envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue)) => Promise\<void\>)
    

- **callback**: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue)) => Promise\<void\> - a callback function that shall be wrapped into [IMessageReceiver](../imessage_receiver)

### Instance methods

#### receiveMessage
Receives an incoming message from the queue.  
See also [MessageEnvelope](../message_envelope), [IMessageQueue](../imessage_queue)

> `public` receiveMessage(envelope: [MessageEnvelope](../message_envelope), queue: [IMessageQueue](../imessage_queue)): Promise\<void\>

- **envelope**: [MessageEnvelope](../message_envelope) - incoming message
- **queue**: [IMessageQueue](../imessage_queue) - queue where the message comes from
