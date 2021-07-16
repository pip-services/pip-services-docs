---
type: docs
title: "ExpressionQuoteState"
linkTitle: "ExpressionQuoteState"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
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

- **value**: string - A string value to be decoded.
- **quoteSymbol**: rune - A string quote character.
- **returns**: string - An decoded string.

#### EncodeString
Encodes a string value.
> (c [*ExpressionQuoteState]()) EncodeString(value string, quoteSymbol rune) string

- **value**: string - A string value to be encoded.
- **quoteSymbol**: rune - A string quote character.
- **returns**: string - An encoded string.


#### NextToken
Gets the next token from the stream started from the character linked to this state.

> (c [*ExpressionQuoteState]()) NextToken(scanner [IScanner](../../../io/iscanner), tokenizer [ITokenizer](../../../tokenizers/itokenizer)) [*Token](../../../tokenizers/token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../../tokenizers/itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../../../tokenizers/token) - next token from the top of the stream.

