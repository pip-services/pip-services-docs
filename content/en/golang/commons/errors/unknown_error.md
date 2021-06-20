---
type: docs
title: "UnknownError"
linkTitle: "UnknownError"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Unknown or unexpected errors.
---

### Description

The UnknownError class is used to manage unknown or unexpected errors.

### Constructors

#### NewUnknownError
Creates an error instance and assigns its values.

> NewUnknownError(correlationId, code, message string) [*ApplicationError](../application_error)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.
