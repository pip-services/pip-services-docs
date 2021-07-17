---
type: docs
title: "CsvWriter"
linkTitle: "CsvWriter"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a writer of CSV stream
---

### Description

TODO: add description

### Constructors
Constructs this object with text writer.

> `public` CsvWriter(TextWriter writer, char fieldSeparator, char quoteSymbol)

- **writer**: TextWriter - A text writer to writer the CSV data.
- **fieldSeparators**: writer - Separators for fields in CSV stream.
- **quoteSymbols**: writer - Characters to quote strings.


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

- **value**: string - A string value to be encoded.
- **quoteSymbol**: char - A string quote character.
- **returns**: string - An encoded string.


#### WriteField
Writer a field value to CSV stream.

> `public` void WriteField(string fieldValue)

- **fieldValue**: string - A field value to be written.


#### WriteLine
Writes a line terminator to CSV stream.

> `public` void WriteLine()