---
type: docs
title: "CsvQuoteState"
linkTitle: "CsvQuoteState"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Implements a quote string state object for CSV streams.
---

**Inherits**: [IQuoteState](../../tokenizers/iquote_state)

### Description

The CsvQuoteState implements a quote string state object for CSV streams.

### Instance methods

#### DecodeString
Decodes a string value.

> `public` string DecodeString(string value, char quoteSymbol)

- **value**: string - string value to be decoded.
- **quoteSymbol**: char - string quote character.
- **returns**: string - An decoded string.


#### EncodeString
Encodes a string value.

> `public` string EncodeString(string value, char quoteSymbol)

- **value**: string - string value to be encoded.
- **quoteSymbol**: char - string quote character.
- **returns**: string - encoded string.


#### NextToken
Gets the next token from the stream started from the character linked to this state.

> `public` [Token](../../tokenizers/token) NextToken([IScanner](../../io/iscanner) scanner, [ITokenizer](../../tokenizers/itokenizer) tokenizer)

- **scanner**: [IScanner](../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../tokenizers/token) - next token from the top of the stream.

