---
type: docs
title: "ConflictException"
linkTitle: "ConflictException"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Errors raised by conflicts between object versions that were
    posted by the user and those that are stored on the server.
---

**Extends:** [ApplicationException](../application_exception)

### Description

The ConflictException class is used to manage errors raised by conflicts between object versions that were posted by the user and those that are stored on the server

### Constructors
Creates an error instance and assigns its values.

> ConflictException([String correlation_id, String code, String message])

- **correlation_id**: String - (optional) unique transaction id used to trace execution through the call chain.
- **code**: String - (optional) unique error code. Default: "UNKNOWN".
- **message**: String - (optional) human-readable description of the error.
