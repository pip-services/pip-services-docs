---
type: docs
title: "Kafka module"
gitUrl: "https://github.com/pip-services3-go/pip-services3-kafka-go"
no_list: true
weight: 500
description: > 
 A set of components for messaging using the Kafka protocol.
---

### Important points
* It contains the implementation of the components for working with messages: KafkaMessageQueue, KafkaConnectionResolver.

### Packages

The module contains the following packages:
- [**Build**](build) - default Factory for creating components
- [**Connect**](connect) - generate and resolve connection options
- [**Queues**](queues) - message queue that creates, sends and receives messages


### Use

Get the package from the Github repository:
```bash
go get -u github.com/pip-services3-go/pip-services3-kafka-go@latest
```
