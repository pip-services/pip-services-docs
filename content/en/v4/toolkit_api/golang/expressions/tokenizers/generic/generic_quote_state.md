---
type: docs
title: "GenericQuoteState"
linkTitle: "GenericQuoteState"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    A quoteState returns a quoted string token from a scanner. 
---

### Description

The GenericQuoteState allows you to create a quoteState that returns a quoted string token from a scanner.

Important points

- This state will collect characters until it sees a match to the character that the tokenizer used to switch to this state. 
- For example, if a tokenizer uses a double-quote character to enter this state, then *nextToken()* will search for another double-quote until it finds one or finds the end of the scanner.


### Constructors

#### NewGenericQuoteState
Creates new instance of the component
> NewGenericQuoteState() [*GenericQuoteState]()

### Methods

#### DecodeString
Decodes a string value.
> (c [*GenericQuoteState]()) DecodeString(value string, quoteSymbol rune) string

- **value**: string - string value to be decoded.
- **quoteSymbol**: rune - string quote character.
- **returns**: string - decoded string.

#### EncodeString
Encodes a string value.
> (c [*GenericQuoteState]()) EncodeString(value string, quoteSymbol rune) string

- **value**: string - string value to be encoded.
- **quoteSymbol**: rune - string quote character.
- **returns**: string - encoded string.

#### NextToken
Returns a quoted string token from a scanner. This method will collect
characters until it sees a match to the character that the tokenizer used
to switch to this state.

> (c [*GenericQuoteState]()) NextToken(scanner [IScanner](../../../io/iscanner), tokenizer [ITokenizer](../../itokenizer)) [*Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../../token) - next token from the top of the stream.

