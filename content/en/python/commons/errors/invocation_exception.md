---
type: docs
title: "InvocationException"
linkTitle: "InvocationException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Errors returned by remote services or by the network during call attempts.
---

**Implements:** [ApplicationException](../application_exception)

### Constructors
Creates an error instance and assigns its values.

> InvocationException(correlation_id: str = None, code: str = None, message: str = None)

- **correlation_id**: str - (optional) a unique transaction id to trace execution through call chain.
- **code**: str - (optional) a unique error code. Default: "UNKNOWN"
- **message**: str - (optional) a human-readable description of the error.

