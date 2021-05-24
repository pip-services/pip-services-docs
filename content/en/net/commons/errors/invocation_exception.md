---
type: docs
title: "InvocationException"
linkTitle: "InvocationException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Errors returned by remote services or by the network during call attempts.
---

**Inherits**: [ApplicationException](../application_exception)

### Description

The InvocationException class is used to manage errors returned by remote services or by the network during call attempts.

### Constructors
Creates an error instance and assigns its values.

> `public` InvocationException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **code**: string - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


Creates an error instance with error message

> `public` InvocationException(string message)

- **message**: string - a human-readable description of the error.


Creates an error instance and assigns its values.

> `public` InvocationException(Exception innerException)

- **innerException**: Exception - an error object


TODO: add description

> `protected` InvocationException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - TODO: add description
- **context**: StreamingContext - TODO: add description
