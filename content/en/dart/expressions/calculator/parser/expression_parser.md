---
type: docs
title: "ExpressionParser"
linkTitle: "ExpressionParser"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Implements an expression parser class.
---

### Description

The ExpressionParser class allows you to implement an expression parser.

### Properties

#### expression
Expression string.

> String? get expression

- **returns**: String? - expression string.

> set expression(String? value)

- **value**: String? - expression string.


#### initialTokens
List of original expression tokens.

> List<[ExpressionToken](../expression_token)> get initialTokens

- **returns**: List<[ExpressionToken](../expression_token)> - list of expression tokens.

#### originalTokens
Gets the original tokens

> List<[Token](../../../tokenizers/token)> get originalTokens

- **returns**: List<[Token](../../../tokenizers/token)> - the token list

Sets the original tokens
> set originalTokens(List<[Token](../../../tokenizers/token)> value)

- **value**: [Token](../../../tokenizers/token) - the token list

#### resultTokens
List of parsed expression tokens.

> List<[ExpressionToken](../expression_token)> get resultTokens

- **returns**: List<[ExpressionToken](../expression_token)> - list of expression tokens.

#### variableNames
List of found variable names.

> List\<String\> get variableNames

- **returns**: List\<String\> - list of found variable names.


### Instance methods

#### clear
Clears parsing results.

> void clear()


#### parseString
Sets a new expression string and parses it into internal byte code.

> void parseString(String? expression)

- **expression**: String? - new expression string.

#### parseTokens
Parses a given token.
> void parseTokens(List<[Token](../../../tokenizers/token)> tokens)

- **tokens**: List<[Token](../../../tokenizers/token)> - token to be parsed.

