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

TODO: add description

### Fields

<span class="hide-title-link">

#### STAR
TODO: add description
> `protected` **STAR**: number = '*'.charCodeAt(0)

#### SLASH
TODO: add description
> `protected` **SLASH**: number = '/'.charCodeAt(0)

</span>



### Instance methods

#### getMultiLineComment
Ignore everything up to a closing star and slash, and then return the tokenizer's next token.

> `protected` getMultiLineComment(scanner: [IScanner](../../../io/iscanner)): string

- **scanner**: [IScanner](../../../io/iscanner) - TODO: add description
- **returns**: string - TODO: add description

#### getSingleLineComment
Ignore everything up to an end-of-line and return the tokenizer's next token.

> `protected` getSingleLineComment(scanner: [IScanner](../../../io/iscanner)): string

- **scanner**: [IScanner](../../../io/iscanner) - TODO: add description
- **returns**: string - TODO: add description


#### nextToken
Either delegate to a comment-handling state, or return a token with just a slash in it.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - A textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - A tokenizer class that controls the process.
- **returns**: [Token](../../token) - The next token from the top of the stream.