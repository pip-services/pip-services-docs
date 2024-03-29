---
type: docs
title: "UnauthorizedException"
linkTitle: "UnauthorizedException"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-commons-dotnet"
description: >
    Access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).
---

**Inherits**: [ApplicationException](../application_exception)

### Description

The UnauthorizedException class is used to manage access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).

### Constructors
Creates an error instance and assigns its values.

> `public` UnauthorizedException(Context context = null, string code = null, string message = null)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.


Creates an error instance with error message

> `public` UnauthorizedException(string message)

- **message**: string - human-readable description of the error.


Creates an error instance and assigns its values.

> `public` UnauthorizedException(Exception innerException)

- **innerException**: Exception - error object


Creates an error instance by processing native C# Exceptions.

> `protected` UnauthorizedException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - serialized information containing the serialized object data about the exception being thrown.
- **context**: StreamingContext - streaming context containing contextual information about the source or destination.

