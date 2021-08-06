---
type: docs
title: "IQuoteState"
linkTitle: "IQuoteState"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
    Defines an interface for a tokenizer state that processes quoted strings.
---

**Implements**: [ITokenizerState](../itokenizer_state)

### Description

The IQuoteState interface is used for tokenizer states that process quoted strings.

### Methods

#### DecodeString
Decodes a string value.

> DecodeString(value string, quoteSymbol rune) string

- **value**: string - string value to be decoded.
- **quoteSymbol**: rune - string quote character.
- **returns**: string - decoded string.

#### EncodeString
Encodes a string value.

> EncodeString(value string, quoteSymbol rune) string

- **value**: string - string value to be encoded.
- **quoteSymbol**: rune - string quote character.
- **returns**: string - encoded string.
