---
type: docs
title: "CsvWordState"
linkTitle: "CsvWordState"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-expressions-node"
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
