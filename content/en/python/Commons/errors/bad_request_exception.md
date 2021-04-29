---
type: docs
title: "BadRequestException"
linkTitle: "BadRequestException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Errors due to improper user requests. 
    For example: missing or incorrect parameters.
---

**Implements:** [ApplicationException](../application_exception)

### Constructors
Creates an error instance and assigns its values.

> BadRequestException(correlation_id: str = None, code: str = None, message: str = None)

- **correlation_id**: str - (optional) a unique transaction id to trace execution through call chain.
- **code**: str - (optional) a unique error code. Default: "UNKNOWN"
- **message**: str - (optional) a human-readable description of the error.

