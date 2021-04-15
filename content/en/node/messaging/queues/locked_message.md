---
type: docs
title: "LockedMessage"
linkTitle: "LockedMessage"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
---

Data object used to store and lock incoming messages in [MemoryMessageQueue](../memory_message_queue).
See [MemoryMessageQueue](../memory_message_queue)

### Properties

The expiration time for the message lock. If it is null then the message is not locked.

> expirationTime: Date

The incoming message.

> message: [MessageEnvelope](../message_envelope)

The lock timeout in milliseconds.

> timeout: number

