---
type: docs
title: "OwnerAuthorizer"
linkTitle: "OwnerAuthorizer"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-rpc-nodex"
description: >
    Access granting methods for owners and administrators.
---

### Description

The OwnerAuthorizer class provides access granting methods for owners and administrators.

### Instance methods

#### owner
Access is granted only for the session owner.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> `public` owner(idParam: string = 'user_id'): (req: any, res: any, next: () => void) => void

- **idParam**: string - id of the current owner.
- **returns**: (req: any, res: any, next: () => void) => void - returns owner handler.

#### ownerOrAdmin
Access is granted only to authorized users.   
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> `public` ownerOrAdmin(idParam: string = 'user_id'): (req: any, res: any, next: () => void) => void

- **idParam**: string - id of the current owner.
- **returns**: (req: any, res: any, next: () => void) => void - returns owner or admin handler.