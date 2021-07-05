---
type: docs
title: "CsvQuoteState"
linkTitle: "CsvQuoteState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements a quote string state object for CSV streams.
---

**Implements**: [IQuoteState](../../tokenizers/iquote_state)

### Description

The CsvQuoteState implements a quote string state object for CSV streams.

### Instance methods

#### decodeString
Decodes a string value.

> `public` decodeString(value: string, quoteSymbol: number): string

- **value**: string - string value to be decoded.
- **quoteSymbol**: number - string quote character.


#### encodeString
Encodes a string value.

> `public` encodeString(value: string, quoteSymbol: number): string 

- **value**: string - string value to be encoded.
- **quoteSymbol**: number - string quote character.
- **returns**: string - encoded string.


#### nextToken
Gets the next token from the stream started from the character linked to this state.

> `public` nextToken(scanner: [IScanner](../../io/iscanner), tokenizer: [ITokenizer](../../tokenizers/itokenizer)): [Token](../../tokenizers/token)

- **scanner**: [IScanner](../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../tokenizers/token) - next token from the top of the stream.

