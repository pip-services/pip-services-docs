---
type: docs
title: "MustacheToken"
linkTitle: "MustacheToken"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Defines a Mustache token holder.
---

### Description

The MustacheToken class defines a Mustache token holder.


### Constructors
Creates an instance of a Mustache token.

> `public` MustacheToken([MustacheTokenType](../mustache_token_type) type, string value, int line, int column)

- **type**: [MustacheTokenType](../mustache_token_type) - token type.
- **value**: string - token value.
- **line**: int - line number where the token is.
- **column**: int - column number where the token is.


### Properties

#### Column
Column number where the token is.

> `public` int Column { get; }

#### Line
Line number where the token is.

> `public` int Line { get; }


#### Tokens
Gets a list of subtokens.

> `public` IList<[MustacheToken]()> Tokens { get; }

#### Type
Gets the token type.

> `public` [MustacheTokenType](../mustache_token_type) Type


#### Value
Gets the token value or variable name.

> `public` string Value { get; }

- **returns**: string - token value or variable name.
