---
type: docs
title: "CsvQuoteState"
linkTitle: "CsvQuoteState"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Implements a quote string state object for CSV streams.
---

**Implements**: [IQuoteState](../../tokenizers/iquote_state)

### Description

The CsvQuoteState implements a quote string state object for CSV streams.

### Instance methods

#### decodeString
Decodes a string value.

`@override`
> String? decodeString(String? value, int quoteSymbol)

- **value**: String? - string value to be decoded.
- **quoteSymbol**: int - string quote character.
- **returns**: String? - An decoded string.


#### encodeString
Encodes a string value.

`@override`
> String? encodeString(String? value, int quoteSymbol)

- **value**: String? - string value to be encoded.
- **quoteSymbol**: int - string quote character.
- **returns**: String? - encoded string.


#### nextToken
Gets the next token from the stream started from the character linked to this state.

`@override`
> [Token?](../../tokenizers/token) nextToken(IScanner scanner, [ITokenizer?](../../tokenizers/itokenizer) tokenizer)

- **scanner**: [IScanner](../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer?](../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [Token?](../../tokenizers/token) - next token from the top of the stream.

