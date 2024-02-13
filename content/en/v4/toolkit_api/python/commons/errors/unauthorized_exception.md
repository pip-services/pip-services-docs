---
type: docs
title: "UnauthorizedException"
linkTitle: "UnauthorizedException"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-commons-python"
description: >
    Access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).
---

**Implements:** [ApplicationException](../application_exception)

### Description

The UnauthorizedException class is used to manage access errors caused by missing user identity (authentication error) or incorrect security permissions (authorization error).

### Constructors
Creates an error instance and assigns its values.

> UnauthorizedException(context: Optional[IContext] = None, code: str = None, message: str = None)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: str - (optional) a unique error code. Default: "UNKNOWN"
- **message**: str - (optional) a human-readable description of the error.

