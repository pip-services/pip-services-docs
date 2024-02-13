---
type: docs
title: "Conflicterror"
linkTitle: "Conflicterror"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Errors raised by conflicts between object versions that were
    posted by the user and those that are stored on the server.
---

### Description

The Conflicterror class is used to manage errors raised by conflicts between object versions that were posted by the user and those that are stored on the server

### Constructors

#### NewConflictError
Creates an error instance and assigns its values.

> NewConflictError(correlationId, code, message string) [*ApplicationError](../application_error)

- **correlation_id**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN"
- **message**: string - (optional) a human-readable description of the error.
