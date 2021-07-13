---
type: docs
title: "UnsupportedException"
linkTitle: "UnsupportedException"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Errors caused by calls to unsupported or not yet implemented functionality.
---

**Implements:** [ApplicationException](../application_exception)

### Description

The UnsupportedException class is used to manage errors caused by calls to unsupported or not yet implemented functionality.

### Constructors
Creates an error instance and assigns its values.

> UnsupportedException([String correlation_id, String code, String message])

- **correlation_id**: String - (optional) unique transaction id used to trace execution through the call chain.
- **code**: String - (optional) unique error code. Default: "UNKNOWN".
- **message**: String - (optional) human-readable description of the error.
