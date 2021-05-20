---
type: docs
title: "NotFoundException"
linkTitle: "NotFoundException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Errors caused by attempts to access missing objects.
---

**Implements:** [ApplicationException](../application_exception)

### Description

The NotFoundException class is used to manage errors caused by attempts to access missing objects.

### Constructors
Creates an error instance and assigns its values.

> `public` NotFoundException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **code**: string - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


Creates an error instance with error message

> `public` NotFoundException(string message)

- **message**: string - a human-readable description of the error.


Creates an error instance and assigns its values.

> `public` NotFoundException(Exception innerException)

- **innerException**: Exception - an error object


TODO: add description

> `protected` NotFoundException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - TODO: add description
- **context**: StreamingContext - TODO: add description