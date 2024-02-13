---
type: docs
title: "LockedMessage"
linkTitle: "LockedMessage"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-memcached-go"
description: >
    Data object used to store and lock incoming messages in [MemoryMessageQueue](../memory_message_queue).  
---

### Description

The LockedMessage class allows you to create data objects used to store and lock incoming messages in [MemoryMessageQueue](../memory_message_queue).  

### Fields

<span class="hide-title-link">

#### ExpirationTime
The expiration time for the message lock. 
If it is nil, then the message is not locked.

> **ExpirationTime**: time.Time

#### Message
The incoming message.

> **Message**: [*MessageEnvelope](../message_envelope)

#### Timeout
The lock timeout in milliseconds.

> **Timeout**: time.Duration

</span>


### See also
- #### [MemoryMessageQueue](../memory_message_queue)


