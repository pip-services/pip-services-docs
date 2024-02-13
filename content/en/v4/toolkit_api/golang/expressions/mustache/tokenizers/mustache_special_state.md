---
type: docs
title: "MustacheSpecialState"
linkTitle: "MustacheSpecialState"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements a quote string state object for Mustache templates.
---

### Description

The MustacheSpecialState class allows you to implement a quote string state object for Mustache templates.

### Constructors

#### NewMustacheSpecialState
Creates new instance of MustacheSpecialState

> NewMustacheSpecialState() [*MustacheSpecialState]()

### Methods

#### NextToken
Gets the next token from the stream started from the character linked to this state.

> (c [*MustacheSpecialState]()) NextToken(scanner [IScanner](../../../io/iscanner), tokenizer [ITokenizer](../../../tokenizers/itokenizer)) [*Token](../../../tokenizers/token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../../../tokenizers/token) - next token from the top of the stream.

