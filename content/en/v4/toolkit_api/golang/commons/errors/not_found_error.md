---
type: docs
title: "NotFoundError"
linkTitle: "NotFoundError"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Errors caused by attempts to access missing objects.
---


### Description

The NotFoundError class is used to manage errors caused by attempts to access missing objects.

### Constructors

#### NewNotFoundError
Creates an error instance and assigns its values.

> NewNotFoundError(context, code, message string) [*ApplicationError](../application_error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


