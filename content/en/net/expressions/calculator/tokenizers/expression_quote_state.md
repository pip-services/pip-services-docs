---
type: docs
title: "ExpressionQuoteState"
linkTitle: "ExpressionQuoteState"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
   Implements an Expression-specific quote string state object.
---

**Inherits**: [IQuoteState](../../../tokenizers/iquote_state)

### Description

The ExpressionQuoteState class implements an Expression-specific quote string state object.


### Instance methods

#### decodeString
Decodes a string value.

> `public` string DecodeString(string value, char quoteSymbol)

- **value**: string - A string value to be decoded.
- **quoteSymbol**: char - A string quote character.
- **returns**: string - An decoded string.

#### EncodeString
Encodes a string value.
> `public` string EncodeString(string value, char quoteSymbol)

- **value**: string - A string value to be encoded.
- **quoteSymbol**: char - A string quote character.
- **returns**: string - An encoded string.



#### NextToken
Gets the next token from the stream started from the character linked to this state.

> `public override` [Token](../../../tokenizers/token) NextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../../tokenizers/itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../../tokenizers/token) - next token from the top of the stream.



