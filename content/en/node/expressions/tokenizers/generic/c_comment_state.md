---
type: docs
title: "CCommentState"
linkTitle: "CCommentState"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-expressions-nodex"
description: > 
    This state will either delegate to a comment-handling state, or return a token with just a slash in it.
---

### Description

TODO: add description


### Instance methods

#### nextToken
Either delegate to a comment-handling state, or return a token with just a slash in it.

> `public` nextToken(scanner: [IScanner](../../../io/iscanner), tokenizer: [ITokenizer](../../itokenizer)): [Token](../../token)

- **scanner**: [IScanner](../../../io/iscanner) - A textual string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - A tokenizer class that controls the process.
- **returns**: [Token](../../token) - The next token from the top of the stream.