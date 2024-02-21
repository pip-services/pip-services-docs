---
type: docs
title: "IQuoteState"
linkTitle: "IQuoteState"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Defines an interface for tokenizer state that processes quoted strings.
---

**Implements**: [ITokenizerState](../itokenizer_state)

### Description

The IQuoteState interface is used for tokenizer states that process quoted strings.

### Instance methods

#### decodeString
Decodes a string value.

> String decodeString(String value, int quoteSymbol)

- **value**: String - string value to be decoded.
- **quoteSymbol**: int - string quote character.
- **returns**: String - decoded string.

#### encodeString
Encodes a string value.

> String encodeString(String value, int quoteSymbol)

- **value**: String - string value to be encoded.
- **quoteSymbol**: intr - string quote character.
- **returns**: String - encoded string.
