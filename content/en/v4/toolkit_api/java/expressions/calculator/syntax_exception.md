---
type: docs
title: "SyntaxException"
linkTitle: "SyntaxException"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Exception that can be thrown by ExpressionParser.
---

**Extends**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The SyntaxException class defines the exceptions that can be thrown by the [ExpressionParser](../parsers/expression_parser) class.

### Constructors
Creates a new instance of the SyntaxException class.

> `public` SyntaxException(IContext context, String code, String message, int line, int column)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: String - code
- **message**: String - human-readable error message.
- **line**: int - line number
- **column**: int - column number
