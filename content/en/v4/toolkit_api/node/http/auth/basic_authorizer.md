---
type: docs
title: "BasicAuthorizer"
linkTitle: "BasicAuthorizer"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-http-node"
description: >
    Basic authorizer.
---

### Description

The BasicAuthorizer provides two methods: one to grant access to everyone and another to grant access to authorized users.

### Instance methods

#### anybody
Allows everyone access, even unauthorized users.
> `public` anybody(): (req: any, res: any, next: () => void) => void

- **returns**: (req: any, res: any, next: () => void) => void - returns anybody handler.

#### signed
Access is granted only to authorized users.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized.

> `public` signed(): (req: any, res: any, next: () => void) => void

- **returns**: (req: any, res: any, next: () => void) => void - returns sign handler.
