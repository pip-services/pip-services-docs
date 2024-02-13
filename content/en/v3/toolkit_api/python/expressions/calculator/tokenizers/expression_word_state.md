---
type: docs
title: "ExpressionWordState"
linkTitle: "ExpressionWordState"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
   Implements a word state object.
---

**Implements**: [GenericWordState](../../../tokenizers/generic/generic_word_state)

### Description

The ExpressionTokenizer class allows you to implement a word state object.

### Constructors
Constructs an instance of this class.

> ExpressionWordState()


### Fields

<span class="hide-title-link">

Supported expression keywords.
> **keywords**: List[str] = [
   "AND", "OR", "NOT", "XOR", "LIKE", "IS", "IN", "NULL", "TRUE", "FALSE"
]

</span>


#### next_token
Gets the next token from the stream started from the character linked to this state.

> next_token(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../../tokenizers/itokenizer)): [Token](../../../tokenizers/token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../../tokenizers/token) - next token from the top of the stream.