---
type: docs
title: "StatusOperations"
linkTitle: "StatusOperations"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Handles status requests for REST operations.
---

**Inherits:** [RestOperations](../rest_operations)

### Description

The StatusOperations class allows you to handle status requests for REST operations.  

### Instance methods

#### GetStatusOperation
Gets the status of the operation.

> `public` Func\<HttpRequest, HttpResponse, ClaimsPrincipal, Task\> GetStatusOperation()

- **returns**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, Task\> - status operation method


#### SetReferences
Sets references to dependent components.

> `public new` void SetReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.


#### StatusAsync
Handles status requests.

> `public` Task StatusAsync(HttpRequest request, HttpResponse response, ClaimsPrincipal user)
- **request**: HttpRequest - an HTTP request.
- **response**: HttpResponse - an HTTP response.
- **user**: ClaimsPrincipal - to identify current user.
