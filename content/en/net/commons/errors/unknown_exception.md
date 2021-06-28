---
type: docs
title: "UnknownException"
linkTitle: "UnknownException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Unknown or unexpected errors.
---

**Inherits**: [ApplicationException](../application_exception)

### Description

The UnknownException class is used to manage unknown or unexpected errors.

### Constructors
Creates an error instance and assigns its values.

> `public` UnknownException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.


Creates an error instance with error message

> `public` UnknownException(string message)

- **message**: string - human-readable description of the error.


Creates an error instance and assigns its values.

> `public` UnknownException(Exception innerException)

- **innerException**: Exception - error object


Creates an error instance.

> `protected` UnknownException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - serialization information
- **context**: StreamingContext - streaming context
