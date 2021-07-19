---
type: docs
title: "LockedMessage"
linkTitle: "LockedMessage"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-messaging-dart"
description: >
    Data object used to store and lock incoming messages in [MemoryMessageQueue](../memory_message_queue).  
---

### Description

The LockedMessage class allows you to create data objects used to store and lock incoming messages in [MemoryMessageQueue](../memory_message_queue).  

### Fields

<span class="hide-title-link">

#### expirationTime
The expiration time for the message lock. 
If it is null, then the message is not locked.

> **expirationTime**: DateTime

#### message
The incoming message.

> **message**: [MessageEnvelope](../message_envelope)

#### timeout
The lock timeout in milliseconds.

> **timeout**: int

</span>


### See also
- #### [MemoryMessageQueue](../memory_message_queue)

