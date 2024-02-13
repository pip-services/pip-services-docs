---
type: docs
title: "CreateException"
linkTitle: "CreateException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
description: >
    Error raised when a factory is not able to create a requested component.
---

**Inherits**: [InternalException](../../../commons/errors/internal_exception)

### Description

The CreateException class defines the error raised when a factory is not able to create a requested component.


### Constructors
Creates an error instance and assigns its values.

> `public` CreateException(string correlationId, string message)

- **correlationId**: string - (optional) unique transaction id to trace execution through a call chain.
- **message**: string - human-readable error


Creates an error instance and assigns its values.

> `public` CreateException(string correlationId, object locator)

- **correlationId**: string - (optional) unique transaction id to trace execution through a call chain.
- **message**: object - locator of the component that cannot be created.


Creates an error instance.

> `public` CreateException()


### See also
- #### [InternalException](../../../commons/errors/internal_exception)
- #### [ApplicationException](../../../commons/errors/application_exception)
