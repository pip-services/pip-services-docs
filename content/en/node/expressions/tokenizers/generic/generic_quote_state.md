---
type: docs
title: "GenericQuoteState"
linkTitle: "GenericQuoteState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    A quoteState returns a quoted string token from a scanner. 
---

**Implements**: [IQuoteState](../../iquote_state)

### Description

The GenericQuoteState allows you to create a quoteState that returns a quoted string token from a scanner.

Important points

- This state will collect characters until it sees a match to the character that the tokenizer used to switch to this state. 
- For example, if a tokenizer uses a double-quote character to enter this state, then *nextToken()* will search for another double-quote until it finds one or finds the end of the scanner.

### Fields

<span class="hide-title-link">

#### DOT
Represents a dot (.) character.
> `protected` **DOT**: number = '.'.charCodeAt(0);

#### MINUS
Represents a minus (-) character.
> `protected` **MINUS**: number = '-'.charCodeAt(0);

</span>



### Instance methods

#### decodeString
Decodes a string value.
> `public` decodeString(value: string, quoteSymbol: number): string

- **value**: string - string value to be decoded.
- **quoteSymbol**: number - string quote character.
- **returns**: string - decoded string.

#### encodeString
Encodes a string value.
> `public` encodeString(value: string, quoteSymbol: number): string

- **value**: string - string value to be encoded.
- **quoteSymbol**: number - string quote character.
- **returns**: string - encoded string.

#### nextToken
Returns a quoted string token from a scanner. This method will collect
characters until it sees a match to the character that the tokenizer used
to switch to this state.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
