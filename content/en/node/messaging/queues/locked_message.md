---
type: docs
title: "LockedMessage"
linkTitle: "LockedMessage"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
description: >
    Data object used to store and lock incoming messages in [MemoryMessageQueue](../memory_message_queue).  
---
See also [MemoryMessageQueue](../memory_message_queue)

### Properties

<span class="hide-title-link">

#### expirationTime
The expiration time for the message lock. If it is null then the message is not locked.

> **expirationTime**: Date

#### message
The incoming message.

> **message**: [MessageEnvelope](../message_envelope)

#### timeout
The lock timeout in milliseconds.

> **timeout**: number

</span>


### See also
- #### [MemoryMessageQueue](../memory_message_queue)

