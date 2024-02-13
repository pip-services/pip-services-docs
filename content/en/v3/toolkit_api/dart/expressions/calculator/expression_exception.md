---
type: docs
title: "ExpressionException"
linkTitle: "ExpressionException"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Exception that can be thrown by ExpressionCalculator.
---

**Extends**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The ExpressionException class defines an exception that can be thrown by ExpressionCalculator.

### Constructors
Creates a new intance of this class.

> ExpressionException(String? correlationId, String code, String message, [int line = 0, int column = 0])

- **correlationId**: String? - transaction id used to trace execution through the call chain.
- **code**: String - code
- **message**: String - human-readable error message.
- **line**: int - line number
- **column**: int - column number
