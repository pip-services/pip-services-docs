---
type: docs
title: "MustacheParser"
linkTitle: "MustacheParser"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Implements a Mustache parser class.
---

### Description

The MustacheParser class allows you to implement a Mustache parser.


### Properties

#### initialTokens
List of original Mustache tokens.

> List<[MustacheToken](../mustache_token)> get initialTokens

- **returns**: List<[MustacheToken](../mustache_token)> - original mustache tokens.

#### originalTokens
List of original Mustache tokens.

> List<[Token](../../../tokenizers/token)> get originalTokens

- **returns**: List<[Token](../../../tokenizers/token)> - original Mustache tokens.

> set originalTokens(List<[Token](../../../tokenizers/token)> value)

- **value**: List<[Token](../../../tokenizers/token)> - original Mustache tokens.

#### resultTokens
List of parsed Mustache tokens.

> List<[MustacheToken](../mustache_token)> get resultTokens

- **returns**: List<[MustacheToken](../mustache_token)> - parsed Mustache tokens.

#### template
Mustache template.

> String get template

- **returns**: String - Mustache template.


> set template(String value)

- **value**: String - Mustache template.


#### variableNames
List of found variable names.

> List\<String\> get variableName

- **returns**: List\<String\> - found variable names.

### Instance methods

#### clear
Clears parsing results.

> void clear()

#### parseString
Sets a new Mustache string and parses it into internal byte code.

> void parseString(String? mustache)

- **mustache**: String? - new Mustache string.

#### parseTokens
Sets a new mustache Token and parses it into internal byte code.

> void parseTokens(List<[Token](../../../tokenizers/token)> tokens)

- **mustache**: List<[Token](../../../tokenizers/token)> - new Mustache string.