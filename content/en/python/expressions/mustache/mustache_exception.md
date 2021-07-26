---
type: docs
title: "MustacheException"
linkTitle: "MustacheException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Exception that can be thrown by a Mustache template.
---

**Implements**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The MustacheException class defines an exception that can be thrown by a Mustache template.

### Constructors
Creates a new instance of the MustacheException class.

> MustacheException(correlation_id: Optional[str] = None, code: Optional[str] = None, message: Optional[str] = None, line: int = 0, column: int = 0)

- **correlationId**:  Optional[str] - transaction id used to trace execution through the call chain.
- **code**:  Optional[str] - code
- **message**:  Optional[str] - human-readable message
- **line**: int - line number
- **column**: int - column number
