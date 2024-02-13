---
type: docs
title: "UnsupportedError"
linkTitle: "UnsupportedError"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Errors caused by calls to unsupported or not yet implemented functionality.
---

### Description

The UnsupportedError class is used to manage errors caused by calls to unsupported or not yet implemented functionality.

### Constructors

#### NewUnsupportedError
Creates an error instance and assigns its values.

> NewUnsupportedError(context, code, message string) [*ApplicationError](../application_error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.

