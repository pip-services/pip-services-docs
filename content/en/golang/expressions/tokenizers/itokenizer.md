---
type: docs
title: "ITokenizer"
linkTitle: "ITokenizer"
gitUrl: "https://github.com/pip-services3-go/pip-services3-expressions-go"
description: > 
    Interface for tokenizers.
---

### Description

The ITokenizer interface defines the main elements of a tokenizer.

Important points

- A tokenizer divides a string into tokens. This class is highly customizable with regard to exactly how this division occurs, but it also has defaults that are suitable for many languages. This class assumes that the character values read from the string lie in the range 0-255. For example, the Unicode value of a capital A is 65, so *String.fromCharCode(65)* prints out a capital A.

- The behavior of a tokenizer depends on its character state table. This table is an array of 256 *TokenizerState* states. The state table decides which state to enter
upon reading a character from the input string.   

- For example, by default, upon reading an 'A', a tokenizer will enter a "word" state. This means the tokenizer will ask a *WordState* object to consume the 'A',
along with the characters after the 'A' that form a word. The state's responsibility is to consume characters and return a complete token.  

- The default table sets a SymbolState for every character from 0 to 255, and then overrides this with:

<blockquote><pre>
From    To        State
 0     ' '   whitespaceState 
'a'    'z'      wordState
'A'    'Z'      wordState
160     255     wordState
'0'    '9'     numberState
'-'    '-'     numberState
'.'    '.'     numberState
'"'    '"'      quoteState
'\''   '\''     quoteState
'/'    '/'      slashState
</pre></blockquote>

- In addition to allowing modification of the state table, this class makes each of the states above available. Some of these states are customizable. For example, wordState allows customization of what characters can be part of a word, after the first character.


### Properties

#### CommentState
A token state to process comments.
> CommentState() [ICommentState](../icomment_state)

- **returns**: [ICommentState](../icomment_state) - a token state to process comments.

#### DecodeStrings
Gets decodes quoted strings flag.
> DecodeStrings() bool
- **returns**: bool - decodes quoted strings flag.

#### SetDecodeStrings
Sets decodes quoted strings flag.
> SetDecodeStrings(value bool)
- **value**: bool - decodes quoted strings flag.

#### MergeWhitespaces
Gets merges whitespaces flag.
> MergeWhitespaces() bool
- **returns**: bool - whitespaces flag.

#### SetMergeWhitespaces
Sets merges whitespaces flag.
> SetMergeWhitespaces(value bool)
- **value**: bool - whitespaces flag.

#### NumberState
Gets a token state to process numbers.
> NumberState() [INumberState](../inumber_state)
- **returns**: [INumberState](../inumber_state) - token state to process numbers.

#### QuoteState
Gets a token state to process quoted strings.

> QuoteState() [IQuoteState](../iquote_state)

- **returns**: [IQuoteState](../iquote_state) - token state to process quoted strings.

#### Reader
Gets the stream scanner to tokenize.
> Reader() [IScanner](../../io/iscanner)
- **returns**: [IScanner](../../io/iscanner) - the stream scanner

#### SetReader
Sets the stream scanner to tokenize.
> SetReader(scanner [IScanner](../../io/iscanner))
- **scanner**: [IScanner](../../io/iscanner) - the stream scanner

#### SkipComments
Gets skip comments flag.
> SkipComments() bool
- **returns**: bool - skip comments flag.


#### SetSkipComments
Sets skip comments flag.
> SetSkipComments(value bool)
- **value**: bool - skip comments flag.


#### SkipEof
Gets skip End-Of-File token at the end of stream flag.
> SkipEof() bool
- **returns**: bool - stream flag.

#### SetSkipEof
Sets skip End-Of-File token at the end of stream flag.
> SetSkipEof(value bool)
- **value**: bool - stream flag.

#### SkipUnknown
Gets skip unknown characters flag.
> SkipUnknown() bool
- **returns**: bool - skip unknown characters flag.

#### SetSkipUnknown
Sets skip unknown characters flag.
> SetSkipUnknown(value bool)
- **value**: bool - skip unknown characters flag.

#### SkipWhitespaces
Gets skip whitespaces flag.
> SkipWhitespaces() bool
- **returns**: bool - skip whitespaces flag.

#### SetSkipWhitespaces
Sets skip whitespaces flag.
> SetSkipWhitespaces(value bool)
- **value**: bool - skip whitespaces flag.


#### SymbolState
Gets a token state to process symbols (single like "=" or muti-character like "<>")
> SymbolState() [ISymbolState](../isymbol_state)
- **returns**: [ISymbolState](../isymbol_state) - a token state to process symbols.

#### UnifyNumbers
Gets unifies numbers: "Integers" and "Floats" makes just "Numbers".
> UnifyNumbers() bool
- **returns**: bool - unifies numbers.

#### SetUnifyNumbers
Sets unifies numbers: "Integers" and "Floats" makes just "Numbers" flag
> SetUnifyNumbers(value bool)
- **value**: bool - unifies numbers.

#### WhitespaceState
Gets a token state to process white space delimiters.
> WhitespaceState() [IWhitespaceState](../iwhitespace_state)
- **returns**: [IWhitespaceState](../iwhitespace_state) - a token state to process white space delimiters.


#### WordState
Gets a token state to process words or indentificators.
> WordState() [IWordState](../iword_state)
- **returns**: [IWordState](../iword_state) - a token state to process words.


### Methods

#### HasNextToken
Checks if there is a next token.
> HasNextToken() bool

- **returns**: bool - **true** if scanner has a next token.

#### NextToken
Gets the next token from the scanner.
> NextToken() [*Token](../token)

- **returns**: [*Token](../token) - next token or *nil* if there are no more tokens left.


#### TokenizeBuffer
Tokenizes a string buffer into a list of tokens structures.

> TokenizeBuffer(buffer string) [[]*Token](../token)

- **buffer**: string - string buffer to be tokenized.
- **returns**: [[]*Token](../token) - list of token structures.

#### TokenizeBufferToStrings
Tokenizes a string buffer into a list of strings.

> TokenizeBufferToStrings(buffer string) []string

- **buffer**: string - string buffer to be tokenized.
- **returns**: []string - list of token strings.


#### TokenizeStream
Tokenizes a text stream into a list of token structures.

> TokenizeStream(scanner [IScanner](../../io/iscanner)) [[]*Token](../token)

- **scanner**: [IScanner](../../io/iscanner) - text stream to be tokenized.
- **returns**: [[]*Token](../token) - list of token structures.


#### TokenizeStreamToStrings
Tokenizes a text stream into a list of strings.

> TokenizeStreamToStrings(scanner [IScanner](../../io/iscanner)) []string

- **scanner**: [IScanner](../../io/iscanner) - text stream to be tokenized.
- **returns**: []string - list of token strings.
