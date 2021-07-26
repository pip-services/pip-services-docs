---
type: docs
title: "ITokenizer"
linkTitle: "ITokenizer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
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


#### comment_state
A token state to process comments.
> **comment_state**: [ICommentState](../icomment_state)


#### decode_strings
Decodes quoted strings.
> **decode_strings**: bool


#### merge_whitespaces
Merges whitespaces.
> **merge_whitespaces**: bool


#### number_state
A token state to process numbers.
> **number_state**: [INumberState](../inumber_state)


#### quote_state
A token state to process quoted strings.
> **quote_state**: [IQuoteState](../iquote_state)

#### scanner
The stream scanner to tokenize.
> **scanner**: [IScanner](../../io/iscanner)

#### skip_comments
Skips comments.
> **skip_comments**: bool


#### skip_eof
Skips End-Of-File token at the end of stream.
> **skip_eof**: bool

#### skip_unknown
Skip unknown characters.
> **skip_unknown**: bool


#### skip_whitespaces
Skips whitespaces.
> **skip_whitespaces**: bool


#### symbol_state
A token state to process symbols (single like "=" or muti-character like "<>")
> **symbol_state**: [ISymbolState](../isymbol_state)

#### unify_numbers
Unifies numbers: "Integers" and "Floats" makes just "Numbers".
> **unify_numbers**: bool


#### whitespace_state
A token state to process white space delimiters.
> **whitespace_state**: [IWhitespaceState](../iwhitespace_state)


#### word_state
A token state to process words or indentifiers.
> **word_state**: [IWordState](../iword_state)


</span>


### Instance methods

#### has_next_token
Checks if there is a next token.
> has_next_token(): bool

- **returns**: bool - **true** if scanner has a next token.

#### next_token
Gets the next token from the scanner.
> next_token(): [Token](../token)

- **returns**: [Token](../token) - next token or *None* if there are no more tokens left.


#### tokenize_buffer
Tokenizes a string buffer into a list of tokens structures.

> tokenize_buffer(buffer: str): List[[Token](../token)]

- **buffer**: str - string buffer to be tokenized.
- **returns**: List[[Token](../token)] - list of token structures.

#### tokenize_buffer_to_strings
Tokenizes a string buffer into a list of strings.

> tokenize_buffer_to_strings(buffer: str): List[str]

- **buffer**: str - string buffer to be tokenized.
- **returns**: List[str] - list of token strings.


#### tokenize_stream
Tokenizes a text stream into a list of token structures.

> tokenize_stream(scanner: [IScanner](../../io/iscanner)): List[[Token](../token)]

- **scanner**: [IScanner](../../io/iscanner) - text stream to be tokenized.
- **returns**: List[[Token](../token)] - list of token structures.


#### tokenize_stream_to_strings
Tokenizes a text stream into a list of strings.

> tokenize_stream_to_strings(scanner: [IScanner](../../io/iscanner)): List[str]

- **scanner**: [IScanner](../../io/iscanner) - text stream to be tokenized.
- **returns**: List[str] - list of token strings.
