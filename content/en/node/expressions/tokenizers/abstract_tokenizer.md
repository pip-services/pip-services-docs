---
type: docs
title: "AbstractTokenizer"
linkTitle: "AbstractTokenizer"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    Implements an abstract tokenizer class.
---

**Implements**: [ITokenizer](../itokenizer)

### Description

TODO: add description

### Fields

<span class="hide-title-link">

#### _lastTokenType
Last token type
> `protected` **_lastTokenType**: [TokenType](../token_type) = [TokenType.Unknown](../token_type)

#### _nextToken
Next token
> `protected` **_nextToken**: [Token](../token)

#### _scanner
Scanner
> `protected` **_scanner**: [IScanner](../../io/iscanner)


#### commentState
Comment state
> `public` **commentState**: [ICommentState](../icomment_state)


#### decodeStrings
Boolean that defines the option to decode strings or not.
> `public` **decodeStrings**: boolean


#### mergeWhitespaces
Boolean that defines the option to unify white spaces.
> `public` **mergeWhitespaces**: boolean


#### numberState
Number state
> `public` **numberState**: [INumberState](../inumber_state)


#### quoteState
Quote state
> `public` **quoteState**: [IQuoteState](../iquote_state)

#### skipComments
Boolean that defines the option to skip comments.
> `public` **skipComments**: boolean


#### skipEof
Boolean that defines the option to skip EOF.
> `public` **skipEof**: boolean

#### skipUnknown
Boolean that defines the option to skip unknowns.
> `public` **skipUnknown**: boolean


#### skipWhitespaces
Boolean that defines the option to skip white spaces.
> `public` **skipWhitespaces**: boolean


#### symbolState
Symbol state
> `public` **symbolState**: [ISymbolState](../isymbol_state)

#### unifyNumbers
Boolean that defines the option to unify numbers.
> `public` **unifyNumbers**: boolean


#### whitespaceState
White space state.
> `public` **whitespaceState**: [IWhitespaceState](../iwhitespace_state)


#### wordState
Word state.
> `public` **wordState**: [IWordState](../iword_state)


</span>

### Properties

#### scanner
Scanner
> `public` scanner(): [IScanner](../../io/iscanner)

- **returns**: [IScanner](../../io/iscanner) - TODO: add description


> `public` scanner(value: [IScanner](../../io/iscanner))

- **value**: [IScanner](../../io/iscanner) - TODO: add description


### Instance methods


#### clearCharacterStates
Clears all character states.

> `public` clearCharacterStates(): void

#### getCharacterState
Gest the state for a given character.
> `public` getCharacterState(symbol: number): [ITokenizerState](../itokenizer_state)

- **symbol**: number - symbol
- **returns**: [ITokenizerState](../itokenizer_state) - tokenizer state

#### hasNextToken
Finds out if the tokenizer has a next token.
> `public` hasNextToken(): boolean

- **returns**: boolean - true if it has a next token, false otherwise.

#### nextToken
Gets the next token.
> `public` nextToken(): [Token](../token)

- **returns**: [Token](../token) - next token

#### readNextToken
Reads the next token.
> `protected` readNextToken(): [Token](../token)

- **returns**: [Token](../token) - next token

#### setCharacterState
Sets the characters state.
> `public` setCharacterState(fromSymbol: number, toSymbol: number, state: [ITokenizerState](../itokenizer_state)): void

- **fromSymbol**: number - first symbol
- **toSymbol**: number - last symbol
- **state**: [ITokenizerState](../itokenizer_state) - tokenizer state

#### tokenizeBuffer
Provides a token for a string buffer.

> `public` tokenizeBuffer(buffer: string): [Token[]](../token)

- **buffer**: string - buffer
- **returns**: [Token[]](../token) - token

#### tokenizeBufferToStrings
Creates a list of token values.

> `public` tokenizeBufferToStrings(buffer: string): string[]

- **buffer**: string - buffer
- **returns**: string[] - list of token values


#### tokenizeStream
Creates a list of tokens

> `public` tokenizeStream(scanner: [IScanner](../../io/iscanner)): [Token[]](../token)

- **scanner**: [IScanner](../../io/iscanner) - scanner
- **returns**: [Token[]](../token) - list of tokens


#### tokenizeStreamToStrings
Creates a list of token values.

> `public` tokenizeStreamToStrings(scanner: [IScanner](../../io/iscanner)): string[]

- **scanner**: [IScanner](../../io/iscanner) - scanner
- **returns**: string[] - list of token values

