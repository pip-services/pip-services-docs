---
type: docs
title: "CsvWordState"
linkTitle: "CsvWordState"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-expressions-dart"
description: > 
    Implements a word state to tokenize a CSV stream.
---

**Extends**: [GenericWordState](../../tokenizers/generic/generic_word_state)

### Description

The CsvWordState class implements a word state to tokenize a CSV stream.

### Constructors
Constructs this object with specified parameters.

> CsvWordState(List\<int\> fieldSeparators, List\<int\> quoteSymbols)

- **fieldSeparators**: List\<int\> - separators for fields in a CSV stream.
- **quoteSymbols**: List\<int\> - delimiter characters used to quote strings.
