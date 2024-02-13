---
type: docs
title: "LockedMessage"
linkTitle: "LockedMessage"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-messaging-java"
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

> `public` ZonedDateTime **expirationTime**;

#### message
The incoming message.

> `public` [MessageEnvelope](../message_envelope) **message**;

#### timeout
The lock timeout in milliseconds.

> `public` Long **timeout**;

</span>


### See also
- #### [MemoryMessageQueue](../memory_message_queue)

