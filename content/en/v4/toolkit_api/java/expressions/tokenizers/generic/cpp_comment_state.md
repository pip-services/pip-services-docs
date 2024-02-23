---
type: docs
title: "CppCommentState"
linkTitle: "CppCommentState"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-expressions-java"
description: > 
    This state will either delegate to a comment-handling state, or return a token with just a slash in it.
---

**Extends**: [GenericCommentState](../generic_comment_state)

### Description
The CppCommentState class allows you to create a state that will either delegate to a comment-handling state, or return a token with just a slash in it.

### Fields

<span class="hide-title-link">

#### STAR
Represents a star (*) char
> `protected final` int **STAR** = '*'

#### SLASH
Represents a forward slash (/) char.
> `protected final` int **STAR** = '*'

</span>



### Instance methods

#### getMultiLineComment
Ignores everything up to a closing star and slash, and then returns the tokenizer's next token.

> `protected` String getMultiLineComment([IScanner](../../../io/iscanner) scanner)

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: string - comment

#### getSingleLineComment
Ignores everything up to an end-of-line, and then returns the tokenizer's next token.

> `protected` String getSingleLineComment([IScanner](../../../io/iscanner) scanner)

- **scanner**: [IScanner](../../../io/iscanner) - scanner
- **returns**: String - comment

#### nextToken
Either delegates to a comment-handling state, or returns a token with just a slash in it.

> `public` [Token](../../token) nextToken([IScanner](../../../io/iscanner) scanner, [ITokenizer](../../itokenizer) tokenizer) throws Exception

- **scanner**: [IScanner](../../../io/iscanner) - text string to be tokenized.
- **tokenizer**: [ITokenizer](../../itokenizer) - tokenizer class that controls the process.
- **returns**: [Token](../../token) - next token from the top of the stream.
