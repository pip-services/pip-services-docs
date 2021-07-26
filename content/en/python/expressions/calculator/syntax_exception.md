---
type: docs
title: "SyntaxException"
linkTitle: "SyntaxException"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Exception that can be thrown by ExpressionParser.
---

**Implements**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The SyntaxException class defines the exceptions that can be thrown by the [ExpressionParser](../parser/expression_parser) class.

### Constructors
Creates a new instance of the SyntaxException class.

> SyntaxException(correlation_id: Optional[str] = None, code: Optional[str] = None, message: Optional[str] = None, line: int = 0, column: int = 0)

- **correlation_id**: Optional[str] - transaction id used to trace execution through the call chain.
- **code**: Optional[str] - code
- **message**: Optional[str] - human-readable error message.
- **line**: int - line number
- **column**: int - column number
