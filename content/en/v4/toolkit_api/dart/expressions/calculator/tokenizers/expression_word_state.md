---
type: docs
title: "ExpressionWordState"
linkTitle: "ExpressionWordState"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-expressions-dart"
description: > 
   Implements a word state object.
---

**Extends**: [GenericWordState](../../../tokenizers/generic/generic_word_state)

### Description

The ExpressionTokenizer class allows you to implement a word state object.

### Constructors
Constructs an instance of this class.

> ExpressionWordState()


### Fields

<span class="hide-title-link">

Supported expression keywords.
> List\<String\> keywords = ['AND', 'OR', 'NOT', 'XOR', 'LIKE', 'IS', 'IN', 'NULL', 'TRUE', 'FALSE']

</span>


#### nextToken
Gets the next token from the stream, starting from the character linked to this state.

> [Token?](../../../tokenizers/token) nextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer?](../../../tokenizers/itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer?](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token?](../../../tokenizers/token) - next token from the top of the stream.
