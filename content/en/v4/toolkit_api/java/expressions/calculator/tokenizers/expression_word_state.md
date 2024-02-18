---
type: docs
title: "ExpressionWordState"
linkTitle: "ExpressionWordState"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
   Implements a word state object.
---

**Extends**: [GenericWordState](../../../tokenizers/generic/generic_word_state)

### Description

The ExpressionTokenizer class allows you to implement a word state object.

### Constructors
Constructs an instance of this class.

> `public` ExpressionWordState() throws Exception


### Fields

<span class="hide-title-link">

Supported expression keywords.
> `public final` String[] **keywords** = new String[]{
            "AND", "OR", "NOT", "XOR", "LIKE", "IS", "IN", "NULL", "TRUE", "FALSE"
    }
</span>


#### nextToken
Gets the next token from the stream started from the character linked to this state.

> `public` [Token](../../../tokenizers/token) nextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../../tokenizers/itokenizer) tokenizer) throws Exception

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../../tokenizers/token) - next token from the top of the stream.
