---
type: docs
title: "GenericCommentState"
linkTitle: "GenericCommentState"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    A CommentState object that returns a comment from a scanner.
---

### Description

The GenericCommentState class allows you to create a CommentState object that returns a comment from a scanner.

### Constructors

#### NewGenericCommentState
Creates new instance of the component
> NewGenericCommentState() [*GenericCommentState]()

### Methods

#### NextToken
Either delegates to a comment-handling state, or returns a token with just a slash in it.

> (c [*GenericCommentState]()) NextToken(scanner [IScanner](../../../io/iscanner), tokenizer [ITokenizer](../../itokenizer)) [*Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../../token) - next token from the top of the stream.

