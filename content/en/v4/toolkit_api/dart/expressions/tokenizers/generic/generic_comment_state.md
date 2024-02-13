---
type: docs
title: "GenericCommentState"
linkTitle: "GenericCommentState"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-expressions-dart"
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
> **CR**: int = '\n'.codeUnitAt(0)

#### LF
Line feed or \r character
> **LF**: int = '\r'.codeUnitAt(0)

</span>



### Instance methods

#### nextToken
Either delegates to a comment-handling state, or returns a token with just a slash in it.

`@override`
> [Token?](../../token) nextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer?](../../itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer?](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token?](../../token) - next token from the top of the stream.
