---
type: docs
title: "BasicAuthorizer"
linkTitle: "BasicAuthorizer"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-rpc-dart"
description: >
    Basic authorizer.
---

### Description

The BasicAuthorizer provides two methods: one to grant access to everyone and another to grant access to authorized users.

### Instance methods

#### anybody
Allows everyone access, even unauthorized users.
> Future\<shelf.Response?\> anybody(shelf.Request req)

- **req**: shelf.Request - request context
- **returns**: Future\<shelf.Response?\> - returns anybody handler.

#### signed
Access is granted only to authorized users.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized.

> Future\<shelf.Response?\> signed(shelf.Request req, user)

- **req**: shelf.Request - request context
- **user**: dynamic - authorized users
- **returns**: Future\<shelf.Response?\> - returns sign handler.
