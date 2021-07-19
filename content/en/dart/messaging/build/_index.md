---
type: docs
title: "Build"
linkTitle: "Build"
no_list: true
gitUrl: "https://github.com/pip-services3-dart/pip-services3-messaging-dart"
description: >
    This package contains interfaces and classes used to create message components.
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
The name of the created message queue is taken from its descriptor.

#### [MemoryMessageQueueFactory](memory_message_queue_factory)
Creates [MemoryMessageQueue](../queues/memory_message_queue) components by their descriptors.
The name of the created message queue is taken from its descriptor. 

#### [MessageQueueFactory](message_queue_factory)
Creates [IMessageQueue](../queues/imessage_queue) components by their descriptors.
The name of created message queue is taken from its descriptor.

</div>

