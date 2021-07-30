---
type: docs
title: "MustacheSpecialState"
linkTitle: "MustacheSpecialState"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a quote string state object for Mustache templates.
---

**Inherits**: [ITokenizerState](../../../tokenizers/itokenizer_state)

### Description

The MustacheSpecialState class allows you to implement a quote string state object for Mustache templates.

### Instance methods

#### NextToken
Gets the next token from the stream started from the character linked to this state.

> `public` [Token](../../../tokenizers/token) NextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../../tokenizers/itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../../tokenizers/token) - next token from the top of the stream.
