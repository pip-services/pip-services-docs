---
type: docs
title: "GenericCommentState"
linkTitle: "GenericCommentState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    A CommentState object returns a comment from a scanner.
---

**Implements**: [ICommentState](../../icomment_state)

### Description

TODO: add description

### Fields

<span class="hide-title-link">

#### CR
TODO: add description
> `protected` **CR**: number = '\n'.charCodeAt(0)

#### LF
TODO: add description
> `protected` **LF**: number = '\r'.charCodeAt(0)

</span>



### Instance methods

#### nextToken
Either delegate to a comment-handling state, or return a token with just a slash in it.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - A textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - A tokenizer class that controls the process.
- **returns**: [Token](../../token) - The next token from the top of the stream.