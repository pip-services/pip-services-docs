---
type: docs
title: "IMessageQueueConnection"
linkTitle: "IMessageQueueConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-messaging-java"
description: >
    Defines an interface for message queue connections
---

### Description

The IMessageQueueConnection interface is used to create message queue connections.

### Instance methods

#### createQueue
Creates a message queue.
If connection doesn't support this function, it exits without error.

> void createQueue(String name)

- **name**: String - name of the queue to be created.

#### deleteQueue
Deletes a message queue.
If connection doesn't support this function, it exits without error.

> void deleteQueue(String name)

- **name**: String - name of the queue to be deleted.

#### readQueueNames
Reads a list of registered queue names. If connection doesn't support this function returns an empty list.

> List<String> readQueueNames()

- **returns**: List<String> - list with registered queue names.

