---
type: docs
title: "ExpressionWordState"
linkTitle: "ExpressionWordState"
gitUrl: "github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
   Implements a word state object.
---

**Implements**: [GenericWordState](../../../tokenizers/generic/generic_word_state)

### Description

The ExpressionTokenizer class allows you to implement a word state object.

### Constructors

#### NewExpressionWordState
Constructs an instance of this class.

> NewExpressionWordState() [*ExpressionWordState]()


### Fields

<span class="hide-title-link">

Supported expression keywords.

> **Keywords** []string = []string{
   "AND", "OR", "NOT", "XOR", "LIKE", "IS", "IN", "NULL", "TRUE", "FALSE"
}

</span>


#### NextToken
Gets the next token from the stream started from the character linked to this state.

> (c [*ExpressionQuoteState]()) NextToken(scanner [IScanner](../../../io/iscanner), tokenizer [ITokenizer](../../../tokenizers/itokenizer)) [*Token](../../../tokenizers/token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../../../tokenizers/token) - next token from the top of the stream.
