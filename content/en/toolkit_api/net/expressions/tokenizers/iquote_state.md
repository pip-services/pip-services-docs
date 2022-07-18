---
type: docs
title: "IQuoteState"
linkTitle: "IQuoteState"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Defines an interface for tokenizer states that process quoted strings.
---

**Inherits**: [ITokenizerState](../itokenizer_state)

### Description

The IQuoteState interface is used for tokenizer states that process quoted strings.

### Instance methods

#### EncodeString
Decodes a string value.

> string EncodeString(string value, char quoteSymbol)

- **value**: string - string value to be decoded.
- **quoteSymbol**: char - string quote character.
- **returns**: string - decoded string.

#### DecodeString
Encodes a string value.

> string DecodeString(string value, char quoteSymbol)

- **value**: string - string value to be encoded.
- **quoteSymbol**: char - string quote character.
- **returns**: string - encoded string.
