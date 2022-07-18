---
type: docs
title: "Token"
linkTitle: "Token"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
   Represents a token.
---

### Description

The Token class represents a token.  A token represents a logical chunk of a string. For example, a typical tokenizer would break the string *"1.23 <= 12.3"* into three tokens: the number *1.23*, a less-than-or-equal symbol, and the number *12.3*. A token is a receptacle, and relies on a tokenizer to decide precisely how to divide a string into tokens.

### Constructors
Constructs a token with a type and value.

> `public` constructor(type: [TokenType](../token_type), value: string, line: number, column: number)

- **type**: [TokenType](../token_type) - type of this token.
- **value**: string - token string value.
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


#### type
Token type.

> `public` type(): [TokenType](../token_type)

- **returns**: [TokenType](../token_type) - token type.


#### value
Token value.

> `public` value(): string

- **returns**: string - token value.

### Instance methods

#### equals
Compares this token to an object.
> `public` equals(obj: any): boolean

- **obj**: any - compared object
- **returns**: boolean - true if the type and value are the same, false otherwise.
