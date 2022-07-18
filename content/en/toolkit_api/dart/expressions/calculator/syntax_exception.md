---
type: docs
title: "SyntaxException"
linkTitle: "SyntaxException"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Exception that can be thrown by ExpressionParser.
---

**Extends**: [BadRequestException](../../../commons/errors/bad_request_exception)

### Description

The SyntaxException class defines the exceptions that can be thrown by the [ExpressionParser](../parsers/expression_parser) class.

### Constructors
Creates a new instance of the SyntaxException class.

> SyntaxException(String? correlationId, String code, String message, int? line, int? column)

- **correlationId**: String? - transaction id used to trace execution through the call chain.
- **code**: String - code
- **message**: String - human-readable error message.
- **line**: int? - line number
- **column**: int? - column number
