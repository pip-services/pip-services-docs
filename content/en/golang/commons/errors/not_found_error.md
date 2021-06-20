---
type: docs
title: "NotFoundError"
linkTitle: "NotFoundError"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Errors caused by attempts to access missing objects.
---


### Description

The NotFoundError class is used to manage errors caused by attempts to access missing objects.

### Constructors

#### NewNotFoundError
Creates an error instance and assigns its values.

> NewNotFoundError(correlationId, code, message string) [*ApplicationError](../application_error)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.

