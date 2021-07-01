---
type: docs
title: "ConflictException"
linkTitle: "ConflictException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Errors raised by conflicts between object versions that were
    posted by the user and those that are stored on the server.
---

**Extends:** [ApplicationException](../application_exception)

### Description

The ConflictException class is used to manage errors raised by conflicts between object versions that were posted by the user and those that are stored on the server

### Constructors
Creates an error instance and assigns its values.

> `public` constructor(correlation_id: string = null, code: string = null, message: string = null)

- **correlation_id**: string - (optional) unique transaction id used to trace execution through the call chain.
- **code**: string - (optional) unique error code. Default: "UNKNOWN".
- **message**: string - (optional) human-readable description of the error.
