---
type: docs
title: "KafkaSubscription"
linkTitle: "KafkaSubscription"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-http-python"
description: >
    Defines fields for Kafka subscriptions.

---

### Description

The KafkaSubscription class defines fields for Kafka subscriptions.


### Fields

<span class="hide-title-link">

#### topic
topic
> **topic**: str
#### groupId
Group id
> **groupId**: str
#### options
Options
> **options**: Any
#### handler
Handler
> **handler**: [KafkaConsumer](https://kafka-python.readthedocs.io/en/master/apidoc/KafkaConsumer.html)
#### listener
Listener
> **listener**: [IKafkaMessageListener](../ikafka_message_listener)

</span>
