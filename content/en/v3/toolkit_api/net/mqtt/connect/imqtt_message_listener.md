---
type: docs
title: "IMqttMessageListener"
linkTitle: "IMqttMessageListener"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-mqtt-dotnet"
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
