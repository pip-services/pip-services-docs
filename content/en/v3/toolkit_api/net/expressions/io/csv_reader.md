---
type: docs
title: "CsvReader"
linkTitle: "CsvReader"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a reader of CSV streams.
---

### Description

The CsvReader class allows you to create a reader of CSV streams.

### Constructors
Constructs this object with text reader.

> `public` CsvReader(TextReader reader, char[] fieldSeparators, char[] quoteSymbols, string endOfLine)

- **reader**: TextReader - text reader to read the CSV data.
- **fieldSeparators**: char[] - separators for fields in CSV stream.
- **quoteSymbols**: char[] - characters to quote strings.
- **endOfLine**: end of line.

Constructs this object with string buffer.

> `public` CsvReader(TextReader reader, char[] fieldSeparators, char[] quoteSymbols)

- **reader**: TextReader - text reader to read the CSV data.
- **fieldSeparators**: char[] - separators for fields in CSV stream.
- **quoteSymbols**: char[] - characters to quote strings.


Constructs this object with string buffer.

> `public` CsvReader(string buffer, char[] fieldSeparators, char[] quoteSymbols)

- **buffer**: string - text reader to read the CSV data.
- **fieldSeparators**: char[] - separators for fields in a CSV stream.
- **quoteSymbols**: char[] - characters to quote strings.


Constructs this object with string buffer.

> `public` CsvReader(string buffer, char[] fieldSeparators, char[] quoteSymbols, string endOfLine)

- **reader**: string - text reader to read the CSV data.
- **fieldSeparators**: char[] - separators for fields in a CSV stream.
- **quoteSymbols**: char[] - characters to quote strings.
- **endOfLine**: string - end of line


### Properties


#### EndOfLine
Separator for rows in CSV stream.
Default is "\r\n".
> `public` string EndOfLine { get; }

#### Eof
Flag that shows end of CSV stream.
> `public` bool Eof { get; }

#### Eol
Flag that shows enf of line in CSV stream;
> `public` bool Eol { get; }

#### FieldSeparators
Separators for fields in CSV stream.
Default is comma (,).
> `public` char[] FieldSeparators { get; }

#### Length
Characters to quote strings in CSV streams.
Default is double quote (").
> `public` char[] QuoteSymbols { get; }




### Instance methods

#### ReadField
Reads the next field from the CSV stream and sets EOL and OEF flags.
It returns **String.Empty** for null string or in a case of EOF.

> `public` string ReadField()

- **returns**: string - returns **String.Empty** for null string or in a case of EOF.


#### SkipLine
It skips one line

> `public` void SkipLine()
