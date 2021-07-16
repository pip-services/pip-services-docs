---
type: docs
title: "ExpressionWordState"
linkTitle: "ExpressionWordState"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
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
