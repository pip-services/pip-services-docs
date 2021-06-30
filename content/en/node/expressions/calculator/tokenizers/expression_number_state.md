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

TODO: add description

### Fields

<span class="hide-title-link">

#### PLUS
TODO: add description
> `protected` **PLUS**: number = '+'.charCodeAt(0)

#### EXP1
TODO: add description
> `protected` **EXP1**: number = 'e'.charCodeAt(0)

#### EXP2
TODO: add description
> `protected` **EXP2**: number = 'E'.charCodeAt(0)

</span>

### Instance methods

#### nextToken
Gets the next token from the stream started from the character linked to this state.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../../tokenizers/itokenizer)): [Token](../../../tokenizers/token)

- **scanner**: [IScanner](../../../io/iscanner) - A textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - A tokenizer class that controls the process.
- **returns**: [Token](../../../tokenizers/token) - The next token from the top of the stream.