---
type: docs
title: "IMqttMessageListener"
linkTitle: "IMqttMessageListener"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-mqtt-dart"
description: >
    Interface for MQTT messages.

---


### Description

The IMqttMessageListener interface is used to create listeners for MQTT messages.


### Instance methods


#### onMessage
Defines the actions to be done once a message is received.

> void onMessage(String topic, String message, packet)

- **topic**: String - topic
- **message**: String - message
- **packet**: dynamic - message
