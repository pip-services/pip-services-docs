---
type: docs
title: "ReferenceException"
linkTitle: "ReferenceException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Error created when a required component dependency cannot be found.
---

### Description

The ReferenceException class provides a Reference error type, which can be used to create an error instance when a required component dependency cannot be found.

### Constructors
Creates an error instance and assigns its values.

> `public` ReferenceException(string correlationId, object locator)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **locator**: object - the locator to find reference to dependent component.

Creates an error instance and assigns its values.
> `public` ReferenceException(string correlationId, string message)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **message**: string - (optional) a human-readable description of the error.


Creates an error instance and assigns its values.
> `public` ReferenceException (string correlationId, string code, string message)

- **correlationId**: string - (optional) a unique transaction id to trace execution through call chain.
- **message**: string - (optional) a human-readable description of the error.
- **code**: string - a unique error code.


Creates an error instance and assigns its values.
> `public` ReferenceException(object locator)

- **locator**: object - the locator to find reference to dependent component.


Creates an error instance and assigns its values.
> `public` ReferenceException()


TODO: add description
> `protected` ReferenceException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo -  TODO: add description
- **context**: StreamingContext - TODO: add description
