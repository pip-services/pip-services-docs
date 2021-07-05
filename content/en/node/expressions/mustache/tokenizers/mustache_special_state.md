---
type: docs
title: "MustacheSpecialState"
linkTitle: "MustacheSpecialState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a quote string state object for Mustache templates.
---

**Extends**: [ITokenizerState](../../tokenizers/itokenizer_state)

### Description

The MustacheSpecialState class allows you to implement a quote string state object for Mustache templates.

### Instance methods

#### nextToken
Gets the next token from the stream started from the character linked to this state.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../tokenizers/itokenizer)): [Token](../../tokenizers/token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../tokenizers/token) - next token from the top of the stream.
