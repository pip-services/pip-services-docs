---
type: docs
title: "ITokenizer"
linkTitle: "ITokenizer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
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

### Propertirs


#### CommentState
A token state to process comments.
> [ICommentState](../icomment_state) CommentState { get; }


#### DecodeStrings
Decodes quoted strings.
> bool DecodeStrings { get; set; }


#### MergeWhitespaces
Merges whitespaces.
> bool MergeWhitespaces { get; set; }


#### NumberState
A token state to process numbers.
> [INumberState](../inumber_state) NumberState { get; }


#### QuoteState
A token state to process quoted strings.
> [IQuoteState](../iquote_state) QuoteState { get; }

#### Scanner
The stream scanner to tokenize.
> [IScanner](../../io/iscanner) Scanner { get; set; }

#### SkipComments
Skips comments.
> bool SkipComments { get; set; }


#### SkipEof
Skips End-Of-File token at the end of stream.
> bool SkipEof { get; set; }

#### SkipUnknown
Skip unknown characters.
> bool SkipUnknown { get; set; }


#### SkipWhitespaces
Skips whitespaces.
> bool SkipWhitespaces { get; set; }


#### SymbolState
A token state to process symbols (single like "=" or muti-character like "<>")
> [ISymbolState](../isymbol_state) SymbolState { get; }

#### UnifyNumbers
Unifies numbers: "Integers" and "Floats" makes just "Numbers".
> bool UnifyNumbers { get; set; }


#### WhitespaceState
A token state to process white space delimiters.
> [IWhitespaceState](../iwhitespace_state) WhitespaceState { get; }


#### WordState
A token state to process words or indentifiers.
> [IWordState](../iword_state) WordState { get; }


### Instance methods

#### HasNextToken
Checks if there is a next token.
> bool HasNextToken()

- **returns**: bool - **true** if scanner has a next token.

#### NextToken
Gets the next token from the scanner.
> [Token](../token) NextToken()

- **returns**: [Token](../token) - next token or *null* if there are no more tokens left.


#### tokenizeBuffer
Tokenizes a string buffer into a list of tokens structures.

> IList<[Token](../token)> TokenizeBuffer(string buffer)

- **buffer**: string - string buffer to be tokenized.
- **returns**: IList<[Token](../token)> - list of token structures.

#### TokenizeBufferToStrings
Tokenizes a string buffer into a list of strings.

> IList\<string\> TokenizeBufferToStrings(string buffer)

- **buffer**: string - string buffer to be tokenized.
- **returns**: IList\<string\> - list of token strings.


#### TokenizeStream
Tokenizes a text stream into a list of token structures.

> IList<[Token](../token)> TokenizeStream([IScanner](../../io/iscanner) scanner)

- **scanner**: [IScanner](../../io/iscanner) - text stream to be tokenized.
- **returns**: IList<[Token](../token)> - list of token structures.


#### TokenizeStreamToStrings
Tokenizes a text stream into a list of strings.

> IList\<string\> TokenizeStreamToStrings([IScanner](../../io/iscanner) scanner)

- **scanner**: [IScanner](../../io/iscanner) - text stream to be tokenized.
- **returns**: IList\<string\> - list of token strings.
