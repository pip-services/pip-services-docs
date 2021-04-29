---
type: docs
title: "UnauthorizedException"
linkTitle: "UnauthorizedException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).
---

**Implements:** [ApplicationException](../application_exception)

### Constructors
Creates an error instance and assigns its values.

> UnauthorizedException(correlation_id: str = None, code: str = None, message: str = None)

- **correlation_id**: str - (optional) a unique transaction id to trace execution through call chain.
- **code**: str - (optional) a unique error code. Default: "UNKNOWN"
- **message**: str - (optional) a human-readable description of the error.

