---
type: docs
title: "MustacheParser"
linkTitle: "MustacheParser"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Implements a Mustache parser class.
---

### Description

The MustacheParser class allows you to implement a Mustache parser.


### Properties

#### initialTokens
List of original Mustache tokens.

> `public` List<[MustacheToken](../mustache_token)> _initialTokens = new ArrayList<>()

#### originalTokens
List of original Mustache tokens.

> `public` List<[Token](../../../tokenizers/token)> _originalTokens = new ArrayList<>()

#### resultTokens
List of parsed Mustache tokens.

> `public` List<[MustacheToken](../mustache_token)> _resultTokens = new ArrayList<>()

#### template
Mustache template.

> `private` String _template = ""

#### variableNames
List of found variable names.

> `public` List<String> _variableNames = new ArrayList<>()

### Instance methods

#### clear
Clears parsing results.

> `public` void clear()

#### parseString
Sets a new Mustache string and parses it into internal byte code.

> `public` void parseString(String mustache) throws Exception

- **mustache**: String - new Mustache string.

#### parseTokens
Sets a new mustache Token and parses it into internal byte code.

> `public` void parseTokens(List<[Token](../../../tokenizers/token)> tokens) throws MustacheException

- **mustache**: List<[Token](../../../tokenizers/token)> - new Mustache string.
