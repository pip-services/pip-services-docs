---
type: docs
title: "CsvTokenizer"
linkTitle: "CsvTokenizer"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Implements a tokenizer class for CSV files.
---

**Extends**: [AbstractTokenizer](../../tokenizers/abstract_tokenizer)

### Description

The CsvTokenizer class allows you to implement a tokenizer class for CSV files.

### Constructors
Constructs this object with default parameters.

> `public` CsvTokenizer() throws Exception

### Properties

#### endOfLine
Separator for rows in CSV stream.

> `private` String _endOfLine = "\n\r"

#### fieldSeparators
Separator for fields in CSV stream.

> `private` List<Integer> _fieldSeparators = List.of(",".codePointAt(0))

#### quoteSymbols
Character to quote strings.

> `private` List<Integer> _quoteSymbols = List.of("\"".codePointAt(0))

