---
type: docs
title: "BasicAuthorizer"
linkTitle: "BasicAuthorizer"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-http-java"
description: >
    Basic authorizer.
---

### Description

The BasicAuthorizer provides two methods: one to grant access to everyone and another to grant access to authorized users.

### Instance methods

#### anybody
Allows everyone access, even unauthorized users.
> `public` Inflector<ContainerRequestContext, Response>, Response> anybody()

- **returns**: Inflector<ContainerRequestContext, Response>, Response> - returns anybody handler.

#### signed
Access is granted only to authorized users.  

> `public` AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> signed()

- **returns**: AuthorizeFunction<ContainerRequestContext, Inflector<ContainerRequestContext, Response>, Response> - returns sign handler.
