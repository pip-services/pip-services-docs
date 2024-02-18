---
type: docs
title: "ExpressionParser"
linkTitle: "ExpressionParser"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Implements an expression parser class.
---

### Description

The ExpressionParser class allows you to implement an expression parser.

### Properties

#### _expression
Expression string.

> `private` String _expression = ""

#### _initialTokens
List of original expression tokens.

> `public` List<[ExpressionToken](../expression_token)> _initialTokens = new ArrayList<>()

#### _originalTokens
G)riginal tokens

> `private` List<[Token](../../../tokenizers/token)> _originalTokens = new ArrayList<>()

#### _currentTokenIndex
Current token index.

> `private` int _currentTokenIndex

#### _resultTokens
List of parsed expression tokens.

> `private` List<[ExpressionToken](../expression_token)Token> _resultTokens = new ArrayList<>()

#### _variableNames
List of found variable names.

> `private` List<String> _variableNames = new ArrayList<>()


### Instance methods

#### getExpression
Gets an new expression string.

> `public` String getExpression()

- **returns**: String - expression string.

#### setExpression
Gets an new expression string.

> `public` void setExpression(String value) throws Exception

- **value**: String - expression string.

#### getOriginalTokens
Gets original tokens.

> `public` List<Token> getOriginalTokens()

- **returns**: String - expression string.

#### setOriginalTokens
Sets original tokens.

> `public` void setOriginalTokens(List<Token> value) throws SyntaxException

- **value**: List<Token> - list of tokens.

#### getInitialTokens
Gets initial tokens.

> `public` List<ExpressionToken> getInitialTokens()

- **returns**: List<ExpressionToken> - list of tokens.

#### getResultTokens
Gets result tokens.

> `public` List<ExpressionToken> getResultTokens()

- **returns**: List<ExpressionToken> - list of expression tokens.

#### getVariableNames
Gets variable names.

> `public` List<String> getVariableNames()

- **returns**: List<String> - list of variable names.

#### clear
Clears parsing results.

> `public` void clear()


#### parseString
Sets a new expression string and parses it into internal byte code.

> `public` void parseString(String expression) throws Exception

- **expression**: String - new expression string.

#### parseTokens
Parses a given token.
> `public` void parseTokens(List<[Token](../../../tokenizers/token)> tokens) throws SyntaxException

- **tokens**: [Token[]](../../../tokenizers/token) - token to be parsed.

