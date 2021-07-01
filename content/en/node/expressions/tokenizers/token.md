---
type: docs
title: "Token"
linkTitle: "Token"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    A token represents a logical chunk of a string. For example, a typical tokenizer would break
    the string *"1.23 <= 12.3"* into three tokens: the number *1.23*, a less-than-or-equal symbol,
    and the number *12.3*. A token is a receptacle, and relies on a tokenizer to decide precisely how
    to divide a string into tokens.
---

### Description

TODO: add description

### Constructors
Constructs this token with type and value.

> `public` constructor(type: [TokenType](../token_type), value: string, line: number, column: number)

- **type**: [TokenType](../token_type) - The type of this token.
- **value**: string - The token string value.
- **line**: number - The line number where the token is.
- **column**: number - The column number where the token is.

### Properties

#### column
The column number where the token is.

> `public` column(): number

- **returns**: number - the column number.

#### line
The line number where the token is.

> `public` line(): number

- **returns**: number - the line number.


#### type
The token type.

> `public` type(): [TokenType](../token_type)

- **returns**: [TokenType](../token_type) - token type.


#### value
The token value.

> `public` value(): string

- **returns**: string - token value.

### Instance methods

#### equals
TODO: add description
> `public` equals(obj: any): boolean

- **obj**: any - TODO: add description
- **returns**: boolean - TODO: add description
