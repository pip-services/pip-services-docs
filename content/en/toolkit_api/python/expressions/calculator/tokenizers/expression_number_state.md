---
type: docs
title: "ExpressionNumberState"
linkTitle: "ExpressionNumberState"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements an Expression-specific number state object.
---

**Implements**: [GenericNumberState](../../../tokenizers/generic/generic_number_state)

### Description

The ExpressionNumberState implements an expression-specific number state object.

### Fields

<span class="hide-title-link">

#### PLUS
Represents a '+' symbol.
> **PLUS**: int = ord('+')

#### EXP1
Represents an 'e' symbol.
> **EXP1**: int = ord('e')

#### EXP2
Represents an 'E' symbol.
> **EXP2**: int = ord('E')

</span>

### Instance methods

#### next_token
Gets the next token from the stream started from the character linked to this state.

> next_token(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../../tokenizers/itokenizer)): [Token](../../../tokenizers/token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../../tokenizers/token) - next token from the top of the stream.
