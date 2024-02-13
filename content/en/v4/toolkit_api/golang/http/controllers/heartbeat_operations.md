---
type: docs
title: "HeartBeatOperations"
linkTitle: "HeartBeatOperations"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-http-go"
description: >
    Handles the operations of a heartbeat service.
---

**Implements:** [RestOperations](../rest_operations)

### Description

The HeartBeatOperations class is used to handle the operations of a heartbeat service.

### Constructors

#### NewHeartbeatOperations
NewHeartbeatOperations creates new instance HeartbeatOperations

> NewHeartbeatOperations() [*HeartbeatOperations]()

### Methods

#### Heartbeat
Creates a heartbeat.
Send request with the current time in UTC.

> (c [*HeartbeatOperations]()) Heartbeat(res http.ResponseWriter, req *http.Request)
- **res**: http.ResponseWriter - an HTTP request
- **res**: req *http.Request - an HTTP response


#### GetHeartbeatOperation
Gets the heartbeat operation

> (c [*HeartbeatOperations]()) GetHeartbeatOperation() func(res http.ResponseWriter, req *http.Request)

- **returns**: func(res http.ResponseWriter, req *http.Request) - heartbeat operation

