---
type: docs
title: "CreateException"
linkTitle: "CreateException"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-components-dart"
description: >
    Error raised when factory is not able to create a requested component.
---

**Extends**: [InternalException](../../../commons/errors/internal_exception)

### Description

The CreateException class allows you to manage the error raised when a factory is not able to create a requested component.


### Constructors
Creates an error instance and assigns its values.

> CreateException(String? traceId, dynamic messageOrLocator)

- **traceId**: String? - (optional) a unique transaction id to trace execution through a call chain.
- **messageOrLocator**: dynamic - human-readable error or locator of the component that cannot be created.


### See also
- #### [InternalException](../../../commons/errors/internal_exception)
- #### [ApplicationException](../../../commons/errors/application_exception)
