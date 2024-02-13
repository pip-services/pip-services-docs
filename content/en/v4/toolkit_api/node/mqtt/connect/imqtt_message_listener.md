---
type: docs
title: "IMqttMessageListener"
linkTitle: "IMqttMessageListener"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-mqtt-node"
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
