---
type: docs
title: "GenericCommentState"
linkTitle: "GenericCommentState"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
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
> `protected final` int **CR** = '\n'

#### LF
Line feed or \r character
> `protected final` int **LF** = '\r'

</span>



### Instance methods

#### nextToken
Either delegates to a comment-handling state, or returns a token with just a slash in it.

> `public` [Token](../../token) nextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../itokenizer) tokenizer) throws Exception

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
