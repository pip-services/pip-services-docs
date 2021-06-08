---
type: docs
title: "FileError"
linkTitle: "FileError"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Errors in read/write local disk operations.
---

The FileError class is used to manage errors in read/write local disk operations.


### Constructors
Creates an error instance and assigns its values.

> NewFileError(correlationId, code, message string) [*ApplicationError](../application_exception)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **code**: string - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.

