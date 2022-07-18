---
type: docs
title: "CreateException"
linkTitle: "CreateException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Error raised when factory is not able to create a requested component.
---

**Implements**: [InternalException](../../../commons/errors/internal_exception)

### Description

The CreateException class allows you to manage the error raised when a factory is not able to create a requested component.


### Constructors
Creates an error instance and assigns its values.

> `public` constructor(correlationId: string = null, messageOrLocator: any)

- **correlationId**: string - (optional) a unique transaction id to trace execution through a call chain.
- **messageOrLocator**: any - human-readable error or locator of the component that cannot be created.


### See also
- #### [InternalException](../../../commons/errors/internal_exception)
- #### [ApplicationException](../../../commons/errors/application_exception)
