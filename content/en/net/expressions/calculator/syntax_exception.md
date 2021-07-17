---
type: docs
title: "SyntaxException"
linkTitle: "SyntaxException"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Exception that can be thrown by ExpressionParser.
---

**Inherits**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The SyntaxException class defines the exceptions that can be thrown by the [ExpressionParser](../parser/expression_parser) class.

### Constructors
Creates a new instance of the SyntaxException class.

> `public` SyntaxException(string correlationId = null, string code = null, string message = null, int line = 0, int column = 0, Exception innerException = null)

- **correlationId**: string - transaction id used to trace execution through the call chain.
- **code**: string - code.
- **message**: string - human-readable error message.
- **line**: int - line number.
- **column**: int - column number.
- **innerException**: Exception - inner exception.
