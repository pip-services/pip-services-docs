---
type: docs
title: "IMessageQueueConnection"
linkTitle: "IMessageQueueConnection"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-messaging-nodex"
description: >
    Defines an interface for message queue connections
---

### Methods

#### createQueue
Creates a message queue.
If connection doesn't support this function it exists without error.

> `public` createQueue(name: string): Promise\<void\>

- **name**: string - the name of the queue to be created.

#### deleteQueue
Deletes a message queue.
If connection doesn't support this function it exists without error.

> `public` deleteQueue(name: string): Promise\<void\>

- **name**: string - the name of the queue to be deleted.

#### readQueueNames
Reads a list of registered queue names. If connection doesn't support this function returnes an empty list.

> `public` readQueueNames(): Promise<string[]>

- **returns**: Promise<string[]> - a list with registered queue names.

