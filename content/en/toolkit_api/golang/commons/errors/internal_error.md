---
type: docs
title: "InternalError"
linkTitle: "InternalError"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Errors caused by programming mistakes.
---

### Description

The InternalError class is used to manage errors caused by programming mistakes.

### Constructors

#### NewInternalError
Creates an error instance and assigns its values.

> NewInternalError(correlationId, code, message string) [*ApplicationError](../application_error)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.

