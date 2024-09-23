---
type: docs
title: "Tokenizers"
linkTitle: "Tokenizers"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: >
    This package provides different sub-packages containing classes used to define and manage tokenizers.
---
---
<div class="module-body"> 

### Packages

#### [Generic](generic)
The sub-package provides classes that define different tokenizer states and symbol nodes.

#### [Utilities](utilities)
This sub-package contains utility classes used to create character intervals, keep references associated with specific characters and char validators.

<br>

### Constants

#### [TokenType](token_type)
Types (categories) of tokens such as "number", "symbol" and "word".

<br>

### Interfaces

#### [ICommentState](icomment_state)
Defines an interface for tokenizer state that processes comments.

#### [INumberState](inumber_state)
Defines an interface for tokenizer state that processes numbers - Integers, Floats, HexDec.

#### [IQuoteState](iquote_state)
Defines an interface for tokenizer state that processes quoted strings.

#### [ISymbolState](isymbol_state)
Defines an interface for tokenizer state that processes delimiters.

#### [ITokenizer](itokenizer)
Interface for tokenizers.

#### [ITokenizerState](itokenizer_state)
Interface for TokenizerStates.

#### [IWhitespaceState](iwhitespace_state)
Defines an interface for tokenizer state that processes whitespaces (' ', '\t').

#### [IWordState](iword_state)
Defines an interface for tokenizer state that processes words, identificators or keywords.


<br>

### Classes


#### [AbstractTokenizer](abstract_tokenizer)
Provides a general tokenizer.

#### [Token](token)
Represents a token.


</div>


