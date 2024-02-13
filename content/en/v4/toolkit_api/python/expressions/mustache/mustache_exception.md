---
type: docs
title: "MustacheException"
linkTitle: "MustacheException"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-expressions-python"
description: > 
    Exception that can be thrown by a Mustache template.
---

**Implements**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The MustacheException class defines an exception that can be thrown by a Mustache template.

### Constructors
Creates a new instance of the MustacheException class.

> MustacheException(context: Optional[IContext] = None, code: Optional[str] = None, message: Optional[str] = None, line: int = 0, column: int = 0)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**:  Optional[str] - code
- **message**:  Optional[str] - human-readable message
- **line**: int - line number
- **column**: int - column number
