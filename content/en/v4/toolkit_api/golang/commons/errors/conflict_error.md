---
type: docs
title: "Conflicterror"
linkTitle: "Conflicterror"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    Errors raised by conflicts between object versions that were
    posted by the user and those that are stored on the server.
---

### Description

The Conflicterror class is used to manage errors raised by conflicts between object versions that were posted by the user and those that are stored on the server

### Constructors

#### NewConflictError
Creates an error instance and assigns its values.

> NewConflictError(context, code, message string) [*ApplicationError](../application_error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.
