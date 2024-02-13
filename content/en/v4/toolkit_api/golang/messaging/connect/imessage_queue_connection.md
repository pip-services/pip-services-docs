---
type: docs
title: "IMessageQueueConnection"
linkTitle: "IMessageQueueConnection"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-memcached-go"
description: >
    Defines an interface for message queue connections
---

### Description

The IMessageQueueConnection interface is used to create message queue connections.

### Methods

#### CreateQueue
Creates a message queue.
If connection doesn't support this function, it exits without error.

> CreateQueue(name string) error

- **name**: string - name of the queue to be created.
- **returns**: error - returns error if not created.

#### DeleteQueue
Deletes a message queue.
If connection doesn't support this function, it exits without error.

> DeleteQueue(name string) error

- **name**: string - name of the queue to be deleted.
- **returns**: error - returns error if not deleted.

#### ReadQueueNames
Reads a list of registered queue names. If connection doesn't support this function returns an empty list.

> ReadQueueNames() ([]string, error)

- **returns**: ([]string, error) - list with registered queue names.


