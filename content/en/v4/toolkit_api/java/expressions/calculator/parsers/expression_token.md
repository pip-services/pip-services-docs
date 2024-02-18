---
type: docs
title: "ExpressionToken"
linkTitle: "ExpressionToken"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Defines an expression token holder.
---

### Description

The ExpressionToken class defines an expression token holder.


### Constructors
Creates an instance of this token and initializes it with specified values.

> `public` ExpressionToken([ExpressionTokenType](../expression_token_type) type, [Variant](../../../variants/variant) value, int line, int column)

- **type**: [ExpressionTokenType](../expression_token_type) - type of the token.
- **value**: [Variant](../../../variants/variant) - value of the token.
- **line**: int - line number where the token is.
- **column**: int - column number where the token is.


### Properties

#### _column
The column number where the token is.

> `private final` int _column

- **returns**: number - column number.

#### _line
The line number where the token is.

> `private final` int _line

- **returns**: number - column number.

#### _type
Type of the token.

> `private final` [ExpressionTokenType](../expression_token_type) _type

#### _value
Value of the token.

> `private final` [Variant](../../../variants/variant) _value



