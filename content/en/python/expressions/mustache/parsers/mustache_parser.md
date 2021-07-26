---
type: docs
title: "MustacheParser"
linkTitle: "MustacheParser"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements a Mustache parser class.
---

### Description

The MustacheParser class allows you to implement a Mustache parser.


### Properties

#### initial_tokens
List of original Mustache tokens.

> initial_tokens(): List[[MustacheToken](../mustache_token)]

- **returns**: List[[MustacheToken](../mustache_token)] - original mustache tokens.

#### original_tokens
List of original Mustache tokens.

> original_tokens(): List[[Token](../../../tokenizers/token)]

- **returns**: List[[Token](../../../tokenizers/token)] - original Mustache tokens.

> original_tokens(value: List[[Token](../../../tokenizers/token)])

- **value**: List[[Token](../../../tokenizers/token)] - original Mustache tokens.

#### result_tokens
List of parsed Mustache tokens.

> result_tokens(): List[[MustacheToken](../mustache_token)]

- **returns**: List[[MustacheToken](../mustache_token)] - parsed Mustache tokens.

#### template
Mustache template.

> template(): str

- **returns**: str - Mustache template.


> template(value: str)

- **value**: str - Mustache template.


#### variable_names
List of found variable names.

> variable_names(): List[str]

- **returns**: List[str] - found variable names.

### Instance methods

#### clear
Clears parsing results.

> clear()

#### parse_string
Sets a new Mustache string and parses it into internal byte code.

> parse_string(mustache: str)

- **mustache**: str - new Mustache string.

#### parse_tokens
Sets a new mustache Token and parses it into internal byte code.

> parse_tokens(tokens: List[[Token](../../../tokenizers/token)])

- **mustache**: List[[Token](../../../tokenizers/token)] - new Mustache string.