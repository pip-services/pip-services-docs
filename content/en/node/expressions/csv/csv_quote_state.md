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

TODO: add description

### Instance methods

#### decodeString
Decodes a string value.

> `public` decodeString(value: string, quoteSymbol: number): string

- **value**: string - A string value to be decoded.
- **quoteSymbol**: number - A string quote character.


#### encodeString
Encodes a string value.

> `public` encodeString(value: string, quoteSymbol: number): string 

- **value**: string - A string value to be encoded.
- **quoteSymbol**: number - A string quote character.
- **returns**: string - An encoded string.


#### nextToken
Gets the next token from the stream started from the character linked to this state.

> `public` nextToken(scanner: [IScanner](../../io/iscanner), tokenizer: [ITokenizer](../../tokenizers/itokenizer)): [Token](../../tokenizers/token)

- **scanner**: [IScanner](../../io/iscanner) - A textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../tokenizers/itokenizer) - A tokenizer class that controls the process.
- **returns**: [Token](../../tokenizers/token) - The next token from the top of the stream.

