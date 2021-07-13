---
type: docs
title: "SyntaxException"
linkTitle: "SyntaxException"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Exception that can be thrown by ExpressionParser.
---

**Extends**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The SyntaxException class defines the exceptions that can be thrown by the [ExpressionParser](../parser/expression_parser) class.

### Constructors
Creates a new instance of the SyntaxException class.

> `public` constructor(correlationId: string, code: string, message: string, line: number, column: number)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **code**: string - code
- **message**: string - human-readable error message.
- **line**: number - line number
- **column**: number - column number
