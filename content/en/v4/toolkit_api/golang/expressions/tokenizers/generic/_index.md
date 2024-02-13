---
type: docs
title: "Generic"
linkTitle: "Generic"
no_list: true
weight: 1
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: >
    The sub-package provides classes that define different tokenizer states and symbol nodes.
---
---
<div class="module-body"> 

### Types

#### [CCommentState](c_comment_state)
This state will either delegate to a comment-handling state, or return a token with just a slash in it.

#### [CppCommentState](cpp_comment_state)
This state will either delegate to a comment-handling state, or return a token with just a slash in it.

#### [GenericCommentState](generic_comment_state)
A CommentState object returns a comment from a scanner.

#### [GenericNumberState](generic_number_state)
A NumberState object returns a number from a scanner.

#### [GenericQuoteState](generic_quote_state)
A quoteState returns a quoted string token from a scanner.

#### [GenericSymbolState](generic_symbol_state)
The GenericSymbolState class allows you to add multi-character symbols and obtain a symbol token from a scanner.

#### [GenericTokenizer](generic_tokenizer)
Implements a default tokenizer class.

#### [GenericWhitespaceState](generic_whitespace_state)
Creates a whitespace state.

#### [GenericWordState](generic_word_state)
A WordState returns a word from a scanner.

#### [SymbolNode](symbol_node)
Constructs a SymbolNode.

#### [SymbolRootNode](symbol_root_node)
This class is a special case of a SymbolNode. A SymbolRootNode object has no symbol of its own, but has children that represent all possible symbols.



</div>


