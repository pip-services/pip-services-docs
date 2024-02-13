---
type: docs
title: "RoleAuthorizer"
linkTitle: "RoleAuthorizer"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-http-go"
description: >
    Provides methods to check on a user's roles.
---

### Description

The RoleAuthorizer class provides methods to check on a user's roles.

### Instance methods

#### userInRoles
Checks on the roles a user has been assigned.

> UserInRoles(roles []string) func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc)

- **roles**: string[] - roles list.
- **returns**: (c [*RoleAuthorizer]())  - returns roles handler.

#### userInRole
Check if the role is assigned to the user.  

> UserInRole(role string) func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc)

- **role**: string - the user role.
- **returns**: (c [*RoleAuthorizer]())  - returns role handler.


#### admin
Check if the user has admin role.  

> Admin() func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc)

- **returns**: (c [*RoleAuthorizer]()) - returns admin handler.
