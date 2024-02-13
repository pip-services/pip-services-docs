---
type: docs
title: "Token"
linkTitle: "Token"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
   Represents a token.
---

### Description

The Token class represents a token.  A token represents a logical chunk of a string. For example, a typical tokenizer would break the string *"1.23 <= 12.3"* into three tokens: the number *1.23*, a less-than-or-equal symbol, and the number *12.3*. A token is a receptacle, and relies on a tokenizer to decide precisely how to divide a string into tokens.

### Constructors
Constructs a token with a type and value.

> Token(type: [TokenType](../token_type), value: str, line: int, column: int)

- **type**: [TokenType](../token_type) - type of this token.
- **value**: str - token string value.
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


#### type
Token type.

> type(): [TokenType](../token_type)

- **returns**: [TokenType](../token_type) - token type.


#### value
Token value.

> value(): str

- **returns**: str - token value.

### Instance methods

#### equals
Compares this token to an object.
> equals(obj: any): bool

- **obj**: Any - compared object
- **returns**: bool - true if the type and value are the same, false otherwise.
