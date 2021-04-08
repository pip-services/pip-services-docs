---
type: docs
title: "MessagingCapabilities"
linkTitle: "MessagingCapabilities"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
---

Data object that contains supported capabilities of a message queue. If certain capability is not supported a queue will throw NotImplemented exception.

### Constructors

> new MessagingCapabilities(canMessageCount: boolean, canSend: boolean, canReceive: boolean, canPeek: boolean, canPeekBatch: boolean, canRenewLock: boolean, canAbandon: boolean, canDeadLetter: boolean, canClear: boolean): [MessagingCapabilities]()

Creates a new instance of the capabilities object.

- canMessageCount: boolean true if queue supports reading message count.
- canSend: boolean true if queue is able to send messages.
- canReceive: boolean true if queue is able to receive messages.
- canPeek: boolean true if queue is able to peek messages.
- canPeekBatch: boolean true if queue is able to peek multiple messages in one batch.
- canRenewLock: boolean true if queue is able to renew message lock.
- canAbandon: boolean true if queue is able to abandon messages.
- canDeadLetter: boolean true if queue is able to send messages to dead letter queue.
- canClear: boolean true if queue can be cleared.
- Returns [MessagingCapabilities]()


### Methods

#### canAbandon
> canAbandon(): boolean

Informs if the queue is able to abandon messages.

- Returns boolean true if queue is able to abandon.

#### canClear
> canClear(): boolean

Informs if the queue can be cleared.
 
- Returns boolean true if queue can be cleared.

#### canDeadLetter
> canDeadLetter(): boolean

Informs if the queue is able to send messages to dead letter queue.

- Returns boolean true if queue is able to send messages to dead letter queue.

#### canMessageCount
> canMessageCount(): boolean

Informs if the queue is able to read number of messages.

- Returns boolean true if queue supports reading message count.

#### canPeek
> canPeek(): boolean

Informs if the queue is able to peek messages.

- Returns boolean true if queue is able to peek messages.

#### canPeekBatch
> canPeekBatch(): boolean

Informs if the queue is able to peek multiple messages in one batch.

- Returns boolean true if queue is able to peek multiple messages in one batch.

#### canReceive
> canReceive(): boolean

Informs if the queue is able to receive messages.

- Returns boolean true if queue is able to receive messages.

#### canRenewLock
> canRenewLock(): boolean

Informs if the queue is able to renew message lock.

- Returns boolean true if queue is able to renew message lock.

#### canSend
> canSend(): boolean

Informs if the queue is able to send messages.

- Returns boolean true if queue is able to send messages.