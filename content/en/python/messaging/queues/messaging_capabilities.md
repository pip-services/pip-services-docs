---
type: docs
title: "MessagingCapabilities"
linkTitle: "MessagingCapabilities"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: >
    Data object that contains supported capabilities of a message queue. 
---

### Description

The MessagingCapabilities class allows you to create data objects that contain supported capabilities of message queues.

Important points

- If certain capability is not supported a queue will throw a NotImplemented exception.

### Constructors

> `public` constructor(canMessageCount: boolean, canSend: boolean, canReceive: boolean, canPeek: boolean, canPeekBatch: boolean, canRenewLock: boolean, canAbandon: boolean, canDeadLetter: boolean, canClear: boolean): [MessagingCapabilities]()

Creates a new instance of the capabilities object.

- **canMessageCount**: boolean - True if the queue supports reading message count.
- **canSend**: boolean - True if the queue is able to send messages.
- **canReceive**: boolean - True if the queue is able to receive messages.
- **canPeek**: boolean - True if the queue is able to peek messages.
- **canPeekBatch**: boolean - True if the queue is able to peek multiple messages in one batch.
- **canRenewLock**: boolean - True if the queue is able to renew message lock.
- **canAbandon**: boolean - True if the queue is able to abandon messages.
- **canDeadLetter**: boolean - True if the queue is able to send messages to dead letter queue.
- **canClear**: boolean - True if the queue can be cleared.
- **returns**: [MessagingCapabilities]() - data object that contains supported capabilities of a message queue


### Properties


#### canAbandon
Informs if the queue is able to abandon messages.

> `public` get canAbandon(): boolean

- **returns**: boolean - True if queue is able to abandon.


#### canClear
Informs if the queue can be cleared.

> `public` get canClear(): boolean

- **returns**: boolean - True if queue can be cleared.


#### canDeadLetter
Informs if the queue is able to send messages to dead letter queue.

> `public` get canDeadLetter(): boolean

- **returns**: boolean - True if queue is able to send messages to dead letter queue.


#### canMessageCount
Informs if the queue is able to read number of messages.

> `public` get canMessageCount(): boolean

- **returns**: boolean - true if queue supports reading message count.


#### canPeek
Informs if the queue is able to peek messages.

> `public` get canPeek(): boolean

- **returns**: boolean - true if queue is able to peek messages.


#### canPeekBatch
Informs if the queue is able to peek multiple messages in one batch.

> `public` get canPeekBatch(): boolean

- **returns**: boolean - true if queue is able to peek multiple messages in one batch.


#### canReceive
Informs if the queue is able to receive messages.

> `public` get canReceive(): boolean

- **returns**: boolean - true if queue is able to receive messages.


#### canRenewLock
Informs if the queue is able to renew message lock.

> `public` get canRenewLock(): boolean

- **returns**: boolean - true if queue is able to renew message lock.


#### canSend
Informs if the queue is able to send messages.

> `public` get canSend(): boolean

- **returns**: boolean - true if queue is able to send messages.
