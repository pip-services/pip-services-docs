---
type: docs
title: "ConflictException"
linkTitle: "ConflictException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Errors raised by conflicts between object versions that were
    posted by the user and those that are stored on the server.
---

**Inherits**: [ApplicationException](../application_exception)

### Description

The ConflictException class is used to manage errors raised by conflicts between object versions that were posted by the user and those that are stored on the server

### Constructors
Creates an error instance and assigns its values.

> `public` ConflictException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.


Creates an error instance with an error message

> `public` ConflictException(string message)

- **message**: string - human-readable description of the error.


Creates an error instance with a conflict error category and assigns its values.

> `public` ConflictException(Exception innerException)

- **innerException**: Exception - error object


Creates an error instance by processing native C# Exceptions.

> `protected` ConflictException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - serialized information containing the serialized object data about the exception being thrown.
- **context**: StreamingContext - streaming context containing contextual information about the source or destination.
