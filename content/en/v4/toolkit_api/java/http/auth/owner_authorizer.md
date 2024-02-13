---
type: docs
title: "OwnerAuthorizer"
linkTitle: "OwnerAuthorizer"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
description: >
    Access granting methods for owners and administrators.
---

### Description

The OwnerAuthorizer class provides access granting methods for owners and administrators.

### Instance methods

#### owner
Access is granted only for the session owner.  

> `public` AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> owner(String idParam)

- **idParam**: String - id of the current owner.
- **returns**: AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> - returns owner handler.

#### ownerOrAdmin
Access is granted only to authorized users.   

> `public` AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> ownerOrAdmin(String idParam)

- **idParam**: String - id of the current owner.
- **returns**: AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> - returns owner or admin handler.
