---
type: docs
title: "ApplicationExceptionFactory"
linkTitle: "ApplicationExceptionFactory"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Factory to recreate exceptions from [ErrorDescription](../error_description) values passed through the wire.
---
See also [ApplicationException](../application_exception), [ErrorDescription](../error_description)


### Methods

#### create
Recreates ApplicationException object from serialized ErrorDescription.
It tries to restore original exception type using type or error category fields.

> `public static` create(description: ErrorDescription): [ApplicationException](../application_exception)

- **description**: [ApplicationException](../application_exception) - a serialized error description received as a result of remote call

### See also
- #### [ApplicationException](../application_exception)
- #### [ErrorDescription](../error_description)