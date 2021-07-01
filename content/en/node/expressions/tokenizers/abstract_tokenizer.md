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
TODO: add description
> `protected` **_lastTokenType**: [TokenType](../token_type) = [TokenType.Unknown](../token_type)

#### _nextToken
TODO: add description
> `protected` **_nextToken**: [Token](../token)

#### _scanner
TODO: add description
> `protected` **_scanner**: [IScanner](../../io/iscanner)


#### commentState
TODO: add description
> `public` **commentState**: [ICommentState](../icomment_state)


#### decodeStrings
TODO: add description
> `public` **decodeStrings**: boolean


#### mergeWhitespaces
TODO: add description
> `public` **mergeWhitespaces**: boolean


#### numberState
TODO: add description
> `public` **numberState**: [INumberState](../inumber_state)


#### quoteState
TODO: add description
> `public` **quoteState**: [IQuoteState](../iquote_state)

#### skipComments
TODO: add description
> `public` **skipComments**: boolean


#### skipEof
TODO: add description
> `public` **skipEof**: boolean

#### skipUnknown
TODO: add description
> `public` **skipUnknown**: boolean


#### skipWhitespaces
TODO: add description
> `public` **skipWhitespaces**: boolean


#### symbolState
TODO: add description
> `public` **symbolState**: [ISymbolState](../isymbol_state)

#### unifyNumbers
TODO: add description
> `public` **unifyNumbers**: boolean


#### whitespaceState
TODO: add description
> `public` **whitespaceState**: [IWhitespaceState](../iwhitespace_state)


#### wordState
TODO: add description
> `public` **wordState**: [IWordState](../iword_state)


</span>

### Properties

#### scanner
TODO: add description
> `public` scanner(): [IScanner](../../io/iscanner)

- **returns**: [IScanner](../../io/iscanner) - TODO: add description


> `public` scanner(value: [IScanner](../../io/iscanner))

- **value**: [IScanner](../../io/iscanner) - TODO: add description


### Instance methods


#### clearCharacterStates
TODO: add description

> `public` clearCharacterStates(): void

#### getCharacterState
TODO: add description
> `public` getCharacterState(symbol: number): [ITokenizerState](../itokenizer_state)

- **symbol**: number - TODO: add description
- **returns**: [ITokenizerState](../itokenizer_state) - TODO: add description

#### hasNextToken
TODO: add description
> `public` hasNextToken(): boolean

- **returns**: boolean - TODO: add description

#### nextToken
TODO: add description
> `public` nextToken(): [Token](../token)

- **returns**: [Token](../token) - TODO: add description

#### readNextToken
TODO: add description
> `protected` readNextToken(): [Token](../token)

- **returns**: [Token](../token) - TODO: add description

#### setCharacterState
TODO: add description
> `public` setCharacterState(fromSymbol: number, toSymbol: number, state: [ITokenizerState](../itokenizer_state)): void

- **fromSymbol**: number - TODO: add description
- **toSymbol**: number - TODO: add description
- **state**: [ITokenizerState](../itokenizer_state) - TODO: add description

#### tokenizeBuffer
TODO: add description

> `public` tokenizeBuffer(buffer: string): [Token[]](../token)

- **buffer**: string - TODO: add description
- **returns**: [Token[]](../token) - TODO: add description

#### tokenizeBufferToStrings
TODO: add description

> `public` tokenizeBufferToStrings(buffer: string): string[]

- **buffer**: string - TODO: add description
- **returns**: string[] - TODO: add description


#### tokenizeStream
TODO: add description

> `public` tokenizeStream(scanner: [IScanner](../../io/iscanner)): [Token[]](../token)

- **scanner**: [IScanner](../../io/iscanner) - TODO: add description
- **returns**: [Token[]](../token) - TODO: add description


#### tokenizeStreamToStrings
TODO: add description

> `public` tokenizeStreamToStrings(scanner: [IScanner](../../io/iscanner)): string[]

- **scanner**: [IScanner](../../io/iscanner) - TODO: add description
- **returns**: string[] - TODO: add description

