---
type: docs
title: "ExpressionParser"
linkTitle: "ExpressionParser"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements an expression parser class.
---

### Description

The ExpressionParser class allows you to implement an expression parser.

### Properties

#### expression
Expression string.

> `public` expression(): string

- **returns**: string - expression string.

> `public` expression(value: string)

- **value**: string - expression string.


#### initialTokens
List of original expression tokens.

> `public` initialTokens(): [ExpressionToken[]](../expression_token)

- **returns**: [ExpressionToken[]](../expression_token) - list of expression tokens.

#### resultTokens
List of parsed expression tokens.

> `public` resultTokens(): [ExpressionToken[]](../expression_token)

- **returns**: [ExpressionToken[]](../expression_token) - list of expression tokens.

#### variableNames
List of found variable names.

> `public` variableNames(): string[]

- **returns**: string[] - list of found variable names.


### Instance methods

#### clear
Clears parsing results.

> `public` clear(): void


#### parseString
Sets a new expression string and parses it into internal byte code.

> `public` parseString(expression: string): void

- **expression**: string - new expression string.

#### parseTokens
Parses a given token.
> `public` parseTokens(tokens: [Token[]](../../../tokenizers/token)): void

- **tokens**: [Token[]](../../../tokenizers/token) - token to be parsed.

