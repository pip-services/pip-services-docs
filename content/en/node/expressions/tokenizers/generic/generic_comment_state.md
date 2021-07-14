---
type: docs
title: "GenericCommentState"
linkTitle: "GenericCommentState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    A CommentState object that returns a comment from a scanner.
---

**Implements**: [ICommentState](../../icomment_state)

### Description

The GenericCommentState class allows you to create a CommentState object that returns a comment from a scanner.

### Fields

<span class="hide-title-link">

#### CR
Carrige return or \n character
> `protected` **CR**: number = '\n'.charCodeAt(0)

#### LF
Line feed or \r character
> `protected` **LF**: number = '\r'.charCodeAt(0)

</span>



### Instance methods

#### nextToken
Either delegates to a comment-handling state, or returns a token with just a slash in it.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
