---
type: docs
title: "ITokenizer"
linkTitle: "ITokenizer"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
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

### Fields

<span class="hide-title-link">

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


#### skipWhitespaces
Skips whitespaces.
> **skipWhitespaces**: boolean


#### symbolState
A token state to process symbols (single like "=" or muti-character like "<>")
> **symbolState**: [ISymbolState](../isymbol_state)

#### unifyNumbers
Unifies numbers: "Integers" and "Floats" makes just "Numbers".
> **unifyNumbers**: boolean


#### whitespaceState
A token state to process white space delimiters.
> **whitespaceState**: [IWhitespaceState](../iwhitespace_state)


#### wordState
A token state to process words or indentifiers.
> **wordState**: [IWordState](../iword_state)


</span>


### Instance methods

#### getSkipUnknown
Skip unknown characters
Boolean getSkipUnknown()

#### setSkipUnknown
void setSkipUnknown(boolean value)

#### getSkipWhitespaces
Skips whitespaces
Boolean getSkipWhitespaces()

#### setSkipWhitespaces
Skips whitespaces
void setSkipWhitespaces(boolean value)

#### setSkipWhitespaces
Skips whitespaces
void setSkipWhitespaces(boolean value)

#### setSkipComments
void setSkipComments(boolean value)

#### getSkipEof
 Boolean getSkipEof()

#### setSkipEof
 void setSkipEof(boolean value)

#### getMergeWhitespaces
Merges whitespaces.
 Boolean getMergeWhitespaces()

#### setMergeWhitespaces
 void setMergeWhitespaces(boolean value)

#### getUnifyNumbers
 Boolean getUnifyNumbers()

#### setUnifyNumbers
  void setUnifyNumbers(boolean value)

#### getDecodeStrings
Decodes quoted strings.
  Boolean getDecodeStrings()

#### setDecodeStrings
Decodes quoted strings.
  void setDecodeStrings(boolean value)

#### getCommentState
A token state to process comments.
  ICommentState getCommentState()

#### setCommentState
A token state to process comments.
  void setCommentState(ICommentState value)

#### getNumberState
A token state to process numbers
[INumberState](../inumber_state) getNumberState()
  
**returns**:[INumberState](../inumber_state)
#### setNumberState
A token state to process numbers
>  void setNumberState(INumberState value)

#### getQuoteState
> IQuoteState getQuoteState()

#### setQuoteState
> void setQuoteState(IQuoteState value)

#### getSymbolState
> ISymbolState getSymbolState()

#### setSymbolState
> void setSymbolState(ISymbolState value)

#### getWhitespaceState
> IWhitespaceState getWhitespaceState()

#### setWhitespaceState
> void setWhitespaceState(IWhitespaceState value)

#### getWordState
> IWordState getWordState()

#### setWordState
> void setWordState(IWordState value)

#### getScanner
> IScanner getScanner()

#### setScanner
  void setScanner(IScanner scanner)

#### hasNextToken
Checks if there is a next token.
> Boolean hasNextToken() throws Exception

- **returns**: Boolean - **true** if scanner has a next token.

#### nextToken
Gets the next token from the scanner.
> [Token](../token) nextToken() throws Exception

- **returns**: [Token](../token) - next token or *null* if there are no more tokens left.


#### tokenizeBuffer
Tokenizes a string buffer into a list of tokens structures.

> List<[Token](../token)> tokenizeBuffer(String buffer) throws Exception

- **buffer**: String - string buffer to be tokenized.
- **returns**: [Token](../token) - list of token structures.

#### tokenizeBufferToStrings
Tokenizes a string buffer into a list of strings.

> List<String> tokenizeBufferToStrings(String buffer) throws Exception

- **buffer**: String - string buffer to be tokenized.
- **returns**: List<String> - list of token strings.


#### tokenizeStream
Tokenizes a text stream into a list of token structures.

> List<[Token](../token)> tokenizeStream([IScanner](../../io/iscanner) scanner) throws Exception

- **scanner**: [IScanner](../../io/iscanner) - text stream to be tokenized.
- **returns**: List<[Token](../token)> - list of token structures.


#### tokenizeStreamToStrings
Tokenizes a text stream into a list of strings.

> List<String> tokenizeStreamToStrings([IScanner](../../io/iscanner) scanner) throws Exception

- **scanner**: [IScanner](../../io/iscanner) - text stream to be tokenized.
- **returns**: List<String> - list of token strings.
