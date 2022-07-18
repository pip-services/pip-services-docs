---
type: docs
title: "ExpressionQuoteState"
linkTitle: "ExpressionQuoteState"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
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
> **QUOTE**: int = '"'.codeUnitAt(0)

</span>

### Instance methods

#### decodeString
Decodes a string value.

`@override`
> String? decodeString(String? value, int quoteSymbol)

- **value**: String? - String value to be decoded.
- **quoteSymbol**: int - String quote character.
- **returns**: String? - Decoded string.

#### encodeString
Encodes a string value.
`@override`
> String? encodeString(String? value, int quoteSymbol)

- **value**: String? - String value to be encoded.
- **quoteSymbol**: int - String quote character.
- **returns**: String? - Encoded string.



#### nextToken
Gets the next token from the stream started from the character linked to this state.

`@override`
> [Token?](../../../tokenizers/token) nextToken(IScanner scanner, [ITokenizer?](../../../tokenizers/itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer?](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token?](../../../tokenizers/token) - next token from the top of the stream.



