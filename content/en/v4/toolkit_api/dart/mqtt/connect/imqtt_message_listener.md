---
type: docs
title: "IMqttMessageListener"
linkTitle: "IMqttMessageListener"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-prometheus-dart"
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

