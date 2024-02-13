---
type: docs
title: "CsvTokenizer"
linkTitle: "CsvTokenizer"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements a tokenizer class for CSV files.
---

**Implements**: [AbstractTokenizer](../../tokenizers/abstract_tokenizer)

### Description

The CsvTokenizer class allows you to implement a tokenizer class for CSV files.

### Constructors

#### NewCsvTokenizer
Constructs this object with default parameters.

> NewCsvTokenizer() [*CsvTokenizer]()

### Properties

#### EndOfLine
Separator for rows in a CSV stream.

> (c [*CsvTokenizer]()) EndOfLine() string

- **returns**: string - separator for rows.

#### FieldSeparators
Separator for fields in a CSV stream.

> (c [*CsvTokenizer]()) FieldSeparators() []rune

- **returns**: []rune - separator for fields.

#### QuoteSymbols
Character to quote strings.

> (c [*CsvTokenizer]()) QuoteSymbols() []rune

- **returns**: []rune - character to quote strings.

#### SetEndOfLine
Sets a separator for rows in a CSV stream.

> (c [*CsvTokenizer]()) SetEndOfLine(value string)

- **value**: string - separator for rows.


#### SetFieldSeparators
Sets separators for fields in a CSV stream.
> (c [*CsvTokenizer]()) SetFieldSeparators(value []rune)

- **value**: []rune - separator for fields.


#### SetQuoteSymbols
Sets characters to quote strings.
> (c [*CsvTokenizer]()) SetQuoteSymbols(value []rune)

- **value**: []rune - character to quote strings.

