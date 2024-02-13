---
type: docs
title: "CppCommentState"
linkTitle: "CppCommentState"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
description: > 
    This state will either delegate to a comment-handling state, or return a token with just a slash in it.
---

**Implements**: [GenericCommentState](../generic_comment_state)

### Description
The CppCommentState class allows you to create a state that will either delegate to a comment-handling state, or return a token with just a slash in it.

### Fields

<span class="hide-title-link">

#### STAR
Represents a star (*) char
> **STAR**: int = ord('*')

#### SLASH
Represents a forward slash (/) char.
> **SLASH**: int = ord('/')

</span>



### Instance methods

#### get_multi_line_comment
Ignores everything up to a closing star and slash, and then returns the tokenizer's next token.

> get_multi_line_comment(scanner: [IScanner](../../../io/iscanner)): str

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: str - comment

#### get_single_line_comment
Ignores everything up to an end-of-line, and then returns the tokenizer's next token.

> get_single_line_comment(scanner: [IScanner](../../../io/iscanner)): str

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: str - comment

#### next_token
Either delegates to a comment-handling state, or returns a token with just a slash in it.

> next_token(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
