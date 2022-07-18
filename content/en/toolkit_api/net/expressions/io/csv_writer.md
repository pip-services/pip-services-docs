---
type: docs
title: "CsvWriter"
linkTitle: "CsvWriter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a writer of CSV stream
---

### Description

The CsvWriter class allows you to implement a writer for CSV streams.
### Constructors
Constructs this object with a text writer.

> `public` CsvWriter(TextWriter writer, char fieldSeparator, char quoteSymbol)

- **writer**: TextWriter - text writer to writer the CSV data.
- **fieldSeparators**: writer - separators for fields in CSV stream.
- **quoteSymbols**: writer - characters to quote strings.


### Properties


#### FieldSeparator
Separator for fields in CSV stream.
Default is comma (,).
> `public` char FieldSeparator { get; }

#### QuoteChar
Character to quote strings in CSV streams.
Default is double quote (").
> `public` char QuoteChar { get; }


### Instance methods

#### EncodeString
Encodes a string value.

> `public` string EncodeString(string value, char quoteSymbol)

- **value**: string - string value to be encoded.
- **quoteSymbol**: char - string quote character.
- **returns**: string - encoded string.


#### WriteField
Writes a field value to a CSV stream.

> `public` void WriteField(string fieldValue)

- **fieldValue**: string - field value to be written.


#### WriteLine
Writes a line terminator to a CSV stream.

> `public` void WriteLine()
