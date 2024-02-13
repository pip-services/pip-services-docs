---
type: docs
title: "BasicAuthorizer"
linkTitle: "BasicAuthorizer"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-http-go"
description: >
    Basic authorizer.
---

### Description

The BasicAuthorizer provides two methods: one to grant access to everyone and another to grant access to authorized users.

### Instance methods

#### anybody
Allows everyone access, even unauthorized users.
> Anybody() func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc)

- **returns**: (c *BasicAuthorizer) - returns anybody handler.

#### signed
Access is granted only to authorized users.  
> Signed() func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc)

- **returns**:(c *BasicAuthorizer) - returns sign handler.

