---
type: docs
title: "Conflicterror"
linkTitle: "Conflicterror"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Errors raised by conflicts between object versions that were
    posted by the user and those that are stored on the server.
---

### Description

The Conflicterror class is used to manage errors raised by conflicts between object versions that were posted by the user and those that are stored on the server

### Constructors
Creates an error instance and assigns its values.

> NewConflictError(correlationId, code, message string) [*ApplicationError](../application_exception)

- **correlation_id**: string - (optional) a unique transaction id to trace execution through call chain.
- **code**: string - (optional) a unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.
