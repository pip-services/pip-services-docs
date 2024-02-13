---
type: docs
title: "ExpressionParser"
linkTitle: "ExpressionParser"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements an expression parser class.
---

### Description

The ExpressionParser class allows you to implement an expression parser.


### Methods

#### Clear
Clears parsing results.

> (c [*ExpressionParser]()) Clear()

#### Expression
Gets the expression string.

> (c [*ExpressionParser]()) Expression() string

- **returns**: string - expression string.

#### InitialTokens
List of original expression tokens.

> (c [*ExpressionParser]()) InitialTokens(): [[]*ExpressionToken](../expression_token)

- **returns**: [[]*ExpressionToken](../expression_token) - list of expression tokens.


#### OriginalTokens
Gets the original tokens

> (c [*ExpressionParser]()) OriginalTokens() [[]*Token](../../../tokenizers/token)

- **returns**: [[]*Token](../../../tokenizers/token) - token list


#### ParseString
Sets a new expression string and parses it into internal byte code.

> (c [*ExpressionParser]()) ParseString(expression string) error

- **expression**: string - new expression string.
- **returns**: error - error or nil if no errors occured.

#### ParseTokens
Parses a given token.
> (c [*ExpressionParser]()) ParseTokens(tokens [[]*Token](../../../tokenizers/token)) error

- **tokens**: [[]*Token](../../../tokenizers/token) - token to be parsed.
- **returns**: error - error or nil if no errors occured.

#### ResultTokens
Gets the list of parsed expression tokens.

> (c [*ExpressionParser]()) ResultTokens() [[]*ExpressionToken](../expression_token)

- **returns**: [[]*ExpressionToken](../expression_token) - list of expression tokens.

#### SetExpression
Sets the expression string.

> (c [*ExpressionParser]()) SetExpression(value string) error

- **value** string - expression string.
- **returns**: error - error or nil if no errors occured.


#### SetOriginalTokens
Sets the original tokens

> (c [*ExpressionParser]()) SetOriginalTokens(value [[]*Token](../../../tokenizers/token)) error

- **value**: [[]*Token](../../../tokenizers/token) - the token list
- **returns**: error - error or nil if no errors occured.


#### VariableNames
Gets the list of found variable names.

> (c [*ExpressionParser]()) VariableNames() []string

- **returns**: []string - list of found variable names.

