---
type: docs
title: "UnknownException"
linkTitle: "UnknownException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Unknown or unexpected errors.
---

**Implements:** [ApplicationException](../application_exception)

### Description

The UnknownException class is used to manage unknown or unexpected errors.

### Constructors
Creates an error instance and assigns its values.

> UnknownException(correlation_id: Optional[str] = None, code: str = None, message: str = None)

- **correlation_id**: Optional[str] - (optional) a unique transaction id to trace execution through call chain.
- **code**: str - (optional) a unique error code. Default: "UNKNOWN"
- **message**: str - (optional) a human-readable description of the error.

