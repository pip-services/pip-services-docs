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

> on_message(topic: str, partition: int, message: Any)

- **topic**: str - topic
- **partition**: int - partition
- **message**: Any - message
