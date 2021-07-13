---
type: docs
title: "FileException"
linkTitle: "FileException"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Errors in read/write local disk operations.
---

**Extends:** [ApplicationException](../application_exception)

The FileException class is used to manage errors in read/write local disk operations.


### Constructors
Creates an error instance and assigns its values.

> FileException([String correlation_id, String code, String message])

- **correlation_id**: String - (optional) unique transaction id used to trace execution through a call chain.
- **code**: String - (optional) unique error code. Default: "UNKNOWN"
- **message**: String - (optional) human-readable description of the error.

