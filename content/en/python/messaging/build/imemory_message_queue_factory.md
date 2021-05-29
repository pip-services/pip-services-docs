---
type: docs
title: "IMessageQueueFactory"
linkTitle: "IMessageQueueFactory"
gitUrl: "https://github.com/pip-services3-python/pip-services3-messaging-python"
description: > 
    Creates message queue componens.
---

### Description

The IMessageQueueFactory interface allows you to create message queue components.

### Instance methods

#### create_queue

Creates a message queue component and assigns its name.

> create_queue(name: str): [IMessageQueue](../../queues/imessage_queue)

- **name**: str - name of the created message queue.
- **returns**: [IMessageQueue](../../queues/imessage_queue) - message queue


### See also
- #### [IMessageQueue](../../queues/imessage_queue)
