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

> onMessage(topic: string, partition: number, message: any): Promise\<void\>

- **topic**: string - topic
- **partition**: number - partition
- **message**: any - message
