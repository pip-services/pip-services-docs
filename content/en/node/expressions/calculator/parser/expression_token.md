---
type: docs
title: "ExpressionToken"
linkTitle: "ExpressionToken"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Defines an expression token holder.
---

### Description

TODO: add description


### Constructors
Creates an instance of this token and initializes it with specified values.

> `public` constructor(type: [ExpressionTokenType](../expression_token_type), value: [Variant](../../../variants/variant), line: number, column: number)

- **type**: [ExpressionTokenType](../expression_token_type) - The type of this token.
- **value**: [Variant](../../../variants/variant) - The value of this token.
- **line**: number - the line number where the token is.
- **column**: number - the column number where the token is.


### Properties

#### column
The column number where the token is.

> `public` column(): number

- **returns**: number - the column number.

#### line
The line number where the token is.

> `public` line(): number

- **returns**: number - the column number.

#### type
The type of this token.

> `public` type(): [ExpressionTokenType](../expression_token_type)

- **returns**: [ExpressionTokenType](../expression_token_type) - type of this token.

#### value
The value of this token.

> `public` value(): [Variant](../../../variants/variant)

- **returns**: [Variant](../../../variants/variant) - value of this token.


