---
type: docs
title: "ApplicationExceptionFactory"
linkTitle: "ApplicationExceptionFactory"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Factory to recreate exceptions from [ErrorDescription](../error_description) values passed through the wire.
---

### Description

The ApplicationExceptionFactory acts as a factory to recreate from [ErrorDescription](../error_description) values passed through the wire.

### Static methods

#### Create
Recreates ApplicationException object from serialized ErrorDescription.
It tries to restore original exception type using type or error category fields.

> `public static` [ApplicationException](../application_exception) Create([ErrorDescription](../error_description) description)

- **description**: [ApplicationException](../application_exception) - a serialized error description received as a result of remote call

### See also
- #### [ApplicationException](../application_exception)
- #### [ErrorDescription](../error_description)
