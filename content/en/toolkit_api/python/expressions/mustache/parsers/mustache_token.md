---
type: docs
title: "MustacheToken"
linkTitle: "MustacheToken"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Defines a Mustache token holder.
---

### Description

The MustacheToken defines a Mustache token holder.


### Constructors
Creates an instance of a Mustache token.

> MustacheToken(type: [MustacheTokenType](../mustache_token_type), value: str, line: int, column: int)

- **type**: [MustacheTokenType](../mustache_token_type) - token type.
- **value**: str - token value.
- **line**: int - line number where the token is.
- **column**: int - column number where the token is.


### Properties

#### column
Column number where the token is.

> column(): int

- **returns**: int - column number.

#### line
Line number where the token is.

> line(): int

- **returns**: int - line number.


#### tokens
Gets a list of subtokens.

> tokens(): List[[MustacheToken]()]

- **returns**: List[[MustacheToken]()] - list of subtokens.

#### type
Gets the token type.

> type(): [MustacheTokenType](../mustache_token_type)

- **returns**: [MustacheTokenType](../mustache_token_type) - token type.


#### value
Gets the token value or variable name.

> value(): str

- **returns**: str - token value or variable name.
