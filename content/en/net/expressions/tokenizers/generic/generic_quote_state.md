---
type: docs
title: "GenericQuoteState"
linkTitle: "GenericQuoteState"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    A quoteState returns a quoted string token from a scanner. 
---

**Inherits**: [IQuoteState](../../iquote_state)

### Description

The GenericQuoteState allows you to create a quoteState that returns a quoted string token from a scanner.

**Important points**

- This state will collect characters until it sees a match to the character that the tokenizer used to switch to this state. 
- For example, if a tokenizer uses a double-quote character to enter this state, then *nextToken()* will search for another double-quote until it finds one or finds the end of the scanner.


### Instance methods

#### DecodeString
Decodes a string value.
> `public virtual` string DecodeString(string value, char quoteSymbol)

- **value**: string - string value to be decoded.
- **quoteSymbol**: char - string quote character.
- **returns**: string - decoded string.

#### EncodeString
Encodes a string value.
> `public virtual` string EncodeString(string value, char quoteSymbol)

- **value**: string - string value to be encoded.
- **quoteSymbol**: char - string quote character.
- **returns**: string - encoded string.

#### NextToken
Returns a quoted string token from a scanner. This method will collect
characters until it sees a match to the character that the tokenizer used
to switch to this state.

> `public virtual` [Token](../../token) NextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
