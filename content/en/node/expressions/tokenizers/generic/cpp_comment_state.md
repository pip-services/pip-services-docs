---
type: docs
title: "CppCommentState"
linkTitle: "CppCommentState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    This state will either delegate to a comment-handling state, or return a token with just a slash in it.
---

**Extends**: [GenericCommentState](../generic_comment_state)

### Description
The CppCommentState class allows you to create a state that will either delegate to a comment-handling state, or return a token with just a slash in it.

### Fields

<span class="hide-title-link">

#### STAR
Represents a star (*) char
> `protected` **STAR**: number = '*'.charCodeAt(0)

#### SLASH
Represents a forward slash (/) char.
> `protected` **SLASH**: number = '/'.charCodeAt(0)

</span>



### Instance methods

#### getMultiLineComment
Ignore everything up to a closing star and slash, and then return the tokenizer's next token.

> `protected` getMultiLineComment(scanner: [IScanner](../../../io/iscanner)): string

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: string - comment

#### getSingleLineComment
Ignore everything up to an end-of-line and return the tokenizer's next token.

> `protected` getSingleLineComment(scanner: [IScanner](../../../io/iscanner)): string

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: string - comment

#### nextToken
Either delegate to a comment-handling state, or return a token with just a slash in it.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - A textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - A tokenizer class that controls the process.
- **returns**: [Token](../../token) - The next token from the top of the stream.
