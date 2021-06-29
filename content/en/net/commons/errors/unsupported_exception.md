---
type: docs
title: "UnsupportedException"
linkTitle: "UnsupportedException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Errors caused by calls to unsupported or not yet implemented functionality.
---

**Inherits**: [ApplicationException](../application_exception)

### Description

The UnsupportedException class is used to manage errors caused by calls to unsupported or not yet implemented functionality.

### Constructors
Creates an error instance and assigns its values.

> `public` UnsupportedException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.


Creates an error instance with error message.

> `public` UnsupportedException(string message)

- **message**: string - human-readable description of the error.


Creates an error instance and assigns its values.

> `public` UnsupportedException(Exception innerException)

- **innerException**: Exception - error object


Creates an error instance by processing native C# Exceptions.

> `protected` UnsupportedException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - serialized information containing the serialized object data about the exception being thrown.
- **context**: StreamingContext - streaming context containing contextual information about the source or destination.
