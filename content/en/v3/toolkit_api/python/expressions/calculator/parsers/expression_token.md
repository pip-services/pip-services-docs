---
type: docs
title: "ExpressionToken"
linkTitle: "ExpressionToken"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Defines an expression token holder.
---

### Description

The ExpressionToken class defines an expression token holder.


### Constructors
Creates an instance of this token and initializes it with specified values.

> ExpressionToken(type: [ExpressionTokenType](../expression_token_type), value: [Variant](../../../variants/variant), line: int, column: int)

- **type**: [ExpressionTokenType](../expression_token_type) - type of the token.
- **value**: [Variant](../../../variants/variant) - value of the token.
- **line**: int - line number where the token is.
- **column**: int - column number where the token is.


### Properties

#### column
The column number where the token is.

> column(): int

- **returns**: number - column number.

#### line
The line number where the token is.

> line(): int

- **returns**: number - column number.

#### type
Type of the token.

> type(): [ExpressionTokenType](../expression_token_type)

- **returns**: [ExpressionTokenType](../expression_token_type) - type of the token.

#### value
Value of the token.

> value(): [Variant](../../../variants/variant)

- **returns**: [Variant](../../../variants/variant) - value of the token.


