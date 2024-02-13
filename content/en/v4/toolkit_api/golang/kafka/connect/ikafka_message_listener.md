---
type: docs
title: "IKafkaMessageListener"
linkTitle: "IKafkaMessageListener"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-kafka-go"
description: >
    Defines a Kafka message listerner.

---

**Implements:** kafka.ConsumerGroupSession

### Description

The IKafkaMessageListener interface defines a Kafka message listener.

### Methods

#### Setup
Setup is run at the beginning of a new session, before ConsumeClaim.

> Setup(session kafka.ConsumerGroupSession) error

- **session**: kafka.ConsumerGroupSession - kafka session object.
- **returns**: error - setup error.

#### Cleanup
Cleanup is run at the end of a session, once all ConsumeClaim goroutines have exited
but before the offsets are committed for the very last time.

> Cleanup(session kafka.ConsumerGroupSession) error

- **session**: kafka.ConsumerGroupSession - kafka session object.
- **returns**: error - setup error.

#### ConsumeClaim
ConsumeClaim must start a consumer loop of ConsumerGroupClaim's Messages().
Once the Messages() channel is closed, the Handler must finish its processing
loop and exit.

> ConsumeClaim(session kafka.ConsumerGroupSession, group kafka.ConsumerGroupClaim) error

- **session**: kafka.ConsumerGroupSession - kafka session object.
- **group**: kafka.ConsumerGroupClaim - kafka consumer group.
- **returns**: error - setup error.

#### Ready
Gets channel with flag.
> Ready() chan bool

- **returns**: chan bool - channel with bool flag ready.

#### SetReady
Set new channel for consumer

> SetReady(chFlag chan bool)

- **chFlag**: chan bool - channel with ready flag value.
