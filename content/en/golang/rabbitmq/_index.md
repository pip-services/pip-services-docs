---
type: docs
title: "RabbitMQ module"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rabbitmq-go"
no_list: true
weight: 30
description: > 
    RabbitMQ specific components for Golang.

    This library is a part of [Pip.Services](https://github.com/pip-services/pip-services) project.
    The RabbitMQ module contains a set of components for working with the message queue in RabbitMQ through the AMQP protocol.
---

### Packages

The module contains the following packages:
- [**Build**](build) - Factory for constructing module components
- [**Connect**](connect) - Message Queuing components that implement the standard [Messaging](https://github.com/pip-services3-go/pip-services3-messaging-go) module interface
- [**Queues**](queues) - components of working with a message queue via the RabbitMQ protocol


### Use

Get the package from the Github repository:
```bash
go get -u github.com/pip-services3-go/pip-services3-rabbitmq-go@latest
```
