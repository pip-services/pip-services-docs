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
> Future\<bool\> anybody(angel.RequestContext req, angel.ResponseContext res)

- **req**: angel.RequestContext - request context
- **res**: angel.ResponseContext - response context
- **returns**: Future\<bool\> - returns anybody handler.

#### signed
Access is granted only to authorized users.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized.

> Future\<bool\> signed(angel.RequestContext req, angel.ResponseContext res, user)

- **req**: angel.RequestContext - request context
- **res**: angel.ResponseContext - response context
- **user**: dynamic - authorized users
- **returns**: Future\<bool\> - returns sign handler.
