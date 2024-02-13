![image](https://github.com/pip-services/pip-services-docs/assets/68734409/57e85154-1372-4d68-a256-eb2044cb0b30)---
type: docs
title: "SyntaxException"
linkTitle: "SyntaxException"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-expressions-dart"
description: > 
    Exception that can be thrown by ExpressionParser.
---

**Extends**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The SyntaxException class defines the exceptions that can be thrown by the [ExpressionParser](../parsers/expression_parser) class.

### Constructors
Creates a new instance of the SyntaxException class.

> SyntaxException(IContext? context, String code, String message, int? line, int? column)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **code**: String - code
- **message**: String - human-readable error message.
- **line**: int? - line number
- **column**: int? - column number
