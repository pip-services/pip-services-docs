---
type: docs
title: "IKafkaMessageListener"
linkTitle: "IKafkaMessageListener"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-kafka-node"
description: >
    Defines a Kafka message listerner.

---


### Description

The IKafkaMessageListener interface defines a Kafka message listener.


### Instance methods


#### onMessage
Defines the actions to be done after a message is received.

> onMessage(topic: string, partition: number, message: any): Promise\<void\>

- **topic**: string - topic
- **partition**: number - partition
- **message**: any - message
