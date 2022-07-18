---
type: docs
title: "InvalidStateException"
linkTitle: "InvalidStateException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Errors related to calling operations, which require the component to be in a specific state.
    For instance: business calls when the component is not ready.
---

**Inherits**: [ApplicationException](../application_exception)

### Description

The InvalidStateException class is used to manage errors related to calling opertaions that require the component to be in a specific state. For example, business calls when the component is not reay.

### Constructors
Creates an error instance and assigns its values.

> `public` InvalidStateException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.



Creates an error instance with error message.

> `public` InvalidStateException(string message)

- **message**: string - human-readable description of the error.


Creates an error instance and assigns its values.

> `public` InvalidStateException(Exception innerException)

- **innerException**: Exception - error object


Creates an error instance by processing native C# Exceptions.

> `protected` InvalidStateException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - serialized information containing the serialized object data about the exception being thrown.
- **context**: StreamingContext - streaming context containing contextual information about the source or destination.

