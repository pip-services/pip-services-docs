---
type: docs
title: "HeartBeatOperations"
linkTitle: "HeartBeatOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-http-python"
description: >
    Handles the operations of a heartbeat service.
---

**Implements:** [RestOperations](../rest_operations)

### Description

The HeartBeatOperations class is used to handle the operations of a heartbeat service.

### Instance methods

#### heartbeat
Creates a heartbeat.

> heartbeat(): str

- **returns**: str - string with the current time in UTC.


#### get_heart_beat_operation
Gets the heartbeat operation

> get_heart_beat_operation(): Callable

- **returns**: Callable - heartbeat operation
