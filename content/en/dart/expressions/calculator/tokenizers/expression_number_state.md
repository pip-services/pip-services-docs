---
type: docs
title: "ExpressionNumberState"
linkTitle: "ExpressionNumberState"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
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
> **PLUS**: int = '+'.codeUnitAt(0)

#### EXP1
Represents an 'e' symbol.
> **EXP1**: int = 'e'.codeUnitAt(0)

#### EXP2
Represents an 'E' symbol.
> **EXP2**: int = 'E'.codeUnitAt(0)

</span>

### Instance methods

#### nextToken
Gets the next token from the stream started from the character linked to this state.

`@override`
> [Token?](../../../tokenizers/token) nextToken(IScanner scanner, [ITokenizer?](../../../tokenizers/itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer?](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token?](../../../tokenizers/token) - next token from the top of the stream.
