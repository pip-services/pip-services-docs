---
type: docs
title: "ExpressionError"
linkTitle: "ExpressionError"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Exception that can be thrown by ExpressionCalculator.
---

### Description

The ExpressionException class defines an exception that can be thrown by ExpressionCalculator.

### Constructors

#### NewExpressionError
Exception that can be thrown by Expression Calculator.

> NewExpressionError(context [IContext](../../../../components/context/icontext), code, message string, line, column int) [*ApplicationError](../../../../commons/errors/application_error)

- **context**: [IContext](../../../../components/context/icontext) - (optional) a context to trace execution through a call chain..
- **code**: string - code
- **message**: string - human-readable error message.
- **line**: int - line number
- **column**: int - column number

