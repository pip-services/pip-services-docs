---
type: docs
title: "BasicAuthorizer"
linkTitle: "BasicAuthorizer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Basic authorizer.
---

### Description

The BasicAuthorizer class contains two methods: one to grant access to everyone and another to grant access to authorized users.

### Instance methods

#### Anybody
Allows everyone access, even unauthorized users.
> `public` Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> Anybody()

- **returns**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> - returns anybody handler.

#### Signed
Access is granted only to authorized users.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized.

> `public` Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> Signed()

- **returns**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> - returns sign handler.
