---
type: docs
title: "ExpressionParser"
linkTitle: "ExpressionParser"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements an expression parser class.
---

### Description

The ExpressionParser class allows you to implement an expression parser.

### Properties

#### expression
Expression string.

> expression(): str

- **returns**: str - expression string.

> expression(value: str)

- **value**: str - expression string.


#### initial_tokens
List of original expression tokens.

> initial_tokens(): List[[ExpressionToken](../expression_token)]

- **returns**: List[[ExpressionToken](../expression_token)] - list of expression tokens.


#### original_tokens
Gets the original tokens

> original_tokens(): List[[Token](../../../tokenizers/token)]

- **returns**: List[[Token](../../../tokenizers/token)] - the token list

Sets the original tokens
> original_tokens(value: List[[Token](../../../tokenizers/token)])

- **value**: List[[Token](../../../tokenizers/token)] - the token list

#### result_tokens
List of parsed expression tokens.

> result_tokens(): List[[ExpressionToken](../expression_token)]

- **returns**: List[[ExpressionToken](../expression_token)] - list of expression tokens.

#### variable_names
List of found variable names.

> variable_names(): List[str]

- **returns**: List[str] - list of found variable names.


### Instance methods

#### clear
Clears parsing results.

> clear()


#### parse_string
Sets a new expression string and parses it into internal byte code.

> parseString(expression: str)

- **expression**: str - new expression string.

#### parse_tokens
Parses a given token.
> parse_tokens(tokens: List[[Token](../../../tokenizers/token)])

- **tokens**: List[[Token](../../../tokenizers/token)] - token to be parsed.

