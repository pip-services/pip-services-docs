---
type: docs
title: "ExpressionException"
linkTitle: "ExpressionException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Exception that can be thrown by ExpressionCalculator.
---

**Implements**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The ExpressionException class defines an exception that can be thrown by ExpressionCalculator.

### Constructors
Creates a new intance of this class.

> ExpressionException(correlation_id: Optional[str] = None, code: Optional[str] = None, message: Optional[str] = None, line: int = 0, column: int = 0)

- **correlation_id**: Optional[str] - transaction id used to trace execution through the call chain.
- **code**: Optional[str] - code
- **message**: Optional[str] - human-readable error message.
- **line**: int - line number
- **column**: int - column number
