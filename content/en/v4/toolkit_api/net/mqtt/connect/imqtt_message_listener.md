---
type: docs
title: "IMqttMessageListener"
linkTitle: "IMqttMessageListener"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-postgres-dotnet"
description: >
    Interface for MQTT messages.

---


### Description

The IMqttMessageListener interface is used to create listeners for MQTT messages.


### Instance methods


#### OnMessage
Defines the actions to be done once a message is received.

> void OnMessage(MqttApplicationMessage message)

- **message**: MqttApplicationMessage - message
