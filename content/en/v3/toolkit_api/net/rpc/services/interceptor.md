---
type: docs
title: "Interceptor"
linkTitle: "Interceptor"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Stores interceptors for routes.
---

### Description

The Interceptor class is used to store interceptors for routes.
### Properties

#### Route
Route
> `public` string Route { get; set; }

#### Action
Action
> `public` Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Task\>, Task\> Action { get; set; }



