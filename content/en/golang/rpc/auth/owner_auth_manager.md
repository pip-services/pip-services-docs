---
type: docs
title: "OwnerAuthManager"
linkTitle: "OwnerAuthManager"
gitUrl: "https://github.com/pip-services3-go/pip-services3-rpc-go"
description: >
    Access granting methods for owners and administrators.
---

### Description

The OwnerAuthManager class provides access granting methods for owners and administrators.

### Methods

#### Owner
Access is granted only for the session owner.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> (c [*OwnerAuthManager]()) Owner(idParam string) func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc)

- **idParam**: string - id of the current owner.
- **returns**: func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) - returns owner handler.

#### OwnerOrAdmin
Access is granted only to authorized users.   
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> (c [*OwnerAuthManager]()) OwnerOrAdmin(idParam string) func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc)

- **idParam**: string - id of the current owner.
- **returns**: func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) - returns owner or admin handler.