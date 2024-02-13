---
type: docs
title: "BasicAuthManager"
linkTitle: "BasicAuthManager"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-rpc-gox"
description: >
    Basic authorizer.
---

### Description

The BasicAuthManager provides two methods: one to grant access to everyone and another to grant access to authorized users.

### Methods

#### Anybody
Allows everyone access, even unauthorized users.
> (c [*BasicAuthManager]()) Anybody() func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc)

- **returns**: func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) - returns anybody handler.

#### Signed
Access is granted only to authorized users.  
Throws [UnauthorizedError](../../../commons/errors/unauthorized_error) exception if not authorized.

> (c [*BasicAuthManager]()) Signed() func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc)

- **returns**: func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc) - returns sign handler.
