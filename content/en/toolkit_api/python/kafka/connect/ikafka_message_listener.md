---
type: docs
title: "IKafkaMessageListener"
linkTitle: "IKafkaMessageListener"
gitUrl: "https://github.com/pip-services3-python/pip-services3-kafka-python"
description: >
    Defines a Kafka message listerner.

---


### Description

The IKafkaMessageListener interface defines a Kafka message listener.


### Instance methods


#### on_message
Defines the actions to be done after a message is received.

> on_message(topic: str, partition: int, message: [Message](https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#message))

- **topic**: str - topic
- **partition**: int - partition
- **message**: [Message](https://docs.confluent.io/platform/current/clients/confluent-kafka-python/html/index.html#message) - message
