---
type: docs
title: "Token"
linkTitle: "Token"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
   Represents a token.
---

### Description

The Token class represents a token.  A token represents a logical chunk of a string. For example, a typical tokenizer would break the string *"1.23 <= 12.3"* into three tokens: the number *1.23*, a less-than-or-equal symbol, and the number *12.3*. A token is a receptacle, and relies on a tokenizer to decide precisely how to divide a string into tokens.

### Constructors
Constructs a token with a type and value.

> `public` Token([TokenType](../token_type) type, string value, int line, int column)

- **type**: [TokenType](../token_type) - type of this token.
- **value**: string - token string value.
- **line**: int - line number where the token is.
- **column**: int - column number where the token is.

### Properties

#### Column
Column number where the token is.

> `public` int Column { get; }

#### Line
Line number where the token is.

> `public` int Line { get; }


#### Type
Token type.

> `public` [TokenType](../token_type) Type { get; }

- **returns**: [TokenType](../token_type) - token type.


#### Value
Token value.

> `public` string Value { get; }

- **returns**: string - token value.

### Instance methods

#### Equals
Compares this token to an object.
> `public override` bool Equals(object obj)

- **obj**: object - compared object
- **returns**: bool - true if the type and value are the same, false otherwise.
