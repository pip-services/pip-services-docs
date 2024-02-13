---
type: docs
title: "InvocationException"
linkTitle: "InvocationException"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-commons-dart"
description: >
    Errors returned by remote services or by the network during call attempts.
---

**Extends:** [ApplicationException](../application_exception)

### Description

The InvocationException class is used to manage errors returned by remote services or by the network during call attempts.

### Constructors
Creates an error instance and assigns its values.

> InvocationException([String? trace_id, String? code, String? message])

- **trace_id**: String? - (optional) unique transaction id used to trace execution through a call chain.
- **code**: String? - (optional) unique error code. Default: "UNKNOWN".
- **message**: String? - (optional) human-readable description of the error.

