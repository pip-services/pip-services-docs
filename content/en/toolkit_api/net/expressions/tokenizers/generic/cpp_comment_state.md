---
type: docs
title: "CppCommentState"
linkTitle: "CppCommentState"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-expressions-dotnet"
description: > 
    This state will either delegate to a comment-handling state, or return a token with just a slash in it.
---

**Inherits**: [GenericCommentState](../generic_comment_state)

### Description
The CppCommentState class allows you to create a state that will either delegate to a comment-handling state, or return a token with just a slash in it.



### Instance methods

#### GetMultiLineComment
Ignores everything up to a closing star and slash, and then returns the tokenizer's next token.

> `protected static` string GetMultiLineComment([IScanner](../../../io/iscanner) scanner)

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: string - comment

#### GetSingleLineComment
Ignores everything up to an end-of-line, and then returns the tokenizer's next token.

> `protected static` string GetSingleLineComment([IScanner](../../../io/iscanner) scanner)

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: string - comment

#### NextToken
Either delegates to a comment-handling state, or returns a token with just a slash in it.

> `public virtual` [Token](../../token) NextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../itokenizer) tokenizer)

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
