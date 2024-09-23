---
type: docs
title: "Messaging module"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-messaging-java"
no_list: true
weight: 90
description: > 
      A set of interfaces and classes for working with message queues, as well as an in-memory message queue implementation. 
---

### Modules

The module contains the following packages:

- [**Build**](build) - in-memory message queue factory
- [**Queues**](queues) - contains interfaces for working with message queues, subscriptions for receiving messages from the queue, and an in-memory message queue implementation.
- [**Connect**](connect) - contains an interface used to create message queue connections
- [**Test**](test) - contains a class used to test message reception

### Use
Add dependency to the pom.xml:
```xml
<dependency>
  <groupId>org.pipservices</groupId>
  <artifactId>pip-services4-messaging</artifactId>
  <version>[0.0.1,)</version>
</dependency>
```

