---
type: docs
title: "ExpressionException"
linkTitle: "ExpressionException"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-expressions-python"
description: > 
    Exception that can be thrown by ExpressionCalculator.
---

**Implements**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The ExpressionException class defines an exception that can be thrown by ExpressionCalculator.

### Constructors
Creates a new intance of this class.

> ExpressionException(context: Optional[IContext] = None, code: Optional[str] = None, message: Optional[str] = None, line: int = 0, column: int = 0)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: Optional[str] - code
- **message**: Optional[str] - human-readable error message.
- **line**: int - line number
- **column**: int - column number
