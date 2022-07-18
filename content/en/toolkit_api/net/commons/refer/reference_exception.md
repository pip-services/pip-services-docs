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

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **locator**: object - locator used to find reference to a dependent component.

Creates an error instance and assigns its values.
> `public` ReferenceException(string correlationId, string message)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **message**: string - (optional) human-readable description of the error.


Creates an error instance and assigns its values.
> `public` ReferenceException (string correlationId, string code, string message)

- **correlationId**: string - (optional) unique transaction id used to trace execution through the call chain.
- **message**: string - (optional) human-readable description of the error.
- **code**: string - unique error code.


Creates an error instance and assigns its values.
> `public` ReferenceException(object locator)

- **locator**: object - locator used to find a reference to a dependent component.


Creates an error instance and assigns its values.
> `public` ReferenceException()


Creates an error instance by processing native C# Exceptions.
> `protected` ReferenceException(SerializationInfo info, StreamingContext context)

- **info**: SerializationInfo -  serialized information containing the serialized object data about the exception being thrown.
- **context**: StreamingContext - streaming context containing contextual information about the source or destination.
