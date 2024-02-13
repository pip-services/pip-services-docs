---
type: docs
title: "RoleAuthorizer"
linkTitle: "RoleAuthorizer"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-http-node"
description: >
    Provides methods to check on a user's roles.
---

### Description

The RoleAuthorizer class provides methods to check on a user's roles.

### Instance methods

#### userInRoles
Checks on the roles a user has been assigned.
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> `public` userInRoles(roles: string[]): (req: any, res: any, next: () => void) => void

- **roles**: string[] - roles list.
- **returns**: (req: any, res: any, next: () => void) => void - returns roles handler.

#### userInRole
Check if the role is assigned to the user.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> `public` userInRole(role: string): (req: any, res: any, next: () => void) => void

- **role**: string - the user role.
- **returns**: (req: any, res: any, next: () => void) => void - returns role handler.


#### admin
Check if the user has admin role.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> `public` admin(): (req: any, res: any, next: () => void) => void

- **returns**: (req: any, res: any, next: () => void) => void - returns admin handler.
