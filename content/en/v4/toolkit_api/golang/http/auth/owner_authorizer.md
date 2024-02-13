---
type: docs
title: "OwnerAuthorizer"
linkTitle: "OwnerAuthorizer"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-http-go"
description: >
    Access granting methods for owners and administrators.
---

### Description

The OwnerAuthorizer class provides access granting methods for owners and administrators.

### Instance methods

#### owner
Access is granted only for the session owner.  

> Owner(idParam string) func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc)

- **idParam**: string - id of the current owner.
- **returns**: (c [*OwnerAuthorizer]()) - returns owner handler.

#### ownerOrAdmin
Access is granted only to authorized users.   

> OwnerOrAdmin(idParam string) func(res http.ResponseWriter, req *http.Request, next http.HandlerFunc)

- **idParam**: string - id of the current owner.
- **returns**: (c *OwnerAuthorizer) - returns owner or admin handler.
