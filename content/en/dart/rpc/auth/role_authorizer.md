---
type: docs
title: "RoleAuthorizer"
linkTitle: "RoleAuthorizer"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
description: >
    Provides methods to check on a user's roles.
---

### Description

The RoleAuthorizer class provides methods to check on a user's roles.

### Instance methods

#### userInRoles
Checks on the roles a user has been assigned.
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> Future\<shelf.Response?\> userInRoles(shelf.Request req, user, List\<String\> roles)

- **req**: shelf.Request - request context
- **user**: dynamic - authorized users
- **roles**: List\<String\> - roles list.
- **returns**: Future\<shelf.Response?\> - returns roles handler.

#### userInRole
Check if the role is assigned to the user.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> Future\<shelf.Response?\> userInRole(shelf.Request req, user, String role)

- **req**: shelf.Request - request context
- **user**: dynamic - authorized users
- **role**: String - user's role.
- **returns**: Future\<shelf.Response?\> - returns role handler.


#### admin
Check if the user has admin role.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> Future\<shelf.Response?\> admin(shelf.Request req, user)

- **req**: shelf.Request - request context
- **user**: dynamic - authorized users
- **returns**: Future\<shelf.Response?\> - returns admin handler.
