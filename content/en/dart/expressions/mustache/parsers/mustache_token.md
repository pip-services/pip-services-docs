---
type: docs
title: "MustacheToken"
linkTitle: "MustacheToken"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Defines a Mustache token holder.
---

### Description

The MustacheToken defines a Mustache token holder.


### Constructors
Creates an instance of a Mustache token.

> MustacheToken([MustacheTokenType?](../mustache_token_type) type, String? value, int? line, int? column)

- **type**: [MustacheTokenType?](../mustache_token_type) - token type.
- **value**: String? - token value.
- **line**: int? - line number where the token is.
- **column**: int? - column number where the token is.


### Properties

#### column
Column number where the token is.

> int get column

- **returns**: int - column number.

#### line
Line number where the token is.

> int get line

- **returns**: int - line number.


#### tokens
Gets a list of subtokens.

> List<[MustacheToken]()> get tokens

- **returns**: List<[MustacheToken]()> - list of subtokens.

#### type
Gets the token type.

> [MustacheTokenType](../mustache_token_type) get type

- **returns**: [MustacheTokenType](../mustache_token_type) - token type.


#### value
Gets the token value or variable name.

> String? get value

- **returns**: String? - token value or variable name.
