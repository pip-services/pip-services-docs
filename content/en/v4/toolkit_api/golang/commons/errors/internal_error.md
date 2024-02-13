---
type: docs
title: "InternalError"
linkTitle: "InternalError"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Errors caused by programming mistakes.
---

### Description

The InternalError class is used to manage errors caused by programming mistakes.

### Constructors

#### NewInternalError
Creates an error instance and assigns its values.

> NewInternalError(context, code, message string) [*ApplicationError](../application_error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


