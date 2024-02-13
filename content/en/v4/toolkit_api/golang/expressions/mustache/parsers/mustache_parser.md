---
type: docs
title: "MustacheParser"
linkTitle: "MustacheParser"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements a Mustache parser class.
---

### Description

The MustacheParser class allows you to implement a Mustache parser.


### Constructors

#### NewMustacheParser
Creates a new instance of this class.

> NewMustacheParser() [*MustacheParser]()

### Properties

#### InitialTokens
List of original Mustache tokens.

> (c [*MustacheParser]()) InitialTokens() [[]*MustacheToken](../mustache_token)

- **returns**: [[]*MustacheToken](../mustache_token) - original mustache tokens.

#### OriginalTokens
Sets the list of original Mustache tokens.

> (c [*MustacheParser]()) OriginalTokens() [[]*Token](../../../tokenizers/token)

- **returns**: [[]*Token](../../../tokenizers/token) - original Mustache tokens.

#### SetOriginalTokens
Gets the list of original tokens
> (c [*MustacheParser]()) SetOriginalTokens(value [[]*Token](../../../tokenizers/token)) error

- **value**: [[]*Token](../../../tokenizers/token) - original Mustache tokens.
- **returns**: error - error or nil if no errors occurred.

#### ResultTokens
List of parsed Mustache tokens.

> (c [*MustacheParser]()) ResultTokens() [[]*MustacheToken](../mustache_token)

- **returns**: [[]*MustacheToken](../mustache_token) - parsed Mustache tokens.

#### Template
Mustache template.

> (c [*MustacheParser]()) Template() string

- **returns**: string - Mustache template.

#### SetTemplate
Sets the mustache template.

> (c [*MustacheParser]()) SetTemplate(value string) error

- **value**: string - Mustache template.
- **returns**: error - error or nil if no errors occurred.


#### VariableNames
List of found variable names.

> (c [*MustacheParser]()) VariableNames() []string

- **returns**: []string - found variable names.

### Methods

#### Clear
Clears parsing results.

> (c [*MustacheParser]()) Clear()

#### ParseString
Sets a new Mustache string and parses it into internal byte code.

> (c [*MustacheParser]()) ParseString(mustache string) error

- **mustache**: string - new Mustache string.
- **returns**: error - error or nil if no errors occurred.

#### ParseTokens
Sets a new mustache Token and parses it into internal byte code.

> (c [*MustacheParser]()) ParseTokens(tokens [[]*Token](../../../tokenizers/token)) error

- **mustache**: [[]*Token](../../../tokenizers/token) - new Mustache string.
- **returns**: error - error or nil if no errors occurred.

