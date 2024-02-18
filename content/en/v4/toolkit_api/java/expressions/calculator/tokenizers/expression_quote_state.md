---
type: docs
title: "ExpressionQuoteState"
linkTitle: "ExpressionQuoteState"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
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
> `protected final` int **QUOTE** = '"'

</span>

### Instance methods

#### decodeString
Decodes a string value.

> `public` String decodeString(String value, int quoteSymbol)

- **value**: String - A string value to be decoded.
- **quoteSymbol**: int - A string quote character.
- **returns**: String - An decoded string.

#### encodeString
Encodes a string value.
> `public` String encodeString(String value, int quoteSymbol)

- **value**: String - A string value to be encoded.
- **quoteSymbol**: int - A string quote character.
- **returns**: String - An encoded string.

#### nextToken
Gets the next token from the stream started from the character linked to this state.

> `public` [Token](../../../tokenizers/token) nextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../../tokenizers/itokenizer) tokenizer) throws Exception

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../../tokenizers/token) - next token from the top of the stream.



