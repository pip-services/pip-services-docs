---
type: docs
title: "RoleAuthorizer"
linkTitle: "RoleAuthorizer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    Provides methods to check on a user's roles.
---

### Description

The RoleAuthorizer class provides methods to check on user's roles.

### Instance methods

#### user_in_roles
Checks on the roles a user has been assigned.
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> user_in_roles(roles: List[str]): Callable

- **roles**: List[str] - roles list.
- **returns**: Callable - returns roles handler.

#### user_in_role
Checks if the role is assigned to the user.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> user_in_role(role: str): Callable

- **role**: str - user role.
- **returns**: Callable - returns role handler.


#### admin
Checks if the user has admin role.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> admin(): Callable

- **returns**: Callable - returns admin handler.
