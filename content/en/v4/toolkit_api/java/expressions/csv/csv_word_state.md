---
type: docs
title: "CsvWordState"
linkTitle: "CsvWordState"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Implements a word state to tokenize a CSV stream.
---

**Extends**: [GenericWordState](../../tokenizers/generic/generic_word_state)

### Description

The CsvWordState class implements a word state to tokenize a CSV stream.

### Constructors
Constructs this object with specified parameters.

> `public` CsvWordState(List<Integer> fieldSeparators, List<Integer> quoteSymbols) throws Exception 

- **fieldSeparators**: List<Integer> - separators for fields in a CSV stream.
- **quoteSymbols**: List<Integer> - delimiter characters used to quote strings.
