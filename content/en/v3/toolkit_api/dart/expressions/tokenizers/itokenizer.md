---
type: docs
title: "ITokenizer"
linkTitle: "ITokenizer"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-expressions-dart"
description: > 
    Interface for tokenizers.
---

### Description

The ITokenizer interface defines the main elements of a tokenizer.

**Important points**

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

### Fields

<span class="hide-title-link">


#### commentState
A token state to process comments.
> `abstract` **commentState**: [ICommentState?](../icomment_state)


#### decodeStrings
Decodes quoted strings.
> `abstract` **decodeStrings**: bool


#### mergeWhitespaces
Merges whitespaces.
> `abstract` **mergeWhitespaces**: bool


#### numberState
A token state to process numbers.
> `abstract` **numberState**: [INumberState?](../inumber_state)


#### quoteState
Token state to process quoted strings.
> `abstract` **quoteState**: [IQuoteState?](../iquote_state)

#### scanner
Stream scanner to tokenize.
> `abstract` **scanner**: [IScanner?](../../io/iscanner)

#### skipComments
Skips comments.
> `abstract` **skipComments**: bool


#### skipEof
Skips End-Of-File token at the end of stream.
> `abstract` **skipEof**: bool

#### skipUnknown
Skip unknown characters.
> `abstract` **skipUnknown**: bool


#### skipWhitespaces
Skips whitespaces.
> `abstract` **skipWhitespaces**: bool


#### symbolState
Token state to process symbols (single like "=" or muti-character like "<>")
> `abstract` **symbolState**: [ISymbolState?](../isymbol_state)

#### unifyNumbers
Unifies numbers: "Integers" and "Floats" makes just "Numbers".
> `abstract` **unifyNumbers**: bool


#### whitespaceState
Token state to process white space delimiters.
> `abstract` **whitespaceState**: [IWhitespaceState?](../iwhitespace_state)


#### wordState
Token state to process words or indentifiers.
> `abstract` **wordState**: [IWordState?](../iword_state)


</span>


### Instance methods

#### hasNextToken
Checks if there is a next token.
> bool hasNextToken()

- **returns**: bool - **true** if scanner has a next token.

#### nextToken
Gets the next token from the scanner.
> [Token?](../token) nextToken()

- **returns**: [Token?](../token) - next token or *null* if there are no more tokens left.


#### tokenizeBuffer
Tokenizes a string buffer into a list of tokens structures.

> List<[Token](../token)> tokenizeBuffer(String buffer)

- **buffer**: String - string buffer to be tokenized.
- **returns**: List<[Token](../token)> - list of token structures.

#### tokenizeBufferToStrings
Tokenizes a string buffer into a list of strings.

> List\<String?\> tokenizeBufferToStrings(String buffer)

- **buffer**: String - string buffer to be tokenized.
- **returns**: List\<String?\> - list of token strings.


#### tokenizeStream
Tokenizes a text stream into a list of token structures.

> List<[Token](../token)> tokenizeStream([IScanner](../../io/iscanner) scanner)

- **scanner**: [IScanner](../../io/iscanner) - text stream to be tokenized.
- **returns**: List<[Token](../token)> - list of token structures.


#### tokenizeStreamToStrings
Tokenizes a text stream into a list of strings.

> List\<String?\> tokenizeStreamToStrings([IScanner](../../io/iscanner) scanner)

- **scanner**: [IScanner](../../io/iscanner) - text stream to be tokenized.
- **returns**: List\<String?\> - list of token strings.
