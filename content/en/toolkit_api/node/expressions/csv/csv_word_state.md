---
type: docs
title: "CsvWordState"
linkTitle: "CsvWordState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a word state to tokenize a CSV stream.
---

**Extends**: [GenericWordState](../../tokenizers/generic/generic_word_state)

### Description

The CsvWordState class implements a word state to tokenize a CSV stream.

### Constructors
Constructs this object with specified parameters.

> `public` constructor(fieldSeparators: number[], quoteSymbols: number[]) 

- **fieldSeparators**: number[] - separators for fields in a CSV stream.
- **quoteSymbols**: number[] - delimiter characters used to quote strings.
