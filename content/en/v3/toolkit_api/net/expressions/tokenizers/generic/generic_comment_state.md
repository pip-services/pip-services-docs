---
type: docs
title: "GenericCommentState"
linkTitle: "GenericCommentState"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    A CommentState object that returns a comment from a scanner.
---

**Inherits**: [ICommentState](../../icomment_state)

### Description

The GenericCommentState class allows you to create a CommentState object that returns a comment from a scanner.


### Instance methods

#### nextToken
Either delegates to a comment-handling state, or returns a token with just a slash in it.

> `public virtual` [Token](../../token) NextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
