---
type: docs
title: "IMessageQueueConnection"
linkTitle: "IMessageQueueConnection"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
description: >
    Defines an interface for message queue connections
---

### Methods

#### createQueue
Creates a message queue. If connection doesn't support this function it exists without error.

> createQueue(name: string, callback: function): void

- **name**: string the name of the queue to be created.
- **callback**: function notifies about completion with error or null for success. 

#### deleteQueue
Deletes a message queue. If connection doesn't support this function it exists without error.

> deleteQueue(name: string, callback: function): void

- **name**: string the name of the queue to be deleted.
- **callback**: function notifies about completion with error or null for success.

#### readQueueNames
Reads a list of registered queue names. If connection doesn't support this function returnes an empty list.

> readQueueNames(callback: function): void

- **callback**: function to receive a list with registered queue names or an error.

