---
type: docs
title: "AbstractTokenizer"
linkTitle: "AbstractTokenizer"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
    Defines a general tokenizer.
---

### Description

The AbstractTokenizer class defines a general tokenizer.

### Fields

<span class="hide-title-link">

#### LastTokenType
Last token type ([TokenType](../token_type))
> **LastTokenType**: int 

#### NextTokenValue
Next token value
> **NextTokenValue**: [*Token](../token)

#### Scanner
Scanner
> Scanner: [IScanner](../../io/iscanner)


#### commentState
Comment state
> **commentState**: [ICommentState](../icomment_state)


#### decodeStrings
Boolean that defines the option to decode strings or not.
> **decodeStrings**: bool


#### mergeWhitespaces
Boolean that defines the option to unify white spaces.
> **mergeWhitespaces**: bool


#### numberState
Number state
> **numberState**: [INumberState](../inumber_state)


#### quoteState
Quote state
> **quoteState**: [IQuoteState](../iquote_state)

#### skipComments
Boolean that defines the option to skip comments.
> **skipComments**: bool


#### skipEof
Boolean that defines the option to skip EOF.
> **skipEof**: bool

#### skipUnknown
Boolean that defines the option to skip unknowns.
> **skipUnknown**: bool


#### skipWhitespaces
Boolean that defines the option to skip white spaces.
> **skipWhitespaces**: bool


#### symbolState
Symbol state
> **symbolState**: [ISymbolState](../isymbol_state)

#### unifyNumbers
Boolean that defines the option to unify numbers.
> **unifyNumbers**: bool


#### whitespaceState
White space state.
> **whitespaceState**: [IWhitespaceState](../iwhitespace_state)


#### wordState
Word state.
> **wordState**: [IWordState](../iword_state)


</span>


### Methods


#### ClearCharacterStates
Clears all character states.

> (c [*AbstractTokenizer]()) ClearCharacterStates()

#### GetCharacterState
Gest the state for a given character.
> (c [*AbstractTokenizer]()) GetCharacterState(symbol rune) ITokenizerState

- **symbol**: rune - symbol
- **returns**: [ITokenizerState](../itokenizer_state) - tokenizer state

#### HasNextToken
Finds out if the tokenizer has a next token.
> (c [*AbstractTokenizer]()) HasNextToken() bool

- **returns**: bool - true if it has a next token, false otherwise.

#### nextToken
Gets the next token.
> (c [*AbstractTokenizer]()) NextToken() [*Token](../token)

- **returns**: [*Token](../token) - next token

#### ReadNextToken
Reads the next token.
> (c [*AbstractTokenizer]()) ReadNextToken() [*Token](../token)

- **returns**: [*Token](../token) - next token

#### SetCharacterState
Sets the characters' state.
> (c [*AbstractTokenizer]()) SetCharacterState(fromSymbol rune, toSymbol rune, state ITokenizerState) 

- **fromSymbol**: rune - first symbol
- **toSymbol**: rune - last symbol
- **state**: [ITokenizerState](../itokenizer_state) - tokenizer state

#### TokenizeBuffer
Provides a token for a string buffer.

> (c [*AbstractTokenizer]()) TokenizeBuffer(buffer string) [[]*Token](../token)

- **buffer**: string - buffer
- **returns**: [[]*Token](../token) - token

#### TokenizeBufferToStrings
Creates a list of token values.

> (c [*AbstractTokenizer]()) TokenizeBufferToStrings(buffer string) []string

- **buffer**: string - buffer
- **returns**: []string - list of token values


#### TokenizeStream
Creates a list of tokens

> (c [*AbstractTokenizer]()) TokenizeStream(scanner [IScanner](../../io/iscanner)) [[]*Token](../token)

- **scanner**: [IScanner](../../io/iscanner) - scanner
- **returns**: [[]*Token](../token) - list of tokens


#### TokenizeStreamToStrings
Creates a list of token values.

> (c [*AbstractTokenizer]()) TokenizeStreamToStrings(scanner [IScanner](../../io/iscanner)) []string

- **scanner**: [IScanner](../../io/iscanner) - scanner
- **returns**: []string - list of token values

