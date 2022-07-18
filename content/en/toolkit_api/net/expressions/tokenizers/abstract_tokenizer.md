---
type: docs
title: "AbstractTokenizer"
linkTitle: "AbstractTokenizer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    Defines a general tokenizer.
---

**Inherits**: [ITokenizer](../itokenizer)

### Description

The AbstractTokenizer class defines a general tokenizer.

### Fields

<span class="hide-title-link">

#### _lastTokenType
Last token type
> `protected` **_lastTokenType**: [TokenType](../token_type) = [TokenType.Unknown](../token_type)

</span>

### Properties

#### NextToken
Next token
> `public` [Token](../token) NextToken()

#### Scanner
Scanner
> `public` [IScanner](../../io/iscanner) Scanner { get; set; }


#### CommentState
Comment state
> `public` [ICommentState](../icomment_state) CommentState { get; set; }


#### DecodeStrings
Boolean that defines the option to decode strings or not.
> `public` bool DecodeStrings { get; set; }


#### MergeWhitespaces
Boolean that defines the option to unify white spaces.
> `public` bool MergeWhitespaces { get; set; }  


#### NumberState
Number state 
> `public` [INumberState](../inumber_state) NumberState { get; set; }  


#### QuoteState
Quote state
> `public` [IQuoteState](../iquote_state) QuoteState { get; set; }  

#### SkipComments
Boolean that defines the option to skip comments.
> `public` bool SkipComments { get; set; }  


#### SkipEof
Boolean that defines the option to skip EOF.
> `public` bool SkipEof { get; set; }  

#### SkipUnknown
Boolean that defines the option to skip unknowns.
> `public` bool SkipUnknown { get; set; }  


#### SkipWhitespaces
Boolean that defines the option to skip white spaces.
> `public` bool SkipWhitespaces { get; set; }  


#### SymbolState
Symbol state
> `public` [ISymbolState](../isymbol_state) SymbolState { get; set; }  

#### UnifyNumbers
Boolean that defines the option to unify numbers.
> `public` bool UnifyNumbers { get; set; }  


#### WhitespaceState
White space state.
> `public` [IWhitespaceState](../iwhitespace_state) WhitespaceState { get; set; }


#### WordState
Word state.
> `public` [IWordState](../iword_state) WordState { get; set; }  


### Instance methods


#### ClearCharacterStates
Clears all character states.

> `public` void ClearCharacterStates()

#### GetCharacterState
Gest the state for a given character.
> `public` [ITokenizerState](../itokenizer_state) GetCharacterState(char symbol)

- **symbol**: char - symbol
- **returns**: [ITokenizerState](../itokenizer_state) - tokenizer state

#### HasNextToken
Finds out if the tokenizer has a next token.
> `public` bool HasNextToken()

- **returns**: bool - true if it has a next token, false otherwise.

#### NextToken
Gets the next token.
> `public` [Token](../token) NextToken()

- **returns**: [Token](../token) - next token

#### ReadNextToken
Reads the next token.
> `protected virtual` [Token](../token) ReadNextToken()

- **returns**: [Token](../token) - next token

#### SetCharacterState
Sets the characters' state.
> `public` void SetCharacterState(char fromSymbol, char toSymbol, [ITokenizerState](../itokenizer_state) state)

- **fromSymbol**: char - first symbol
- **toSymbol**: char - last symbol
- **state**: [ITokenizerState](../itokenizer_state) - tokenizer state

#### TokenizeBuffer
Provides a token for a string buffer.

> `public` IList<[Token](../token)> TokenizeBuffer(string buffer)

- **buffer**: string - buffer
- **returns**: [Token](../token) - token

#### TokenizeBufferToStrings
Creates a list of token values.

> `public` IList\<string\> TokenizeBufferToStrings(string buffer)

- **buffer**: string - buffer
- **returns**: IList\<string\> - list of token values


#### TokenizeStream
Creates a list of tokens

> `public` IList<[Token](../token)> TokenizeStream([IScanner](../../io/iscanner) scanner)

- **scanner**: [IScanner](../../io/iscanner) - scanner
- **returns**: [Token](../token) - list of tokens


#### TokenizeStreamToStrings
Creates a list of token values.

> `public` IList\<string\> TokenizeStreamToStrings([IScanner](../../io/iscanner) scanner)

- **scanner**: [IScanner](../../io/iscanner) - scanner
- **returns**: IList\<string\> - list of token values

