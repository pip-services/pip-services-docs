---
type: docs
title: "MustacheParser"
linkTitle: "MustacheParser"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a Mustache parser class.
---

### Description

The MustacheParser class allows you to implement a Mustache parser.


### Properties

#### InitialTokens
List of original Mustache tokens.

> `public` IList<[MustacheToken](../mustache_token)> InitialTokens { get; }

#### OriginalTokens
List of original Mustache tokens.

> `public` IList<[Token](../../../tokenizers/token)> OriginalTokens { get; set; }


#### ResultTokens
List of parsed Mustache tokens.

> `public` IList<[MustacheToken](../mustache_token> ResultTokens { get; }

#### Template
Mustache template.

> `public` string Template { get; set; }


#### VariableNames
List of found variable names.

> `public` IList\<string\> VariableNames

- **returns**: IList\<string\> - found variable names.

### Instance methods

#### Clear
Clears parsing results.

> `public` void Clear()

#### ParseString
Sets a new Mustache string and parses it into internal byte code.

> `public` void ParseString(string mustache)

- **mustache**: string - new Mustache string.

#### ParseTokens
Sets a new mustache Token and parses it into internal byte code.

> `public` void ParseTokens(IList<[Token](../../../tokenizers/token)> tokens)

- **mustache**: IList<[Token](../../../tokenizers/token)> - new Mustache string.
- **returns**: error - error or nil no errors occured.