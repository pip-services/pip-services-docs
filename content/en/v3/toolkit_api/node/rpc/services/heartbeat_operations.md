---
type: docs
title: "HeartBeatOperations"
linkTitle: "HeartBeatOperations"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
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

> `public` heartbeat(req, res): void
- **req**: any - an HTTP request
- **res**: any - an HTTP response


#### getHeartbeatOperation
Gets the heartbeat operation

> `public` getHeartbeatOperation(): function

- **returns**: function - heartbeat operation
