---
type: docs
title: "RoleAuthorizer"
linkTitle: "RoleAuthorizer"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
description: >
    Provides methods to check on a user's roles.
---

### Description

The RoleAuthorizer class provides methods to check on a user's roles.

### Instance methods

#### userInRoles
Checks on the roles a user has been assigned.

> `public` AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> userInRoles(List<String> roles)

- **roles**: List<String> - roles list.
- **returns**: AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> - returns roles handler.

#### userInRole
Check if the role is assigned to the user.  

> `public` AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> userInRole(String role)

- **role**: String - the user role.
- **returns**: AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> - returns role handler.


#### admin
Check if the user has admin role.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> `public` AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> admin()

- **returns**: AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> - returns admin handler.
