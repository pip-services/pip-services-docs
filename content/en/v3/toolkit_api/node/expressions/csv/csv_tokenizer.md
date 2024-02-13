---
type: docs
title: "CsvTokenizer"
linkTitle: "CsvTokenizer"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a tokenizer class for CSV files.
---

**Extends**: [AbstractTokenizer](../../tokenizers/abstract_tokenizer)

### Description

The CsvTokenizer class allows you to implement a tokenizer class for CSV files.

### Constructors
Constructs this object with default parameters.

> `public` constructor()

### Properties

#### endOfLine
Separator for rows in CSV stream.

> `public` endOfLine(): string

- **returns**: string - separator for rows.

> `public` endOfLine(value: string)

- **value**: string - separator for rows.

#### fieldSeparators
Separator for fields in CSV stream.

> `public` fieldSeparators(): number[]

- **returns**: number[] - separator for fields.

> `public` fieldSeparators(value: number[])

- **value**: number[] - separator for fields.


#### quoteSymbols
Character to quote strings.

> `public` quoteSymbols(): number[]

- **returns**: number[] - character to quote strings.

> `public` quoteSymbols(value: number[])

- **value**: number[] - character to quote strings.
