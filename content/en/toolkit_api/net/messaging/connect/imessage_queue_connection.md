---
type: docs
title: "IMessageQueueConnection"
linkTitle: "IMessageQueueConnection"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-messaging-dotnet"
description: >
    Defines an interface for message queue connections
---

### Description

The IMessageQueueConnection interface is used to create message queue connections.

### Instance methods

#### CreateQueueAsync
Creates a message queue.
If the connection doesn't support this function, it exits without error.

> Task CreateQueueAsync(string name)

- **name**: string - name of the queue to be created.

#### DeleteQueueAsync
Deletes a message queue.
If the connection doesn't support this function, it exits without error.

> Task DeleteQueueAsync(string name)

- **name**: string - name of the queue to be deleted.

#### ReadQueueNamesAsync
Reads a list of registered queue names. If the connection doesn't support this function returns an empty list.

> Task\<List\<string\>\> ReadQueueNamesAsync()

- **returns**: Task\<List\<string\>\> - list with registered queue names.

