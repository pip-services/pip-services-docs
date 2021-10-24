---
type: docs
title: "ExpressionToken"
linkTitle: "ExpressionToken"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Defines an expression token holder.
---

### Description

The ExpressionToken class defines an expression token holder.


### Constructors
Creates an instance of this token and initializes it with specified values.

> ExpressionToken([ExpressionTokenType?](../expression_token_type) type, [Variant?](../../../variants/variant) value, int? line, int? colum)

- **type**: [ExpressionTokenType?](../expression_token_type) - type of the token.
- **value**: [Variant?](../../../variants/variant) - value of the token.
- **line**: int? - line number where the token is.
- **column**: int? - column number where the token is.


### Properties

#### column
The column number where the token is.

> int get column

- **returns**: int - column number.

#### line
The line number where the token is.

> int get line

- **returns**: int - column number.

#### type
Type of the token.

> [ExpressionTokenType](../expression_token_type) get type

- **returns**: [ExpressionTokenType](../expression_token_type) - type of the token.

#### value
Value of the token.

> [Variant](../../../variants/variant) get value

- **returns**: [Variant](../../../variants/variant) - value of the token.


