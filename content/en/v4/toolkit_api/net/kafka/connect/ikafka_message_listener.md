---
type: docs
title: "IKafkaMessageListener"
linkTitle: "IKafkaMessageListener"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-kafka-dotnet"
description: >
    Defines a Kafka message listerner.

---


### Description

The IKafkaMessageListener interface defines a Kafka message listener.


### Instance methods


#### OnMessage
Defines the actions to be done after a message is received.

> void OnMessage([KafkaMessage](../kafka_message) msg)

- **msg**: [KafkaMessage](../kafka_message) - kafka message
