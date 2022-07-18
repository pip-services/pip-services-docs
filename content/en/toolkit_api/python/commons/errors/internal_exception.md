---
type: docs
title: "InternalException"
linkTitle: "InternalException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Errors caused by programming mistakes.
---

**Implements:** [ApplicationException](../application_exception)

### Description

The InternalException class is used to manage errors caused by programming mistakes.

### Constructors
Creates an error instance and assigns its values.

> InternalException(correlation_id: Optional[str] = None, code: str = None, message: str = None)

- **correlation_id**: Optional[str] - (optional) a unique transaction id to trace execution through call chain.
- **code**: str - (optional) a unique error code. Default: "UNKNOWN"
- **message**: str - (optional) a human-readable description of the error.

