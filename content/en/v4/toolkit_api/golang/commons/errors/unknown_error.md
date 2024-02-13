---
type: docs
title: "UnknownError"
linkTitle: "UnknownError"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Unknown or unexpected errors.
---

### Description

The UnknownError class is used to manage unknown or unexpected errors.

### Constructors

#### NewUnknownError
Creates an error instance and assigns its values.

> NewUnknownError(context, code, message string) [*ApplicationError](../application_error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.
