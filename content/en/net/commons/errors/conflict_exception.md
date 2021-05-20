---
type: docs
title: "ConflictException"
linkTitle: "ConflictException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Errors raised by conflicts between object versions that were
    posted by the user and those that are stored on the server.
---

**Implements:** [ApplicationException](../application_exception)

### Description

The ConflictException class is used to manage errors raised by conflicts between object versions that were posted by the user and those that are stored on the server

### Constructors
Creates an error instance and assigns its values.

> `public` ConflictException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **code**: string - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


Creates an error instance with error message

> `public` ConflictException(string message)

- **message**: string - a human-readable description of the error.


Creates an error instance with conflict error category and assigns its values.

> `public` ConflictException(Exception innerException)

- **innerException**: Exception - an error object


TODO: add description

> `protected` ConflictException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - TODO: add description
- **context**: StreamingContext - TODO: add description