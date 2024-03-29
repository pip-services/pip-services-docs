---
type: docs
title: "IMessageQueueFactory"
linkTitle: "IMessageQueueFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-messaging-node"
description: > 
    Creates message queue componens.
---

### Description

The IMessageQueueFactory interface allows you to create message queue components.

### Instance methods

#### createQueue

Creates a message queue component and assigns its name.

> createQueue(name: string): [IMessageQueue](../../queues/imessage_queue)

- **name**: string - name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - message queue


### See also
- #### [IMessageQueue](../../queues/imessage_queue) 
