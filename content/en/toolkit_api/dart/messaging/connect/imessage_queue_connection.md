---
type: docs
title: "IMessageQueueConnection"
linkTitle: "IMessageQueueConnection"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-messaging-dart"
description: >
    Defines an interface for message queue connections
---

### Description

The IMessageQueueConnection interface is used to create message queue connections.

### Instance methods

#### createQueue
Creates a message queue.
If the connection doesn't support this function, it exits without error.

> Future\<void\> createQueue(String name)

- **name**: String - name of the queue to be created.

#### deleteQueue
Deletes a message queue.
If the connection doesn't support this function, it exits without error.

> Future\<void\> deleteQueue(String name)

- **name**: String - name of the queue to be deleted.

#### readQueueNames
Reads a list of registered queue names. If the connection doesn't support this function returns an empty list.

> Future\<List\<String\>\> readQueueNames()

- **returns**: Future\<List\<String\>\> - list with the registered queue names.

