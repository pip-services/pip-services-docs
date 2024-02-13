---
type: docs
title: "ExpressionQuoteState"
linkTitle: "ExpressionQuoteState"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
   Implements an Expression-specific quote string state object.
---

**Implements**: [IQuoteState](../../../tokenizers/iquote_state)

### Description

The ExpressionQuoteState class implements an Expression-specific quote string state object.

### Constructors

#### NewExpressionQuoteState
Create new instance of ExpressionQouteState

> NewExpressionQuoteState() [*ExpressionQuoteState]()


### Methods

#### DecodeString
Decodes a string value.

> (c [*ExpressionQuoteState]()) DecodeString(value string, quoteSymbol rune) string

- **value**: string - string value to be decoded.
- **quoteSymbol**: rune - string quote character.
- **returns**: string - decoded string.

#### EncodeString
Encodes a string value.
> (c [*ExpressionQuoteState]()) EncodeString(value string, quoteSymbol rune) string

- **value**: string - string value to be encoded.
- **quoteSymbol**: rune - string quote character.
- **returns**: string - encoded string.


#### NextToken
Gets the next token from the stream started from the character linked to this state.

> (c [*ExpressionQuoteState]()) NextToken(scanner [IScanner](../../../io/iscanner), tokenizer [ITokenizer](../../../tokenizers/itokenizer)) [*Token](../../../tokenizers/token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../../../tokenizers/token) - next token from the top of the stream.


