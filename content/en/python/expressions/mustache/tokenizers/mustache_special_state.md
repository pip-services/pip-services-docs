---
type: docs
title: "MustacheSpecialState"
linkTitle: "MustacheSpecialState"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements a quote string state object for Mustache templates.
---

**Implements**: [ITokenizerState](../../../tokenizers/itokenizer_state)

### Description

The MustacheSpecialState class allows you to implement a quote string state object for Mustache templates.

### Instance methods

#### next_token
Gets the next token from the stream started from the character linked to this state.

> next_token(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../../tokenizers/itokenizer)): [Token](../../../tokenizers/token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../tokenizers/token) - next token from the top of the stream.
