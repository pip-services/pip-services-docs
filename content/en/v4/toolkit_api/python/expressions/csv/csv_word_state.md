---
type: docs
title: "CsvWordState"
linkTitle: "CsvWordState"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-expressions-python"
description: > 
    Implements a word state to tokenize a CSV stream.
---

**Implements**: [GenericWordState](../../tokenizers/generic/generic_word_state)

### Description

The CsvWordState class implements a word state to tokenize a CSV stream.

### Constructors
Constructs this object with specified parameters.

> CsvWordState(field_separators: List[int], quote_symbols: List[int]) 

- **field_separators**: List[int] - separators for fields in a CSV stream.
- **quote_symbols**: List[int] - delimiter characters used to quote strings.
