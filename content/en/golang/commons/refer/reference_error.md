---
type: docs
title: "ReferenceError"
linkTitle: "ReferenceError"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Error created when a required component dependency cannot be found.
---

### Description

The ReferenceError` class provides a Reference error type, which can be used to create an error instance when a required component dependency cannot be found.

### Constructors

#### NewReferenceError
Creates an error instance and assigns its values.

> NewReferenceError(correlationId string, locator interface{}) [*errors.ApplicationError](../../errors/application_error)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **locator**: interface{} - locator to find reference to dependent component.

