---
type: docs
title: "Token"
linkTitle: "Token"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
   Represents a token.
---

### Description

The Token class represents a token.  A token represents a logical chunk of a string. For example, a typical tokenizer would break the string *"1.23 <= 12.3"* into three tokens: the number *1.23*, a less-than-or-equal symbol, and the number *12.3*. A token is a receptacle, and relies on a tokenizer to decide precisely how to divide a string into tokens.

### Constructors
Constructs a token with a type and value.

> NewToken(typ int, value string, line int, column int) [*Token]()

- **type**: int - type of this token ([TokenType](../token_type)).
- **value**: string - token string value.
- **line**: int - line number where the token is.
- **column**: int - column number where the token is.

### Properties

#### Column
Column number where the token is.

> (c [*Token]()) Column() int

- **returns**: int - column number.

#### Line
Line number where the token is.

> (c [*Token]()) Line() int

- **returns**: int - line number.


#### Type
Token type.

> (c [*Token]()) Type() int

- **returns**: int - token type ([TokenType](../token_type)).


#### Value
Token value.

> (c [*Token]()) Value() string

- **returns**: string - token value.

### Methods

#### Equals
Compares this token to an object.
> (c [*Token]()) Equals(obj interface{}) bool

- **obj**: interface{} - compared object
- **returns**: bool - true if the type and value are the same, false otherwise.
