---
type: docs
title: "MustacheToken"
linkTitle: "MustacheToken"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Defines a mustache token holder.
---

### Description

TODO: add description


### Constructors
Creates an instance of a mustache token.

> `public` constructor(type: [MustacheTokenType](../mustache_token_type), value: string, line: number, column: number)

- **type**: [MustacheTokenType](../mustache_token_type) - a token type.
- **value**: string - a token value.
- **line**: number - a line number where the token is.
- **column**: number - a column numer where the token is.


### Properties

#### column
The column number where the token is.

> `public` column(): number

- **returns**: number - original mustache tokens.

#### line
The line number where the token is.

> `public` line(): number

- **returns**: number - line number.


#### tokens
Gets a list of subtokens is this token a section.

> `public` tokens(): [MustacheToken[]]()

- **returns**: [MustacheToken[]]() - list of subtokens.

#### type
Gets the token type.

> `public` type(): [MustacheTokenType](../mustache_token_type)

- **returns**: [MustacheTokenType](../mustache_token_type) - the token type.


#### value
Gets the token value or variable name.

> `public` value(): string

- **returns**: string - the token value or variable name.