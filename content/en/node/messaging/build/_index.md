---
type: docs
title: "Build"
linkTitle: "Build"
no_list: true
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
    TODO: add description
---
---
<div class="module-body"> 

### Interfaces

#### [IMessageQueueFactory](imemory_message_queue_factory)
Creates message queue componens.

<br>

### Classes

#### [DefaultMessagingFactory](default_messaging_factory)
Creates [MemoryMessageQueue](../queues/memory_message_queue)  components by their descriptors.
Name of created message queue is taken from its descriptor.

#### [MemoryMessageQueueFactory](memory_message_queue_factory)
Creates [MemoryMessageQueue](../queues/memory_message_queue) components by their descriptors.
Name of created message queue is taken from its descriptor. 

#### [MessageQueueFactory](message_queue_factory)
Creates [IMessageQueue](../queues/imessage_queue) components by their descriptors.
Name of created message queue is taken from its descriptor.

</div>

