---
type: docs
title: "IMqttMessageListener"
linkTitle: "IMqttMessageListener"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-mqtt-python"
description: >
    Interface for MQTT messages.

---


### Description

The IMqttMessageListener interface is used to create listeners for MQTT messages.


### Instance methods


#### on_message
Defines the actions to be done once a message is received.

> on_message(topic: str, partition: Any, packet: Any)

- **topic**: str - topic
- **message**: Any - message
- **packet**: Any - packet
