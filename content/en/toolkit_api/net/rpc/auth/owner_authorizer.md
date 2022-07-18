---
type: docs
title: "OwnerAuthorizer"
linkTitle: "OwnerAuthorizer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Access granting methods for owners and administrators.
---

### Description

The OwnerAuthorizer class provides access granting methods for owners and administrators.

### Instance methods

#### Owner
Access is granted only for the session owner.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> `public` Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> Owner(string idParam = "user_id")

- **idParam**: string - id of the current owner.
- **returns**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> - returns owner handler.

#### OwnerOrAdmin
Access is granted only to authorized users.   
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> `public` Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> OwnerOrAdmin(string idParam = "user_id")

- **idParam**: string - id of the current owner.
- **returns**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> - returns owner or admin handler.