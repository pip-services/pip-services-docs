---
type: docs
title: "ApplicationExceptionFactory"
linkTitle: "ApplicationExceptionFactory"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Factory to recreate exceptions from [ErrorDescription](../error_description) values passed through the wire.
---

### Description

The ApplicationExceptionFactory acts as a factory to recreate from [ErrorDescription](../error_description) values passed through the wire.

### Static methods

#### create
Recreates ApplicationException object from serialized ErrorDescription.
It tries to restore the original exception type using the type or error category fields.

> `static` [ApplicationException](../application_exception) create([ErrorDescription](../error_description) description)

- **description**: [ErrorDescription](../error_description) - serialized error description received as a result of a remote call.
- **returns**: [ApplicationException](../application_exception) - new instance of the [ApplicationException](../application_exception).

### See also
- #### [ApplicationException](../application_exception)
- #### [ErrorDescription](../error_description)
