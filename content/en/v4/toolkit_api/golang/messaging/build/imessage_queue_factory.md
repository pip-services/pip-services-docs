---
type: docs
title: "IMessageQueueFactory"
linkTitle: "IMessageQueueFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-memcached-go"
description: > 
    Creates message queue componens.
---

### Description

The IMessageQueueFactory interface allows you to create message queue components.

### Methods

#### CreateQueue

Creates a message queue component and assigns its name.

> CreateQueue(name string) [queues.IMessageQueue](../../queues/imessage_queue)

- **name**: string - name of the created message queue.
- **returns**: [queues.IMessageQueue](../../queues/imessage_queue) - message queue


### See also
- #### [IMessageQueue](../../queues/imessage_queue) 

