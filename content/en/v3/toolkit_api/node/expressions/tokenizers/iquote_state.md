---
type: docs
title: "IQuoteState"
linkTitle: "IQuoteState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Defines an interface for tokenizer state that processes quoted strings.
---

**Implements**: [ITokenizerState](../itokenizer_state)

### Description

The IQuoteState interface is used for tokenizer states that process quoted strings.

### Instance methods

#### decodeString
Decodes a string value.

> decodeString(value: string, quoteSymbol: number): string

- **value**: string - string value to be decoded.
- **quoteSymbol**: number - string quote character.
- **returns**: string - decoded string.

#### encodeString
Encodes a string value.

> encodeString(value: string, quoteSymbol: number): string

- **value**: string - string value to be encoded.
- **quoteSymbol**: number - string quote character.
- **returns**: string - encoded string.
