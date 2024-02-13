---
type: docs
title: "FileError"
linkTitle: "FileError"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Errors in read/write local disk operations.
---

The FileError class is used to manage errors in read/write local disk operations. 


### Constructors

#### NewFileError
Creates an error instance and assigns its values.

> NewFileError(context, code, message string) [*ApplicationError](../application_error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


