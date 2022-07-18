---
type: docs
title: "ExpressionNumberState"
linkTitle: "ExpressionNumberState"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements an Expression-specific number state object.
---

**Inherits**: [GenericNumberState](../../../tokenizers/generic/generic_number_state)

### Description

The ExpressionNumberState implements an expression-specific number state object.

### Instance methods

#### NextToken
Gets the next token from the stream started from the character linked to this state.

> `public override` [Token](../../../tokenizers/token) NextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../../tokenizers/itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../../tokenizers/token) - next token from the top of the stream.
