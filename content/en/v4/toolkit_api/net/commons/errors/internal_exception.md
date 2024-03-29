---
type: docs
title: "InternalException"
linkTitle: "InternalException"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-commons-dotnet"
description: >
    Errors caused by programming mistakes.
---

**Inherits**: [ApplicationException](../application_exception)

### Description

The InternalException class is used to manage errors caused by programming mistakes.

### Constructors
Creates an error instance and assigns its values.

> `public` InternalException(Context context = null, string code = null, string message = null)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.


Creates an error instance with error message

> `public` InternalException(string message)

- **message**: string - human-readable description of the error.


Creates an error instance and assigns its values.

> `public` InternalException()


Creates an error instance and assigns its values.

> `public` InternalException(Exception innerException)

- **innerException**: Exception - error object


Creates an error instance by processing native C# Exceptions.

> `protected` InternalException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - serialized information containing the serialized object data about the exception being thrown.
- **context**: StreamingContext - streaming context containing contextual information about the source or destination.



