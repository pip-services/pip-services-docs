---
type: docs
title: "FileException"
linkTitle: "FileException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Errors in read/write local disk operations.
---

**Inherits**: [ApplicationException](../application_exception)

The FileException class is used to manage errors in read/write local disk operations.


### Constructors
Creates an error instance and assigns its values.

> `public` FileException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **code**: string - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


Creates an error instance with error message

> `public` FileException(string message)

- **message**: string - a human-readable description of the error.


Creates an error instance and assigns its values.

> `public` FileException(Exception innerException)

- **innerException**: Exception - an error object


TODO: add description

> `protected` FileException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - TODO: add description
- **context**: StreamingContext - TODO: add description