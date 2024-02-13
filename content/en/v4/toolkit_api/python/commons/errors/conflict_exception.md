---
type: docs
title: "ConflictException"
linkTitle: "ConflictException"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-commons-python"
description: >
    Errors raised by conflicts between object versions that were
    posted by the user and those that are stored on the server.
---

**Implements:** [ApplicationException](../application_exception)

### Description

The ConflictException class is used to manage errors raised by conflicts between object versions that were posted by the user and those that are stored on the server

### Constructors
Creates an error instance and assigns its values.

> ConflictException(context: Optional[IContext] = None, code: str = None, message: str = None)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: str - (optional) a unique error code. Default: "UNKNOWN"
- **message**: str - (optional) a human-readable description of the error.

