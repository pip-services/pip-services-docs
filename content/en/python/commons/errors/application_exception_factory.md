---
type: docs
title: "ApplicationExceptionFactory"
linkTitle: "ApplicationExceptionFactory"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Factory to recreate exceptions from [ErrorDescription](../error_description) values passed through the wire.
---

### Description

The ApplicationExceptionFactory acts as a factory to recreate from [ErrorDescription](../error_description) values passed through the wire.

### Static methods

#### create
Recreates ApplicationException object from serialized ErrorDescription.
It tries to restore original exception type using type or error category fields.

> `static` create(description: [ErrorDescription](../error_description)): [ApplicationException](../application_exception)

- **description**: [ErrorDescription](../error_description) - a serialized error description received as a result of remote call
- **returns**: [ApplicationException](../application_exception) - new instance of the [ApplicationException](../application_exception)

### See also
- #### [ApplicationException](../application_exception)
- #### [ErrorDescription](../error_description)
