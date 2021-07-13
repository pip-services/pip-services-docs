---
type: docs
title: "UnknownException"
linkTitle: "UnknownException"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Unknown or unexpected errors.
---

**Extends:** [ApplicationException](../application_exception)

### Description

The UnknownException class is used to manage unknown or unexpected errors.

### Constructors
Creates an error instance and assigns its values.

> UnknownException([String correlation_id, String code, String message])

- **correlation_id**: String - (optional) unique transaction id used to trace execution through a call chain.
- **code**: String - (optional) unique error code. Default: "UNKNOWN"
- **message**: String - (optional) human-readable description of the error.
