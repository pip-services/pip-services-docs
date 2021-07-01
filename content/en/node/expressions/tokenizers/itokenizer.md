---
type: docs
title: "ITokenizer"
linkTitle: "ITokenizer"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    A tokenizer divides a string into tokens. This class is highly customizable with regard
    to exactly how this division occurs, but it also has defaults that are suitable for many
    languages. This class assumes that the character values read from the string lie in
    the range 0-255. For example, the Unicode value of a capital A is 65,
    so *String.fromCharCode(65)* prints out a capital A.
---

### Description

The behavior of a tokenizer depends on its character state table. This table is an array
of 256 *TokenizerState* states. The state table decides which state to enter
upon reading a character from the input string.

For example, by default, upon reading an 'A', a tokenizer will enter a "word" state.
This means the tokenizer will ask a *WordState* object to consume the 'A',
along with the characters after the 'A' that form a word. The state's responsibility
is to consume characters and return a complete token.

The default table sets a SymbolState for every character from 0 to 255,
and then overrides this with:

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

In addition to allowing modification of the state table, this class makes each of the states
above available. Some of these states are customizable. For example, wordState allows customization
of what characters can be part of a word, after the first character.

### Fields

<span class="hide-title-link">


#### commentState
A token state to process comments.
> **commentState**: [ICommentState](../icomment_state)


#### decodeStrings
Decodes quoted strings.
> **decodeStrings**: boolean


#### mergeWhitespaces
Merges whitespaces.
> **mergeWhitespaces**: boolean


#### numberState
A token state to process numbers.
> **numberState**: [INumberState](../inumber_state)


#### quoteState
A token state to process quoted strings.
> **quoteState**: [IQuoteState](../iquote_state)

#### scanner
The stream scanner to tokenize.
> **scanner**: [IScanner](../../io/iscanner)

#### skipComments
Skips comments.
> **skipComments**: boolean


#### skipEof
Skips End-Of-File token at the end of stream.
> **skipEof**: boolean

#### skipUnknown
Skip unknown characters
> **skipUnknown**: boolean


#### skipWhitespaces
Skips whitespaces.
> **skipWhitespaces**: boolean


#### symbolState
A token state to process symbols (single like "=" or muti-character like "<>")
> **symbolState**: [ISymbolState](../isymbol_state)

#### unifyNumbers
Unifies numbers: "Integers" and "Floats" makes just "Numbers"
> **unifyNumbers**: boolean


#### whitespaceState
A token state to process white space delimiters.
> **whitespaceState**: [IWhitespaceState](../iwhitespace_state)


#### wordState
A token state to process words or indentificators.
> **wordState**: [IWordState](../iword_state)


</span>


### Instance methods

#### hasNextToken
Checks if there is the next token exist.
> hasNextToken(): boolean

- **returns**: boolean - **true** if scanner has the next token.

#### nextToken
Gets the next token from the scanner.
> nextToken(): [Token](../token)

- **returns**: [Token](../token) - Next token of *null* if there are no more tokens left.


#### tokenizeBuffer
Tokenizes a string buffer into a list of tokens structures.

> tokenizeBuffer(buffer: string): [Token[]](../token)

- **buffer**: string - A string buffer to be tokenized.
- **returns**: [Token[]](../token) - A list of token structures.

#### tokenizeBufferToStrings
Tokenizes a string buffer into a list of strings.

> tokenizeBufferToStrings(buffer: string): string[]

- **buffer**: string - A string buffer to be tokenized.
- **returns**: string[] - A list of token strings.


#### tokenizeStream
Tokenizes a textual stream into a list of token structures.

> tokenizeStream(scanner: [IScanner](../../io/iscanner)): [Token[]](../token)

- **scanner**: [IScanner](../../io/iscanner) - A textual stream to be tokenized.
- **returns**: [Token[]](../token) - A list of token structures.


#### tokenizeStreamToStrings
Tokenizes a textual stream into a list of strings.

> tokenizeStreamToStrings(scanner: [IScanner](../../io/iscanner)): string[]

- **scanner**: [IScanner](../../io/iscanner) - A textual stream to be tokenized.
- **returns**: string[] - A list of token strings.