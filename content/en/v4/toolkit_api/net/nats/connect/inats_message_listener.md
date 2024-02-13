---
type: docs
title: "INatsMessageListener"
linkTitle: "INatsMessageListener"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-kafka-dotnet"
description: >
    Defines a listener for NATS messages.

---


### Description

The INatsMessageListener interface defines a listener for NATS messages.


### Instance methods


#### OnMessage
Defines the actions to be done after a message is received

> void OnMessage(object sender, MsgHandlerEventArgs e)

- **sender**: object - sender
- **e**: any - message event handler
