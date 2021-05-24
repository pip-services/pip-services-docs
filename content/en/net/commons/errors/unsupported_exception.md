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

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **code**: string - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.


Creates an error instance with error message

> `public` UnsupportedException(string message)

- **message**: string - a human-readable description of the error.


Creates an error instance and assigns its values.

> `public` UnsupportedException(Exception innerException)

- **innerException**: Exception - an error object


TODO: add description

> `protected` UnsupportedException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo - TODO: add description
- **context**: StreamingContext - TODO: add description