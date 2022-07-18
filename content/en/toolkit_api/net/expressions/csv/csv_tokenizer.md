---
type: docs
title: "CsvTokenizer"
linkTitle: "CsvTokenizer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a tokenizer class for CSV files.
---

**Inherits**: [AbstractTokenizer](../../tokenizers/abstract_tokenizer)

### Description

The CsvTokenizer class allows you to implement a tokenizer class for CSV files.

### Constructors
Constructs this object with default parameters.

> `public` CsvTokenizer()

### Properties

#### EndOfLine
Separator for rows in CSV stream.

> `public` string EndOfLine { get; set; }

#### FieldSeparators
Separator for fields in CSV stream.

> `public` char[] FieldSeparators { get; set; }


#### QuoteSymbols
Character to quote strings.

> `public` char[] QuoteSymbols
