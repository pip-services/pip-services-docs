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
Sends requests with the current time in UTC.

> Future\<shelf.Response\> Function(shelf.Request req) getHeartbeatOperation()

- **returns**: Future\<shelf.Response\> Function(shelf.Request req) - function that takes request and receive response


#### getHeartbeatOperation
Gets the heartbeat operation.

> FutureOr\<shelf.Response\> heartbeat(shelf.Request req)

- **req**: shelf.Request - HTTP request to process.
- **returns**: FutureOr\<shelf.Response\> - heartbeat operation
