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

Creates a new instance of the capabilities object.

> MessagingCapabilities(can_message_count: bool, can_send: bool, can_receive: bool, can_peek: bool, can_peek_batch: bool, can_renew_lock: bool, can_abandon: bool, can_dead_letter: bool, can_clear: bool)



- **can_message_count**: bool - True if the queue supports reading message count.
- **can_send**: bool - True if the queue is able to send messages.
- **can_receive**: bool - True if the queue is able to receive messages.
- **can_peek**: bool - True if the queue is able to peek messages.
- **can_peek_batch**: bool - True if the queue is able to peek multiple messages in one batch.
- **can_renew_lock**: bool - True if the queue is able to renew message lock.
- **can_abandon**: bool - True if the queue is able to abandon messages.
- **can_dead_letter**: bool - True if the queue is able to send messages to dead letter queue.
- **can_clear**: bool - True if the queue can be cleared.


### Properties


#### can_abandon
Informs if the queue is able to abandon messages.

> can_abandon(): bool

- **returns**: bool - True if the queue is able to abandon messages.


#### can_clear
Informs if the queue can be cleared.

> can_clear(): bool

- **returns**: bool - True if the queue can be cleared.


#### can_dead_letter
Informs if the queue is able to send messages to dead letter queue.

> can_dead_letter(): bool

- **returns**: bool - True if the queue is able to send messages to dead letter queue.


#### can_message_count
Informs if the queue is able to read the number of messages.

> can_message_count(): bool

- **returns**: bool - True if the queue supports reading message count.


#### can_peek
Informs if the queue is able to peek messages.

> can_peek(): bool

- **returns**: bool - True if the queue is able to peek messages.


#### can_peek_batch
Informs if the queue is able to peek multiple messages in one batch.

> can_peek_batch(): bool

- **returns**: bool - True if the queue is able to peek multiple messages in one batch.


#### can_receive
Informs if the queue is able to receive messages.

> can_receive(): bool

- **returns**: bool - True if the queue is able to receive messages.


#### can_renew_lock
Informs if the queue is able to renew message lock.

> can_renew_lock(): bool

- **returns**: bool - True if the queue is able to renew message lock.


#### can_send
Informs if the queue is able to send messages.

> can_send(): bool

- **returns**: bool - True if the queue is able to send messages.
