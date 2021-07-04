---
type: docs
title: "ExpressionNumberState"
linkTitle: "ExpressionNumberState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements an Expression-specific number state object.
---

**Extends**: [GenericNumberState](../../../tokenizers/generic/generic_number_state)

### Description

The ExpressionNumberState implements an expression-specific number state object.

### Fields

<span class="hide-title-link">

#### PLUS
Represents a '+' symbol.
> `protected` **PLUS**: number = '+'.charCodeAt(0)

#### EXP1
Represents an 'e' symbol.
> `protected` **EXP1**: number = 'e'.charCodeAt(0)

#### EXP2
Represents an 'E' symbol.
> `protected` **EXP2**: number = 'E'.charCodeAt(0)

</span>

### Instance methods

#### nextToken
Gets the next token from the stream started from the character linked to this state.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../../tokenizers/itokenizer)): [Token](../../../tokenizers/token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../../tokenizers/token) - next token from the top of the stream.
