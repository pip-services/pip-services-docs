---
type: docs
title: "UnknownException"
linkTitle: "UnknownException"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-commons-dart"
description: >
    Unknown or unexpected errors.
---

**Extends:** [ApplicationException](../application_exception)

### Description

The UnknownException class is used to manage unknown or unexpected errors.

### Constructors
Creates an error instance and assigns its values.

> UnknownException([String? trace_id, String? code, String? message])

- **trace_id**: String? - (optional) unique transaction id used to trace execution through a call chain.
- **code**: String? - (optional) unique error code. Default: "UNKNOWN"
- **message**: String? - (optional) human-readable description of the error.
