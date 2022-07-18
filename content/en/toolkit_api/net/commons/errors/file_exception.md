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

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.


Creates an error instance with error message

> `public` FileException(string message)

- **message**: string - human-readable description of the error.


Creates an error instance and assigns its values.

> `public` FileException(Exception innerException)

- **innerException**: Exception - error object


Creates an error instance by processing native C# Exceptions.

> `protected` FileException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - serialized information containing the serialized object data about the exception being thrown.
- **context**: StreamingContext - streaming context containing contextual information about the source or destination.
