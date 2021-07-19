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

> Future\<bool\> userInRoles(angel.RequestContext req, angel.ResponseContext res, user, List\<String\> roles)

- **req**: angel.RequestContext - request context
- **res**: angel.ResponseContext - response context
- **user**: dynamic - authorized users
- **roles**: List\<String\> - roles list.
- **returns**: Future\<bool\> => void - returns roles handler.

#### userInRole
Check if the role is assigned to the user.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> Future\<bool\> userInRole(angel.RequestContext req, angel.ResponseContext res, user, String role)

- **req**: angel.RequestContext - request context
- **res**: angel.ResponseContext - response context
- **user**: dynamic - authorized users
- **role**: String - the user role.
- **returns**: Future\<bool\> - returns role handler.


#### admin
Check if the user has admin role.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> Future\<bool\> admin(angel.RequestContext req, angel.ResponseContext res, user)

- **req**: angel.RequestContext - request context
- **res**: angel.ResponseContext - response context
- **user**: dynamic - authorized users
- **returns**: Future\<bool\> - returns admin handler.
