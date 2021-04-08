---
type: docs
title: "IMessageQueueConnection"
linkTitle: "IMessageQueueConnection"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
---

Defines an interface for message queue connections

### Methods

#### createQueue
> createQueue(name: string, callback: function): void

Creates a message queue. If connection doesn't support this function it exists without error.

- name: string the name of the queue to be created.

- callback: function notifies about completion with error or null for success. 
    - (err: any): void
        - err: any

#### deleteQueue
> deleteQueue(name: string, callback: function): void

Deletes a message queue. If connection doesn't support this function it exists without error.

- name: string the name of the queue to be deleted.
- callback: function notifies about completion with error or null for success.
    - (err: any): void
        - err: any

#### readQueueNames
> readQueueNames(callback: function): void

Reads a list of registered queue names. If connection doesn't support this function returnes an empty list.

- callback: function to receive a list with registered queue names or an error.
    - (err: any, names: string[]): void
        - err: any
        - names: string[]

