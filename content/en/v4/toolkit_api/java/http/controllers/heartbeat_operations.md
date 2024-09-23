---
type: docs
title: "HeartBeatOperations"
linkTitle: "HeartBeatOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
description: >
    Handles the operations of a heartbeat service.
---

**Extends:** [RestOperations](../rest_operations)

### Description

The HeartBeatOperations class is used to handle the operations of a heartbeat service.

### Instance methods

#### heartbeat
Creates a heartbeat.
Send request with the current time in UTC.

> `public` Response heartbeat(ContainerRequestContext req)
- **req**: ContainerRequestContext - an HTTP request
- **res**: Response - an HTTP response


#### getHeartbeatOperation
Gets the heartbeat operation

> `public` Function<ContainerRequestContext, Response> getHeartbeatOperation()

- **returns**: function - heartbeat operation
