---
type: docs
title: "CsvWordState"
linkTitle: "CsvWordState"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
    Implements a word state to tokenize a CSV stream.
---

**Implements**: [GenericWordState](../../tokenizers/generic/generic_word_state)

### Description

The CsvWordState class implements a word state to tokenize a CSV stream.

### Constructors

#### NewCsvWordState
Constructs this object with specified parameters.

> NewCsvWordState(fieldSeparators []rune, quoteSymbols []rune) [*CsvWordState]()

- **fieldSeparators**: []rune - separators for fields in a CSV stream.
- **quoteSymbols**: []rune - delimiter characters used to quote strings.
