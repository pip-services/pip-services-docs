---
type: docs
title: "ExpressionNumberState"
linkTitle: "ExpressionNumberState"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
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
> `protected final` int **PLUS** = '+'

#### EXP1
Represents an 'e' symbol.
> `protected final` int **EXP1** = 'e'

#### EXP2
Represents an 'E' symbol.
> `protected final` int **EXP2** = 'E'

</span>

### Instance methods



#### nextToken
Gets the next token from the stream started from the character linked to this state.

> `public` [Token](../../../tokenizers/token) nextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../../tokenizers/itokenizer) tokenizer) throws Exception

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../../tokenizers/token) - next token from the top of the stream.
