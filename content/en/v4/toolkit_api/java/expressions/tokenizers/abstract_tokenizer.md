---
type: docs
title: "AbstractTokenizer"
linkTitle: "AbstractTokenizer"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    Defines a general tokenizer.
---

**Implements**: [ITokenizer](../itokenizer)

### Description

The AbstractTokenizer class defines a general tokenizer.

### Fields

<span class="hide-title-link">

#### _lastTokenType
Last token type
> `protected` [TokenType](../token_type) **_lastTokenTyp**e = [TokenType.Unknown](../token_type)

#### _nextToken
Next token
> `protected` [Token](../token) **_nextToken**

#### _scanner
Scanner
> `protected` [IScanner](../../io/iscanner) **_scanner**


#### commentState
Comment state
> `private` [ICommentState](../icomment_state) **commentState**

#### decodeStrings
Boolean that defines the option to decode strings or not.
> `private` boolean **decodeString** = false

#### mergeWhitespaces
Boolean that defines the option to unify white spaces.
> `private` boolean **mergeWhitespaces** = false

#### numberState
Number state
> `public` [INumberState](../inumber_state) **numberState**

#### quoteState
Quote state
> `private` [IQuoteState](../iquote_state) **quoteState**

#### skipComments
Boolean that defines the option to skip comments.
> `private` boolean **skipComments** = false

#### skipEof
Boolean that defines the option to skip EOF.
> `private` boolean **skipEof** = false

#### skipUnknown
Boolean that defines the option to skip unknowns.
> `private` boolean **skipUnknown** = false

#### skipWhitespaces
Boolean that defines the option to skip white spaces.
> `private` boolean **skipWhitespaces** = false

#### symbolState
Symbol state
> `private` **symbolState**: [ISymbolState](../isymbol_state)

#### unifyNumbers
Boolean that defines the option to unify numbers.
> `private` boolean **unifyNumbers** = false

#### whitespaceState
White space state.
> `private` [IWhitespaceState](../iwhitespace_state) **whitespaceState**

#### wordState
Word state.
> `private` [IWordState](../iword_state) **wordState**

</span>

### Properties

#### scanner
Scanner
> `protected` [IScanner](../../io/iscanner) _scanner

### Instance methods


#### clearCharacterStates
Clears all character states.

> `public` void clearCharacterStates()

#### getCharacterState
Gest the state for a given character.
> `public` [ITokenizerState](../itokenizer_state) getCharacterState(int symbol)

- **symbol**: int - symbol
- **returns**: [ITokenizerState](../itokenizer_state) - tokenizer state

#### hasNextToken
Finds out if the tokenizer has a next token.
> `public` Boolean hasNextToken() throws Exception

- **returns**: Boolean - true if it has a next token, false otherwise.

#### nextToken
Gets the next token.
> `public` [Token](../token) nextToken() throws Exception

- **returns**: [Token](../token) - next token

#### readNextToken
Reads the next token.
> `protected` [Token](../token) readNextToken() throws Exception

- **returns**: [Token](../token) - next token

#### setCharacterState
Sets the characters' state.
> `public` void setCharacterState(int fromSymbol, int toSymbol, [ITokenizerState](../itokenizer_state) state) throws Exception

- **fromSymbol**: int - first symbol
- **toSymbol**: int - last symbol
- **state**: [ITokenizerState](../itokenizer_state) - tokenizer state

#### tokenizeBuffer
Provides a token for a string buffer.

> `public` List<[Token[]](../token)> tokenizeBuffer(String buffer) throws Exception

- **buffer**: String - buffer
- **returns**: [Token[]](../token) - token

#### tokenizeBufferToStrings
Creates a list of token values.

> `public` List<String> tokenizeBufferToStrings(String buffer) throws Exception

- **buffer**: String - buffer
- **returns**: List<String>- list of token values


#### tokenizeStream
Creates a list of tokens

> `public` List<[Token[]](../token)> tokenizeStream([IScanner](../../io/iscanner) scanner) throws Exception

- **scanner**: [IScanner](../../io/iscanner) - scanner
- **returns**: [Token[]](../token) - list of tokens


#### tokenizeStreamToStrings
Creates a list of token values.

> `public` List<String> tokenizeStreamToStrings([IScanner](../../io/iscanner) scanner) throws Exception

- **scanner**: [IScanner](../../io/iscanner) - scanner
- **returns**: List<String> - list of token values

