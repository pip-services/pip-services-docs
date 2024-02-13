---
type: docs
title: "CreateError"
linkTitle: "CreateError"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Error raised when factory is not able to create a requested component.
---


### Description

The CreateError class allows you to manage the error raised when a factory is not able to create a requested component.


### Constructors

#### NewCreateError
Creates an error instance and assigns its values.

> NewCreateError(correlationId string, message string) [*errors.ApplicationError](../../../commons/errors/application_error)

- **correlationId**: string - (optional) a unique transaction id used to trace execution through the call chain.
- **message**: string - human-readable error of the component that cannot be created.

#### NewCreateErrorByLocator
Creates an error instance and assigns its values.

> NewCreateErrorByLocator(correlationId string, locator any) [*errors.ApplicationError](../../../commons/errors/application_error)

- **correlationId**: string - (optional) unique transaction used id to trace execution through the call chain.
- **message**: any - human-readable locator of the component that cannot be created.


### See also
- #### [InternalError](../../../commons/errors/internal_error)
- #### [ApplicationError](../../../commons/errors/application_error)

