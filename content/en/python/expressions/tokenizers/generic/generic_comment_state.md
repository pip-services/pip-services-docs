---
type: docs
title: "GenericCommentState"
linkTitle: "GenericCommentState"
gitUrl: "https://github.com/pip-services3-python/pip-services3-expressions-python"
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
> **CR**: int = ord('\n')

#### LF
Line feed or \r character
> **LF**: int = ord('\r')

</span>



### Instance methods

#### next_token
Either delegates to a comment-handling state, or returns a token with just a slash in it.

> next_token(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
