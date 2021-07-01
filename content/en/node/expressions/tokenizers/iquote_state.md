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

TODO: add description

### Instance methods

#### decodeString
Decodes a string value.

> decodeString(value: string, quoteSymbol: number): string

- **value**: string - A string value to be decoded.
- **quoteSymbol**: number - A string quote character.
- **returns**: string - An decoded string.

#### encodeString
Encodes a string value.

> encodeString(value: string, quoteSymbol: number): string

- **value**: string - A string value to be encoded.
- **quoteSymbol**: number - A string quote character.
- **returns**: string - An encoded string.