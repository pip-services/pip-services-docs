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
Recreates ApplicationException object from a serialized ErrorDescription.
It tries to restore the original exception type using the type or error category fields.

> `public static` [ApplicationException](../application_exception) Create([ErrorDescription](../error_description) description)

- **description**: [ErrorDescription](../error_description) - serialized error description received as a result of remote call
- **returns**: [ApplicationException](../application_exception) - new instance of the [ApplicationException](../application_exception)

### See also
- #### [ApplicationException](../application_exception)
- #### [ErrorDescription](../error_description)
