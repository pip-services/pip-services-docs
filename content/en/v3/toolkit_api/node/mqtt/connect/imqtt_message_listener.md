---
type: docs
title: "IMqttMessageListener"
linkTitle: "IMqttMessageListener"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-mqtt-nodex"
description: >
    Interface for MQTT messages.

---


### Description

The IMqttMessageListener interface is used to create listeners for MQTT messages.


### Instance methods


#### onMessage
Defines the actions to be done once a message is received.

> onMessage(topic: string, message: any, packet: any): Promise\<void\>

- **topic**: string - topic
- **message**: number - partition
- **packet**: any - message
