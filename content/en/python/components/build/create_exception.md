---
type: docs
title: "CreateException"
linkTitle: "CreateException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Error raised when factory is not able to create a requested component.
---

**Implements**: [InternalException](../../../commons/errors/internal_exception)

### Description

The CreateException is allows you to manage the error raised when a factory is not able to create a requested component.


### Constructors
Creates an error instance and assigns its values.

> CreateException(correlation_id: Optional[str] = None, message_or_locator: str = None)

- **correlation_id**: Optional[str] - (optional) a unique transaction id to trace execution through call chain.
- **message_or_locator**: str - human-readable error or locator of the component that cannot be created.


### See also
- #### [InternalException](../../../commons/errors/internal_exception)
- #### [ApplicationException](../../../commons/errors/application_exception)
