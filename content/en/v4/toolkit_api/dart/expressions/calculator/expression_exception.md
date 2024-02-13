---
type: docs
title: "ExpressionException"
linkTitle: "ExpressionException"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-expressions-dart"
description: > 
    Exception that can be thrown by ExpressionCalculator.
---

**Extends**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The ExpressionException class defines an exception that can be thrown by ExpressionCalculator.

### Constructors
Creates a new intance of this class.

> ExpressionException(IContext? context, String code, String message, [int line = 0, int column = 0])

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: String - code
- **message**: String - human-readable error message.
- **line**: int - line number
- **column**: int - column number
