---
type: docs
title: "ApplicationErrorFactory"
linkTitle: "ApplicationErrorFactory"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Factory to recreate exceptions from [ErrorDescription](../error_description) values passed through the wire.
---

### Description

The ApplicationErrorFactory acts as a factory to recreate from [ErrorDescription](../error_description) values passed through the wire.

### Methods

#### Create
Recreates an ApplicationError object from serialized a ErrorDescription.
It tries to restore the original exception type using type or error category fields.

> (c *TApplicationErrorFactory) Create(description [*ErrorDescription](../error_description)) [*ApplicationError](../application_exception)

- **description**: [*ErrorDescription](../error_description) - serialized error description received as a result of remote call

### See also
- #### [ApplicationError](../application_error)
- #### [ErrorDescription](../error_description)
