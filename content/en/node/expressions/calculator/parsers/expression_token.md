---
type: docs
title: "ExpressionToken"
linkTitle: "ExpressionToken"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Defines an expression token holder.
---

### Description

The ExpressionToken class defines an expression token holder.


### Constructors
Creates an instance of this token and initializes it with specified values.

> `public` constructor(type: [ExpressionTokenType](../expression_token_type), value: [Variant](../../../variants/variant), line: number, column: number)

- **type**: [ExpressionTokenType](../expression_token_type) - type of the token.
- **value**: [Variant](../../../variants/variant) - value of the token.
- **line**: number - line number where the token is.
- **column**: number - column number where the token is.


### Properties

#### column
The column number where the token is.

> `public` column(): number

- **returns**: number - column number.

#### line
The line number where the token is.

> `public` line(): number

- **returns**: number - column number.

#### type
Type of the token.

> `public` type(): [ExpressionTokenType](../expression_token_type)

- **returns**: [ExpressionTokenType](../expression_token_type) - type of the token.

#### value
Value of the token.

> `public` value(): [Variant](../../../variants/variant)

- **returns**: [Variant](../../../variants/variant) - value of the token.


