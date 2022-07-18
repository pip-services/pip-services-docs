---
type: docs
title: "GenericQuoteState"
linkTitle: "GenericQuoteState"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    A quoteState that returns a quoted string token from a scanner. 
---

**Implements**: [IQuoteState](../../iquote_state)

### Description

The GenericQuoteState allows you to create a quoteState that returns a quoted string token from a scanner.

**Important points**

- This state will collect characters until it sees a match to the character that the tokenizer used to switch to this state. 
- For example, if a tokenizer uses a double-quote character to enter this state, then *nextToken()* will search for another double-quote until it finds one or finds the end of the scanner.

### Fields

<span class="hide-title-link">

#### DOT
Represents a dot (.) character.
> **DOT**: int = ord('.')

#### MINUS
Represents a minus (-) character.
> **MINUS**: int = ord('-')

</span>



### Instance methods

#### decode_string
Decodes a string value.
> decode_string(value: str, quote_symbol: int): str

- **value**: str - string value to be decoded.
- **quote_symbol**: int - string quote character.
- **returns**: str - decoded string.

#### encode_string
Encodes a string value.
> encode_string(value: str, quote_symbol: int): str

- **value**: str - string value to be encoded.
- **quote_symbol**: int - string quote character.
- **returns**: str - encoded string.

#### next_token
Returns a quoted string token from a scanner. This method will collect
characters until it sees a match to the character that the tokenizer used
to switch to this state.

> next_token(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
