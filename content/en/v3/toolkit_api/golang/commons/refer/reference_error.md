---
type: docs
title: "ReferenceError"
linkTitle: "ReferenceError"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Error created when a required component dependency cannot be found.
---

### Description

The ReferenceError` class provides a Reference error type, which can be used to create an error instance when a required component dependency cannot be found.

### Constructors

#### NewReferenceError
Creates an error instance and assigns its values.

> NewReferenceError(correlationId string, locator any) [*errors.ApplicationError](../../errors/application_error)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **locator**: any - locator to find reference to dependent component.

