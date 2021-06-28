---
type: docs
title: "UnauthorizedException"
linkTitle: "UnauthorizedException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).
---

**Inherits**: [ApplicationException](../application_exception)

### Description

The UnauthorizedException class is used to manage access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).

### Constructors
Creates an error instance and assigns its values.

> `public` UnauthorizedException(string correlationId = null, string code = null, string message = null)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) human-readable description of the error.


Creates an error instance with error message

> `public` UnauthorizedException(string message)

- **message**: string - human-readable description of the error.


Creates an error instance and assigns its values.

> `public` UnauthorizedException(Exception innerException)

- **innerException**: Exception - error object


Creates an error instance.

> `protected` UnauthorizedException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - serialization information
- **context**: StreamingContext - streaming context
