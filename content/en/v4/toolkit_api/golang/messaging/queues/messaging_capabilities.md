---
type: docs
title: "MessagingCapabilities"
linkTitle: "MessagingCapabilities"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-memcached-go"
description: >
    Data object that contains supported capabilities of a message queue. 
---

### Description

The MessagingCapabilities class allows you to create data objects that contain supported capabilities of message queues.

Important points

- If certain capability is not supported a queue will throw a NotImplemented exception.

### Constructors

#### NewMessagingCapabilities
Creates a new instance of the capabilities object.

> NewMessagingCapabilities(canMessageCount bool, canSend bool, canReceive bool, canPeek bool, canPeekBatch bool, canRenewLock bool, canAbandon bool, canDeadLetter bool, canClear bool) [*MessagingCapabilities]()



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


#### CanAbandon
Informs if the queue is able to abandon messages.

> (c [*MessagingCapabilities]()) CanAbandon() bool

- **returns**: bool - True if the queue is able to abandon messages.


#### CanClear
Informs if the queue can be cleared.

> (c [*MessagingCapabilities]()) CanClear() bool

- **returns**: bool - True if the queue can be cleared.


#### CanDeadLetter
Informs if the queue is able to send messages to dead letter queue.

> (c [*MessagingCapabilities]()) CanDeadLetter() bool

- **returns**: bool - True if the queue is able to send messages to dead letter queue.


#### CanMessageCount
Informs if the queue is able to read the number of messages.

> (c [*MessagingCapabilities]()) CanMessageCount() bool

- **returns**: bool - True if the queue supports reading message count.


#### CanPeek
Informs if the queue is able to peek messages.

> (c [*MessagingCapabilities]()) CanPeek() bool

- **returns**: bool - True if the queue is able to peek messages.


#### CanPeekBatch
Informs if the queue is able to peek multiple messages in one batch.

> (c [*MessagingCapabilities]()) CanPeekBatch() bool

- **returns**: bool - True if the queue is able to peek multiple messages in one batch.


#### CanReceive
Informs if the queue is able to receive messages.

> (c [*MessagingCapabilities]()) CanReceive() bool

- **returns**: bool - True if the queue is able to receive messages.


#### CanRenewLock
Informs if the queue is able to renew message lock.

> (c [*MessagingCapabilities]()) CanRenewLock() bool

- **returns**: bool - True if the queue is able to renew message lock.


#### CanSend
Informs if the queue is able to send messages.

> (c [*MessagingCapabilities]()) CanSend() bool

- **returns**: bool - True if the queue is able to send messages.

