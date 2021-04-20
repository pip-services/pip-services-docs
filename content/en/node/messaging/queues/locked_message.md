---
type: docs
title: "LockedMessage"
linkTitle: "LockedMessage"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
description: >
    Data object used to store and lock incoming messages in [MemoryMessageQueue](../memory_message_queue).  
---
See also [MemoryMessageQueue](../memory_message_queue)

### Fields

<span class="hide-title-link">

#### expirationTime
The expiration time for the message lock. 
If it is null then the message is not locked.

> `public` **expirationTime**: Date

#### message
The incoming message.

> `public` **message**: [MessageEnvelope](../message_envelope)

#### timeout
The lock timeout in milliseconds.

> `public` **timeout**: number

</span>


### See also
- #### [MemoryMessageQueue](../memory_message_queue)

