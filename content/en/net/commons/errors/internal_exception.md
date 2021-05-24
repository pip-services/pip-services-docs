---
type: docs
title: "InternalException"
linkTitle: "InternalException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Errors caused by programming mistakes.
---

**Inherits**: [ApplicationException](../application_exception)

### Description

The InternalException class is used to manage errors caused by programming mistakes.

### Constructors
Creates an error instance and assigns its values.

> `public` InternalException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **code**: string - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


Creates an error instance with error message

> `public` InternalException(string message)

- **message**: string - a human-readable description of the error.


Creates an error instance and assigns its values.

> `public` InternalException()


Creates an error instance and assigns its values.

> `public` InternalException(Exception innerException)

- **innerException**: Exception - an error object


TODO: add description

> `protected` InternalException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - TODO: add description
- **context**: StreamingContext - TODO: add description


