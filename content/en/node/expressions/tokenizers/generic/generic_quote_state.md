---
type: docs
title: "GenericQuoteState"
linkTitle: "GenericQuoteState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    A quoteState returns a quoted string token from a scanner. This state will collect characters
    until it sees a match to the character that the tokenizer used to switch to this state.
    For example, if a tokenizer uses a double-quote character to enter this state,
    then *nextToken()* will search for another double-quote until it finds one
    or finds the end of the scanner.
---

**Implements**: [IQuoteState](../../iquote_state)

### Description

TODO: add description

### Fields

<span class="hide-title-link">

#### DOT
TODO: add description
> `protected` **DOT**: number = '.'.charCodeAt(0);

#### MINUS
TODO: add description
> `protected` **MINUS**: number = '-'.charCodeAt(0);

</span>



### Instance methods

#### decodeString
Decodes a string value.
> `public` decodeString(value: string, quoteSymbol: number): string

- **value**: string - A string value to be decoded.
- **quoteSymbol**: number - A string quote character.
- **returns**: string - An decoded string.

#### encodeString
Encodes a string value.
> `public` encodeString(value: string, quoteSymbol: number): string

- **value**: string - A string value to be encoded.
- **quoteSymbol**: number - A string quote character.
- **returns**: string - An encoded string.

#### nextToken
Return a quoted string token from a scanner. This method will collect
characters until it sees a match to the character that the tokenizer used
to switch to this state.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - A textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - A tokenizer class that controls the process.
- **returns**: [Token](../../token) - The next token from the top of the stream.