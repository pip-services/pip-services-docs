---
type: docs
title: "AbstractTokenizer"
linkTitle: "AbstractTokenizer"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Defines a general tokenizer.
---

**Implements**: [ITokenizer](../itokenizer)

### Description

The AbstractTokenizer class defines a general tokenizer.

### Fields

<span class="hide-title-link">

#### lastTokenType
Last token type
> **lastTokenType**: [TokenType](../token_type) = [TokenType.Unknown](../token_type)

#### nextTokenValue
Next token
> **nextTokenValue**: [Token?](../token)

#### _scanner
Scanner
> **_scanner**: [IScanner?](../../io/iscanner)


#### commentState
Comment state

`@override`
> **commentState**: [ICommentState?](../icomment_state)


#### decodeStrings
bool that defines the option to decode strings or not.

`@override`
> **decodeStrings**: bool


#### mergeWhitespaces
bool that defines the option to unify white spaces.

`@override`
> **mergeWhitespaces**: bool


#### numberState
Number state

`@override`
> **numberState**: [INumberState?](../inumber_state)


#### quoteState
Quote state

`@override`
> **quoteState**: [IQuoteState?](../iquote_state)

#### skipComments
bool that defines the option to skip comments.
`@override`
> **skipComments**: bool


#### skipEof
bool that defines the option to skip EOF.
`@override`
> **skipEof**: bool

#### skipUnknown
bool that defines the option to skip unknowns.
`@override`
> **skipUnknown**: bool


#### skipWhitespaces
bool that defines the option to skip white spaces.
`@override`
> **skipWhitespaces**: bool


#### symbolState
Symbol state
`@override`
> **symbolState**: [ISymbolState?](../isymbol_state)

#### unifyNumbers
bool that defines the option to unify numbers.
`@override`
> **unifyNumbers**: bool


#### whitespaceState
White space state.
`@override`
> **whitespaceState**: [IWhitespaceState?](../iwhitespace_state)


#### wordState
Word state.
`@override`
> **wordState**: [IWordState?](../iword_state)


</span>

### Properties

#### scanner
Scanner

`@override`
> [IScanner?](../../io/iscanner) get scanner

- **returns**: [IScanner?](../../io/iscanner) - scanner

`@override`
> set scanner([IScanner?](../../io/iscanner) value)

- **value**: [IScanner?](../../io/iscanner) - scanner


### Instance methods


#### clearCharacterStates
Clears all character states.

> void clearCharacterStates()

#### getCharacterState
Gest the state for a given character.
> [ITokenizerState?](../itokenizer_state) getCharacterState(int symbol)

- **symbol**: int - symbol
- **returns**: [ITokenizerState?](../itokenizer_state) - tokenizer state

#### hasNextToken
Finds out if the tokenizer has a next token.

`@override`
> bool hasNextToken()

- **returns**: bool - true if it has a next token, false otherwise.

#### nextToken
Gets the next token.

`@override`
> [Token?](../token) nextToken()

- **returns**: [Token?](../token) - next token

#### readNextToken
Reads the next token.

`@override`
> [Token?](../token) readNextToken()

- **returns**: [Token?](../token) - next token

#### setCharacterState
Sets the characters' state.
> void setCharacterState(int fromSymbol, int toSymbol, [ITokenizerState](../itokenizer_state) state)

- **fromSymbol**: int - first symbol
- **toSymbol**: int - last symbol
- **state**: [ITokenizerState](../itokenizer_state) - tokenizer state

#### tokenizeBuffer
Provides a token for a string buffer.

`@override`
> List<[Token](../token)> tokenizeBuffer(String buffer)

- **buffer**: String - buffer
- **returns**: List<[Token](../token)> - token

#### tokenizeBufferToStrings
Creates a list of token values.
`@override`
> List\<String?\> tokenizeBufferToStrings(String buffer)

- **buffer**: String - buffer
- **returns**: List\<String?\> - list of token values


#### tokenizeStream
Creates a list of tokens
`@override`
> List<[Token](../token)> tokenizeStream([IScanner](../../io/iscanner) scanner)

- **scanner**: [IScanner](../../io/iscanner) - scanner
- **returns**: List<[Token](../token)> - list of tokens


#### tokenizeStreamToStrings
Creates a list of token values.

> List\<String?\> tokenizeStreamToStrings([IScanner](../../io/iscanner) scanner)

- **scanner**: [IScanner](../../io/iscanner) - scanner
- **returns**: List\<String?\> - list of token values

