---
type: docs
title: "ExpressionToken"
linkTitle: "ExpressionToken"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Defines an expression token holder.
---

### Description

The ExpressionToken class defines an expression token holder.


### Constructors

#### NewExpressionToken
Creates an instance of this token and initializes it with specified values.

> NewExpressionToken(typ int, value [*Variant](../../../variants/variant), line int, column int) [*ExpressionToken]()

- **typ**: int - type of the token.
- **value**: [*Variant](../../../variants/variant) - value of the token.
- **line**: int - line number where the token is.
- **column**: int - column number where the token is.


### Methods

#### Column
Column number where the token is.

> (c [*ExpressionToken]()) Column() int

- **returns**: int - column number.

#### Line
Line number where the token is.

> (c [*ExpressionToken]()) Line() int

- **returns**: int - column number.

#### Type
Type of the token.

> (c [*ExpressionToken]()) Type() int

- **returns**: int - type of the token.

#### Value
Value of the token.

> (c [*ExpressionToken]()) Value() [*Variant](../../../variants/variant)

- **returns**: [*Variant](../../../variants/variant) - value of the token.



