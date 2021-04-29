---
type: docs
title: "FileException"
linkTitle: "FileException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Errors in read/write local disk operations.
---

**Implements:** [ApplicationException](../application_exception)

### Constructors
Creates an error instance and assigns its values.

> FileException(correlation_id: str = None, code: str = None, message: str = None)

- **correlation_id**: str - (optional) a unique transaction id to trace execution through call chain.
- **code**: str - (optional) a unique error code. Default: "UNKNOWN"
- **message**: str - (optional) a human-readable description of the error.

