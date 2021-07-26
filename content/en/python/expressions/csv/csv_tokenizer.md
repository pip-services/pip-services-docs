---
type: docs
title: "CsvTokenizer"
linkTitle: "CsvTokenizer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements a tokenizer class for CSV files.
---

**Implements**: [AbstractTokenizer](../../tokenizers/abstract_tokenizer)

### Description

The CsvTokenizer class allows you to implement a tokenizer class for CSV files.

### Constructors
Constructs this object with default parameters.

> CsvTokenizer()

### Properties

#### end_of_line
Separator for rows in CSV stream.

> end_of_line(): str

- **returns**: str - separator for rows.

> end_of_line(value: str)

- **value**: str - separator for rows.

#### field_separators
Separator for fields in CSV stream.

> field_separators(): List[int]

- **returns**: List[int] - separator for fields.

> field_separators(value: List[int])

- **value**: List[int] - separator for fields.


#### quote_symbols
Character to quote strings.

> quote_symbols(): List[int]

- **returns**: List[int] - character to quote strings.

> quote_symbols(value: List[int])

- **value**: List[int] - character to quote strings.
