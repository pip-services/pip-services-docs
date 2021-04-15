---
type: docs
title: "MessagingCapabilities"
linkTitle: "MessagingCapabilities"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
description: >
    Data object that contains supported capabilities of a message queue. If certain capability is not supported a queue will throw NotImplemented exception.
---


### Constructors

> constructor(canMessageCount: boolean, canSend: boolean, canReceive: boolean, canPeek: boolean, canPeekBatch: boolean, canRenewLock: boolean, canAbandon: boolean, canDeadLetter: boolean, canClear: boolean): [MessagingCapabilities]()

Creates a new instance of the capabilities object.

- **canMessageCount**: boolean true if queue supports reading message count.
- **canSend**: boolean true if queue is able to send messages.
- **canReceive**: boolean true if queue is able to receive messages.
- **canPeek**: boolean true if queue is able to peek messages.
- **canPeekBatch**: boolean true if queue is able to peek multiple messages in one batch.
- **canRenewLock**: boolean true if queue is able to renew message lock.
- **canAbandon**: boolean true if queue is able to abandon messages.
- **canDeadLetter**: boolean true if queue is able to send messages to dead letter queue.
- **canClear**: boolean true if queue can be cleared.
- **Returns** [MessagingCapabilities]()


### Methods


#### canAbandon
Informs if the queue is able to abandon messages.

> canAbandon(): boolean

- **Returns** boolean true if queue is able to abandon.


#### canClear
Informs if the queue can be cleared.

> canClear(): boolean

- **Returns** boolean true if queue can be cleared.


#### canDeadLetter
Informs if the queue is able to send messages to dead letter queue.

> canDeadLetter(): boolean

- **Returns** boolean true if queue is able to send messages to dead letter queue.


#### canMessageCount
Informs if the queue is able to read number of messages.

> canMessageCount(): boolean

- **Returns** boolean true if queue supports reading message count.


#### canPeek
Informs if the queue is able to peek messages.

> canPeek(): boolean

- **Returns** boolean true if queue is able to peek messages.


#### canPeekBatch
Informs if the queue is able to peek multiple messages in one batch.

> canPeekBatch(): boolean

- **Returns** boolean true if queue is able to peek multiple messages in one batch.


#### canReceive
Informs if the queue is able to receive messages.

> canReceive(): boolean

- **Returns** boolean true if queue is able to receive messages.


#### canRenewLock
Informs if the queue is able to renew message lock.

> canRenewLock(): boolean

- **Returns** boolean true if queue is able to renew message lock.


#### canSend
Informs if the queue is able to send messages.

> canSend(): boolean

- **Returns** boolean true if queue is able to send messages.