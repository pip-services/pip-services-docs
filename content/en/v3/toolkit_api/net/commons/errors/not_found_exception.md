---
type: docs
title: "NotFoundException"
linkTitle: "NotFoundException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Errors caused by attempts to access missing objects.
---

**Inherits**: [ApplicationException](../application_exception)

### Description

The NotFoundException class is used to manage errors caused by attempts to access missing objects.

### Constructors
Creates an error instance and assigns its values.

> `public` NotFoundException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.


Creates an error instance with error message

> `public` NotFoundException(string message)

- **message**: string - human-readable description of the error. 


Creates an error instance and assigns its values.

> `public` NotFoundException(Exception innerException)

- **innerException**: Exception - error object


Creates an error instance by processing native C# Exceptions.

> `protected` NotFoundException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - serialized information containing the serialized object data about the exception being thrown.
- **context**: StreamingContext - streaming context containing contextual information about the source or destination.
