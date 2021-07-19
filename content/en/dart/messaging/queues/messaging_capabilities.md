---
type: docs
title: "MessagingCapabilities"
linkTitle: "MessagingCapabilities"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-messaging-dart"
description: >
    Data object that contains supported capabilities of a message queue. 
---

### Description

The MessagingCapabilities class allows you to create data objects that contain supported capabilities of message queues.

Important points

- If certain capability is not supported a queue will throw a NotImplemented exception.

### Constructors

Creates a new instance of the capabilities object.

> MessagingCapabilities(bool canMessageCount, bool canSend, bool canReceive, bool canPeek, bool canPeekBatch, bool canRenewLock, bool canAbandon, bool canDeadLetter, bool canClear)



- **canMessageCount**: bool - True if the queue supports reading message count.
- **canSend**: bool - True if the queue is able to send messages.
- **canReceive**: bool - True if the queue is able to receive messages.
- **canPeek**: bool - True if the queue is able to peek messages.
- **canPeekBatch**: bool - True if the queue is able to peek multiple messages in one batch.
- **canRenewLock**: bool - True if the queue is able to renew message lock.
- **canAbandon**: bool - True if the queue is able to abandon messages.
- **canDeadLetter**: bool - True if the queue is able to send messages to dead letter queue.
- **canClear**: bool - True if the queue can be cleared.


### Properties


#### canAbandon
Informs if the queue is able to abandon messages.

> bool get canAbandon

- **returns**: bool - True if the queue is able to abandon messages.


#### canClear
Informs if the queue can be cleared.

> bool get canClear

- **returns**: bool - True if the queue can be cleared.


#### canDeadLetter
Informs if the queue is able to send messages to dead letter queue.

> bool get canDeadLetter

- **returns**: bool - True if the queue is able to send messages to dead letter queue.


#### canMessageCount
Informs if the queue is able to read the number of messages.

> bool get canMessageCount

- **returns**: bool - True if the queue supports reading message count.


#### canPeek
Informs if the queue is able to peek messages.

> bool get canPeek

- **returns**: bool - True if the queue is able to peek messages.


#### canPeekBatch
Informs if the queue is able to peek multiple messages in one batch.

> bool get canPeekBatch

- **returns**: bool - True if the queue is able to peek multiple messages in one batch.


#### canReceive
Informs if the queue is able to receive messages.

> bool get canReceive

- **returns**: bool - True if the queue is able to receive messages.


#### canRenewLock
Informs if the queue is able to renew message lock.

> bool get canRenewLock

- **returns**: bool - True if the queue is able to renew message lock.


#### canSend
Informs if the queue is able to send messages.

> bool get canSend

- **returns**: bool - True if the queue is able to send messages.
