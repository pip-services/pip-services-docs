---
type: docs
title: "CppCommentState"
linkTitle: "CppCommentState"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-expressions-go"
description: > 
    This state will either delegate to a comment-handling state, or return a token with just a slash in it.
---

### Description
The CppCommentState class allows you to create a state that will either delegate to a comment-handling state, or return a token with just a slash in it.

### Constructors

#### NewCppCommentState
Creates new instance of CppCommentState
> NewCppCommentState() [*CppCommentState]()


### Methods

#### GetMultiLineComment
Ignores everything up to a closing star and slash, and then returns the tokenizer's next token.

> (c [*CppCommentState]()) GetMultiLineComment(scanner [IScanner](../../../io/iscanner)) string

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: string - comment

#### GetSingleLineComment
Ignores everything up to an end-of-line, and then returns the tokenizer's next token.

> (c [*CppCommentState]()) GetSingleLineComment(scanner [IScanner](../../../io/iscanner)) string

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: string - comment

#### NextToken
Either delegates to a comment-handling state, or returns a token with just a slash in it.

> (c [*CppCommentState]()) NextToken(scanner [IScanner](../../../io/iscanner), tokenizer [ITokenizer](../../itokenizer)) [*Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [*Token](../../token) - next token from the top of the stream.

