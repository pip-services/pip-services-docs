---
type: docs
title: "LockedMessage"
linkTitle: "LockedMessage"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
    Data object used to store and lock incoming messages in [MemoryMessageQueue](../memory_message_queue).  
---

### Description

The LockedMessage class allows you to create data objects used to store and lock incoming messages in [MemoryMessageQueue](../memory_message_queue).  

### Fields

<span class="hide-title-link">

#### expiration_time
The expiration time for the message lock. 
If it is None, then the message is not locked.

> **expiration_time**: datetime.datetime

#### message
The incoming message.

> **message**: [MessageEnvelope](../message_envelope)

#### timeout
The lock timeout in milliseconds.

> **timeout**: int

</span>


### See also
- #### [MemoryMessageQueue](../memory_message_queue)

