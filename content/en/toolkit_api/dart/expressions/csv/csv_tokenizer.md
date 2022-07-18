---
type: docs
title: "CsvTokenizer"
linkTitle: "CsvTokenizer"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Implements a tokenizer class for CSV files.
---

**Extends**: [AbstractTokenizer](../../tokenizers/abstract_tokenizer)

### Description

The CsvTokenizer class allows you to implement a tokenizer class for CSV files.

### Constructors
Constructs this object with default parameters.

> CsvTokenizer()

### Properties

#### endOfLine
Separator for rows in CSV stream.

> String get endOfLine

- **returns**: String - separator for rows.

> set endOfLine(String value)

- **value**: String - separator for rows.

#### fieldSeparators
Separator for fields in CSV stream.

> List\<int\> get fieldSeparators

- **returns**: List\<int\> - separator for fields.

> set fieldSeparators(List\<int\> value)

- **value**: List\<int\> - separator for fields.


#### quoteSymbols
Character to quote strings.

> List\<int\> get quoteSymbols

- **returns**: List\<int\> - character to quote strings.

> set quoteSymbols(List\<int\> value)

- **value**: List\<int\> - character to quote strings.
