---
type: docs
title: "ExpressionToken"
linkTitle: "ExpressionToken"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
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

Creates an instance of this class with specified type and Null value.

> `public` ExpressionToken([ExpressionTokenType](../expression_token_type) type)

- **type**: [ExpressionTokenType](../expression_token_type) - type of the token.


### Properties

#### Column
The column number where the token is.

> `public` int Column { get; }

#### Line
The line number where the token is.

> `public` int Line { get; }

#### Type
Type of the token.

> `public` [ExpressionTokenType](../expression_token_type) Type { get; }

#### Value
Value of the token.

> `public` [Variant](../../../variants/variant) Value


