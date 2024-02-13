---
type: docs
title: "MessagingCapabilities"
linkTitle: "MessagingCapabilities"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-messaging-java"
description: >
    Data object that contains supported capabilities of a message queue. 
---

### Description

The MessagingCapabilities class allows you to create data objects that contain supported capabilities of message queues.

Important points

- If certain capability is not supported a queue will throw a NotImplemented exception.

### Constructors

Creates a new instance of the capabilities object.

> `public` constructor(canMessageCount: boolean, canSend: boolean, canReceive: boolean, canPeek: boolean, canPeekBatch: boolean, canRenewLock: boolean, canAbandon: boolean, canDeadLetter: boolean, canClear: boolean)



- **canMessageCount**: boolean - True if the queue supports reading message count.
- **canSend**: boolean - True if the queue is able to send messages.
- **canReceive**: boolean - True if the queue is able to receive messages.
- **canPeek**: boolean - True if the queue is able to peek messages.
- **canPeekBatch**: boolean - True if the queue is able to peek multiple messages in one batch.
- **canRenewLock**: boolean - True if the queue is able to renew message lock.
- **canAbandon**: boolean - True if the queue is able to abandon messages.
- **canDeadLetter**: boolean - True if the queue is able to send messages to dead letter queue.
- **canClear**: boolean - True if the queue can be cleared.


### Properties


#### canAbandon
Informs if the queue is able to abandon messages.

> `public` boolean canAbandon()

- **returns**: boolean - True if the queue is able to abandon messages.


#### canClear
Informs if the queue can be cleared.

> `public` boolean canClear()

- **returns**: boolean - True if the queue can be cleared.


#### canDeadLetter
Informs if the queue is able to send messages to dead letter queue.

> `public` boolean canDeadLetter()

- **returns**: boolean - True if the queue is able to send messages to dead letter queue.


#### canMessageCount
Informs if the queue is able to read the number of messages.

> `public` boolean canMessageCount()

- **returns**: boolean - True if the queue supports reading message count.


#### canPeek
Informs if the queue is able to peek messages.

> `public` boolean canPeek()

- **returns**: boolean - True if the queue is able to peek messages.


#### canPeekBatch
Informs if the queue is able to peek multiple messages in one batch.

> `public` boolean canPeekBatch()

- **returns**: boolean - True if the queue is able to peek multiple messages in one batch.


#### canReceive
Informs if the queue is able to receive messages.

> `public` boolean canReceive()

- **returns**: boolean - True if the queue is able to receive messages.


#### canRenewLock
Informs if the queue is able to renew message lock.

> `public` boolean canRenewLock()

- **returns**: boolean - True if the queue is able to renew message lock.


#### canSend
Informs if the queue is able to send messages.

> `public` boolean canSend()

- **returns**: boolean - True if the queue is able to send messages.
