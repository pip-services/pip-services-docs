---
type: docs
title: "ExpressionError"
linkTitle: "ExpressionError"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-expressions-gox"
description: > 
    Exception that can be thrown by ExpressionCalculator.
---

### Description

The ExpressionException class defines an exception that can be thrown by ExpressionCalculator.

### Constructors

#### NewExpressionError
Exception that can be thrown by Expression Calculator.

> NewExpressionError(correlationId, code, message string, line, column int) [*ApplicationError](../../../../commons/errors/application_error)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **code**: string - code
- **message**: string - human-readable error message.
- **line**: int - line number
- **column**: int - column number
