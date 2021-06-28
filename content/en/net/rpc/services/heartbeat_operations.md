---
type: docs
title: "HeartBeatOperations"
linkTitle: "HeartBeatOperations"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Handles the operations of a heartbeat service.
---

**Inherits:** [RestOperations](../rest_operations)

### Description

The HeartBeatOperations class is used to handle the operations of a heartbeat service.

### Instance methods

#### heartbeat
Creates a heartbeat.
Send request with the current time in UTC.

> `private` Task HeartbeatAsync(HttpRequest httpRequest, HttpResponse response, ClaimsPrincipal user)

- **request**: HttpRequest - an HTTP request.
- **response**: HttpResponse - an HTTP response.
- **user**: ClaimsPrincipal - to identify current user.


#### GetHeartbeatOperation
Gets the heartbeat operation

> `public` Func\<HttpRequest, HttpResponse, ClaimsPrincipal, Task\> GetHeartbeatOperation()

- **returns**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, Task\> - heartbeat operation
