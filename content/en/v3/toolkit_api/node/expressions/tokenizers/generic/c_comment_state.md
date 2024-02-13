---
type: docs
title: "CCommentState"
linkTitle: "CCommentState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    This state will either delegate to a comment-handling state, or return a token with just a slash in it.
---

### Description

The CCommentState class allows you to create a state that will either delegate to a comment-handling state, or return a token with just a slash in it.


### Instance methods

#### nextToken
Either delegates to a comment-handling state, or returns a token with just a slash in it.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
