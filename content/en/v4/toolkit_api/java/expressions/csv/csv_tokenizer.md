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


### Instance methods

#### getFieldSeparators
Gets a list of field separators.
> `public` List<Integer> getFieldSeparators()

- **returns**: List<Integer> - list of field separators
  
#### setFieldSeparators
Sets the field separators.
> `public` void setFieldSeparators(List<Integer> value) throws Exception

- **value**: List<Integer> - list of field separators.

#### getEndOfLine
Gets the separator for rows in CSV stream.
> `public` String getEndOfLine()

- **returns**: String - separator for rows in CSV stream
  
#### setEndOfLine
Gets the separator for rows in CSV stream.
> `public` void setEndOfLine(String value)

- **value**: String - separator for rows in CSV stream.

#### getQuoteSymbols
Gets the characters to quote strings.
> `public` List<Integer> getQuoteSymbols()

- **returns**: List<Integer> - list of characters to quote strings
  
#### setQuoteSymbols
Sets the characters to quote strings.
> `public` void setQuoteSymbols(List<Integer> value) throws Exception

- **value**: List<Integer> - list of characters to quote strings
