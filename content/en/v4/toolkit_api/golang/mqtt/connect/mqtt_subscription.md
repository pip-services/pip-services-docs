---
type: docs
title: "MqttSubscription"
linkTitle: "MqttSubscription"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-mqtt-go"
description: >
    Defines subscription fields.

---

### Description

The MqttSubscription class defines the main fields for a subscription.

### Fields

<span class="hide-title-link">

#### topic
Topic
> **topic**: string;
#### Qos
Quality of service (QOS) for the message
> **Qos**: byte
#### listener
Listener
> **listener**: [IMqttMessageListener](../imqtt_message_listener)
#### Skip
Skip
> **Skip**: int32

</span>

