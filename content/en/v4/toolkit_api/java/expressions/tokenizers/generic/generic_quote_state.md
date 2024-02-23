---
type: docs
title: "GenericQuoteState"
linkTitle: "GenericQuoteState"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    A quoteState returns a quoted string token from a scanner. 
---

**Implements**: [IQuoteState](../../iquote_state)

### Description

The GenericQuoteState allows you to create a quoteState that returns a quoted string token from a scanner.

Important points

- This state will collect characters until it sees a match to the character that the tokenizer used to switch to this state. 
- For example, if a tokenizer uses a double-quote character to enter this state, then *nextToken()* will search for another double-quote until it finds one or finds the end of the scanner.


### Instance methods

#### decodeString
Decodes a string value.
> `public` String decodeString(String value, int quoteSymbol)

- **value**: String - string value to be decoded.
- **quoteSymbol**: int - string quote character.
- **returns**: String - decoded string.

#### encodeString
Encodes a string value.
> `public` String encodeString(String value, int quoteSymbol)

- **value**: String - string value to be encoded.
- **quoteSymbol**: int - string quote character.
- **returns**: String - encoded string.

#### nextToken
Returns a quoted string token from a scanner. This method will collect
characters until it sees a match to the character that the tokenizer used
to switch to this state.

> `public` [Token](../../token) nextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
