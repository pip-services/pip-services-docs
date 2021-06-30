---
type: docs
title: "ExpressionParser"
linkTitle: "ExpressionParser"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements an expression parser class.
---

### Description

TODO: add description


### Properties

#### expression
The expression string.

> `public` expression(): string


> `public` expression(value: string)

- **value**: string - The expression string.


#### expression
The expression string.

> `public` expression(): string

- **returns**: string - The expression string.

> `public` expression(value: string)

- **value**: string - The expression string.


#### initialTokens
The list of original expression tokens.

> `public` initialTokens(): [ExpressionToken[]](../expression_token)

- **returns**: [ExpressionToken[]](../expression_token) - list of expression tokens.

#### resultTokens
The list of parsed expression tokens.

> `public` resultTokens(): [ExpressionToken[]](../expression_token)

- **returns**: [ExpressionToken[]](../expression_token) - list of expression tokens.

#### variableNames
The list of found variable names.

> `public` variableNames(): string[]

- **returns**: string[] - list of found variable names.


### Instance methods

#### clear
Clears parsing results.

> `public` clear(): void


#### parseString
Sets a new expression string and parses it into internal byte code.

> `public` parseString(expression: string): void

- **expression**: string - A new expression string.

#### parseTokens
TODO: add description
> `public` parseTokens(tokens: [Token[]](../../../tokenizers/token)): void

- **tokens**: [Token[]](../../../tokenizers/token) - TODO: add description

