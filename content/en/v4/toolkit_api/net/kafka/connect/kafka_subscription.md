---
type: docs
title: "KafkaSubscription"
linkTitle: "KafkaSubscription"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-kafka-dotnet"
description: >
    Defines fields for Kafka subscriptions.

---

### Description

The KafkaSubscription class defines fields for Kafka subscriptions.


### Properties


#### Topic
Topic
> `public` string Topic { get; set; }

#### GroupId
Group id
> `public` string GroupId { get; set; }

#### Handler
Handler
> `public` IConsumer\<byte[],byte[]\> Handler { get; set; }

#### Listener
Listener
> `public` [IKafkaMessageListener](../ikafka_message_listener) Listener { get; set; }

#### Token
Token
> `public` CancellationTokenSource Token { get; set; }
