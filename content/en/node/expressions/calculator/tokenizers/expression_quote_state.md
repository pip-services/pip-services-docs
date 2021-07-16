---
type: docs
title: "ExpressionQuoteState"
linkTitle: "ExpressionQuoteState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
   Implements an Expression-specific quote string state object.
---

**Implements**: [IQuoteState](../../../tokenizers/iquote_state)

### Description

The ExpressionQuoteState class implements an Expression-specific quote string state object.

### Fields

<span class="hide-title-link">

#### QUOTE
Represents a " symbol.
> `protected` **QUOTE**: number = '"'.charCodeAt(0);

</span>

### Instance methods

#### decodeString
Decodes a string value.

> `public` decodeString(value: string, quoteSymbol: number): string

- **value**: string - A string value to be decoded.
- **quoteSymbol**: number - A string quote character.
- **returns**: string - An decoded string.

#### encodeString
Encodes a string value.
> `public` encodeString(value: string, quoteSymbol: number): string

- **value**: string - A string value to be encoded.
- **quoteSymbol**: number - A string quote character.
- **returns**: string - An encoded string.



#### nextToken
Gets the next token from the stream started from the character linked to this state.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../../tokenizers/itokenizer)): [Token](../../../tokenizers/token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../../tokenizers/token) - next token from the top of the stream.



