---
type: docs
title: "ExpressionNumberState"
linkTitle: "ExpressionNumberState"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements an Expression-specific number state object.
---

**Implements**: [GenericNumberState](../../../tokenizers/generic/generic_number_state)

### Description

The ExpressionNumberState implements an expression-specific number state object.

### Methods

#### NextToken
Gets the next token from the stream started from the character linked to this state.

> (c *ExpressionNumberState) NextToken(scanner [IScanner](../../../io/iscanner), tokenizer [ITokenizer](../../../tokenizers/itokenizer)) [*Token](../../../tokenizers/token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../../../tokenizers/token) - next token from the top of the stream.

