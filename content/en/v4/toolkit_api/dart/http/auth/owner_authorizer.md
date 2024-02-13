---
type: docs
title: "OwnerAuthorizer"
linkTitle: "OwnerAuthorizer"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-http-dart"
description: >
    Access granting methods for owners and administrators.
---

### Description

The OwnerAuthorizer class provides access granting methods for owners and administrators.

### Instance methods

#### owner
Access is granted only for the session owner.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> Future\<shelf.Response?\> owner(shelf.Request req, user, {String idParam = 'user_id'})

- **req**: shelf.Request - request context
- **user**: dynamic - authorized users
- **idParam**: String - id of the current owner.
- **returns**: Future\<shelf.Response?\> - returns owner handler.

#### ownerOrAdmin
Access is granted only to authorized users.   
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> Future\<shelf.Response?\> ownerOrAdmin(shelf.Request, user, {String idParam = 'user_id'})

- **req**: shelf.Request - request context
- **user**: dynamic - authorized users
- **idParam**: string - id of the current owner.
- **returns**: Future\<shelf.Response?\> - returns owner or admin handler.
