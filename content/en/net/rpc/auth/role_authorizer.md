---
type: docs
title: "RoleAuthorizer"
linkTitle: "RoleAuthorizer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-rpc-dotnet"
description: >
    Provides methods to check on a user's roles.
---

### Description

The RoleAuthorizer class provides methods to check on a user's roles.

### Instance methods

#### UserInRoles
Checks on the roles a user has been assigned.
Throws an [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> `public` Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> UserInRoles(string[] roles)

- **roles**: string[] - roles list.
- **returns**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> - returns roles handler.

#### UserInRole
Check if the role is assigned to the user.  
Throws an [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> `public` Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> UserInRole(string role)

- **role**: string - the user role.
- **returns**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> - returns role handler.


#### Admin
Check if the user has admin role.  
Throws an [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> `public` Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> Admin()

- **returns**: Func\<HttpRequest, HttpResponse, ClaimsPrincipal, RouteData, Func\<Task\>, Task\> - returns admin handler.
