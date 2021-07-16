---
type: docs
title: "INatsMessageListener"
linkTitle: "INatsMessageListener"
gitUrl: "https://github.com/pip-services3-go/pip-services3-nats-go"
description: >
    Defines a listener for NATS messages.

---


### Description

The INatsMessageListener interface defines a listener for NATS messages.


### Methods


#### OnMessage
Defines the actions to be done after a message is received

> OnMessage(message *nats.Msg)

- **message**: *nats.Msg - message
