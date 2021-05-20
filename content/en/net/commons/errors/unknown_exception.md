---
type: docs
title: "UnknownException"
linkTitle: "UnknownException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Unknown or unexpected errors.
---

**Implements:** [ApplicationException](../application_exception)

### Description

The UnknownException class is used to manage unknown or unexpected errors.

### Constructors
Creates an error instance and assigns its values.

> `public` UnknownException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **code**: string - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


Creates an error instance with error message

> `public` UnknownException(string message)

- **message**: string - a human-readable description of the error.


Creates an error instance and assigns its values.

> `public` UnknownException(Exception innerException)

- **innerException**: Exception - an error object


TODO: add description

> `protected` UnknownException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - TODO: add description
- **context**: StreamingContext - TODO: add description