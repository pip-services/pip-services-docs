---
type: docs
title: "ExpressionParser"
linkTitle: "ExpressionParser"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements an expression parser class.
---

### Description

The ExpressionParser class allows you to implement an expression parser.

### Properties

#### Expression
Gets and sets expression string.

> `public` string Expression { get; set; }


#### InitialTokens
List of original expression tokens.

> `public` IList<[ExpressionToken](../expression_token)> InitialTokens { get; }

#### OriginalTokens
Gets and sets the original tokens

> `public` IList<[Token](../../../tokenizers/token)> OriginalTokens { get; set; }


#### ResultTokens
List of parsed expression tokens.

> `public` IList<[ExpressionToken](../expression_token)> ResultTokens { get; }


#### VariableNames
List of found variable names.

> `public` IList\<string\> VariableNames { get; }


### Instance methods

#### Clear
Clears parsing results.

> `public` void Clear()


#### ParseString
Sets a new expression string and parses it into internal byte code.

> `public` void ParseString(string expression)

- **expression**: string - new expression string.

#### ParseTokens
Parses a given token.
> `public` void ParseTokens(IList<[Token](../../../tokenizers/token)> tokens)

- **tokens**: IList<[Token](../../../tokenizers/token)> - token to be parsed.

