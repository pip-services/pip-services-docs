---
type: docs
title: "CsvQuoteState"
linkTitle: "CsvQuoteState"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    Implements a quote string state object for CSV streams.
---

### Description

The CsvQuoteState implements a quote string state object for CSV streams.

### Constructors

#### NewCsvQuoteState
Creates new instance.

> NewCsvQuoteState() [*CsvQuoteState]()

### Methods

#### DecodeString
Decodes a string value.

> (c [*CsvQuoteState]()) DecodeString(value string, quoteSymbol rune) string

- **value**: string - string value to be decoded.
- **quoteSymbol**: rune - string quote character.
- **returns**: string - decoded string value.


#### EncodeString
Encodes a string value.

> (c [*CsvQuoteState]()) EncodeString(value string, quoteSymbol rune) string

- **value**: string - string value to be encoded.
- **quoteSymbol**: rune - string quote character.
- **returns**: string - encoded string.


#### nextToken
Gets the next token from the stream started from the character linked to this state.

> (c [*CsvQuoteState]()) NextToken(scanner [IScanner](../../io/iscanner), tokenizer [ITokenizer](../../tokenizers/itokenizer)) [*Token](../../tokenizers/token)

- **scanner**: [IScanner](../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../../tokenizers/token) - next token from the top of the stream.


