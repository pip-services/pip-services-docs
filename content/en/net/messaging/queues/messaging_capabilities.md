---
type: docs
title: "MessagingCapabilities"
linkTitle: "MessagingCapabilities"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-messaging-dotnet"
description: >
    Data object that contains supported capabilities of a message queue. 
---

### Description

The MessagingCapabilities class allows you to create data objects that contain supported capabilities of message queues.

**Important points**

- If certain capability is not supported, a queue will throw a NotImplemented exception.

### Constructors

Creates a new instance of the capabilities object.

> `public` MessagingCapabilities(bool canMessageCount, bool canSend, bool canReceive, bool canPeek, bool canPeekBatch, bool canRenewLock, bool canAbandon, bool canDeadLetter, bool canClear)



- **canMessageCount**: bool - true if the queue supports reading message count.
- **canSend**: bool - true if the queue is able to send messages.
- **canReceive**: bool - true if the queue is able to receive messages.
- **canPeek**: bool - true if the queue is able to peek messages.
- **canPeekBatch**: bool - true if the queue is able to peek multiple messages in one batch.
- **canRenewLock**: bool - true if the queue is able to renew message lock.
- **canAbandon**: bool - true if the queue is able to abandon messages.
- **canDeadLetter**: bool - true if the queue is able to send messages to the dead letter queue.
- **canClear**: bool - true if the queue can be cleared.


### Properties


#### CanAbandon
Informs if the queue is able to abandon messages.

> `public` bool CanAbandon [ get, private set ]


#### CanClear
Informs if the queue can be cleared.

> `public` bool CanClear [ get, private set ]


#### CanDeadLetter
Informs if the queue is able to send messages to the dead letter queue.

> `public` bool CanDeadLetter [ get, private set ]


#### CanMessageCount
Informs if the queue is able to read the number of messages.

> `public` get canMessageCount(): bool


#### CanMessageCount
Informs if the queue is able to peek messages.

> `public` bool CanMessageCount [ get, private set ]


#### CanPeekBatch
Informs if the queue is able to peek multiple messages in one batch.

> `public` bool CanPeekBatch [ get, private set ]


#### CanReceive
Informs if the queue is able to receive messages.

> `public` bool CanReceive [ get, private set ]


#### CanRenewLock
Informs if the queue is able to renew message lock.

> `public` bool CanRenewLock [ get, private set ]

#### CanSend
Informs if the queue is able to send messages.

> `public` bool CanSend [ get, private set ]
