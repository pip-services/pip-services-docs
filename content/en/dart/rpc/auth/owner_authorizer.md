---
type: docs
title: "OwnerAuthorizer"
linkTitle: "OwnerAuthorizer"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
description: >
    Access granting methods for owners and administrators.
---

### Description

The OwnerAuthorizer class provides access granting methods for owners and administrators.

### Instance methods

#### owner
Access is granted only for the session owner.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> Future\<bool\> owner(angel.RequestContext req, angel.ResponseContext res, user, {String idParam = 'user_id'})

- **req**: angel.RequestContext - request context
- **res**: angel.ResponseContext - response context
- **user**: dynamic - authorized users
- **idParam**: String - id of the current owner.
- **returns**: Future\<bool\> - returns owner handler.

#### ownerOrAdmin
Access is granted only to authorized users.   
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> Future\<bool\> ownerOrAdmin(angel.RequestContext req, angel.ResponseContext res, user, {String idParam = 'user_id'})

- **req**: angel.RequestContext - request context
- **res**: angel.ResponseContext - response context
- **user**: dynamic - authorized users
- **idParam**: string - id of the current owner.
- **returns**: (req: any, res: any, next: () => void) => void - returns owner or admin handler.