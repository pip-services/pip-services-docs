---
type: docs
title: "HeartBeatOperations"
linkTitle: "HeartBeatOperations"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
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

> void heartbeat(angel.RequestContext req, angel.ResponseContext res)

- **req**: angel.RequestContext - request context
- **res**: angel.ResponseContext - response context


#### getHeartbeatOperation
Gets the heartbeat operation

> Function(angel.RequestContext req, angel.ResponseContext res) getHeartbeatOperation()

- **returns**: Function(angel.RequestContext req, angel.ResponseContext res) - heartbeat operation
