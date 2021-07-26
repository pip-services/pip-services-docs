---
type: docs
title: "CsvQuoteState"
linkTitle: "CsvQuoteState"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Implements a quote string state object for CSV streams.
---

**Implements**: [IQuoteState](../../tokenizers/iquote_state)

### Description

The CsvQuoteState implements a quote string state object for CSV streams.

### Instance methods

#### decode_string
Decodes a string value.

> decode_string(value: str, quote_symbol: int): str

- **value**: str - string value to be decoded.
- **quote_symbol**: int - string quote character.
- **returns**: str - An decoded string.


#### encode_string
Encodes a string value.

> encode_string(value: str, quote_symbol: int): str 

- **value**: str - string value to be encoded.
- **quote_symbol**: int - string quote character.
- **returns**: str - encoded string.


#### next_token
Gets the next token from the stream started from the character linked to this state.

> next_token(scanner: [IScanner](../../io/iscanner), tokenizer: [ITokenizer](../../tokenizers/itokenizer)): [Token](../../tokenizers/token)

- **scanner**: [IScanner](../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../tokenizers/token) - next token from the top of the stream.

