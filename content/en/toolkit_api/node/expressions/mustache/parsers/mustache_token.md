---
type: docs
title: "MustacheToken"
linkTitle: "MustacheToken"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Defines a Mustache token holder.
---

### Description

The MustacheToken defines a Mustache token holder.


### Constructors
Creates an instance of a Mustache token.

> `public` constructor(type: [MustacheTokenType](../mustache_token_type), value: string, line: number, column: number)

- **type**: [MustacheTokenType](../mustache_token_type) - token type.
- **value**: string - token value.
- **line**: number - line number where the token is.
- **column**: number - column number where the token is.


### Properties

#### column
Column number where the token is.

> `public` column(): number

- **returns**: number - column number.

#### line
Line number where the token is.

> `public` line(): number

- **returns**: number - line number.


#### tokens
Gets a list of subtokens.

> `public` tokens(): [MustacheToken[]]()

- **returns**: [MustacheToken[]]() - list of subtokens.

#### type
Gets the token type.

> `public` type(): [MustacheTokenType](../mustache_token_type)

- **returns**: [MustacheTokenType](../mustache_token_type) - token type.


#### value
Gets the token value or variable name.

> `public` value(): string

- **returns**: string - token value or variable name.
