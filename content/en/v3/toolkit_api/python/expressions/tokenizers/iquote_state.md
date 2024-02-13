---
type: docs
title: "IQuoteState"
linkTitle: "IQuoteState"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    Defines an interface for a tokenizer state that processes quoted strings.
---

**Implements**: [ITokenizerState](../itokenizer_state)

### Description

The IQuoteState interface is used for tokenizer states that process quoted strings.

### Instance methods

#### decode_string
Decodes a string value.

> decode_string(value: str, quote_symbol: int): str

- **value**: str - string value to be decoded.
- **quote_symbol**: int - string quote character.
- **returns**: str - decoded string.

#### encode_string
Encodes a string value.

> encode_string(value: str, quote_symbol: int): str

- **value**: str - string value to be encoded.
- **quote_symbol**: int - string quote character.
- **returns**: str - encoded string.
